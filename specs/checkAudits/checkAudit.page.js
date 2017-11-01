'use strict';

// import SidebarPage from '../sidebar/sidebar.page';
import {mockCustomer as mockCustomer} from '../../variables';

var CheckAudit = function () {
  // elements

  this.auditGrid = $('#Audit-grid');
  this.userManagementLink = $('#userManagementLink');

  this.searchGivenAudit = function (data) {
    browser.wait(until.visibilityOf(this.auditGrid), waitTimeout);
  }
};

module.exports = CheckAudit;
