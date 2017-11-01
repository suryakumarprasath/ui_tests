'use strict';

import { mockCustomer as mockCustomer } from '../../variables';

var SiteSelectionPage = function () {
    // elements
    this.siteTiles = $('#site-tiles-container');
    this.siteSingle = $('.netsense__site__single');
    this.list;
    this.firstRow;
    this.firstRowElements;


    this.getMoreOptions = function () {
        browser.wait(until.visibilityOf(this.siteTiles), waitTimeout);
        $('.netsense__site--description--more').click();
    };

    // Common Utility function to access  different Links to be clicked
    this.commonUtilityClick = function(linkName, rowIndex, itemIndex){
        this.list = element.all(by.css('.netsense__form--list'));
        this.firstRow = this.list.get(rowIndex);
        this.firstRowElements = this.firstRow.all(by.css('.netsense__form--list li'));
        this.link = this.firstRowElements.get(itemIndex);
        this.link.click();
    };

    // Set 0
    this.clickSchedulesLink = function(){
        this.commonUtilityClick("schedules", 0 , 0);
    };

    this.clickGroupsLink = function(){
        this.commonUtilityClick("groups", 0 , 1)
    };

    this.clickNodesLink = function () {
        this.commonUtilityClick("nodes", 0 , 2)
    };


    // // Set 1
    this.clickAudits = function () {
        this.commonUtilityClick("audits", 1 , 0)
    };

    this.clickReporting = function () {
        this.commonUtilityClick("reporting", 1 , 1)
    };

    this.clickNotifications = function () {
        this.commonUtilityClick("notifications", 1 , 2)
    };

    this.clickFixtures = function () {
        this.commonUtilityClick("fixtures", 1 , 3)
    };
    //
    this.clickDayLightHarvesting = function () {
        this.commonUtilityClick("daylightHarvesting", 1 , 4)
    };


    // Set 2

    this.clickProximityDimmingLink = function(){
        this.commonUtilityClick("proximityDimming", 2 , 0)
    };

    this.clickFirmware = function () {
        this.commonUtilityClick("firmware", 2 , 1)
    };

    this.clickCommissioning = function () {
        this.commonUtilityClick("commissioning", 2 , 2)
    };

    this.clickConfig = function () {
        this.commonUtilityClick("configurations", 2 , 3)
    };


    // Set 3
    this.clickParkingGroups = function () {
        this.commonUtilityClick("parkingGroups", 3 , 0)
    };

    this.clickParkingZones = function () {
        this.commonUtilityClick("parkingZones", 3 , 1)
    };

    this.clickTrafficConfig = function () {
        this.commonUtilityClick("trafficConfig", 3 , 2)
    };

    this.clickUserManagement = function () {
        this.commonUtilityClick("userManagement", 3 , 3)
    };

    // // Special Cases:
    //
    // // Only for End User Admin - to login and choose a site that has nodes to verify the details
    // this.clickNodesLinkSecond = function () {
    //     // qastage 3
    //     //$('#site-tiles-container > div[data-siteid="ffa6f7d0-5b60-11e7-a191-07bbbcab6a12"] >.netsense__site--description .netsense__form--list .netsense__form--list--item:nth-child(3)').click();
    //
    //     // qa stage 3 - abu dhabi site
    //     $('#site-tiles-container > div[data-siteid="c8e750e0-09db-11e7-863d-dde2efee023e"] >.netsense__site--description .netsense__form--list .netsense__form--list--item:nth-child(3)').click();
    //
    // };



};

module.exports = SiteSelectionPage;
