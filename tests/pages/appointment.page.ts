import { Page, expect } from '@playwright/test';

export class AppointmentPage {

  constructor(private page: Page) {}

  async selectFacility() {
    await this.page.selectOption('#combo_facility', 'Tokyo CURA Healthcare Center');
  }

  async checkReadmission() {
    await this.page.check('#chk_hospotal_readmission');
  }

  async selectProgram() {
    await this.page.check('#radio_program_medicaid');
  }

  // async inputVisitDate(date: string) {
  //   await this.page.fill('#txt_visit_date', date);
  // }
  async inputVisitDate(date: string) {
    const dateInput = this.page.locator('#txt_visit_date');
    await dateInput.fill('');
    await dateInput.type(date);
  }

  async inputComment(comment: string) {
    await this.page.fill('#txt_comment', comment);
  }

  async bookAppointment() {
    await this.page.click('#btn-book-appointment');
  }

  // async verifyAppointment() {
  //   await expect(this.page.locator('h2')).toHaveText('Appointment Confirmation');
  // }

  async verifyAppointment() {
    await expect(this.page.locator('#summary h2')).toHaveText('Appointment Confirmation');
  }
}