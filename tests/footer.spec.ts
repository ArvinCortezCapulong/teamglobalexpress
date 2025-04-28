import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Team Global Express' }).click();
  await page.goto('https://teamglobalexp.com/');
  await page.locator('#footer > .container-fluid').click();
  await page.getByText('Copyright © Team Global').click();
  await page.locator('#socialMediaLinks').click();
  await page.locator('#portlet_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_INSTANCE_footer_col_1').getByRole('link', { name: 'About Us' }).click();
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Policies' }).click();
  await page.goto('https://teamglobalexp.com/');
  await page.getByRole('link', { name: 'Helpful Info' }).click();
  await page.goto('https://teamglobalexp.com/');
});