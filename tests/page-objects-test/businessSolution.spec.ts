import { test, expect} from '../../src/page-objects/pageObjectManager'
import HomePage from '../../src/page-objects/homepage'
import BusinessSolutions from '../../src/page-objects/businesssolutionspage'

test.describe('Business Solution Page', () => {
    let homePage: HomePage
    let businessSol: BusinessSolutions

    test.beforeEach(async({page, homePage}) =>{
        await homePage.navigateToHomePage()
        await expect(page).toHaveURL('https://teamglobalexp.com/')
    })

    test('From Home Page, click Business Sulotions Nav', async ({page, homePage, businessSol}) => {
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickBusinessSolutionsMainNav()
        await expect(page).toHaveURL('https://teamglobalexp.com/business-solutions')
        await businessSol.checkBusinessSolutionsHeroImage()
        

    }) 

})