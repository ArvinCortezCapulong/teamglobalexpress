import { test, expect } from '@playwright/test'

const baseURL = 'https://teamglobalexp.com'
test.describe( 'Homepage Test', () => {
     
    test.beforeEach('Navigate to Homepage', async({ page }) => {
  
        for ( let navigateAttempt = 0; navigateAttempt <=3; navigateAttempt ++ ) {
            try {
                await page.goto(baseURL, {
                    waitUntil: 'domcontentloaded',
                    timeout: 15000}
                     )
                // await page.waitForLoadState('networkidle',{ this networkidle is not correct , load or body is right
                await page.waitForLoadState('load',{
                    timeout: 10000})
                break   
            } catch (error) {
                if (navigateAttempt ===2) throw error
                console.warn(`retrying ${baseURL} due to error`, error )
            }

        }
    })
    test('test homepage', async({ page }) => {
        await expect(page).toHaveURL(baseURL)
        // await expect(page.locator).toBeVisible()
    })
})