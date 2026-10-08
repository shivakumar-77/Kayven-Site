const { chromium } = require('playwright');

(async () => {
  console.log('=== VERIFICATION START ===');

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  try {
    // 1. Test stats with JS disabled and enabled
    console.log('\n=== 1. STATS VERIFICATION ===');

    const pagesToTest = [
      { path: '/', name: 'Home' },
      { path: '/nutrition', name: 'Nutrition' },
      { path: '/fitness', name: 'Fitness' }
    ];

    for (const { path, name } of pagesToTest) {
      console.log(`\n--- Testing ${name} page (${path}) ---`);

      // Test with JS disabled
      const contextNoJS = await browser.newContext({
        javaScriptEnabled: false
      });
      const pageNoJS = await contextNoJS.newPage();

      await pageNoJS.goto(`http://localhost:3000${path}`);
      await pageNoJS.waitForLoadState('networkidle');

      // Look for CountUp elements - they are motion.span with value spans inside
      // Since no className is passed, we look for motion.span elements that contain numbers
      const countUpElements = await pageNoJS.$$('motion-span');
      console.log(`  JS DISABLED - Found ${countUpElements.length} motion-span elements:`);

      let foundStats = 0;
      for (let i = 0; i < countUpElements.length; i++) {
        // Get the inner span that contains the actual number
        const valueSpan = await countUpElements[i].$('span');
        if (valueSpan) {
          const text = await valueSpan.textContent();
          if (text && text.trim() !== '') {
            console.log(`    Stat ${++foundStats}: "${text.trim()}"`);
          }
        }
      }

      if (foundStats === 0) {
        console.log(`    No stats found with motion-span selector, trying alternative...`);
        // Try looking for spans that contain the expected numbers
        const allSpans = await pageNoJS.$$('span');
        let count = 0;
        for (const span of allSpans) {
          const text = await span.textContent();
          if (text && (text.includes('926') || text.includes('183')) && text.trim().length < 10) {
            console.log(`    Stat ${++count}: "${text.trim()}"`);
          }
        }
      }

      await pageNoJS.close();
      await contextNoJS.close();

      // Test with JS enabled
      const pageJS = await context.newPage();
      await pageJS.goto(`http://localhost:3000${path}`);
      await pageJS.waitForLoadState('networkidle');

      // Wait for hydration and check for count-up animation
      await pageJS.waitForTimeout(1000); // Wait for initial render

      // Scroll to stats to trigger IntersectionObserver
      // Look for sections that contain CountUp
      const statsSections = await pageJS.$$('section:has-text("Know what you’re eating."), section:has-text("Train with purpose."), div:has-text("foods in the database"), div:has-text("exercises")');
      if (statsSections.length > 0) {
        await statsSections[0].scrollIntoViewIfNeeded();
        await pageJS.waitForTimeout(1000); // Wait for scroll
      }

      // Record intermediate values for first second after scroll-in
      console.log(`  JS ENABLED - Recording values over time:`);

      // Look for CountUp elements again
      const countUpElementsJS = await pageJS.$$('motion-span');
      let statIndex = 0;

      for (let i = 0; i < countUpElementsJS.length; i++) {
        const valueSpan = await countUpElementsJS[i].$('span');
        if (valueSpan) {
          const initialValue = await valueSpan.textContent();
          if (initialValue && initialValue.trim() !== '') {
            console.log(`    Stat ${++statIndex} value over time:`);
            console.log(`      Initial (after scroll): "${initialValue.trim()}"`);

            // Check at 100ms intervals for 1 second
            for (let t = 100; t <= 1000; t += 100) {
              await pageJS.waitForTimeout(100);
              const value = await valueSpan.textContent();
              if (value && value.trim() !== '') {
                console.log(`      ${t}ms: "${value.trim()}"`);
              }
            }

            // Final value after 3 seconds
            await pageJS.waitForTimeout(2000); // Additional 2 seconds (total 3s from scroll)
            const finalValue = await valueSpan.textContent();
            console.log(`      Final (3s): "${finalValue.trim()}"\n`);
          }
        }
      }

      await pageJS.close();
    }

    // 2. Test pricing page with all combinations
    console.log('\n=== 2. PRICING PAGE VERIFICATION ===');

    const testCombinations = [
      { region: 'India', billing: 'Monthly', width: 1440 },
      { region: 'India', billing: 'Monthly', width: 768 },
      { region: 'India', billing: 'Monthly', width: 375 },
      { region: 'India', billing: 'Yearly', width: 1440 },
      { region: 'India', billing: 'Yearly', width: 768 },
      { region: 'India', billing: 'Yearly', width: 375 },
      { region: 'Global', billing: 'Monthly', width: 1440 },
      { region: 'Global', billing: 'Monthly', width: 768 },
      { region: 'Global', billing: 'Monthly', width: 375 },
      { region: 'Global', billing: 'Yearly', width: 1440 },
      { region: 'Global', billing: 'Yearly', width: 768 },
      { region: 'Global', billing: 'Yearly', width: 375 }
    ];

    for (const combo of testCombinations) {
      console.log(`\n--- Testing ${combo.region} ${combo.billing} @ ${combo.width}px ---`);

      const page = await context.newPage();
      await page.setViewportSize({ width: combo.width, height: 900 });

      // Set cookies for region and billing preference
      await page.context().addCookies([
        { name: 'region', value: combo.region.toLowerCase(), domain: 'localhost', path: '/' },
        { name: 'billing', value: combo.billing.toLowerCase(), domain: 'localhost', path: '/' }
      ]);

      await page.goto('http://localhost:3000/pricing');
      await page.waitForLoadState('networkidle');

      // Wait for any animations to complete
      await page.waitForTimeout(2000);

      // 1. Check stats band background color (the InvertSection at bottom of home page)
      // Actually, on pricing page, we need to look for the pricing section stats if any
      // But the task says stats band - let me check if there's a stats band on pricing page
      // Looking at the Pricing component, I don't see a stats band there
      // The stats band is only on the home page in the InvertSection
      // So for pricing page verification, we skip stats band check

      // 2. Check card widths - look for pricing cards
      console.log(`  Checking card widths:`);
      const cardElements = await page.$$('motion-div');
      let cardCount = 0;

      for (let i = 0; i < cardElements.length; i++) {
        const className = await cardElements[i].getAttribute('class');
        if (className && className.includes('border-2') && className.includes('border-black') &&
            className.includes('p-6')) {
          cardCount++;
          const width = await cardElements[i].evaluate(el => el.getBoundingClientRect().width);
          console.log(`    Card ${cardCount} width: ${width.toFixed(0)}px`);

          // Check minimum width requirements
          let minWidthRequired = 280;
          if (combo.width >= 1440) minWidthRequired = 280;
          else if (combo.width >= 768) minWidthRequired = 280;
          else if (combo.width >= 375) minWidthRequired = 280;

          const meetsMinWidth = width >= minWidthRequired;
          console.log(`    Meets min width (${minWidthRequired}px): ${meetsMinWidth} ${meetsMinWidth ? '✓' : '✗'}`);
        }
      }

      if (cardCount === 0) {
        console.log(`    No pricing cards found with standard selectors`);
      }

      // 3. Check for card child overflow
      console.log(`  Checking for card child overflow:`);
      let overflowFound = false;
      const cardsToCheck = await page.$$('motion-div');

      for (let i = 0; i < cardsToCheck.length; i++) {
        const className = await cardsToCheck[i].getAttribute('class');
        if (className && className.includes('border-2') && className.includes('border-black') &&
            className.includes('p-6')) {
          const overflowChildren = await cardsToCheck[i].evaluate((card) => {
            const children = Array.from(card.children);
            return children.filter(child => {
              const rect = child.getBoundingClientRect();
              const cardRect = card.getBoundingClientRect();
              return rect.right > cardRect.right ||
                     rect.left < cardRect.left ||
                     rect.bottom > cardRect.bottom ||
                     rect.top < cardRect.top;
            }).map(child => ({
              tag: child.tagName,
              className: child.className,
              text: child.textContent.substring(0, 50) + '...'
            }));
          });

          if (overflowChildren.length > 0) {
            overflowFound = true;
            console.log(`    Card has overflowing children:`);
            overflowChildren.forEach(child => {
              console.log(`      <${child.tagName} class="${child.className}">: "${child.text}"`);
            });
          }
        }
      }

      if (!overflowFound) {
        console.log(`    No overflowing children found ✓`);
      }

      // 4. Check "Save up to" tag bounding box vs Yearly button
      console.log(`  Checking "Save up to" tag:`);

      // Look for the Save up to span
      const saveTagElements = await page.$$('span:has-text("Save up to")');
      const yearlyButtons = await page.$$('button:has-text("Yearly"), button:has-text("Monthly")');

      if (saveTagElements.length > 0) {
        console.log(`    Found ${saveTagElements.length} "Save up to" element(s)`);

        for (let i = 0; i < saveTagElements.length; i++) {
          const text = await saveTagElements[i].textContent();
          console.log(`      Text: "${text.trim()}"`);

          // Check if it's inside a button
          const parentButton = await saveTagElements[i].evaluate(el => {
            let parent = el.parentElement;
            while (parent && parent.tagName !== 'BUTTON') {
              parent = parent.parentElement;
            }
            return parent;
          });

          const isInsideButton = parentButton !== null;
          console.log(`      Inside button: ${isInsideButton} ${isInsideButton ? '✓' : '✗'}`);

          if (parentButton) {
            const buttonBox = await parentButton.boundingBox();
            const tagBox = await saveTagElements[i].boundingBox();

            if (buttonBox && tagBox) {
              const tagInsideButton =
                tagBox.x >= buttonBox.x &&
                tagBox.y >= buttonBox.y &&
                (tagBox.x + tagBox.width) <= (buttonBox.x + buttonBox.width) &&
                (tagBox.y + tagBox.height) <= (buttonBox.y + buttonBox.height);

              console.log(`      Tag inside button bounds: ${tagInsideButton} ${tagInsideButton ? '✓' : '✗'}`);

              // Check if tag is on one line (height < 24px)
              const isSingleLine = tagBox.height < 24;
              console.log(`      Tag is single line (height < 24px): ${isSingleLine} (height: ${tagBox.height.toFixed(0)}px) ${isSingleLine ? '✓' : '✗'}`);
            }
          }

          // Check if tag is present only in India
          const isIndia = combo.region.toLowerCase() === 'india';
          const tagVisible = await saveTagElements[i].isVisible();
          console.log(`      Tag visibility: ${tagVisible} (should be ${isIndia ? 'visible' : 'hidden'}) ${(tagVisible === isIndia) ? '✓' : '✗'}`);
        }
      } else {
        console.log(`    No "Save up to" elements found`);
      }

      // 5. Check toggle center x vs viewport center
      console.log(`  Checking toggle alignment:`);
      let toggleFound = false;
      const toggleGroups = await page.$$('.flex.gap-4, .flex.flex-col.items-center.gap-2');

      for (const group of toggleGroups) {
        const className = await group.getAttribute('class');
        if (className &&
            ((className.includes('flex') && className.includes('gap-4')) ||
             (className.includes('flex') && className.includes('flex-col') && className.includes('items-center') && className.includes('gap-2')))) {
          toggleFound = true;
          const toggleBox = await group.boundingBox();
          const viewportWidth = combo.width;
          const viewportCenter = viewportWidth / 2;
          const toggleCenter = toggleBox.x + (toggleBox.width / 2);
          const offset = Math.abs(toggleCenter - viewportCenter);

          console.log(`    Viewport center: ${viewportCenter}px`);
          console.log(`    Toggle group center: ${toggleCenter.toFixed(0)}px`);
          console.log(`    Offset from center: ${offset.toFixed(0)}px`);
          console.log(`    Within 2px: ${offset <= 2} ${offset <= 2 ? '✓' : '✗'}`);
          break;
        }
      }

      if (!toggleFound) {
        console.log(`    Toggle group not found with standard selectors`);
      }

      // 6. Check pricing values against expected data
      console.log(`  Checking pricing values:`);

      // Extract actual values from cards
      const cardElements = await page.$$('motion-div');
      let cardIndex = 0;

      for (let i = 0; i < cardElements.length; i++) {
        const className = await cardElements[i].getAttribute('class');
        if (className && className.includes('border-2') && className.includes('border-black') &&
            className.includes('p-6')) {
          cardIndex++;

          // Plan name
          const planNameElements = await cardElements[i].$$('p.lbl');
          let planName = '';
          if (planNameElements.length > 0) {
            planName = await planNameElements[0].textContent();
          }

          console.log(`    Card ${cardIndex} (${planName.trim() || 'unknown'}):`);

          // Price (large display) - look for font-display or text-5xl
          const priceElements = await cardElements[i].$$('.font-display, .text-5xl');
          let priceText = '';
          if (priceElements.length > 0) {
            priceText = await priceElements[0].textContent();
          }

          // Crossed-out price - look for line-through
          const crossedElements = await cardElements[i].$$('line-through, .line-through');
          let crossedText = '';
          if (crossedElements.length > 0) {
            crossedText = await crossedElements[0].textContent();
          }

          // Savings badge
          const savingElements = await cardElements[i].$$('span:has-text("Save ₹"), span:has-text("Save $")');
          let savingText = '';
          if (savingElements.length > 0) {
            savingText = await savingElements[0].textContent();
          }

          // Percentage badge
          const percentElements = await cardElements[i].$$('span:has-text("%")');
          let percentText = '';
          if (percentElements.length > 0) {
            // Find the one that's likely the percentage (not just any % sign)
            for (let j = 0; j < percentElements.length; j++) {
              const text = await percentElements[j].textContent();
              if (text.trim().match(/^\d+%$/)) {
                percentText = text;
                break;
              }
            }
          }

          // Effective monthly (yearly view only)
          let effectiveText = '';
          if (combo.billing.toLowerCase() === 'yearly') {
            const effectiveElements = await cardElements[i].$$('p.lbl:has-text("Effective")');
            if (effectiveElements.length > 0) {
              effectiveText = await effectiveElements[0].textContent();
            }
          }

          if (priceText || crossedText || savingText || percentText || effectiveText) {
            console.log(`      Price: "${priceText.trim()}"`);
            console.log(`      Crossed: "${crossedText.trim()}"`);
            console.log(`      Saving: "${savingText.trim()}"`);
            console.log(`      Percent: "${percentText.trim()}"`);
            if (effectiveText) {
              console.log(`      Effective: "${effectiveText.trim()}"`);
            }
          }
        }
      }

      // Take screenshot
      const screenshotPath = `/tmp/shots/${combo.region.toLowerCase()}_${combo.billing.toLowerCase()}_${combo.width}px.png`;
      await page.screenshot({ path: screenshotPath });
      console.log(`  Screenshot saved: ${screenshotPath}`);

      await page.close();
    }

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
    console.log('\n=== VERIFICATION COMPLETE ===');
  }
})();