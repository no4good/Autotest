const LoginPage = require('../Page/Login_po');
const loginPage = new LoginPage();

class LoginActions {

    enterEmail(value) {
        loginPage.emailInput.waitForDisplayed(2000);
        loginPage.emailInput.setValue(value);
    }

    enterPassword(value) {
        loginPage.passwordInput.waitForDisplayed(2000);
        loginPage.passwordInput.setValue(value);
    }

    clickLoginButton() {
        loginPage.loginButton.waitForDisplayed(2000);
        loginPage.loginButton.click();
    }

}

module.exports = LoginActions;
