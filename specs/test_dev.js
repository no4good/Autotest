const credentials = require('../testData.json');
const Page = require('../helpers/helpers');
const Assert = require('../helpers/validators');
const Wait = require('../helpers/waiters');
const MenuActions = require('./Menu/actions/menu_pa');
const LoginPage = require('./Login/page/Login_po');
const NewPlacePage = require('./NewPlace/page/NewPlace_po');

const loginPage = new LoginPage();
const newPlacePage = new NewPlacePage();
const menu = new MenuActions();

describe('test', () => {

    it('should represent all items in list', () => {
        
        Page.loginWithDefaultUser(credentials);
        Wait.forSpinner();
        // Assert.elementCountIs();
        
    });
    
    it('should display validation fail on field', () => {
        Page.loginWithCustomUser(credentials.password, credentials.email);
        Assert.wrongValueIndicationOnField(loginPage.emailInput);
        
    });

    it('should display validation fail on label', () => {
        Page.loginWithDefaultUser(credentials);
        Wait.forSpinner();
        menu.navigateToNewPlace();
        newPlacePage.nextButton.click();

        Assert.wrongValueIndicationOnLable(newPlacePage.nameFieldLable);
    });

    it('should not login with wrong password', () => {

        

    });

    

});