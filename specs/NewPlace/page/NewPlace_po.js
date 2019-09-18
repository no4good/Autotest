class PlacePage {
    
    get nameInput () {return $('input.input.is-medium')};
    get cityInput () {return $('div.place-location input')};
    get cityConfirm () {return $('a.dropdown-item span b')};
    get zipInput () {return $$('div.control.is-expanded input')[2]};
    get addressInput () {return $$('div.control.is-expanded input')[3]};
    get phoneNumberInput () {return $$('p.control.is-expanded input')[0]};
    get websiteInput () {return $$('div.control.is-expanded input')[4]};
    get descriptionInput () {return $('div.control textarea')};
    get nextButton () {return $('div.tab-item:not([style="display: none;"]) span.button.is-success')};
    get uploadField () {return $('input[type=file]')};
    get selectCategorysMenu() {return $$('div.control span.select')[0]};
    get selectCategory() {return $$('span.select option')[1]};
    get selectTagsMenu () {return $$('div.control span.select')[1]};
    get selectTag () {return $$('div.control span.select option')[9]};
    get selectFeature () {return $$('label.switch span.check.is-success')[1]};
    get createdPlaceName () {return $(' div.place-venue__place-name')};

};

module.exports = PlacePage;