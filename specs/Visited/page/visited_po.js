class VisitedPage {

    get choosPlace() {return $$('div.media-content a')[2]};
    get placeName() {return $$('h3.title a')[2]};
    get checkinButton() {return $('button.checkin')};
    
}

module.exports = VisitedPage;