import basePage from '../../page_objects/page_steps/base_steps';
import accountsPage from '../../page_objects/page_steps/accounts_page_steps';
import homePage from '../../page_objects/page_steps/home_page_steps';
import regPage from '../../page_objects/page_steps/registration_page_steps';

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Launch the application', () => {
    basePage.launchApplication();
})

Then('Verify application logo is displayed', () => {
    homePage.verifyLogo();
})

Then('Verify application caption is displayed as {string}', (caption) => {
    homePage.verifyCaption(caption);
})

Then('Verify application home page left menu', () => {
    homePage.verifyHomePageLeftMenu();
})

When('I click on the registration link', () => {
    homePage.navigateToRegistrationPage();
})

Then('Registration page should be launched with title {string}', (title) => {
    regPage.verifyRegistrationPageLaunched(title);
})

When('I update user details with {string} and {string}', (username, password) => {
    regPage.updateRegistrationDetails(username, password);
})

When('I click on Register button', () => {
    regPage.clickOnRegisterButton();
})

Then('Registration should be successful', () => {
    accountsPage.verifyAccountServicesPageIsLaunched();
})

When('I login with {string} and {string}', (username, password) => {
    homePage.enterCredentials(username, password);
})

When('I click on login button', () => {
    homePage.clickOnLoginButton();
})

Then('Verify the login {string}', (scenario) => {
    if (scenario.includes('invalid'))
        homePage.getLoginError();
    else
        accountsPage.verifyAccountServicesPageIsLaunched();
})