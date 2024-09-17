// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

console.log('ENVIRONMENT:', process.env.ENVIRONMENT);

if (process.env.ENVIRONMENT) {
    config({ path: `./.env.${process.env.ENVIRONMENT}`, override: true });
} else {
    config();
}

export default defineConfig({
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: 'tests',

    // Run all tests in parallel.
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 2,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [['html', { open: 'never' }], ['junit', { outputFile: './playwright-report/results.xml' }]],

    expect: {
        timeout: 15000,
        toMatchSnapshot: {
            maxDiffPixels: 10,
        },
    },

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'https://qatestcompany.heartpace.com/user/login',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    // Configure projects for major browsers
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
});


