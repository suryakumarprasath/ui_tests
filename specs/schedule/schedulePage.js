'use strict';

const schedulePage = function () {
  // elements
  this.clickOnAddSchedule = function(){
    $('#add-schedule').click()
  }

  this.addScheduleName = function(scheduleName){
    $('#schedname').sendKeys(scheduleName)
  }

  this.addScheduleDesc = function(scheduleDesc){
    $('#scheddescription').sendKeys(scheduleDesc)
  }

  this.openSettingsPanel = function(){
    $('#schedule-default-panel').click()
  }

  this.openTimeline = function(){
    $('#sched-ws-heading-0').click()
  }

  this.submit = function(){
    $('#schedule-submit').click()
  }

  this.selectSchedule = function(scheduleName){
    /* 
          use of Xpath is not Recommanded as these will slow down the 
       test performance(increase in test execution time) and failure to find
       xPath in cross browsers. But a simple Smoke tests which are small in number 
       shouldn't a problem until we figure out something better if test fails.

      */
    element(by.xpath('//*[@id="Schedule-grid"]/div[3]/div[1]/div[1]/input')).sendKeys(scheduleName);
    element(by.xpath("//*[@id='Schedule-grid']/div[5]/div/div[1]/div[1]")).click()
  }
};

module.exports = new schedulePage();
