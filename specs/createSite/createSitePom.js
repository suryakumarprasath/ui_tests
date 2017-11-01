'use strict';

// import SidebarPage from '../sidebar/sidebar.page';
import { mockCustomer as mockCustomer } from '../../variables';

const createSitePom = function () {

    // var sidebarPage = new SidebarPage();
    // elements
    this.addSiteBtn = $("#add-Site");
    this.form_name = $("#name");
    this.form_street1 = $("#street1");
    this.form_street2 = $("#street2");
    this.form_city = $("#city");
    this.form_state = $("#state");
    this.form_postalCode = $("#postal_code");
    this.form_country = $("#country");
    this.form_latitude = $("#latitude");
    this.form_longitude = $("#longitude");
    this.form_saveSite_btn = $("#save-btn");
    this.form_cancelSite_btn = $("#cancel-btn");
    this.form_validate_btn = $("#validate-address");
    this.popUp = $(".noty_text");
    this.popUpClose = $('.noty_message .noty_close');

    //Common
    this.customerGrid = $('#Customer-grid');
    this.siteTilesContainer = $('#site-tiles-container');
    this.mockSiteCustomer = "Sensity Systems";

    // functions
    this.fillForm = function (data) {
        this.form_name.sendKeys(data.name);
        this.form_street1.sendKeys(data.street1);
        this.form_street2.sendKeys(data.street2);
        this.form_city.sendKeys(data.city);
        this.form_state.sendKeys(data.state);
        this.form_postalCode.sendKeys(data.postal_code);
        this.form_country.sendKeys(data.country);
        this.form_latitude.sendKeys(data.latitude);
        this.form_longitude.sendKeys(data.longitude);
        this.form_validate_btn.click();

    };

    this.routeToCustomer = function () {
     browser.wait(until.visibilityOf(this.customerGrid), waitTimeout);
        $('.slick-headerrow-columns > .slick-headerrow-column:first-child input').sendKeys(this.mockSiteCustomer);
        $('.slick-row:nth-child(1) > .slick-cell:nth-child(6)').click();
    };

    this.isSiteCreated = function () {
        this.popUp.getText().then(function (text) {
            expect(text).to.equal("added");
        });
    };

    this.isAddressValidated = function () {
        this.popUp.getText().then(function (text) {
            expect(text).include("Found for");
        });
    };

    this.isAddressNotValidated = function () {
        this.popUp.getText().then(function (text) {
            expect(text).include("No match found for");
        });
    };
};

module.exports = createSitePom;
