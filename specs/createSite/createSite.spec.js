'use strict';
import createSitePom from './createSitePom';
import { sites as sites } from '../../variables';
import {customer as customer} from './../createCustomer/mockData'
import {nodeVariable1 as nodeVariable1} from './../../variables'
import {nodeVariable2 as nodeVariable2} from './../../variables'
import DataUtilCalls from './../apiCalls-trial/apiCalls'
import {allCustomers as allCustomers} from './../../variables'

describe('Should Create a site under customer', () => {
    var createSite = new createSitePom();

    // Fetch all the customers to find the customer id and site id
    before(()=>{
        console.log("customerName in sites page", customer.name)
        DataUtilCalls.getAllData('customers', customer)
        browser.sleep(5000);

    });
    after (() => {
        console.log("nodeVariable1", nodeVariable1);
        console.log("To do a post to create the Node");
        DataUtilCalls.postData('nodes', nodeVariable1);
        browser.sleep(10000);

    });

    it('Should Pull up a new form to add a site', () => {
        createSite.addSiteBtn.click();
        createSite.form_name.getText().then(function (isNameEmpty) {
            assert.equal(isNameEmpty, '');
        });
    });

    it('Should Fill new Site form and validate address ', () => {
        createSite.fillForm(sites.siteVariable);
        browser.wait(until.visibilityOf(createSite.popUp), waitTimeout);
        createSite.popUp.getText().then(function (text) {
            expect(text).include("Found");
        });
    });

    it('Should Hit save and wait for the pop up', () => {
        createSite.form_saveSite_btn.click();
        browser.wait(until.visibilityOf(createSite.popUp), waitTimeout);

        browser.sleep(5000);
        DataUtilCalls.getAllData('sites',sites.siteVariable)
        browser.sleep(10000);

    });

});
