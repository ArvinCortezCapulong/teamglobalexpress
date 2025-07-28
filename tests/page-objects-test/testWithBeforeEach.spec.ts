import { test } from '@playwright/test'
import Password_Protected from '../../src/page-objects/password-protected'
import Block_Overview_Gallery from '../../src/page-objects/block-overview-gallery';
import { error } from 'console';
const baseUrl = `${process.env.BASE_URL}/block-overview/`

test.describe('Navigate to Block-Overview Page and test available blocks', () => {
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
  
      test('Navigate to Block-Overview page and check Gallery Card White assets', async ({ page }) => {
        const block_overview = new Block_Overview_Gallery(page);
        await block_overview.goto_Block_Overview_Page();  
        await block_overview.checkGalleryTitle();
        await block_overview.checkGallerySectionDiv()
      });
  });
