import { test, expect } from '@playwright/test';

test('Happy Path > Never Smoke Validate fields required', async ({ page }) => {
  const newFormPage = new Forms(page);
  const requestPromise = page.waitForRequest(
    'https://graphql.contentful.com/content/v1/**'
  );
  await newFormPage.goto_form();
  await requestPromise;
  //Form page 0
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/`
  );
  await newFormPage.selectClinicManurewa.check();
  await newFormPage.nextButton.click();
  //Form page 1
  await page.waitForTimeout(1000);
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=1`
  );
  await newFormPage.radioInputYes.first().check(); //live in NZ = Yes
  await newFormPage.radioInputYes.nth(1).check(); //NZ citizen = yes
  await newFormPage.proofOfEligibilityCheckbox.check();
  await newFormPage.nextButton.click();
  //Form page 2
  await page.waitForTimeout(1000);
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=2`
  );
  await newFormPage.firstNameLabel.fill('Celeste');
  await newFormPage.lastNameLabel.fill('Dalton');
  await newFormPage.dateOfBirthLabel.fill('1992-08-14');
  await newFormPage.placeOfBirth.fill('Auckland');
  await newFormPage.countryOfBirth.first().selectOption('New Zealand');
  await newFormPage.radioInputFemale.check(); //choose female
  await newFormPage.checkBoxChinese.check(); //choose Chinese
  await newFormPage.smokingHeading.scrollIntoViewIfNeeded()
  await newFormPage.radioInputNeverSmoke.check() // Never Smoke
  await newFormPage.checkCommunityCard.check();
  await newFormPage.nextButton.click();
  //Form page 3
  await page.waitForTimeout(1000);
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=3`
  );
  await newFormPage.houseNumberStreetName.fill('48 Greys Ave');
  await newFormPage.suburbRuralLocation.fill('Auckland');
  await newFormPage.townCity.fill('Auckland');
  await newFormPage.postalcode.fill('0986');
  await newFormPage.radioInputYes.check(); //Postal address same = yes
  await newFormPage.mobilePhoneNumber.fill('0273392065');
  await newFormPage.checkBoxLikeToParticipatePatientFeedback.check(); //Participate in patient feedback = Selected
  await newFormPage.emergencyContactName.fill('Sawyer Yang');
  await newFormPage.emergencyContactRelationship.selectOption('Husband');
  await newFormPage.emergencyContactPhone.fill('0272856914');
  await newFormPage.nextButton.click();
  //Form page 4
  await page.waitForTimeout(2000);
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=4`
  );
  await newFormPage.radioInputPassport.check(); //Proof of id = passport
  await newFormPage.uploadFile.click();
  await page.setInputFiles(
    "input[type='file']",
    './tests/passport-example.png'
  );
  await newFormPage.nextButton.click();
  //Form page 5
  await page.waitForTimeout(1000);
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=5`
  );
  await newFormPage.checkBoxAgreeToEnrolmentProcess.check();
  await page.locator('canvas').last().click();
  const canvasBox = await page.locator('canvas').last().boundingBox();
  console.log(canvasBox);
  const { x = 0, y = 0, width = 100, height = 100 } = canvasBox || {};
  await page.mouse.move(x + width / 2, y + height / 2);
  await page.mouse.down();
  await page.mouse.move(x + width / 2 + 20, y + height / 2);
  await page.mouse.up();
  await newFormPage.nextButton.click();
  await expect(page).toHaveURL(
    `${process.env.BASE_URL}/enrol-with-the-fono-medical-clinic/?step=6`
  );
});
