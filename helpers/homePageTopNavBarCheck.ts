import { Page, expect } from '@playwright/test'

export async function homePageMainMenuTopNavBarCheck( page:Page) {

  await page.goto(`${process.env.BASE_URL}`)
       await page.waitForLoadState('domcontentloaded');  
  await expect(page.getByRole('banner').getByRole('link', { name: 'Landpower' })).toBeVisible();
   await expect(page.getByRole('searchbox', { name: 'I\'m looking for...' })).toBeVisible();
   await expect(page.getByRole('banner').getByRole('link', { name: 'Careers' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Find a Dealer' })).toBeVisible();
   await expect(page.getByRole('banner').getByRole('link', { name: 'Contact Us' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Machinery', exact: true })).toBeVisible();
    await expect(page.locator('#navbarText').getByRole('link', { name: 'Service & Parts' })).toBeVisible();
     await expect(page.locator('#navbarText').getByRole('link', { name: 'Offers & Finance' })).toBeVisible();
      await expect(page.locator('#navbarText').getByRole('link', { name: 'About Us' })).toBeVisible();
  // await page.locator('#navbarText').getByRole('link', { name: 'About Us' }).hover();
  //  await expect(page.locator('#navbarText').getByRole('link', { name: 'News & Events' })).toBeVisible();
  //    await expect(page.locator('#navbarText').getByRole('link', { name: 'Our Story' })).toBeVisible();
  //      await expect(page.locator('#navbarText').getByRole('link', { name: 'Our Dealerships' })).toBeVisible();
  //        await expect(page.locator('#navbarText').getByRole('link', { name: 'Our People' })).toBeVisible();
  //        await expect(page.locator('#navbarText').getByRole('link', { name: 'Our Dealerships' })).toBeVisible();
  //        await expect(page.locator('#navbarText').getByRole('link', { name: 'Careers' })).toBeVisible();
}
