const RegistrationPage = require('./registration_po');
const registration = new RegistrationPage();

class RegistrationActions {

    signupButton() {
        registration.signUpButton.waitForDisplayed(2000);
        registration.signUpButton.click();
    }

    enterFirstName(value) {
        registration.firtNameInput.waitForDisplayed(2000);
        registration.firtNameInput.clearValue();
        registration.firtNameInput.setValue(value);
    }

    enterLastName(value) {
        registration.lastNameInput.waitForDisplayed(2000);
        registration.lastNameInput.clearValue();
        registration.lastNameInput.setValue(value);
    }

    enterEmail(value) {
        registration.emailInput.waitForDisplayed(2000);
        registration.emailInput.clearValue();
        registration.emailInput.setValue(value);
    }

    enterPassword(value) {
        registration.passwordInput.waitForDisplayed(2000);
        registration.passwordInput.clearValue();
        registration.passwordInput.setValue(value);
    }

    createButton() {
        registration.createButton.waitForDisplayed(2000);
        registration.createButton.click();
        browser.pause(500);
    }
}

module.exports = RegistrationActions;