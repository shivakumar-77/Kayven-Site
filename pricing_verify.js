const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const testCombo = async (region, billing, width) => {
    console.log(`\n--- ${region} ${billing} @ ${width}px ---`);

    const page = await context.newPage();
    await page.setViewportSize({ width: width, height: 900 });

    // Set cookies for region and billing preference
    await page.context().addCookies([
      { name: 'region', value: region.toLowerCase(), domain: 'localhost', path: '/' },
      { name: 'billing', value: billing.toLowerCase(), domain: 'localhost', path: '/' }
    ]);

    await page.goto('http://localhost:3000/pricing');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // 1. Stats band background color
    console.log('  Stats band background:');
    try {
      // Look for any element that might be a stats band
      const statsBand = await page.$('[class*="stats"], [class*="band"], .dark.bg-black');
      if (statsBand) {
        const bgColor = await statsBand.evaluate(el => {
          const style = window.getComputedStyle(el);
          return style.backgroundColor;
        });
        console.log(`    Background color: ${bgColor}`);
      } else {
        console.log('    No stats band found on pricing page (expected)');
      }
    } catch (e) {
      console.log(`    Error checking stats band: ${e.message}`);
    }

    // 2. Card widths
    console.log('  Card widths:');
    try {
      const cards = await page.$$('motion-div');
      let cardCount = 0;
      for (const card of cards) {
        const className = await card.getAttribute('class');
        if (className && className.includes('border-2') && className.includes('border-black') &&
            className.includes('p-6')) {
          cardCount++;
          const width = await card.evaluate(el => el.getBoundingClientRect().width);
          console.log(`    Card ${cardCount}: ${width.toFixed(0)}px width`);

          // Check for overflow
          const overflowChildren = await card.evaluate((card) => {
            const children = Array.from(card.children);
            return children.filter(child => {
              const rect = child.getBoundingClientRect();
              const cardRect = card.getBoundingClientRect();
              return rect.right > cardRect.right ||
                     rect.left < cardRect.left ||
                     rect.bottom > cardRect.bottom ||
                     rect.top < cardRect.top;
            }).length;
          });

          if (overflowChildren > 0) {
            console.log(`      => Has ${overflowChildren} overflowing child(ren)`);
          } else {
            console.log(`      => No overflowing children ✓`);
          }
        }
      }

      if (cardCount === 0) {
        console.log('    No pricing cards found');
      }
    } catch (e) {
      console.log(`    Error checking cards: ${e.message}`);
    }

    // 3. Save up to tag
    console.log('  "Save up to" tag:');
    try {
      const saveTags = await page.$$('span:has-text("Save up to")');
      console.log(`    Found ${saveTags.length} "Save up to" element(s)`);

      for (let i = 0; i < saveTags.length; i++) {
        const text = await saveTags[i].textContent();
        console.log(`      ${i+1}: "${text.trim()}"`);

        // Check if inside button
        const parentButton = await saveTags[i].evaluate(el => {
          let parent = el.parentElement;
          while (parent && parent.tagName !== 'BUTTON') {
            parent = parent.parentElement;
          }
          return parent;
        });

        const isInsideButton = parentButton !== null;
        console.log(`        Inside button: ${isInsideButton}`);

        if (parentButton) {
          const buttonBox = await parentButton.boundingBox();
          const tagBox = await saveTags[i].boundingBox();

          if (buttonBox && tagBox) {
            const inside =
              tagBox.x >= buttonBox.x &&
              tagBox.y >= buttonBox.y &&
              (tagBox.x + tagBox.width) <= (buttonBox.x + buttonBox.width) &&
              (tagBox.y + tagBox.height) <= (buttonBox.y + buttonBox.height);

            console.log(`        Inside button bounds: ${inside}`);

            const singleLine = tagBox.height < 24;
            console.log(`        Single line (height < 24px): ${singleLine} (height: ${tagBox.height.toFixed(0)}px)`);
          }
        }

        // Check visibility based on region
        const isIndia = region.toLowerCase() === 'india';
        const isVisible = await saveTags[i].isVisible();
        console.log(`        Visible: ${isVisible} (should be ${isIndia ? 'visible' : 'hidden'})`);
      }
    } catch (e) {
      console.log(`    Error checking save tag: ${e.message}`);
    }

    // 4. Toggle alignment
    console.log('  Toggle alignment:');
    try {
      const toggleGroups = await page.$$('.flex.gap-4, .flex.flex-col.items-center.gap-2');
      for (const group of toggleGroups) {
        const className = await group.getAttribute('class');
        if (className &&
            ((className.includes('flex') && className.includes('gap-4')) ||
             (className.includes('flex') && className.includes('flex-col') && className.includes('items-center') && className.includes('gap-2')))) {

          const box = await group.boundingBox();
          const viewportCenter = width / 2;
          const toggleCenter = box.x + (box.width / 2);
          const offset = Math.abs(toggleCenter - viewportCenter);

          console.log(`    Viewport center: ${viewportCenter}px`);
          console.log(`    Toggle center: ${toggleCenter.toFixed(0)}px`);
          console.log(`    Offset: ${offset.toFixed(0)}px`);
          console.log(`    Within 2px: ${offset <= 2}`);
          break;
        }
      }
    } catch (e) {
      console.log(`    Error checking toggle alignment: ${e.message}`);
    }

    // 5. Pricing values
    console.log('  Pricing values:');
    try {
      const cards = await page.$$('motion-div');
      let cardIndex = 0;

      for (const card of cards) {
        const className = await card.getAttribute('class');
        if (className && className.includes('border-2') && className.includes('border-black') &&
            className.includes('p-6')) {
          cardIndex++;

          // Get plan name
          const planNameEls = await card.$$('p.lbl');
          const planName = planNameEls.length > 0 ? await planNameEls[0].textContent() : 'unknown';

          console.log(`    Card ${cardIndex} (${planName.trim()}):`);

          // Extract various values
          const extracts = await card.evaluate(() => {
            const getText = (selector) => {
              const el = document.querySelector(selector);
              return el ? el.textContent.trim() : '';
            };

            return {
              price: getText('.font-display, .text-5xl') ||
                     Array.from(document.querySelectorAll('*'))
                           .find(el => el.textContent.match(/^[\d,.]+$/ && el.textContent.length > 2 && el.textContent.length < 8))?.textContent.trim() || '',
              crossed: getText('line-through, .line-through') || '',
              saving: Array.from(document.querySelectorAll('*'))
                        .find(el => el.textContent.match(/^Save\s+[₹$]\s*[\d,]+/))?.textContent.trim() || '',
              percent: Array.from(document.querySelectorAll('*'))
                       .find(el => el.textContent.match(/^\d+%$/))?.textContent.trim() || '',
              effective: Array.from(document.querySelectorAll('*'))
                         .find(el => el.textContent.match(/^Effective\s+[\d,.]+\s*\/\s*month/i))?.textContent.trim() || ''
            };
          });

          console.log(`      Price: "${extracts.price}"`);
          console.log(`      Crossed: "${extracts.crossed}"`);
          console.log(`      Saving: "${extracts.saving}"`);
          console.log(`      Percent: "${extracts.percent}"`);
          if (extracts.effective) {
            console.log(`      Effective: "${extracts.effective}"`);
          }
        }
      }
    } catch (e) {
      console.log(`    Error checking pricing values: ${e.message}`);
    }

    // Take screenshot
    const screenshotPath = `/tmp/shots/${region.toLowerCase()}_${billing.toLowerCase()}_${width}px.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`  Screenshot saved: ${screenshotPath}`);

    await page.close();
  };

  // Test all combinations
  const regions = ['India', 'Global'];
  const billings = ['Monthly', 'Yearly'];
  const widths = [1440, 768, 375];

  for (const region of regions) {
    for (const billing of billings) {
      for (const width of widths) {
        await testCombo(region, billing, width);
      }
    }
  }

  await browser.close();
})();