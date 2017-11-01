'use strict';
import Page from './page';

describe('Logout application', () => {
    var logoutPage = new Page();

    it('User Logout', () => {
        browser.sleep(7000);
        browser.wait(until.visibilityOf(logoutPage.logoutBtn), waitTimeout);
        logoutPage.logout();
    });
});