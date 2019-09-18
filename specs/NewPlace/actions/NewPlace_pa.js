const PlacePage = require('../page/NewPlace_po');
const place = new PlacePage();

class PlaceActions {

    enterName(value) {
        place.nameInput.waitForDisplayed(2000);
        place.nameInput.clearValue();
        place.nameInput.setValue(value);
    }

    enterCity(value) {
        place.cityInput.waitForDisplayed(2000);
        place.cityInput.clearValue();
        place.cityInput.setValue(value);
        place.cityConfirm.waitForDisplayed(5000);
        place.cityConfirm.click(); 
    }
    
    enterZip(value) {
        place.zipInput.waitForDisplayed(2000);
        place.zipInput.clearValue();
        place.zipInput.setValue(value);
    }

    enterAddress(value) {
        place.addressInput.waitForDisplayed(2000);
        place.addressInput.clearValue();
        place.addressInput.setValue(value);
    }

    enterPhoneNumber(value) {
        place.phoneNumberInput.waitForDisplayed(2000);
        place.phoneNumberInput.clearValue();
        place.phoneNumberInput.setValue(value);
    }

    enterWebsite(value) {
        place.websiteInput.waitForDisplayed(2000);
        place.websiteInput.clearValue();
        place.websiteInput.setValue(value);
    }

    enterDescription(value) {
        place.descriptionInput.waitForDisplayed(2000);
        place.descriptionInput.clearValue();
        place.descriptionInput.setValue(value);
    }

    nextButton() {
        place.nextButton.waitForDisplayed(2000);
        browser.pause(500);
        place.nextButton.click()
    }


    uploadPhoto(value) {
        browser.pause(500);
        place.uploadField.setValue(value);
    }


    selectCategory() {
        browser.pause(500);
        place.selectCategorysMenu.waitForDisplayed(2000);
        place.selectCategorysMenu.click();
        place.selectCategory.waitForDisplayed(5000);
        place.selectCategory.click();
    }

    selectTag() {
        place.selectTagsMenu.waitForDisplayed(5000);
        place.selectTagsMenu.click();
        place.selectTag.waitForDisplayed(5000);
        place.selectTag.click();
       
    }

    selectFeature() {
        place.selectFeature.waitForDisplayed(5000);
        browser.pause(500);
        place.selectFeature.click();
    }

    getCreatedPlaceName() {
        place.createdPlaceName.waitForDisplayed(2000);
        browser.pause(500);
        return place.createdPlaceName.getText();
    }
    
    
};

module.exports = PlaceActions;