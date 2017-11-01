'use strict';

import { mockCustomer as mockCustomer } from '../../variables';

const FixturePage = function () {

    // elements
    this.addNewFixtureButton = $('#addFixture');
    this.formName = $('#name');

    //Common
    this.customerGrid = $('#Customer-grid');
    this.siteTilesContainer = $('#site-tiles-container');

    // Form specific
    this.description = $('#description');
    this.manufacturer = $('#manufacturer');
    this.manufacturersku = $('#manufacturersku');
    this.fixtureType = $('#fixtureType');
    this.PowerDraw = $('#PowerDraw');
    this.nemasocket = $('#nemasocket');
    this.MaxPower0 = $('#MaxPower0');
    this.MaxPower10 = $('#MaxPower10');
    this.MaxPower50 = $('#MaxPower50');
    this.MaxPower100 = $('#MaxPower100');
    this.MinPower0 = $('#MinPower0');
    this.MinPower10 = $('#MinPower10');
    this.MinPower50 = $('#MinPower50');
    this.MinPower100 = $('#MinPower100');
    this.MinimumLightLevelForFailureDetection = $('#MinimumLightLevelForFailureDetection');
    this.BallastCost = $('#BallastCost');
    this.BulbCost = $('#BulbCost');
    this.LegacyPowerDraw = $('#LegacyPowerDraw');
    this.DailyOperatingTime = $('#DailyOperatingTime');
    this.saveFixtureButton = $('#saveFixture');
    this.deleteFixtureButton = $('#deleteFixture');
    this.resetFixtureButton = $('#resetFixture');
    this.popUp = $('.noty_text');
    this.fixtureGrid = $('#Fixture-grid');
    // this.selectedFirstRow = element(by.xpath("//*[@id='Fixture-grid']/div[5]/div/div"))


    this.fillFixtureForm = function (data) {
        this.formName.sendKeys(data.name);
        this.description.sendKeys(data.description);
        this.manufacturer.sendKeys(data.manufacturer);
        this.manufacturersku.sendKeys(data.manufacturersku);
        this.fixtureType.sendKeys(data.fixtureType);
        this.PowerDraw.sendKeys(data.PowerDraw);
        this.nemasocket.sendKeys(data.nemasocket);
        this.MaxPower0.sendKeys(data.MaxPower0);
        this.MaxPower10.sendKeys(data.MaxPower10);
        this.MaxPower50.sendKeys(data.MaxPower50);
        this.MaxPower100.sendKeys(data.MaxPower100);
        this.MinPower0.sendKeys(data.MinPower0);
        this.MinPower10.sendKeys(data.MinPower10);
        this.MinPower50.sendKeys(data.MinPower50);
        this.MinPower100.sendKeys(data.MinPower100);
        this.MinimumLightLevelForFailureDetection.sendKeys(data.MinimumLightLevelForFailureDetection);
        this.BallastCost.sendKeys(data.BallastCost);
        this.BulbCost.sendKeys(data.BulbCost);
        this.LegacyPowerDraw.sendKeys(data.LegacyPowerDraw);
        this.DailyOperatingTime.sendKeys(data.DailyOperatingTime);
    };

    this.isDuplicatePresent = function () {
        this.popUp.getText().then(function (text) {
            expect(text).include("already exists");
        });
    };

    this.isConfigCreated = function () {
        browser.wait(until.visibilityOf(this.fixtureGrid), waitTimeout);
        this.popUp.getText().then(function (text) {
            expect(text).to.equal("added");
        });
    };

    this.searchAddedFixture = function (data) {
        browser.wait(until.visibilityOf(this.fixtureGrid), waitTimeout);
        $('#Fixture-grid .slick-headerrow-columns .slick-headerrow-column.l1.r1').sendKeys(data.name);
        $('#Fixture-grid .grid-canvas .slick-row .slick-cell.l1.r1').getText().then((data) => {
            expect(data).to.equal(data);
        });
    }

    // this.selectedFixture = function (data) {
    //     browser.wait(until.visibilityOf(this.fixtureGrid), waitTimeout);
    //     $('.slick-row:first-child > .slick-cell:nth-child(2)').click();
    //     // browser.sleep(10000);
    // };
};

module.exports = FixturePage;
