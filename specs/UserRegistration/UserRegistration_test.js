const credentials = require('../credentials.json');
const RegistrationActions = require('./actions/registration_pa');
const assert = require('../../helpers/validators');

const registrationSteps = new RegistrationActions();



describe('Hedonist registration', () => {
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('URL');

    })
    afterEach(() => {
        browser.reloadSession();
    });


    xit('should register user', () => {

        registrationSteps.signupButton();
        registrationSteps.enterFirstName(credentials.registration.firstName);
        registrationSteps.enterLastName(credentials.registration.lastName);
        registrationSteps.enterEmail(credentials.registration.email);
        registrationSteps.enterPassword(credentials.registration.password);
        registrationSteps.createButton();

        assert.successNotificationTextIs(credentials.registration.successRegistration);
    });

    it('shouldn\'t register user with invalid email', () => {

        registrationSteps.signupButton();
        registrationSteps.enterFirstName(credentials.registration.firstName);
        registrationSteps.enterLastName(credentials.registration.lastName);
        registrationSteps.enterEmail(credentials.registration.invalidEmail);
        registrationSteps.enterPassword(credentials.registration.password);
        registrationSteps.createButton();

        assert.wrongValueIndicationOnLable($('div.error'));
    });

    it('shouldn\'t register user with short password', () => {

        registrationSteps.signupButton();
        registrationSteps.enterFirstName(credentials.registration.firstName);
        registrationSteps.enterLastName(credentials.registration.lastName);
        registrationSteps.enterEmail(credentials.registration.invalidEmail);
        registrationSteps.enterPassword(credentials.registration.shortPassword);
        registrationSteps.createButton();

        assert.wrongValueIndicationOnLable($('div.error'));
    });


});