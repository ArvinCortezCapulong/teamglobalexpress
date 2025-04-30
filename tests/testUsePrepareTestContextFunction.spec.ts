// import { test, expect, Page } from '@playwright/test';
// import HomePage from '../../src/page-objects/homePage';

// // test.describe('Sindalah Home Page', () => {
// //   // Fixture for shared test setup
// //   async function prepareTestContext(page: Page) {
// //     const username = 'neomusr';
// //     const password = 'v151tn3om';
// //     const credentials = Buffer.from(`${username}:${password}`).toString(
// //       'base64'
// //     );
// //     await page.setExtraHTTPHeaders({ Authorization: `Basic ${credentials}` });
// //     //await page.goto('https://visit-neom-dev.vercel.app/sindalah')
// //     await page.goto('/');
// //     //async function prepareTestContext(page: Page) {
// //     // await page.goto('https://your-website.com'); // Navigate to the base URL
// //     // Add any other common setup logic here (e.g., authentication, data setup)
// //   }
// //   // test.use({ viewport: { width: 1800, height: 1600 } });
// //   test('Sindalah Home Page Nave Icon test', async ({ page }) => {
// //     await prepareTestContext(page);
// //     // https://uat.visitneom.com/sindalah
// //     const sindalahHomePage = new HomePage(page);
// //     //await sindalahHomePage.navigateToHome()
// //     await expect(page).toHaveURL('https://uat.visitneom.com/sindalah');
// //     await expect(page).toHaveTitle('Visit NEOM | Sindalah');

// test.describe('Sindalah Home Page', () => {
//   // Fixture for shared test setup
//   async function prepareTestContext(page: Page) {
//     //   const username = 'neomusr';
//     //   const password = 'v151tn3om';
//     //   const credentials = Buffer.from(`${username}:${password}`).toString(
//     //     'base64'
//     //   );
//     //   await page.setExtraHTTPHeaders({ Authorization: `Basic ${credentials}` });
//     //await page.goto('https://visit-neom-dev.vercel.app/sindalah')
//     await page.goto('/');
//     //async function prepareTestContext(page: Page) {
//     // await page.goto('https://your-website.com'); // Navigate to the base URL
//     // Add any other common setup logic here (e.g., authentication, data setup)
//   }
//   // test.use({ viewport: { width: 1800, height: 1600 } });
//   test.skip('Sindalah Home Page Nave Icon test', async ({ page }) => {
//     await prepareTestContext(page);
//     // https://uat.visitneom.com/sindalah
//     const sindalahHomePage = new HomePage(page);
//     await sindalahHomePage.clickAcceptAllCookiesButton();
//     await sindalahHomePage.enterAuthUser();
//     await sindalahHomePage.enterAuthPassword();
//     await sindalahHomePage.clickAuthLoginButton();
//     //await sindalahHomePage.navigateToHome()
//     await expect(page).toHaveURL('https://uat.visitneom.com/sindalah');
//     await expect(page).toHaveTitle('Visit NEOM | Sindalah');

//     // const sindalahHomePage = new HomePage ( page )
//     // await sindalahHomePage.navigateToHome()

//     await sindalahHomePage.checkSindalahLogo();
//     await sindalahHomePage.checkExploreNav();
//     await sindalahHomePage.clickExploreNav();
//     await sindalahHomePage.checkAndClickExploreNavHowToGetThere();
//     await sindalahHomePage.checkStayNav();
//     await sindalahHomePage.checkClubsNav();
//     await sindalahHomePage.checkYachtingNav();
//     await sindalahHomePage.checkVillageNav();
//     await sindalahHomePage.checkLogInRegisterIcon();
//     await sindalahHomePage.checkWishlistIcon();
//     await sindalahHomePage.checkMyTripIcon();
//     await sindalahHomePage.checkHeroImageHeroText();
//     await sindalahHomePage.checkAnExclusiveSanctuaryText();
//     await sindalahHomePage.checkANewGlobalYachtingHubText();
//     await sindalahHomePage.checkAlwaysInSeasonText();
//   });
// });
