import { Page, Locator,expect} from '@playwright/test'

export default class Homepage {
    page : Page
    teamGlobalExpresLogo: Locator
    businessSolutionsMainNav: Locator
    eCommerceSolutionsMainNav: Locator
    aboutUsMainNav: Locator
    trackMainNav: Locator

    constructor( page: Page) {
        this.page = page
        // this.teamGlobalExpresLogo = page.getByRole('link', { name: 'Team Global Express' })
        this.teamGlobalExpresLogo = page.locator('a img[alt="Team Global Express"]')
        this.businessSolutionsMainNav = page.getByRole('link', { name: 'Business Solutions', exact: true })
        this.eCommerceSolutionsMainNav = page.getByRole('link', { name: 'Business Solutions', exact: true })
        this.aboutUsMainNav = page.locator('#navigationCollapseCustom').getByRole('link', { name: 'About Us' })
        this.trackMainNav = page.getByRole('link', { name: 'Track', exact: true })
    }

    async navigateToHomePage() {
        // await this.page.goto(`${process.env.BASE_URL}`)
        await this.page.goto('/')
    }
    async checkTeamGlobalExpresLogo() {
        await this.teamGlobalExpresLogo.isVisible()
        // await expect(this.teamGlobalExpresLogo).toHaveAttribute('src', '/image/layout_set_logo?img_id=830688&amp;t=1745460505581');
        await expect(this.teamGlobalExpresLogo).toHaveAttribute('alt', 'Team Global Express');
    }

    async checkAndClickBusinessSolutionsMainNav() {
        await this.businessSolutionsMainNav.isVisible()
        await expect(this.businessSolutionsMainNav).toHaveText('Business Solutions')
        await this.businessSolutionsMainNav.click()

        // const page1Promise = this.page.waitForEvent('popup');
        // await this.businessSolutionsMainNav.click()
        // const page1 = await page1Promise;
        // await page1.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL('https://www.thedrum.com/news/2024/11/11/ad-the-day-starbucks-offers-some-holiday-rush-reprieve-mixed-media-spot')
        // await (page1).close();
        await this.page.waitForLoadState('domcontentloaded');
        await this.teamGlobalExpresLogo.click()
    }

    async checkAndClickeCommerceSolutionsMainNav() {
        await this.eCommerceSolutionsMainNav.isVisible()
        await expect(this.eCommerceSolutionsMainNav).toHaveText('Business Solutions')
        await this.eCommerceSolutionsMainNav.click()

        // const page1Promise = this.page.waitForEvent('popup');
        // await this.businessSolutionsMainNav.click()
        // const page1 = await page1Promise;
        // await page1.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL('https://teamglobalexp.com/ecare-ecommerce-solutions')
        // await (page1).close();
        await this.page.waitForLoadState('domcontentloaded');
        await this.teamGlobalExpresLogo.click()
    }

    async checkAndClickAboutUsMainNav() {
        await this.aboutUsMainNav.isVisible()
        await expect(this.aboutUsMainNav).toHaveText('Business Solutions')
        await this.aboutUsMainNav.click()

        // const page1Promise = this.page.waitForEvent('popup');
        // await this.businessSolutionsMainNav.click()
        // const page1 = await page1Promise;
        // await page1.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL('https://teamglobalexp.com/about-us')
        // await (page1).close();
        await this.page.waitForLoadState('domcontentloaded');
        await this.teamGlobalExpresLogo.click()
    }
}