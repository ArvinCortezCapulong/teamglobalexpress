import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Team Global Express' }).isVisible();
  await page.locator('#banner').getByRole('link', { name: 'Help & Support' }).isVisible()
 
  await page.locator('#banner').getByRole('link', { name: 'Help & Support' }).click() // await page.goBack()
  await expect(page).toHaveURL('https://teamglobalexp.com/help-support')
  await page.locator('h1').isVisible()
  // await page.goBack()
  await page.getByRole('link', { name: 'Team Global Express', exact: true }).isVisible()
  await await page.getByRole('link', { name: 'Team Global Express', exact: true }).click()
  await expect(page).toHaveURL('https://teamglobalexp.com/')
  

  // await page.goBack()
  // await page.getByRole('link', { name: 'Careers' }).click();
  // await page.goBack()
  // // await page.getByRole('link', { name: 'Team Global Express', exact: true }).click();
  // // await page.goBack()
  // await page.getByRole('link', { name: 'News & Media' }).click();
  // await page.goBack()
  // await page.getByRole('link', { name: 'Tools' }).click();
  // await page.goBack()
  // // await page.getByRole('link', { name: 'Team Global Express' }).click();
  
  
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'New Zealand' }).click();
  // const page1 = await page1Promise;
  // await expect(page1).toHaveURL('https://teamglobalexp.co.nz/?_gl=1*1f80b0f*_gcl_au*MTQwMzM2NzgxNC4xNzQ1ODMwNTQy')
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'New Zealand' }).click();
  // const page1 = await page1Promise;
});