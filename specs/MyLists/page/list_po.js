class MyListsPage {

    get createListButton () {return $('a[href="/my-lists/add"]')};
    get listNameInput () {return $('#list-name')};
    get locationInput () {return $('div.search-inputs__location input')};
    get searchPlacesInput () {return $('input.search-field')};
    get confirmSearchedPlace () {return $('div.search-places__list li')};
    get saveListButton () {return $('button.button.is-success')};
    get deleteButton () {return $('div.place-item__actions button.button.is-danger')};
    get confirmDeleteButton () {return $('div.animation-content button.button.is-danger')};
    get listName () {return $$('h3.title.has-text-primary a')[0]};
    get editButton() {return $$('a.button.is-info')[0]};
    get updateButton() {return $$('button.button.is-info')[1]};
};

module.exports = MyListsPage;