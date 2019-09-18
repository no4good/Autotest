const MyListsPage = require('../page/list_po');
const list = new MyListsPage();


class MyListsActions {

    createList() {
        list.createListButton.waitForDisplayed(2000);
        list.createListButton.click();
    }

    enterListName(value) {
        list.listNameInput.waitForDisplayed(2000);
        list.listNameInput.setValue(value);
    }

    enterLocation(value) {
        list.locationInput.waitForDisplayed(2000);
        list.locationInput.clearValue();
        list.locationInput.setValue(value);
    }

    enterPlace(value) {
        list.searchPlacesInput.waitForDisplayed(2000);
        list.locationInput.clearValue();
        list.searchPlacesInput.setValue(value);
    }

    confirmPlace() {
        list.confirmSearchedPlace.waitForDisplayed(5000);
        list.confirmSearchedPlace.click();
    }

    saveList() {
        list.saveListButton.waitForDisplayed(2000);
        list.saveListButton.click();
    }

    deletList() {
        list.deleteButton.waitForDisplayed(2000);
        list.deleteButton.click();
    }

    confirmDelete() {
        list.confirmDeleteButton.waitForDisplayed(5000);
        list.confirmDeleteButton.click();
    }

    editList() {
        list.editButton.waitForDisplayed(2000);
        list.editButton.click();
    }

    updateList() {
        list.updateButton.waitForDisplayed(2000);
        list.updateButton.click();
    }

};

module.exports = new MyListsActions();