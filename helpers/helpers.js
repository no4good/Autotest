const LoginActions = require('../specs/Login/actions/Login_pa');
const loginPageSteps = new LoginActions();
const credentials = require('../specs/credentials.json');
const listSteps = require('../specs/MyLists/actions/list_pa')

class HelpClass {
    loginWithDefaultUser() {
        browser.maximizeWindow();
        browser.url('URL');

        loginPageSteps.enterEmail(credentials.login.validEmail);
        loginPageSteps.enterPassword(credentials.login.validPassword);
        loginPageSteps.clickLoginButton();
    }

    loginWithCustomUser(email, password) {
        browser.maximizeWindow();
        browser.url('URL');

        loginPageSteps.enterEmail(email);
        loginPageSteps.enterPassword(password);
        loginPageSteps.clickLoginButton();
    }

    clickItemInList(name) {
        const place = $$(`//div[contains(@class, "place-item")]//h3/a[contains(., "${name}")]`);
        if (place.length === 0) {
            throw new Error("Element not found");
        }
        place[0].scrollIntoView();
        place[0].click();
    }

    browserClick(elm) {
        return browser.execute((e) => {
            document.querySelectorAll(e).click();
        }, elm);
    }

    browserClickOnArrayElement(elm, index) {
        return browser.execute((e, i) => {
            document.querySelectorAll(e)[i - 1].click();
        }, elm, index);
    }

    createNewList(listName, listLocation, listPlace) {
        listSteps.createList();
        listSteps.enterListName(listName);
        listSteps.enterLocation(listLocation);
        listSteps.enterPlace(listPlace);
        listSteps.confirmPlace();
        listSteps.saveList();
    }

}

module.exports = new HelpClass();