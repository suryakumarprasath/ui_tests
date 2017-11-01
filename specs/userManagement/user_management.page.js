'use strict';

// import { mockCustomer as mockCustomer } from '../../variables';

var UserManagementPage = function () {
    // elements

    this.addNewActiveUser = $('#addUser');
    this.formName = $('#name');
    this.email = $('#email');
    this.title= $('#title');
    this.phone = $('#phone');
    this.selectRolesDropDown = $('#roles');
    this.saveUser = $('#saveUser');
    this.userGrid = $('#Usermanagement-grid');
    this.popUp = $('.noty_text');
    this.closeIcon = $('#userManagementoverlayClose');
    this.userManagementLink = $('#userManagementLink');
    this.searchByName = element(by.xpath("//*[@id='Customer-grid']/div[3]/div[1]/div[2]/input"));
    this.type = "partner";


    this.fillUserForm = function (data) {
        this.formName.sendKeys(data.name);
        this.email.sendKeys(data.email);
        this.title.sendKeys(data.title);
        this.phone.sendKeys(data.phone);
        this.selectRolesDropDown.sendKeys(data.role);
    };

    this.searchAddedUser = function (data) {
        browser.wait(until.visibilityOf(this.userGrid), waitTimeout);
        $('.slick-headerrow-column:first-child input').sendKeys(data.name);
        $('.slick-row:first-child > .slick-cell:first-child').getText().then((data) => {
            expect(data).to.equal(data);
        });
    }

    this.isUserCreated = function () {
        browser.wait(until.visibilityOf(this.userGrid), waitTimeout);
        this.popUp.getText().then(function (text) {
            expect(text).to.equal("added");
        });
    };

    this.checkPopUpText = function(){
        this.popUp.getText().then(function (text) {
            expect(text).include("added");

        });
    }


};

module.exports = UserManagementPage;
