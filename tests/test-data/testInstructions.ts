// Automation Framework creation without Docker
// Pre-requisite
// 1.	Node is installed
// 2.	VSCODE is installed
// 3.	Install dotenv library
// 4.	Install path library
// 5.	Install fs library
// Steps 
// 1.	Create a repo
// 2.	Copy the SSH link or the HTTPS link  from github and on your local directory type command git clone +”SSH link” 
// 3.	Open VSCODE and navigate to the newly created automation directory
// 4.	Install Playwright 
// a.	npm init playwright@latest
// b.	Select Typescript
// c.	Select tests
// d.	Add GitHub Actions
// e.	Install Playwright browsers
// 5.	Playwright commands
// Inside that directory, you can run several commands:

//   npx playwright test
//     Runs the end-to-end tests.

//   npx playwright test --ui
//     Starts the interactive UI mode.

//   npx playwright test --project=chromium
//     Runs the tests only on Desktop Chrome.

//   npx playwright test example
//     Runs the tests in a specific file.

//   npx playwright test --debug
//     Runs the tests in debug mode.

//   npx playwright codegen
//     Auto generate tests with Codegen.

// We suggest that you begin by typing:
//     npx playwright test

// And check out the following files:
//   - ./tests/example.spec.ts - Example end-to-end test
//   - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
//   - ./playwright.config.ts - Playwright Test configuration
// Visit https://playwright.dev/docs/intro for more information. 
// 6.	Install DOTENV, PATH, FS plugins 
// a.	DOTENV directory /tests/.env
// i.	BASE_URL = https://website domain name here
// ii.	API_TOKEN=secret_token
// 7.	Update playwright.config.ts file 
// a.	A. for issues with dotenv, execute npm install dotenv
// 8.	import dotenv from 'dotenv';
// 9.	import path from 'path';
// 10.	
// 11.	const envPath = path.resolve(__dirname, 'tests/.env'); // Corrected path
// 12.	dotenv.config({ path: envPath });
// 13.	
// 14.	/**
// 15.	 * Read environment variables from file.
// 16.	 * https://github.com/motdotla/dotenv
// 17.	 */
// 18.	// import dotenv from 'dotenv';
// 19.	// import path from 'path';
// 20.	// dotenv.config({ path: path.resolve(__dirname, '.env') });
// 21.	
// 22.	/**
// 23.	 * See https://playwright.dev/docs/test-configuration.
// 24.	 */
// 25.	export default defineConfig({
// 26.	  testDir: './tests',
// 27.	  /* Run tests in files in parallel */
// 28.	  fullyParallel: true,
// 29.	  /* Fail the build on CI if you accidentally left test.only in the source code. */
// 30.	  forbidOnly: !!process.env.CI,
// 31.	  /* Retry on CI only */
// 32.	  retries: process.env.CI ? 2 : 0,
// 33.	  /* Opt out of parallel tests on CI. */
// 34.	  workers: process.env.CI ? 1 : undefined,
// 35.	  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
// 36.	  reporter: 'html',
// 37.	  timeout: 50 * 1000,
// 38.	  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
// 39.	  use: {
// 40.	    /* Base URL to use in actions like `await page.goto('/')`. */
// 41.	    baseURL: process.env.BASE_URL || 'https://dan.co.nz',
// 42.	
// 43.	    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
// 44.	    trace: 'on-first-retry',
// 45.	  },
// 46.	



// 8. Folder structures from root directory
// 	a. Create src folder and then add Page-objects folder. 
// 	b. from the /src/page-objects/ add the page object files here
// 	c. from the /tests folder add Page-objects-tests
// 	d. from the /test/page-object-tests/ add the test here
// 9. add readme.md file
// 10. update the .gitignore file when necessary
// 11. Create the Fixture implementation
// 	a. add  a file pageObjectManager.ts to /src , /src/pageObjectManager.ts 
// Example of Actual Fixture setup
// 	import { test as base} from '@playwright/test';
// import HomePage from './homePage'; // Corrected import path
// import FooterSection from './footerSection';
// import ServicesPage from './servicesPAge';
// import WorkPage from './workPage';
// import CareersPage from './careersPage';
// import ContactPage from './contactPage';
// import SearchResultsPage from './searchResultsPage';
// import LanguageSelectorPlugin from './languageSelectorPlugin';


// type pageObjects = {
//     homePage: HomePage;
//     footerSection: FooterSection
//     servicesPage: ServicesPage
//     workPage: WorkPage
//     careersPage: CareersPage
//     contactPage: ContactPage
//     searchResultsPage: SearchResultsPage
//     languageSelectorPlugin: LanguageSelectorPlugin
// };

