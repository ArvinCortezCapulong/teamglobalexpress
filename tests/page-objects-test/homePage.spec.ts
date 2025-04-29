import {test,  expect} from '@playwright/test'
import Homepage from '../../src/page-objects/homepage'

test.describe('Team GlobalExpress Auto Test', () => {
    let homePage : Homepage

    // Set up the page object in a before hook
    test.beforeEach(async({page}) => {
        homePage = new Homepage (page)
        await homePage.navigateToHomePage()
        await expect(page).toHaveURL('https://teamglobalexp.com/')
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