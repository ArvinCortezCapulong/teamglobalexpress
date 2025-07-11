
// import { test, expect } from '@playwright/test';
// import { FormBlock } from '../model/formBlock';
// import { Buttons } from '../model/buttons';
// import { AlertTextBlock } from '../model/alertBlock';

// test('Verify Family Violence form submitted successfully', async ({ page }) => {
//   const newFormBlock = new FormBlock(page);
//   const newButton = new Buttons(page);
//   const newAlertBlock = new AlertTextBlock(page);
//   await newFormBlock.goto_FamilyViolence();
//   await newFormBlock.nameField.fill('Test Name');
//   await newFormBlock.phoneNumberField.fill('0276543321');
//   // const responsePromise = page.waitForResponse(
//   //   (response) =>
//   //     response.url() === `${process.env.BASE_URL}/api/formToEmail/` &&
//   //     response.status() === 200
//   // );
//   // ✅ More reliable response wait condition
//   const responsePromise = page.waitForResponse((response) =>
//     response.url().includes('/api/formToEmail') && response.status() === 200
//   );
//   await newButton.button.filter({ hasText: 'Send' }).click();
//   // const response = await responsePromise;
//   // expect(response.ok());
//   // ✅ Assert the actual response
//   const response = await responsePromise;
//   expect(response.ok()).toBeTruthy(); // Assert 2xx
//   await expect(
//     newAlertBlock.alertTextBlock.filter({ hasText: 'Thank you' })
//   ).toBeVisible();
// });