const assert = require('assert');
const credentials = require('../credentials.json');

const RegistrationActions = require('../User_login_regestration/actions/registration_pa');

const registrationSteps = new RegistrationActions();

function userLogin(email, password) {
    const emailField = $('input[name="email"]');
    const passwordField = $('input[type="password"]');
    const loginButton = $('button.is-primary');

    emailField.clearValue();
    emailField.setValue(email);
    passwordField.clearValue();
    passwordField.setValue(password);
    loginButton.click();
}

function getNotification() {
    const notification = $('div.toast div');
    return notification.getText();
}

describe('Hedonist Login/Registration', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('URL');
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('shouldn\'t log in with invalid data', () => {

        userLogin(credentials.login.invalidEmail, credentials.login.invalidPassword);

        assert.equal(browser.getUrl(), 'URL');
    });

    it('should register user', () => {

        registrationSteps.signupButton();
        registrationSteps.enterFirstName(credentials.registration.firstName);
        registrationSteps.enterLastName(credentials.registration.lastName);
        registrationSteps.enterEmail(credentials.registration.email);
        registrationSteps.enterPassword(credentials.registration.password);
        registrationSteps.createButton();

        assert.strictEqual(getNotification(), "You have successfully registered! Now you need to login");
    });
});