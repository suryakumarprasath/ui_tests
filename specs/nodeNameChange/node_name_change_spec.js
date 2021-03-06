'use strict';
import NodeNameChange from './node_name_change_page';
import SiteSelectionPage from '../sitePanel/site_selection.page';

import {nodename} from '../../variables';
import {nodeVariable1} from '../../variables';

describe('Check If there is a Name to the Node and change/update the name', () => {

    var nodeNameChange = new NodeNameChange();
    var selectSite = new SiteSelectionPage();

    // it("Click Nodes Link", () => {
    //     selectSite.getMoreOptions();
    //     selectSite.clickNodesLink();
    // })

    it("Select the First node in the Node Grid", ()=>{
        browser.wait(until.visibilityOf(nodeNameChange.nodeGrid), waitTimeout);
        $('.slick-headerrow-columns> .slick-headerrow-column:nth-child(4) input').sendKeys(nodeVariable1.name);
        $('.slick-row > .slick-cell.l0.r0').click();
        browser.wait(until.visibilityOf(nodeNameChange.showHideDetailsButton), waitTimeout);
        nodeNameChange.showHideDetailsButton.click();
    });

    it("Wait for the pullout to be visible", ()=>{
        browser.wait(until.visibilityOf(nodeNameChange.viewScheduleButton), waitTimeout);
    });

    it("Check if there is an input field called name to be visible", ()=>{
        nodeNameChange.checkNameField();
    });

    it("Change the Name of the node", ()=>{
        nodeNameChange.changeName();
        nodeNameChange.saveNodeDetailsButton.click();
    });

    it('Save the Node Name Change and wait for the pop up', () => {
        browser.wait(until.visibilityOf(nodeNameChange.popUp), 4800);
    });


});