// export const test = base.extend<pageObjects>({
//     homePage: async ({ page }, use) => {
//         const homePage = new HomePage(page);
//         use(homePage);
//     },
//     footerSection: async ({page}, use) => {
//         const footerSection = new FooterSection(page)
//         use(footerSection)
//     },
//     servicesPage: async({page}, use) => {
//         const servicesPage = new ServicesPage(page)
//         use(servicesPage)
//     },
//     workPage: async ({page}, use) => {
//         const workPage = new WorkPage (page)
//         use(workPage)
//     },
//     careersPage: async({page}, use) => {
//         const careersPage = new CareersPage (page)
//         use(careersPage)
//     },
//     contactPage: async({page}, use) => {
//         const contactPage = new ContactPage(page)
//         use(contactPage)
//     }, searchResultsPage: async({page}, use) => {
//         const searchResultsPage = new SearchResultsPage(page)
//         use(searchResultsPage)
//     },
//     languageSelectorPlugin: async({page}, use) => {
//         const languageSelectorPlugin = new LanguageSelectorPlugin(page)
//         use(languageSelectorPlugin)
//     }

// });
// export const expect = test.expect;

// 12. Use of Fixture 
// Example of Fixture use
// import {test,expect} from '../../src/page-objects/pageObjectManager'
// import HomePage from '../../src/page-objects/homePage'; // Corrected import path.
// import ContactPage from '../../src/page-objects/contactPage';

// test.describe('DAN Home Page', () => { 
//     let homePage: HomePage;
//     let contactPage: ContactPage

//     test.beforeEach(async ({ homePage }) => { 
//         await homePage.navigateToHome();
//     });

//     // test('Navigate to Home Page and DAN Logo', async ({ homePage }) => { // Added homepage to the test function.
//     //     const url = await homePage.getUrl();  // Get the URL from the page object.
//     //     await expect(url).toBe('https://dan.co.nz/');
//     //     const title = await homePage.getTitle();
//     //     await expect(title).toBe('Home - Digital Arts Network');
//     //     await homePage.checkAndClickDanLogo()
      
//     // });

//     test('Navigate to Work Page via .env', async ({ homePage, contactPage }) => { // Added homepage to the test function.
       

//         const url = await homePage.getUrl();  // Get the URL from the page object.
//         await expect(url).toBe('https://dan.co.nz/');
//         const title = await homePage.getTitle();
//         await expect(title).toBe('Home - Digital Arts Network');
//         await contactPage.navigateToContactPage()
//         // await homePage.checkAndClickDanLogo()
      
//     });

//     // test('Contact Page test', async ({ page, homePage, contactPage }) => { // Added homepage to the test function.
//     //     const url = await homePage.getUrl();  // Get the URL from the page object.
//     //     await expect(url).toBe('https://dan.co.nz/');
//     //     // const title = await homepage.getTitle();
//     //     // await expect(title).toBe('Home - Digital Arts Network');
//     //     await homePage.checkAndClickWorkMainNav()
//     //     await expect(page).toHaveURL('https://dan.co.nz/work/') 
//     //     await contactPage.checkContactPageHeroImage()
//     // });
// });


// 13. Summary of Best Practice 

// File Type	Folder	Best Practice
// Test Files	/tests/	Name descriptively: checkout.spec.ts
// Config Files	Root dir	Use playwright.config.ts
// Env Files	Root dir	Use .env + dotenv
// Helpers/Utils	/utils/	Modularize reusable code
// Upload/Download	/test-data/	Organize assets for test usage

// 14. Place test files in a test-data/ folder:
// mkdir test-data
// touch test-data/sample.pdf

// await page.setInputFiles('input[type="file"]', 'test-data/sample.pdf');
// 15. another dotenv usage 
// ✅ 1. Install dotenv
// Yes, install it using:
// bash
// npm install dotenv
// Or if you're using yarn:
// bash
// yarn add dotenv
 
// ✅ 2. Create or Update Your .env File
// In the root of your Playwright project (same level as package.json), create or update the .env file:
// env
// BASE_URL=https://example.com
// API_KEY=your-api-key-here
// You can add any environment variables you need for Playwright tests.
 
// ✅ 3. Load .env in Your Tests or Config
// Import and configure dotenv early in your script, usually in your Playwright config or test setup:
// Example: playwright.config.ts or playwright.config.js
// js
// require('dotenv').config(); // For .js
// // or
// import 'dotenv/config'; // For .ts or ESModules

// console.log('Base URL:', process.env.BASE_URL);
// You can now use process.env.BASE_URL, etc., in your tests.
 
// ✅ 4. Using .env in Tests
// In your test files:
// js
// test('Visit base URL', async ({ page }) => {
//   await page.goto(process.env.BASE_URL);
// });
 
// 🔄 Updating the .env file
// You can manually edit the .env file, or programmatically update it (e.g., via a script), but note: .env files are not meant to be dynamically updated during runtime.
// If you do need to update it via Node, here's a simple script example:
// js
// const fs = require('fs');
// const path = require('path');

// const envPath = path.resolve(__dirname, '.env');
// const envVars = `BASE_URL=https://new-url.com\nAPI_KEY=newkey123`;

// fs.writeFileSync(envPath, envVars);
// console.log('.env file updated');
 
// ✅ Bonus: Use dotenv-expand if you reference variables within .env
// bash
// npm install dotenv-expand
// js
// CopyEdit
// const dotenv = require('dotenv');
// const dotenvExpand = require('dotenv-expand');

// const env = dotenv.config();
// dotenvExpand.expand(env);

