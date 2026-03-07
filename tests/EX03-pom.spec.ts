import { test } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { AppointmentPage } from './pages/appointment.page';

test('make appointment success using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const appointmentPage = new AppointmentPage(page);

  await loginPage.goto();
  await loginPage.clickMakeAppointment();
  await loginPage.login('John Doe', 'ThisIsNotAPassword');

  await appointmentPage.selectFacility();
  await appointmentPage.checkReadmission();
  await appointmentPage.selectProgram();
  await appointmentPage.inputVisitDate('30/03/2026');
  await appointmentPage.inputComment('Test appointment');
  await appointmentPage.bookAppointment();

  await appointmentPage.verifyAppointment();

});