import { Page, Locator,expect} from '@playwright/test'

export default class Homepage {
    page : Page
    teamGlobalExpresLogo: Locator
    constructor( page: Page) {
        this.page = page
        this.teamGlobalExpresLogo = page.getByRole('link', { name: 'Team Global Express' })

    }

    async navigateToHomePage() {
        await this.page.goto('/')
    }
    async checkTeamGlobalExpresLogo() {
        await this.teamGlobalExpresLogo.isVisible()
        // await expect(this.teamGlobalExpresLogo).toHaveAttribute('src', '/image/layout_set_logo?img_id=830688&t=1745044797417');
    }
}