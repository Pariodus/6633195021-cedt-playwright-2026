import { test, expect } from '@playwright/test';

test('Verify login pass with valid user', async ({ page }) => {

  // Arrange
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  await page.click('#btn-make-appointment');

  const username = 'John Doe';
  const password = 'ThisIsNotAPassword';

  // Act
  await page.fill('#txt-username', username);
  await page.fill('#txt-password', password);
  await page.click('#btn-login');

  // Assert
  await expect(page).toHaveURL(/appointment/);
  await expect(page.locator('h2')).toHaveText('Make Appointment');
});


test('Verify login fail with invalid password', async ({ page }) => {

  // Arrange
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  await page.click('#btn-make-appointment');

  // Act
  await page.fill('#txt-username', 'John Doe');
  await page.fill('#txt-password', 'WrongPassword');
  await page.click('#btn-login');

  // Assert
  await expect(page.locator('.text-danger'))
    .toContainText('Login failed');
});


test('Verify login fail with invalid username', async ({ page }) => {

  // Arrange
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  await page.click('#btn-make-appointment');

  // Act
  await page.fill('#txt-username', 'InvalidUser');
  await page.fill('#txt-password', 'ThisIsNotAPassword');
  await page.click('#btn-login');

  // Assert
  await expect(page.locator('.text-danger'))
    .toContainText('Login failed');
});