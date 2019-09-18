const help = require('../../helpers/helpers');
const assert = require('assert');
const visited = require('../Visited/actions/visited_pa')
const MenuActions = require('../Menu/actions/menu_pa');
const wait = require('../../helpers/waiters');

const menuSteps = new MenuActions();

describe('Hedonist visited section', () => {

    afterEach(() => {
        browser.reloadSession();
    });

    it('should display visited place', () => {

       help.loginWithDefaultUser();
       wait.forSpinner();
       visited.chooseFirstPlace();
       wait.forSpinner();
       visited.checkinPlace();
       menuSteps.navigateToVisited();
       
       assert.equal(visited.placeName(), visited.selectedPlaceName());

    });

});