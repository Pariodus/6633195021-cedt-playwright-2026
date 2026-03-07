import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async clickMakeAppointment() {
    await this.page.click('#btn-make-appointment');
  }

  async login(username: string, password: string) {
    await this.page.fill('#txt-username', username);
    await this.page.fill('#txt-password', password);
    await this.page.click('#btn-login');
  }

}