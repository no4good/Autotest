class MenuPage {
    get dropdown () {return $('div.profile')};
    get profile () {return $('a[href="/users/97"]')};
    get tastes () {return $('a[href="/my-tastes"]')};
    get lists () {return $('a[href="/my-lists"]')};
    get visited () {return $('a[href="/checkins"]')}; 
    get newPlace () {return $('a[href="/places/add"]')};
    get settings () {return $('a[href="/settings"]')};
    get notifications () {return $('a[href="/notifications"]')};
    get logOut () {return $('a*=Log out')};
};

module.exports = MenuPage;

