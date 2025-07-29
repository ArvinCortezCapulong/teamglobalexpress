import { Page, Locator, expect } from '@playwright/test'

export default class Block_Overview_News_Featured {
    page: Page
    topNavLogo: Locator
    newsFeaturedTitle: Locator
    newsFeaturedSpacer: Locator
    newsFeaturedSectionDivCheck: Locator
    newsFeaturedImage: Locator
    newsFeaturedLabel: Locator
    newsFeaturedGridHeading: Locator
    newsFeaturedText: Locator
    newsFeaturedContainer: Locator

  
    constructor ( page : Page ) {
        this.page = page
        this.topNavLogo = page.getByRole('link').filter({ hasText: /^$/ }).nth(1)
        this.newsFeaturedSectionDivCheck= page.locator('.wp-block-tbwa-blocks-section.width-standard.background-black.stripe-none')
        .filter({ hasText: 'Single Card – on black h4' }).first();
        this.newsFeaturedTitle= page.getByRole('heading', { name: 'News Featured' })
        this.newsFeaturedSpacer = page.locator('div:nth-child(5) > div > div').first()
        // this.newsFeaturedColumnGrid = page.getByText('This is a paragraph block,')
        this.newsFeaturedImage = page.getByRole('link', { name: 'World\'s First TikTok Final' })
        this.newsFeaturedLabel = page.locator('.small').first()
        this.newsFeaturedGridHeading= page.getByRole('heading', { name: 'Card Heading Black' })
        this.newsFeaturedText = page.getByText('Lorem ipsum dolor sit amet,').first()
        this.newsFeaturedContainer = page.locator('img[alt="World\'s First TikTok Final"]');
        // locator('.news-block');
       
      
    }

    async goto_Block_Overview_Page () {
        await this.page.goto(`${process.env.BASE_URL}/block-overview/`)
    }

    async checkAndClickTopNavLogo() {
        await this.topNavLogo.isVisible()
        await this.topNavLogo.click()
    }

    async checkNewsFeaturedSectionDiv() {
        await this.page.waitForSelector('.wp-block-tbwa-blocks-section.width-standard.background-black.stripe-none');
        // await this.newsFeaturedSectionDivCheck.scrollIntoViewIfNeeded()
        await expect(this.newsFeaturedSectionDivCheck).toHaveClass(/background-black/);
    }

    async checkNewsFeaturedTitle() {
        await this.newsFeaturedTitle.scrollIntoViewIfNeeded()
        await expect(this.newsFeaturedTitle).toHaveText('News Featured');
    }

    async checkNewsFeaturedSpacerBetweenTitleAndImage() {
        await this.newsFeaturedSpacer.hover()
        await expect(this.newsFeaturedSpacer).toHaveText('')
    }

    async checkNewsFeaturedImage() {
        await this.newsFeaturedImage.scrollIntoViewIfNeeded()
        // await expect(this.newsFeaturedImage).toHaveAttribute('src', `${process.env.BASE_URL}`/wp-content/uploads/2024/04/LBB_-_New_15_4Y4AErz.jpg');
    }

    async getImageWidth(): Promise<number> {
        // return await this.newsFeaturedImage.evaluate((el) => el.offsetWidth);
         return await this.newsFeaturedImage.evaluate(el => (el as HTMLElement).offsetWidth);
    }

    async getImageHeight(): Promise<number> {
        // return await this.newsFeaturedImage.evaluate((el) => el.offsetHeight);
         return await this.newsFeaturedImage.evaluate(el => (el as HTMLElement).offsetWidth);
    }

    async getTitleFontSize(): Promise<string> {
        return await this.newsFeaturedTitle.evaluate((el) => window.getComputedStyle(el).fontSize);
    }

    

    // async getContainerWidth(): Promise<number> {
    //     return await this.newsFeaturedContainer.evaluate((el) => el.offsetWidth);
    //   }
    
    //   async getContainerHeight(): Promise<number> {
    //     return await this.newsFeaturedContainer.evaluate((el) => el.offsetHeight);
    //   }

//     async getContainerWidth(): Promise<number> {
//   await expect(this.newsFeaturedContainer).toBeVisible();
//   return await this.newsFeaturedContainer.evaluate(el => el.offsetWidth);
// }
//     async getContainerHeight(): Promise<number> {
//     await expect(this.newsFeaturedContainer).toBeVisible();
//     return await this.newsFeaturedContainer.evaluate(el => el.offsetHeight);
//     }

async getContainerWidth(): Promise<number> {
  await expect(this.newsFeaturedContainer).toBeVisible();
  return await this.newsFeaturedContainer.evaluate(el => (el as HTMLElement).offsetWidth);
}

async getContainerHeight(): Promise<number> {
  await expect(this.newsFeaturedContainer).toBeVisible();
  return await this.newsFeaturedContainer.evaluate(el => (el as HTMLElement).offsetHeight);
}

      
    async checkNewsFeaturedLabel() {
        await this.newsFeaturedLabel.isVisible()
        await expect(this.newsFeaturedLabel).toHaveText('Card Label')
    }

    async checkNewsFeaturedHoverOnImage() {
        await this.newsFeaturedImage.hover()
    }

    async checkNewsFeaturedText() {
        await this.newsFeaturedText.hover()
        await expect(this.newsFeaturedText).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    }

    async waitForNewsFeaturedImage() {
    await expect(this.newsFeaturedImage).toBeVisible();
  }

  async getImageSize(): Promise<{ width: number; height: number }> {
    const box = await this.newsFeaturedImage.boundingBox();
    if (!box) throw new Error('Image bounding box not found');
    return { width: Math.round(box.width), height: Math.round(box.height) };
  }

  async hoverOnImage() {
    await this.newsFeaturedImage.hover();
  }

   async getTransformValue(): Promise<string> {
    return await this.page.evaluate(() => {
      const el = document.querySelector('img.wp-post-image');
      if (!el) throw new Error('Image element not found');
      return window.getComputedStyle(el).transform;
    });
  }

}