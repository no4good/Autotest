class RegistrationPage {

    get signUpButton () {return $('a[href="/signup"]')};
    get firtNameInput () {return $('input[name="firstName"]')};
    get lastNameInput () {return $('input[name="lastName"]')};
    get emailInput () {return $('input[name="email"]')};
    get passwordInput () {return $('input[type="password"]')};
    get createButton () {return $('button.button-wide')};
}

module.exports = RegistrationPage;