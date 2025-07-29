import { test, expect } from '@playwright/test'
import Password_Protected from '../../src/page-objects/password-protected'
import Block_Overview_News_Featured from '../../src/page-objects/block-overview-news-featuredIP';

const baseUrl = `${process.env.BASE_URL}/block-overview/`

test.describe('Navigate to block_overview Page and test available blocks', () => {
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
   
    test('Navigate to block_overview page and check News Featured hover assets', async ({ page }) => {
      const block_overview = new Block_Overview_News_Featured (page);
      await block_overview.goto_Block_Overview_Page();
      await block_overview.checkNewsFeaturedTitle();
      // await block_overview.checkNewsFeaturedSpacerBetweenTitleAndImage()
      await block_overview.checkNewsFeaturedImage()

      // const imageLocator = block_overview.checkNewsFeaturedImage;
      // const initialWidth = await block_overview.getImageWidth();

      // console.log('Type of block_overview.newsFeaturedImage:', typeof block_overview.newsFeaturedImage);

      // // Evaluate offsetWidth on the Locator, not the result of a check function
      // const initialWidth = await imageLocator.evaluate((el) => el.offsetWidth);
      // console.log('Type of block_overview.newsFeaturedImage:', typeof block_overview.newsFeaturedImage);
      

      // // You can add further assertions or hover actions here if needed
      // console.log('Initial width:', initialWidth);

      // await block_overview.checkNewsFeaturedImage();
  // const initialWidth = await block_overview.getImageWidth();

  // console.log('Type of block_overview.newsFeaturedImage:', typeof block_overview.newsFeaturedImage);

  // const imageLocator = block_overview.newsFeaturedImage; // Corrected line
  // const calculatedWidth = await imageLocator.evaluate((el) => el.offsetWidth);

  // expect(initialWidth).toBe(calculatedWidth); // Added assertion
  // console.log('Initial width:', initialWidth);
     
      // const initialWidth = await block_overview.checkNewsFeaturedHoverOnImage.evaluate((el) => el.offsetWidth);
      await block_overview.checkNewsFeaturedImage();
      const initialWidth = await block_overview.getImageWidth();
      const initialHeight = await block_overview.getImageHeight();
      const initialFontSize = await block_overview.getTitleFontSize();

      console.log('Initial width:', initialWidth);
      console.log('Initial height:', initialHeight);
      console.log('Initial Font Size:', initialFontSize);

      await block_overview.checkNewsFeaturedHoverOnImage();
      await page.waitForTimeout(500);

      const hoveredWidth = await block_overview.getImageWidth();
      const hoveredHeight = await block_overview.getImageHeight();
      const hoveredFontSize = await block_overview.getTitleFontSize();

      console.log('Hovered width:', hoveredWidth);
      console.log('Hovered height:', hoveredHeight);
      console.log('Hovered Font Size:', hoveredFontSize);

      expect(hoveredWidth).toEqual(initialWidth);
      expect(hoveredHeight).toEqual(initialHeight);
      expect(parseFloat(hoveredFontSize)).toEqual(parseFloat(initialFontSize));
   
    });

    test('Navigate to block_overview page and check News Featured another hover test ', async ({ page }) => {
      const blockOverview = new Block_Overview_News_Featured(page);

      await blockOverview.goto_Block_Overview_Page();
      await blockOverview.checkNewsFeaturedTitle();
      await blockOverview.checkNewsFeaturedImage();

      const initialImageWidth = await blockOverview.getImageWidth();
      const initialImageHeight = await blockOverview.getImageHeight();
      const initialFontSize = await blockOverview.getTitleFontSize();
      const initialContainerWidth = await blockOverview.getContainerWidth();
      const initialContainerHeight = await blockOverview.getContainerHeight();

      console.log('Initial width:', initialImageWidth);
      console.log('Initial height:', initialImageHeight);
      console.log('Initial Font Size:', initialFontSize);
      console.log('Initial Container Width:', initialContainerWidth);
      console.log('Initial Container Height:', initialContainerHeight);

      // Perform hover and wait for transition
      await blockOverview.checkNewsFeaturedHoverOnImage();

      // Wait explicitly for change to happen (adjust value based on animation duration)
      await page.waitForTimeout(1000);

      const hoveredImageWidth = await blockOverview.getImageWidth();
      const hoveredImageHeight = await blockOverview.getImageHeight();
      const hoveredFontSize = await blockOverview.getTitleFontSize();
      const hoveredContainerWidth = await blockOverview.getContainerWidth();
      const hoveredContainerHeight = await blockOverview.getContainerHeight();

      console.log('Hovered width:', hoveredImageWidth);
      console.log('Hovered height:', hoveredImageHeight);
      console.log('Hovered Font Size:', hoveredFontSize);
      console.log('Hovered Container Width:', hoveredContainerWidth);
      console.log('Hovered Container Height:', hoveredContainerHeight);

      // Validate changes
      expect(hoveredImageWidth).toBeGreaterThanOrEqual(initialImageWidth);
      expect(hoveredImageHeight).toBeGreaterThanOrEqual(initialImageHeight);
      expect(parseFloat(hoveredFontSize)).toBeGreaterThanOrEqual(parseFloat(initialFontSize));

      // expect(parseFloat(hoveredFontSize)).toBeGreaterThan(parseFloat(initialFontSize));
      expect(hoveredContainerWidth).toBeGreaterThanOrEqual(initialContainerWidth);
      expect(hoveredContainerHeight).toBeGreaterThanOrEqual(initialContainerHeight);
    });

    test.skip('Navigate to block_overview page and check News Featured image zooms on hover', async ({ page }) => {
     const blockOverview = new Block_Overview_News_Featured(page);

      await blockOverview.goto_Block_Overview_Page();
      await blockOverview.checkNewsFeaturedTitle();
      await blockOverview.checkNewsFeaturedImage();

      const initialSize = await blockOverview.getImageSize();
      console.log(`Initial size: ${initialSize.width}x${initialSize.height}`);

      await blockOverview.hoverOnImage(); // simulate the hover
      await page.waitForTimeout(300); // wait for any transition effect

      const hoveredSize = await blockOverview.getImageSize();
      console.log(`Hovered size: ${hoveredSize.width}x${hoveredSize.height}`);

      expect(hoveredSize.width).toBeGreaterThan(initialSize.width);
      expect(hoveredSize.height).toBeGreaterThan(initialSize.height);
    });

    test('Navigate to block_overview page and check News Featured image zooms on hover via transform', async ({ page }) => {
    // const blockOverviewNews = new Block_Overview_News_Featured(page);

    // await blockOverviewNews.goto();
    // await blockOverviewNews.waitForNewsFeaturedImage();
     const blockOverview = new Block_Overview_News_Featured(page);

      await blockOverview.goto_Block_Overview_Page();
      await blockOverview.checkNewsFeaturedTitle();
      await blockOverview.checkNewsFeaturedImage();

    // Get initial transform
    const initialTransform = await blockOverview.getTransformValue();
    console.log('Initial transform:', initialTransform);

    // Hover and wait for animation
    await blockOverview.hoverOnImage();
    await page.waitForTimeout(300);

    // Get hover transform
    const hoveredTransform = await blockOverview.getTransformValue();
    console.log('Hovered transform:', hoveredTransform);

    // Extract scale from transform matrix
    const extractScale = (transform: string): number => {
      if (transform === 'none') return 1;
      const match = transform.match(/^matrix\(([^,]+),[^,]+,[^,]+,[^,]+,[^,]+,[^,]+\)$/);
      return match ? parseFloat(match[1]) : 1;
    };

    const initialScale = extractScale(initialTransform);
    const hoveredScale = extractScale(hoveredTransform);

    console.log(`Initial scale: ${initialScale}`);
    console.log(`Hovered scale: ${hoveredScale}`);

    expect(hoveredScale).toBeGreaterThan(initialScale);
  });
  });
