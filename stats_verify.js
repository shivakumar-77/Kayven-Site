const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const testPage = async (path, label) => {
    console.log(`\n--- ${label} (${path}) ---`);

    // JS disabled
    const noJsContext = await browser.newContext({ javaScriptEnabled: false });
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto(`http://localhost:3000${path}`);
    await noJsPage.waitForLoadState('networkidle');

    const noJsText = await noJsPage.evaluate(() => {
      return Array.from(document.body.querySelectorAll('*'))
        .map(el => el.textContent.trim())
        .filter(text => text.includes('926') || text.includes('183'))
        .map(text => text.replace(/\s+/g, ' ').trim())
        .filter(text => text.length > 0 && text.length < 20);
    });

    console.log('  JS DISABLED - Found stat-like text:');
    noJsText.forEach((text, i) => {
      console.log(`    ${i+1}: "${text}"`);
    });

    await noJsPage.close();
    await noJsContext.close();

    // JS enabled with time tracking
    const jsPage = await context.newPage();
    await jsPage.goto(`http://localhost:3000${path}`);
    await jsPage.waitForLoadState('networkidle');
    await jsPage.waitForTimeout(1000);

    // Try to scroll to stats
    try {
      const statsSection = await jsPage.$('text=/Know what you\'re eating./, text=/Train with purpose./, text=/foods in the database/, text=/exercises/');
      if (statsSection) {
        await statsSection.scrollIntoViewIfNeeded();
        await jsPage.waitForTimeout(1000);
      }
    } catch (e) {}

    console.log('  JS ENABLED - Tracking values over time:');

    for (let t = 0; t <= 3000; t += 100) {
      if (t > 0) await jsPage.waitForTimeout(100);

      const currentText = await jsPage.evaluate(() => {
        return Array.from(document.body.querySelectorAll('*'))
          .map(el => el.textContent.trim())
          .filter(text => text.includes('926') || text.includes('183'))
          .map(text => text.replace(/\s+/g, ' ').trim())
          .filter(text => text.length > 0 && text.length < 20);
      });

      if (t % 500 === 0) {
        console.log(`    ${t}ms: ${currentText.join(' | ')}`);
      }
    }

    await jsPage.close();
  };

  await testPage('/', 'Home');
  await testPage('/nutrition', 'Nutrition');
  await testPage('/fitness', 'Fitness');

  await browser.close();
})();