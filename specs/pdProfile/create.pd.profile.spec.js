'use strict';
import { pdVariable } from '../../variables';
import PdProfilePage from './pd.profile.page.js';
import SiteSelectionPage from '../sitePanel/site_selection.page.js';

describe('Creating a proximity dimming profile . . .', () => {
    var selectSite = new SiteSelectionPage();

    it('Should click on add Pd Profile button', () => {
        browser.wait(until.visibilityOf(PdProfilePage.addAddPdProfileBtn), waitTimeout);
        PdProfilePage.addAddPdProfileBtn.click()
    });

    it("Should Fill the Pd Profile form to add a new Proximity Dimming", ()=>{
            PdProfilePage.fillForm(pdVariable);
    });

    it('Should save Pd Profile', () => {
        PdProfilePage.saveProfile.click()
    })

    it('Should search for a ' + pdVariable.name + ' Profile', () => {
        browser.wait(until.visibilityOf(PdProfilePage.proximityGrid), waitTimeout);
        PdProfilePage.selectPdProfile(pdVariable.name)
    })

    it('Route back to sites page', () => {
        browser.navigate().back();
    })

    it("Route back to Fixture Page ", () => {
        selectSite.getMoreOptions();
        selectSite.clickFixtures();
    });

})
