// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Invalid email', async ({ page }) => {
    // Check the user can't login with incorrect email and correct password

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_INVALID_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_PASSWORD);
    await loginPage.clickLogin();
    await expect(page.locator('#email-helper-text')).toContainText('Email is not a valid email address.');
});

test('Blank email', async ({ page }) => {
    // Check the user can't login with blank email and correct password

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_BLANK_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_PASSWORD);
    await loginPage.clickLogin();
    await expect(page.locator('#email-helper-text')).toContainText('Email cannot be blank.');
});

test('Invalid password 1', async ({ page }) => {
    // Check the user can't login with correct email and invalid password requirements: password doesn't contain lowercase letter

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_INVALID_PASSWORD1);
    await loginPage.clickLogin();
    await expect(page.locator('#password-helper-text')).toContainText('Email or password is not correct');
});

test('Invalid password 2', async ({ page }) => {
    // Check the user can't login with correct email and invalid password requirements: password doesn't contain uppercase letter

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_INVALID_PASSWORD2);
    await loginPage.clickLogin();
    await expect(page.locator('#password-helper-text')).toContainText('Email or password is not correct');
});

test('Invalid password 3', async ({ page }) => {
    // Check the user can't login with correct email and invalid password requirements: password doesn't contain digit

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_INVALID_PASSWORD3);
    await loginPage.clickLogin();
    await expect(page.locator('#password-helper-text')).toContainText('Email or password is not correct');
});

test('Invalid password 4', async ({ page }) => {
    // Check the user can't login with correct email and invalid password requirements: password doesn't contain character

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_INVALID_PASSWORD4);
    await loginPage.clickLogin();
    await expect(page.locator('#password-helper-text')).toContainText('Email or password is not correct');
});

test('Blank password ', async ({ page }) => {
    // Check the user can't login with correct email and blank password

    const loginPage = new LoginPage(page);
    await loginPage.goto(process.env.SIGN_IN_URL);
    await loginPage.enterEmail(process.env.TEST_USER_1_EMAIL);
    await loginPage.enterPassword(process.env.TEST_USER_1_BLANK_PASSWORD);
    await loginPage.clickLogin();
    await expect(page.locator('#password-helper-text')).toContainText('Password cannot be blank.');
});