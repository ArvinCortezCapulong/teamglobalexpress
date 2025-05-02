import HomePage from '../../src/page-objects/homepage'
import {test,expect} from '../../src/page-objects/pageObjectManager'


test.describe('Team GlobalExpress Auto Test', () => {
    let homePage : HomePage

    // Set up the page object in a before hook
    test.beforeEach(async({page}) => {
        homePage = new HomePage (page)
        await homePage.navigateToHomePage()
        const url = await homePage.getUrl();  // Get the URL from the page object.
        await expect(url).toBe('https://teamglobalexp.com/');
        // await expect(page).toHaveURL('https://teamglobalexp.com/')
        // const title = await homePage.getTitle();
        // await expect(title).toBe('DAN | Digital Agency Network | Global Creative Collective');
    })

    test('Home Page Test1', async({page}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickBusinessSolutionsMainNav()
    //     await homePage.checkAndClickeCommerceSolutionsMainNav()
    //     await homePage.checkAndClickAboutUsMainNav()
    //     await homePage.checkAndClickTrackMainNav()
    })

    test('Home Page Test2', async({page}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickeCommerceSolutionsMainNav()   
    })
    test('Home Page Test3', async({page}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickAboutUsMainNav()    
    })
    test('Home Page Test4', async({page}) =>{
        await homePage.checkTeamGlobalExpresLogo()
        await homePage.checkAndClickTrackMainNav()
    })
})