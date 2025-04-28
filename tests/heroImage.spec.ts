import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.getByRole('img', { name: 'Hero Banner' }).click();
  await page.getByRole('heading', { name: 'THE PARTNER THAT UNLOCKS' }).click();
  await page.getByRole('button', { name: 'Find out more' }).click();
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.goto('https://teamglobalexp.com/');
  await page.goto('https://teamglobalexp.com/');
});