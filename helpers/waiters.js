class CustomWaits {
    forSpinner() {
        const spinner = $('div#preloader');
        spinner.waitForDisplayed(3000);
        spinner.waitForDisplayed(10000, true);

    }

    forNotificationToDisappear() {
        const notification = $('div.toast div');
        notification.waitForDisplayed(5000, true);
    }

}

module.exports = new CustomWaits();