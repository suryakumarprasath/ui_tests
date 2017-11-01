import Page from '../page';
import { variable as input } from '../../../variables';
import { loginData } from '../mockData';

describe('Login as Sensity User', () => {
    var loginPage = new Page();

    beforeEach(() => {
        browser.get(input.baseUrl);
    });

    it('User login as Sensity User', () => {
        browser.wait(until.visibilityOf(loginPage.username), waitTimeout);
        loginPage.login(loginData.username_sensity_user, loginData.password_sensity_user);
    });
});
