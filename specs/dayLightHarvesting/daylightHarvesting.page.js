'use strict';

import { mockCustomer as mockCustomer } from '../../variables';

const createDaylightHarvestingPage = function () {

    // elements
    this.popUp = $(".noty_text");

    this.daylightGrid = $('#Daylight-grid');
    this.addDaylightButton = $('.rubix-icon.icon-fontello-plus-circle');
    this.modal = $('.modal-dialog');

    this.name = $('#name');
    this.highLux = $('#highLux');
    this.lowLux = $('#lowLux');
    this.lowDriver = $('#lowDriver');
    this.minDriver = $('#minDriver');
    this.saveDhProfile = $('#saveDhProfile');
    this.groupsGrid = $('#Group-grid');
    this.showHideDetailsButton = $('#showDetailsGroups');
    this.gropsDetailPanel = $('#group-detail-panel');
    this.etdhprofileDropDown = $('#etdhprofile');
    this.saveGroupsInfo = $('#save-group-button');

    this.fillForm = function (data) {

        this.name.sendKeys(data.name);
        this.highLux.clear();
        this.highLux.sendKeys(data.highLux);
        this.lowLux.clear();
        this.lowLux.sendKeys(data.lowLux);
        this.lowDriver.clear();
        this.lowDriver.sendKeys(data.lowDriver);
        this.minDriver.clear();
        this.minDriver.sendKeys(data.minDriver);
        this.saveDhProfile.click();
    };

    this.searchGroup = function (data) {
        browser.wait(until.visibilityOf(this.groupsGrid), waitTimeout);
        $('.slick-headerrow-column:nth-child(2) input').sendKeys(data);
        $('.slick-row:first-child > .slick-cell:nth-child(2)').getText().then((data) => {
            expect(data).to.equal(data);
        });
        $('.grid-canvas .slick-row').click();
    };

};

module.exports = createDaylightHarvestingPage;
