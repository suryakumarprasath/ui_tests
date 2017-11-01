'use strict';

var Page = function () {
  // elements
  this.logoutBtn = $("#logoutButton");

  this.popUp = $('.noty_text');
  this.popUpMessage = $('.noty_message');
  this.popUpClose = $('.noty_close');
  // functions
  this.logout = function () {
    // this.popUpClose.click();
    browser.sleep(10000);
    this.logoutBtn.click();
  }
};

module.exports = Page;