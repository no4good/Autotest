const assert = require('chai').assert;
const expect = require('chai').expect;
const {URL} = require('url');

class AssertHelper {

    elementCountIs(locator, expectedQty) {
        const els = locator;
        const actualQty = els.length;

        assert.strictEqual(actualQty, expectedQty, `Expected ${expectedQty} is not equal to ${actualQty}`);
    }

    wrongValueIndicationOnField(locator) {
        const attr = locator.getAttribute('class');
        expect(attr, `${attr} doesn't include validation class`).to.include("is-danger");
    }

    wrongValueIndicationOnLable(locator) {

        const attr = locator.getAttribute('class');
        expect(attr, `${attr} doesn't include error class`).to.include("error");
    }

    errorNotificationTextIs(expectedText) {
        const notification = $('div.toast.is-danger div');
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
    }

    successNotificationTextIs(expectedText) {
        const notification = $('div.toast.is-success div');
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
    }

    infoNotificationTextIs(expectedText) {
        const notification = $('div.toast.is-info div');
        const actualText = notification.getText()
        assert.equal(actualText, expectedText, `Expected ${actualText} to be equal to ${expectedText}`);
    }

    currentUrl(expectedUrl) {
        const url = new URL (browser.getUrl());
        const actualUrl = url.hostname.toString() + url.pathname.toString();
        assert.equal(actualUrl, expectedUrl, `Expected ${actualUrl} to be equal to ${expectedUrl}` );

    }

};

module.exports = new AssertHelper();