'use strict';

import {mockCustomerConfig as mockCustomerConfig} from '../../variables';
import {configModelOptions as configModelOptions} from '../../variables';
import {configModelTypes as configModelTypes} from '../../variables';

const ConfigPage = function () {

    // elements
    this.addNewConfigButton = $('#addConfig');
    this.applyConfigButton = $('#applyConfig');
    this.formName = $('#name');
    this.configGrid = $('#Config-grid');
    this.customerGrid = $('#Customer-grid');
    this.siteTilesContainer = $('#site-tiles-container');
    this.firstElement = $('.slick-row:first-child');
    this.firstColumn = $('.slick-cell:first-child');
    this.networkXPasskey = $('#networkXPasskey');
    this.networkYPasskey = $('#networkYPasskey');
    this.saveConfigButton = $('#saveConfig');
    this.popUp = $('.noty_text');
    this.selectDropdown = $('#model');



    this.chooseNewModel = function(){
      // This Types can be changed from type2 to type6 - based on what type of config needs to be created
      // -- value of same type needs to be passed while filling the form
      this.selectDropdown.sendKeys(configModelTypes.type4.name);
    };

    this.fillConfigForm = function (data) {
        this.formName.clear();
        // -- value of same type needs to be passed while filling the form as while choosing a model
        this.formName.sendKeys(configModelTypes.type4.name);
        this.networkXPasskey.sendKeys(data.networkXPasskey);
        this.networkYPasskey.sendKeys(data.networkYPasskey);
    };

    this.isConfigCreated = function () {
        browser.wait(until.visibilityOf(this.configGrid), waitTimeout);
        this.popUp.getText().then(function (text) {
            expect(text).include("added");
        });
    };

    this.searchAddedConfig = function (data) {
        browser.sleep(3000);
        browser.wait(until.visibilityOf(this.configGrid), waitTimeout);
        $('.slick-headerrow-column:first-child input').sendKeys(data);
        $('.slick-row:first-child > .slick-cell:nth-child(2)').getText().then((data) => {
            expect(data).to.equal(data);
        });

    }

};

module.exports = ConfigPage;
