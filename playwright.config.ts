import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

/**
 * Load environment variables from .env
 */
dotenv.config()

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {

    /* ใช้ URL จาก .env */
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying failed test */
    trace: 'on-first-retry',

  },

  /* Configure projects for browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

})