const help = require('../../helpers/helpers');
const assert = require('assert');
const customAssert = require('../../helpers/validators')
const credentials = require('../credentials.json');
const wait = require('../../helpers/waiters');
const path = require('path');

const MenuActions = require('../Menu/actions/menu_pa');
const PlaceActions = require('./actions/NewPlace_pa');

const menuSteps = new MenuActions();
const placeSteps = new PlaceActions();




describe('Hedonist new place section', () => {
   
    afterEach(() => {
        browser.reloadSession();
    });

    it('should create place', () => {

        help.loginWithDefaultUser()
        wait.forSpinner();
      
        menuSteps.navigateToNewPlace();

        placeSteps.enterName(credentials.newPlace.name);
        placeSteps.enterCity(credentials.newPlace.city);
        placeSteps.enterZip(credentials.newPlace.zip);
        placeSteps.enterAddress(credentials.newPlace.address);
        placeSteps.enterPhoneNumber(credentials.newPlace.phone);
        placeSteps.enterWebsite(credentials.newPlace.website);
        placeSteps.enterDescription(credentials.newPlace.description);
        placeSteps.nextButton();

        placeSteps.uploadPhoto(path.join(__dirname,credentials.newPlace.photoPath));
        placeSteps.nextButton();

        placeSteps.nextButton();
        placeSteps.selectCategory();
        placeSteps.selectTag();
        placeSteps.nextButton();

        placeSteps.selectFeature();
        placeSteps.nextButton();
        placeSteps.nextButton();
        placeSteps.nextButton();

        wait.forSpinner();

        assert.equal(placeSteps.getCreatedPlaceName(), credentials.newPlace.name);
    });

    it('shouldn\'t create place without general informations', () => {

        help.loginWithDefaultUser()
        wait.forSpinner();
        menuSteps.navigateToNewPlace();
        placeSteps.nextButton();

        customAssert.errorNotificationTextIs(credentials.newPlace.error);

    });

});