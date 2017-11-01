'use strict';
import ReportingPage from './reporting.page';
import { input } from './mockData';
import SiteSelectionPage from '../sitePanel/site_selection.page';

describe('New Reporting Panel Screen', () => {
    var reportingPage = new ReportingPage();
    var selectSite = new SiteSelectionPage();

    it('Should Select sensors and nodes', () => {
        reportingPage.fillForm(input);
    });

    it('Should wait for the graph canvas', () => {
        browser.wait(function () {
            return element(by.css("#chart")).isPresent()
        });
    });

    it('Should be able to see real-time updates', () => {
        reportingPage.showUpdates.click();
    });

    it('Should close the modal and clear', () => {
        browser.sleep(5000);
        reportingPage.closeModal.click();
    });

});
