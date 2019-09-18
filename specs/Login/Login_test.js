const help = require('../../helpers/helpers');
const assert = require('../../helpers/validators');
const credentials = require('../credentials.json');
const wait = require('../../helpers/waiters');
  
describe('Hedonist Login', () => {

    afterEach(() => {
        browser.reloadSession();
    });

    it('should log in with valid data', () => {

        help.loginWithDefaultUser();
        assert.successNotificationTextIs(credentials.login.successNotification);
        wait.forSpinner();
        assert.currentUrl(credentials.login.urlAfterLogin);

    });
    
    it('shouldn\'t log in with invalid data', () => {

        help.loginWithCustomUser(credentials.login.invalidEmail, credentials.login.invalidPassword);
        assert.errorNotificationTextIs(credentials.login.errorNotification);

    });

});