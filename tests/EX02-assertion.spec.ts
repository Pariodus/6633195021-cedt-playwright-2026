import { test, expect } from '@playwright/test';

const URL = 'https://katalon-demo-cura.herokuapp.com/';


//Fixture: Login before each test
test.beforeEach(async ({ page }) => {

  await page.goto(URL);
  await page.click('#btn-make-appointment');

  await page.fill('#txt-username', 'John Doe');
  await page.fill('#txt-password', 'ThisIsNotAPassword');
  await page.click('#btn-login');
});



//Verify Make Appointment page
test('Verify make appointment page display title', async ({ page }) => {

  await expect(page.locator('h2'))
    .toHaveText('Make Appointment');
});


//Verify Facility Combo Box
test('Verify can select all facility combo boxes', async ({ page }) => {

  const facility = page.locator('#combo_facility');

  await facility.selectOption('Tokyo CURA Healthcare Center');
  await expect(facility).toHaveValue('Tokyo CURA Healthcare Center');

  await facility.selectOption('Hongkong CURA Healthcare Center');
  await expect(facility).toHaveValue('Hongkong CURA Healthcare Center');

  await facility.selectOption('Seoul CURA Healthcare Center');
  await expect(facility).toHaveValue('Seoul CURA Healthcare Center');
});



//Verify Readmission Checkbox
test('Verify can select apply for hospital readmission checkbox', async ({ page }) => {

  const checkbox = page.locator('#chk_hospotal_readmission');

  await checkbox.check();
  await expect(checkbox).toBeChecked();
});



//Verify Healthcare Program Radio Button
test('Verify can select health care program radio button', async ({ page }) => {

  const medicare = page.locator('#radio_program_medicare');
  const medicaid = page.locator('#radio_program_medicaid');
  const none = page.locator('#radio_program_none');

  await medicare.check();
  await expect(medicare).toBeChecked();

  await medicaid.check();
  await expect(medicaid).toBeChecked();

  await none.check();
  await expect(none).toBeChecked();
});



//Verify Visit Date Input
test('Verify can input current date on Visit Date', async ({ page }) => {

  const today = new Date().toLocaleDateString('en-GB');

  const visitDate = page.locator('#txt_visit_date');

  await visitDate.fill(today);
  await expect(visitDate).toHaveValue(today);
});



//Verify Comment Input

test('Verify can input comment', async ({ page }) => {

  const comment = page.locator('#txt_comment');

  await comment.fill('Playwright automation test');
  await expect(comment).toHaveValue('Playwright automation test');
});



//Verify Book Appointment Button
test('Verify book appointment button is displayed and enabled', async ({ page }) => {

  const button = page.locator('#btn-book-appointment');

  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
});