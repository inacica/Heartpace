// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Successful login', async ({ page }) => {
    // Check the user can login with correct email and correct password

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_PASSWORD);
    await loginPage.clickLogin();
    await expect(page.getByTestId('PersonIcon')).toBeVisible();
});