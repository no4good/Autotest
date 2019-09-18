const help = require('../../helpers/helpers');
const assert = require('../../helpers/validators');
const credentials = require('../credentials.json');
const wait = require('../../helpers/waiters');
const MenuActions = require('../Menu/actions/menu_pa');
const listSteps = require('./actions/list_pa');

const menuSteps = new MenuActions();



describe('Hedonist my lists section', () => {
   
    afterEach(() => {
        browser.reloadSession();
    });

    it('should create list', () => {
        help.loginWithDefaultUser();
        wait.forSpinner();

        menuSteps.navigateToLists();
        wait.forSpinner();

       
        help.createNewList(credentials.newList.name, credentials.newList.location, credentials.newList.Place);
        wait.forSpinner();

        assert.successNotificationTextIs(credentials.newList.listSaved);

        //postconditions
        listSteps.deletList();
        listSteps.confirmDelete();
        wait.forSpinner();
        assert.infoNotificationTextIs(credentials.newList.listDeleted);
    });

    it('should delete list', () => {

        help.loginWithDefaultUser();
        wait.forSpinner();
        menuSteps.navigateToLists();
        wait.forSpinner();
       
        help.createNewList(credentials.newList.name, credentials.newList.location, credentials.newList.Place);
        wait.forSpinner();

        assert.successNotificationTextIs(credentials.newList.listSaved);

        listSteps.deletList();
        listSteps.confirmDelete();
        wait.forSpinner();

        assert.infoNotificationTextIs(credentials.newList.listDeleted);
    });

    it('shouldn\'t create list without List name', () => {

        help.loginWithDefaultUser();
        wait.forSpinner();
        menuSteps.navigateToLists();
        wait.forSpinner();

        listSteps.createList();
        listSteps.saveList();

        assert.errorNotificationTextIs(credentials.newList.listWithoutNameNotification);

    });

    it('should edit list data', () => {

        help.loginWithDefaultUser();
        wait.forSpinner();
        menuSteps.navigateToLists();
        wait.forSpinner();

        help.createNewList(credentials.newList.name, credentials.newList.location, credentials.newList.Place);
        wait.forSpinner();

        listSteps.editList();
        listSteps.enterListName(credentials.newList.nameChange);
        listSteps.updateList();
        wait.forSpinner();

        assert.successNotificationTextIs(credentials.newList.listUpdated);
        
        //postconditions
        listSteps.deletList();
        listSteps.confirmDelete();
        wait.forSpinner();

        assert.infoNotificationTextIs(credentials.newList.listDeleted);

    });
});