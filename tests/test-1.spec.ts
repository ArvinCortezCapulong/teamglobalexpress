import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('link', { name: 'Business Solutions', exact: true }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('link', { name: 'eCommerce Solutions' }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.locator('#navigationCollapseCustom').getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('link', { name: 'Track', exact: true }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('track');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('heading', { name: 'Track a Parcel' }).getByRole('link').click();
  await page.getByRole('heading', { name: 'TRACK A PARCEL' }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
});