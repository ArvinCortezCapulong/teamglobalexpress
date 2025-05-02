import {test,  expect} from "../../src/page-objects/pageObjectManager"
import Homepage from '../../src/page-objects/homepage'

test.describe('Team GlobalExpress Auto Test', () => {
    let homePage : Homepage

    // Set up the page object in a before hook
    test.beforeEach(async({page, homePage}) => {
        // homePage = new Homepage (page)
        await homePage.navigateToHomePage()
        await expect(page).toHaveURL('https://teamglobalexp.com/')
    })

    test('Home Page Test Business Solutions', async({homePage}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickBusinessSolutionsMainNav()
    //     await homePage.checkAndClickeCommerceSolutionsMainNav()
    //     await homePage.checkAndClickAboutUsMainNav()
    //     await homePage.checkAndClickTrackMainNav()
    })

    test('Home Page Test eCommerce Solutions', async({homePage}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickeCommerceSolutionsMainNav()   
    })
    test('Home Page Test About Us', async({ homePage}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickAboutUsMainNav()    
    })
    test('Home Page Test Track', async({homePage}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickTrackMainNav()
    })
})