const VisitedPage = require('../page/visited_po')
const visited = new VisitedPage();

class VisitedPageActions {

    
    chooseFirstPlace() {
        visited.choosPlace.waitForDisplayed(2000);
        visited.choosPlace.click();
    }

    checkinPlace() {
        visited.checkinButton.waitForDisplayed(2000);
        visited.checkinButton.click();
    }

    placeName() {
        visited.placeName.waitForDisplayed(2000);
        visited.placeName.getText();
    }

    selectedPlaceName() {
        visited.placeName.getText();
    }
}

module.exports = new VisitedPageActions();