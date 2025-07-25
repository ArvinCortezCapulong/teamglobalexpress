import { Page, expect } from '@playwright/test'

export async function navHomeCheckHoverMachineryMainMenu( page:Page) {
  //   await page.goto(`${process.env.BASE_URL}`)
  //        await page.waitForLoadState('domcontentloaded');  
  // await expect(page.getByRole('banner').getByRole('link', { name: 'Landpower' })).toBeVisible();

  // const nav = page.locator('#navbarText');
  // await nav.getByRole('link', { name: 'Offers & Finance'  }).hover();

    await expect(page.getByRole('link', { name: 'Machinery', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Machinery', exact: true }).hover()
    await expect(page.locator('div').filter({ hasText: 'From tractors to harvesters, our range of ag machinery will keep your farm' }).nth(4)).toBeVisible()
    const isSubMenuColumnsVisible = await page.locator('#navbarText div').filter({ hasText: 'VIEW NEW MACHINES Tractors' }).nth(1).isVisible()
    if (isSubMenuColumnsVisible ) {
       await expect(page.getByRole('link', { name: 'VIEW NEW MACHINES' })).toBeVisible()
            const isViewNewMachinesLinkVisible = await page.getByRole('link', { name: 'VIEW NEW MACHINES' }).isVisible()
            if (isViewNewMachinesLinkVisible) {
              await expect(page.getByRole('link', { name: 'Tractors' }).first()).toBeVisible();
              await expect(page.getByRole('link', { name: 'Harvesting' }).first()).toBeVisible();
              await expect(page.getByRole('link', { name: 'Hay & Silage' }).first()).toBeVisible();
              await expect(page.getByRole('link', { name: 'Materials & Feed Handling' }).first()).toBeVisible();
              await expect(page.getByRole('link', { name: 'Seeding & Planting' }).first()).toBeVisible();
              await expect(page.getByRole('link', { name: 'Spreading & Spraying' }).first()).toBeVisible();
            } else {
              console.warn('View New Machine Link is not visible')
              throw new Error('View New Machine link did not apper as expected')
            }
       await expect(page.getByRole('link', { name: 'VIEW USED MACHINES' })).toBeVisible()
              const isViewUsedMachineLinkVisible = await page.getByRole('link', { name: 'VIEW USED MACHINES' }).isVisible()
              if (isViewUsedMachineLinkVisible) {
                await expect(page.getByRole('link', { name: 'Tractors' }).nth(1)).toBeVisible();
                await expect(page.getByRole('link', { name: 'Harvesting' }).nth(1)).toBeVisible();
              await expect(page.getByRole('link', { name: 'Hay & Silage' }).nth(1)).toBeVisible();
              await expect(page.getByRole('link', { name: 'Materials & Feed Handling' }).nth(1)).toBeVisible();
              await expect(page.getByRole('link', { name: 'Seeding & Planting' }).nth(1)).toBeVisible();
              await expect(page.getByRole('link', { name: 'Spreading & Spraying' }).nth(1)).toBeVisible();
            } else {
              console.warn('View Used Machine Link is not visible')
              throw new Error('View Used Machine link did not apper as expected')
            }
       await expect(page.getByRole('link', { name: 'BRANDS' })).toBeVisible()
             const isBrandsLinkVisible = await page.getByRole('link', { name: 'BRANDS' }).isVisible()
              if (isBrandsLinkVisible) {
                await expect(page.getByRole('link', { name: 'CLAAS', exact: true })).toBeVisible();
                await expect(page.getByRole('link', { name: 'AMAZONE' })).toBeVisible();
              await expect(page.getByRole('link', { name: 'Hay & Silage' }).nth(1)).toBeVisible();
              await expect(page.getByRole('link', { name: 'Landpower Vegetable Centre' })).toBeVisible();
            } else {
              console.warn('BRANDS Link is not visible')
              throw new Error('BRANDS link did not apper as expected')
            }
       await expect(page.getByRole('link', { name: 'EXPERIENCE' })).toBeVisible()
            const isExperienceLinkVisible = await page.getByRole('link', { name: 'EXPERIENCE' }).isVisible()
              if (isExperienceLinkVisible) {
                await expect(page.getByRole('link', { name: 'Digital Solutions' })).toBeVisible();
                await expect(page.getByRole('link', { name: 'Demo Machines' })).toBeVisible();
              await expect(page.getByRole('link', { name: 'LEXION Demo Tour' })).toBeVisible();
            } else {
              console.warn('EXPERIENCE Link is not visible')
              throw new Error('EXPERIENCE link did not apper as expected')
            }
      } else {
        // You can log, throw, or assert failure
        console.warn('Submenu columns not visible under Machinery menu');
        throw new Error('Submenu under "Machinery" did not appear as expected.');
      
      // OR soft assertion if you'd rather not fail the test:
      // expect(isSubMenuColumnsVisible, 'Expected submenu under "Machinery" to be visible').toBe(true);
    }
      await page.getByRole('banner').getByRole('link', { name: 'Landpower', exact: true }).click();

  //   await expect(nav.getByRole('link', { name: 'News & Events' })).toBeVisible();
//   await nav.getByRole('link', { name: 'News & Events' }).click();

//   await page.waitForLoadState('domcontentloaded');
//   await expect(page).toHaveURL(/news-and-events/);
//   await expect(page.getByRole('button', { name: 'All' })).toBeEnabled();
//   await page.waitForTimeout(2000); // adjustable depending on the content load
}
