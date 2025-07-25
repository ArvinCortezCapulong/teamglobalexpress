import { test, expect } from '@playwright/test';
import { homePageMainMenuTopNavBarCheck } from '../../helpers/homePageMainMenuTopNavBarCheck';
import { navHomeCheckHoverMachineryMainMenu } from '../../helpers/navHomeCheckHoverMachineryMainMenu';
import { validateFooterSectionWithParent } from '../../helpers/validateFooterSectionParent';
// test.use({ viewport: { width: 1280, height: 720 } });

test('Navigate to New Zealand Homepage then to footer Section Parent ', async ({ page }) => {
  await homePageMainMenuTopNavBarCheck (page)
  await navHomeCheckHoverMachineryMainMenu (page)
  //   await page.waitForLoadState('domcontentloaded');  
  // await page.goto(`${process.env.BASE_URL}`)
  //  await page.getByRole('link', { name: 'Machinery', exact: true }).hover();
  // await page.locator('.gradient_bg').hover();
   await expect(page.locator('.gradient_bg')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'We are CLAAS Harvest Centre' })).toBeVisible();
     await expect(page.getByText('Your home for harvesters,')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Find a Machine' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Service & Repair' })).toBeVisible();
         //      await expect(page.locator('.row > div:nth-child(3) > a').first()).toBeVisible();
         await page.waitForTimeout(2000)
         // Scrolling down to the Footer section 
          await page.getByRole('contentinfo').scrollIntoViewIfNeeded();  
          const isFooterSectionVisible = await page.getByRole('contentinfo').isVisible()
          if (isFooterSectionVisible) {
            await expect(page.getByRole('contentinfo').getByText('MACHINES Tractors Harvesting')).toBeVisible()
            await expect(page.getByRole('contentinfo').getByText('Service & Parts Service Parts')).toBeVisible()
            await expect(page.getByRole('contentinfo').getByText('Offers & Finance Latest')).toBeVisible()
            await expect(page.getByText('About Us News & Events Our Story Our Dealerships Our People Careers Contact Us')).toBeVisible()
            await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Landpower' })).toBeVisible()
            await expect(page.getByRole('list').filter({ hasText: 'New Zealand Privacy Policy &' })).toBeVisible()
          }
// Checking Machines column items 
          const footerSection = page.locator('.c-footer__menu', {hasText: 'MACHINES'})
          if (footerSection) {
            const childLinks = page.locator('a.c-footer__children')
            const childLinksCount = await childLinks.count()
            expect(childLinksCount).toBeGreaterThan(0)
              for ( let i=0; i < childLinksCount; i++) {
                const childMachine = childLinks.nth(i)
                const text = await childMachine.innerText()
                const href = await childMachine.getAttribute('href')
                console.log('this is the machinen link', childMachine, text, href)
                expect(text.trim().length).toBeGreaterThan(0)
                expect (href).not.toBeNull()
                
              }
          } else {
            throw new Error('"MACHINE"footer section is not available')
          }

          // Check all footer section Parent
            await validateFooterSectionWithParent(page, 'MACHINES');
            await validateFooterSectionWithParent(page, 'SERVICE & PARTS');
            await validateFooterSectionWithParent(page, 'OFFERS & FINANCE');
            await validateFooterSectionWithParent(page, 'ABOUT US');

});