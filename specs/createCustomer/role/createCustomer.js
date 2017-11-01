'use strict';
import Page from '../page';
import {customer} from './../mockData';

describe('As Sensity User Create a Customer', () => {

  var createCustomerPage = new Page();

  it("Check the user is on Site Panel or on Customer page", ()=>{

    //  The browser.sleep is needed as the url gets picked up even before the user has logged in 
    browser.sleep(2000);
    browser.getCurrentUrl().then( function( url ) {
      console.log("current url",  url);
      if(url.includes("/app/sitepanel")){
        createCustomerPage.goToAccountsPage("/app/customerpanel");
        console.log("navigate back to the customer page")
      }
    });
  });

  it('Pull up a new from to add customer', () => {
    browser.wait(until.visibilityOf(createCustomerPage.addCustomerBtn), waitTimeout);
    createCustomerPage.addCustomerBtn.click();
    createCustomerPage.form_name.getText().then(function (isNameEmpty) {
      assert.equal(isNameEmpty, '');
    });

  });

  it('Fill new customer form', () => {
    createCustomerPage.fillForm(customer);
  });

  it('Hit save and check for pop-up message', () => {
    createCustomerPage.form_saveCustomer_btn.click();
    browser.wait(until.visibilityOf(createCustomerPage.popUp), waitTimeout);
  });

  it('validate popup text for Created Customer', () => {
    createCustomerPage.isCustomerCreated();
    browser.sleep(9000);
  });

  it('Search grid for added customer and verify', () => {
    createCustomerPage.searchAddedCustomer(customer);
  });

  it("Route to the sites page to navigate to User Management", ()=>{
    // $('.slick-row:first-child .customer-sites-icon').click();
    $('.slick-row .slick-cell.l6.r6').click();
  });

});
