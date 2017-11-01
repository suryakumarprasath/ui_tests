'use strict';

var ReportingPage = function () {
  this.showUpdates = $('#showUpdates');
  this.closeModal = $('.btn-info');

  this.fillForm = function (data) {

    browser.wait(until.visibilityOf($('.datetimepicker-from')), waitTimeout);
    $('#sensor-y1').sendKeys('Driver Level');
    $('#sensor-y2').sendKeys('Voltage');
    $('#nodeList').sendKeys('New Name 2');



  };
};

module.exports = ReportingPage;
