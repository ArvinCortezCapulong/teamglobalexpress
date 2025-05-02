import { test, expect, Page, Locator } from '@playwright/test'

export default class BusinessSolutions {
    page: Page
    businessSolutionsHeroImage: Locator

    constructor ( page: Page ) {
        this.page = page
        this.businessSolutionsHeroImage = page.locator('.w-100')
    }

    async checkBusinessSolutionsHeroImage() {
        await this.businessSolutionsHeroImage.isVisible()
        await expect(this.businessSolutionsHeroImage).toHaveClass('w-100')
    }
}