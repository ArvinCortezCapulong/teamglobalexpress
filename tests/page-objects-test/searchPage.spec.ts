import { test, expect} from '../../src/page-objects/pageObjectManager'
import HomePage from '../../src/page-objects/homepage'
import BusinessSolutions from '../../src/page-objects/businesssolutionspage'
import SearchPage from '../../src/page-objects/searchpage'

test.describe('Search Page', () => {
    let homePage: HomePage
    let searchPage: SearchPage

    test.beforeEach(async({page, homePage}) =>{
        await homePage.navigateToHomePage()
        await expect(page).toHaveURL('https://teamglobalexp.com/')
    })

    test('From Home Page, click Business Sulotions Nav', async ({page, homePage, searchPage}) => {
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickSearchIcon()
        await expect(page).toHaveURL('https://teamglobalexp.com/search')
        await searchPage.checkSearchEntryFieldAvailability() 

    }) 

    test('Navigate to Business Sulotions page via .env', async ({page, searchPage}) => {
        await page.goto(`${process.env.BASE_URL}/search`)
        await expect(page).toHaveURL('https://teamglobalexp.com/search')
        await searchPage.checkSearchEntryFieldAvailability()   

    }) 

})