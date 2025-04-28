import {test,  expect} from '@playwright/test'
import Homepage from '../../src/homepage'

test.describe('Team GlobalExpress Auto Test', ()=>{
    test('Home Page Test', async({page}) =>{
        const homePage = new Homepage (page)
        await homePage.navigateToHomePage()
        await expect(page).toHaveURL('https://teamglobalexp.com/')
        await homePage.checkTeamGlobalExpresLogo()
    })
})