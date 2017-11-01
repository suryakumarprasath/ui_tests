'use strict';

const Page = function () {
  // elements
  this.username = element(by.id('emailaddress'));
  this.password = $("#password");
  this.submitButton = element(by.xpath("//button[@type='submit']"));
  this.elementRole = $$('avatar-col')
  // functions
  this.login = function (a, b) {
    this.username.sendKeys(a);
    this.password.sendKeys(b);
    this.submitButton.click();
  }
};

module.exports = Page;
