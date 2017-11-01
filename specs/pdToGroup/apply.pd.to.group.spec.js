'use strict';
import { groups as groups } from '../../variables';
import { pdVariable as pdVariable } from '../../variables';
import groupsPage from './pd.to.group.page.js'
import SiteSelectionPage from '../sitePanel/site_selection.page.js';

describe('Applying Proximity Dimming Profile . . .', () => {

    var selectSite = new SiteSelectionPage();

    it('Route back to sites page', () => {
        browser.navigate().back();
    });

    it("Route back to Groups Page ", () => {
        selectSite.getMoreOptions();
        selectSite.clickGroupsLink();
        browser.sleep(4000)
    });

    it("Should Clear the groups input text", ()=>{
        groupsPage.clearSearchArea();
    });

    it('Should Search for Group ' + groups.name, () => {
        browser.wait(until.visibilityOf(groupsPage.groupGrid), waitTimeout);
        groupsPage.searchByName.sendKeys(groups.name);
        groupsPage.selectedFirstRow.click();
        groupsPage.showHideDetailsButton.click();
        browser.wait(until.visibilityOf(groupsPage.gropsDetailPanel), waitTimeout);

    });

    it('Should Apply Proximity dimming Profile : ' + pdVariable.name, () => {
        browser.wait(until.visibilityOf(groupsPage.gropsDetailPanel), waitTimeout);
        groupsPage.selectPDProfile(pdVariable.name);
    })

    it('Should save group proximity dimming profile', () => {
        groupsPage.saveGroupBtn.click()
    })

    it('Route back to sites page', () => {
        browser.navigate().back();
    })

    it("Click Nodes Link", () => {
        selectSite.getMoreOptions();
        selectSite.clickNodesLink();
    })

})
