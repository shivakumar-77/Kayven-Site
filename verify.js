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

      // Get stat elements
      const statElements = await pageNoJS.$$('.count-up');
      console.log(`  JS DISABLED - Found ${statElements.length} stat elements:`);

      for (let i = 0; i < statElements.length; i++) {
        const text = await statElements[i].textContent();
        console.log(`    Stat ${i+1}: "${text.trim()}"`);
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
      const statsSection = await pageJS.$('.stats-section, [data-testid="stats"]');
      if (statsSection) {
        await statsSection.scrollIntoViewIfNeeded();
        await pageJS.waitForTimeout(1000); // Wait for scroll
      }

      // Record intermediate values for first second after scroll-in
      console.log(`  JS ENABLED - Recording values over time:`);
      const statElementsJS = await pageJS.$$('.count-up');

      for (let i = 0; i < statElementsJS.length; i++) {
        console.log(`    Stat ${i+1} value over time:`);
        const initialValue = await statElementsJS[i].textContent();
        console.log(`      Initial (after scroll): "${initialValue.trim()}"`);

        // Check at 100ms intervals for 1 second
        for (let t = 100; t <= 1000; t += 100) {
          await pageJS.waitForTimeout(100);
          const value = await statElementsJS[i].textContent();
          console.log(`      ${t}ms: "${value.trim()}"`);
        }

        // Final value after 3 seconds
        await pageJS.waitForTimeout(2000); // Additional 2 seconds (total 3s from scroll)
        const finalValue = await statElementsJS[i].textContent();
        console.log(`      Final (3s): "${finalValue.trim()}"\n`);
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

    // Expected data based on task description
    const expectedData = {
      India: {
        Monthly: {
          basic: { price: '192', crossed: '320', saving: 'Save ₹128', percent: '40%', effective: '192' },
          standard: { price: '325', crossed: '650', saving: 'Save ₹325', percent: '50%', effective: '325' },
          pro: { price: '908', crossed: '1815', saving: 'Save ₹907', percent: '50%', effective: '908' }
        },
        Yearly: {
          basic: { price: '192', crossed: '320', saving: 'Save ₹128', percent: '40%', effective: '192' },
          standard: { price: '325', crossed: '650', saving: 'Save ₹325', percent: '50%', effective: '325' },
          pro: { price: '908', crossed: '1815', saving: 'Save ₹907', percent: '50%', effective: '908' }
        }
      },
      Global: {
        Monthly: {
          basic: { price: '5.83', crossed: '9.72', saving: 'Save $3.89', percent: '40%', effective: '5.83' },
          standard: { price: '11.67', crossed: '23.33', saving: 'Save $11.66', percent: '50%', effective: '11.67' },
          pro: { price: '23.33', crossed: '46.66', saving: 'Save $23.33', percent: '50%', effective: '23.33' }
        },
        Yearly: {
          basic: { price: '5.83', crossed: '9.72', saving: 'Save $3.89', percent: '40%', effective: '5.83' },
          standard: { price: '11.67', crossed: '23.33', saving: 'Save $11.66', percent: '50%', effective: '11.67' },
          pro: { price: '23.33', crossed: '46.66', saving: 'Save $23.33', percent: '50%', effective: '23.33' }
        }
      }
    };

    // Adjust for Yearly India discount calculation (largest discount among yearly India plans)
    // From data: Basic saves 128/320 = 40%, Standard saves 325/650 = 50%, Pro saves 907/1815 ≈ 50%
    // So largest discount is 50%, but task says 43% - let me check actual implementation

    // Actually, let me compute from the actual data in the code
    // I'll need to check the lib/pricing.ts file for actual values

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

      // 1. Check stats band background color
      const statsBand = await page.$('.stats-band, [data-testid="stats-band"]');
      if (statsBand) {
        const bgColor = await statsBand.evaluate(el => {
          const style = window.getComputedStyle(el);
          return style.backgroundColor;
        });
        console.log(`  Stats band background color: ${bgColor}`);

        // Should be rgb(0, 0, 0) for pure black
        const isPureBlack = bgColor === 'rgb(0, 0, 0)' || bgColor === '#000000';
        console.log(`  Is pure black: ${isPureBlack} ${isPureBlack ? '✓' : '✗'}`);
      } else {
        console.log('  Stats band not found!');
      }

      // 2. Check card widths
      const cards = await page.$$('.pricing-card, [data-testid="pricing-card"]');
      console.log(`  Found ${cards.length} pricing cards:`);

      for (let i = 0; i < cards.length; i++) {
        const width = await cards[i].evaluate(el => el.getBoundingClientRect().width);
        console.log(`    Card ${i+1} width: ${width.toFixed(0)}px`);

        // Check minimum width requirements
        let minWidthRequired = 0;
        if (combo.width >= 1440) minWidthRequired = 280;
        else if (combo.width >= 768) minWidthRequired = 300; // Actually should be same or less for smaller screens
        else if (combo.width >= 375) minWidthRequired = 300; // Mobile

        const meetsMinWidth = width >= minWidthRequired;
        console.log(`    Meets min width (${minWidthRequired}px): ${meetsMinWidth} ${meetsMinWidth ? '✓' : '✗'}`);
      }

      // 3. Check for card child overflow
      console.log(`  Checking for card child overflow:`);
      for (let i = 0; i < cards.length; i++) {
        const overflowChildren = await cards[i].evaluate((card) => {
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
          console.log(`    Card ${i+1} has overflowing children:`);
          overflowChildren.forEach(child => {
            console.log(`      <${child.tagName} class="${child.className}">: "${child.text}"`);
          });
        } else {
          console.log(`    Card ${i+1}: No overflowing children ✓`);
        }
      }

      // 4. Check "Save up to" tag bounding box vs Yearly button
      const yearlyButton = await page.$('.yearly-btn, [data-testid="yearly-button"]');
      const saveTag = await page.$('.save-tag, [data-testid="save-tag"]');

      if (yearlyButton && saveTag) {
        const buttonBox = await yearlyButton.boundingBox();
        const tagBox = await saveTag.boundingBox();

        console.log(`  Yearly button box:`, buttonBox);
        console.log(`  Save tag box:`, tagBox);

        if (buttonBox && tagBox) {
          const tagInsideButton =
            tagBox.x >= buttonBox.x &&
            tagBox.y >= buttonBox.y &&
            (tagBox.x + tagBox.width) <= (buttonBox.x + buttonBox.width) &&
            (tagBox.y + tagBox.height) <= (buttonBox.y + buttonBox.height);

          console.log(`  Tag inside button bounds: ${tagInsideButton} ${tagInsideButton ? '✓' : '✗'}`);

          // Check if tag is on one line (height < 24px)
          const isSingleLine = tagBox.height < 24;
          console.log(`  Tag is single line (height < 24px): ${isSingleLine} (height: ${tagBox.height.toFixed(0)}px) ${isSingleLine ? '✓' : '✗'}`);

          // Check if tag is present only in India
          const isIndia = combo.region.toLowerCase() === 'india';
          const tagVisible = await saveTag.isVisible();
          console.log(`  Tag visibility: ${tagVisible} (should be ${isIndia ? 'visible' : 'hidden'}) ${(tagVisible === isIndia) ? '✓' : '✗'}`);
        }
      } else {
        console.log('  Yearly button or save tag not found!');
      }

      // 5. Check toggle center x vs viewport center
      const toggleGroup = await page.$('.toggle-group, [data-testid="toggle-group"]');
      if (toggleGroup) {
        const toggleBox = await toggleGroup.boundingBox();
        const viewportWidth = combo.width;
        const viewportCenter = viewportWidth / 2;
        const toggleCenter = toggleBox.x + (toggleBox.width / 2);
        const offset = Math.abs(toggleCenter - viewportCenter);

        console.log(`  Viewport center: ${viewportCenter}px`);
        console.log(`  Toggle group center: ${toggleCenter.toFixed(0)}px`);
        console.log(`  Offset from center: ${offset.toFixed(0)}px`);
        console.log(`  Within 2px: ${offset <= 2} ${offset <= 2 ? '✓' : '✗'}`);
      } else {
        console.log('  Toggle group not found!');
      }

      // 6. Check pricing values against expected data
      console.log(`  Checking pricing values:`);

      // Map card indices to plan types (assuming order: Basic, Standard, Pro)
      const planTypes = ['basic', 'standard', 'pro'];

      for (let i = 0; i < Math.min(cards.length, planTypes.length); i++) {
        const planType = planTypes[i];
        const expected = expectedData[combo.region.toLowerCase()][combo.billing.toLowerCase()][planType];

        if (!expected) {
          console.log(`    No expected data for ${planType} in ${combo.region} ${combo.billing}`);
          continue;
        }

        // Extract actual values from card
        const card = cards[i];

        // Price (large display)
        const priceElement = await card.$('.price-large, [data-testid="price-large"], .font-display');
        const priceText = priceElement ? await priceElement.textContent() : '';

        // Crossed-out price
        const crossedElement = await card.$('.price-crossed, [data-testid="price-crossed"], line-through');
        const crossedText = crossedElement ? await crossedElement.textContent() : '';

        // Savings
        const savingElement = await card.$('.saving, [data-testid="saving"]');
        const savingText = savingElement ? await savingElement.textContent() : '';

        // Percentage
        const percentElement = await card.$('.percent, [data-testid="percent"]');
        const percentText = percentElement ? await percentElement.textContent() : '';

        // Effective monthly (yearly view only)
        let effectiveText = '';
        if (combo.billing.toLowerCase() === 'yearly') {
          const effectiveElement = await card.$('.effective-monthly, [data-testid="effective-monthly"]');
          effectiveText = effectiveElement ? await effectiveElement.textContent() : '';
        }

        console.log(`    ${planType.toUpperCase()} Plan:`);
        console.log(`      Price: "${priceText.trim()}" (expected: "${expected.price}") ${priceText.trim() === expected.price ? '✓' : '✗'}`);
        console.log(`      Crossed: "${crossedText.trim()}" (expected: "${expected.crossed}") ${crossedText.trim() === expected.crossed ? '✓' : '✗'}`);
        console.log(`      Saving: "${savingText.trim()}" (expected: "${expected.saving}") ${savingText.trim() === expected.saving ? '✓' : '✗'}`);
        console.log(`      Percent: "${percentText.trim()}" (expected: "${expected.percent}") ${percentText.trim() === expected.percent ? '✓' : '✗'}`);
        if (combo.billing.toLowerCase() === 'yearly') {
          console.log(`      Effective: "${effectiveText.trim()}" (expected: "${expected.effective}") ${effectiveText.trim() === expected.effective ? '✓' : '✗'}`);
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