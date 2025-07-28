import { test } from '@playwright/test'
import Password_Protected from '../../src/page-objects/password-protected'
import Block_Overview_CTA_Buttons from '../../src/page-objects/block-overview-CTA-buttons';

const baseUrl = `${process.env.BASE_URL}/block-overview/`

test.describe('Navigate to Block-Overview Page and test available blocks', () => {
    // test('Navigate to Block-Overview page and check Page URL', async ({ page }) => {
    //   const block_overview = new Block_Overview_CTA_Buttons(page);
    //   await block_overview.goto_Block_Overview_Page();
    //   const passProtect = new Password_Protected(page);
    //   try {
    //     await passProtect.checkPasswordProtectedMessage();
    //     await passProtect.clickAndEnterPasswordField();
    //     await passProtect.clickViewCTAButton();
    //     await page.waitForURL(`${process.env.BASE_URL}/block-overview/`);
    //   } catch (error) {
    //     console.error('Error during navigation or password protection:', error);
    //     throw new Error(`Navigation or password protection failed: ${error}`); 
    //   }
    // });
    test.beforeEach('Sign in to website', async({page}) => {
      for ( let passwordAttempt =0; passwordAttempt <=3; passwordAttempt ++) {
        try {
          await page.goto(baseUrl, { waitUntil: 'domcontentloaded'}) 
          const passProtect = new Password_Protected(page);
          await passProtect.clickAndEnterPasswordField()
          await passProtect.clickViewCTAButton()
          break;
        } catch (error) {
          if (passwordAttempt ===2) throw error
          console.warn(`retrying ${baseUrl} due to issues`, error)
        }
      }
    })
    
      
        test('Navigate to Block-Overview page and check CTA_Buttons link re-direction', async ({ page }) => {
          const block_overview = new Block_Overview_CTA_Buttons(page);
          await block_overview.goto_Block_Overview_Page();
          // const passProtect = new Password_Protected(page);
          // try {
          //   await passProtect.checkPasswordProtectedMessage();
          //   await passProtect.clickAndEnterPasswordField();
          //   await passProtect.clickViewCTAButton();
          //   await page.waitForURL(`${process.env.BASE_URL}/block-overview/`);
          // } catch (error) {
          //   console.error('Error during navigation or password protection:', error);
          //   throw new Error(`Navigation or password protection failed: ${error}`); 
          
        await block_overview.checkCTAButtonsTitle();
        await block_overview.checkBlockSpacerBetweenTitleAndParagraph()
        await block_overview.checkCTAButtonParagraphText()
        
        await block_overview.checkAndTestThisIsAButtonLabelButton()
        await page.waitForURL(`${process.env.BASE_URL}/`)
        await page.goBack()
        await page.waitForURL(`${process.env.BASE_URL}/block-overview/`)

        await block_overview.checkAndTestCTAButtonsStandardSizeCenterAligned()
        await page.waitForURL(`${process.env.BASE_URL}/overview-of-forms/`)
        await page.goBack()
        await page.waitForURL(`${process.env.BASE_URL}/block-overview/`)


        await block_overview.checkAndTestCTAButtonsStandardSizeRightAligned()
        await page.waitForURL(`${process.env.BASE_URL}/overview-of-loops/`)
        await page.goBack()
        await page.waitForURL(`${process.env.BASE_URL}/block-overview/`)


        await block_overview.checkAndTestCTAButtonsLargeSizeCenterAligned()
        await page.waitForURL(`${process.env.BASE_URL}/`)
        await page.goBack()
        await page.waitForURL(`${process.env.BASE_URL}/block-overview/`)

        await block_overview.checkAndTestCTAButtonsLargeSizeCenterAligned()
        await page.waitForURL(`${process.env.BASE_URL}/`)
        await page.goBack()
        await page.waitForURL(`${process.env.BASE_URL}/block-overview/`)
    });
  }) 
