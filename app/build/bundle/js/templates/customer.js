angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('customers.add.html',
    "<form name=\"customerForm\" role=\"form\" novalidate ng-submit=\"customerForm.$valid && vm.saveCustomer(customerForm);\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-plus-square\"></i> &nbsp; Add Customer</h3></div><customer-form-body></customer-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetCustomer();\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button></span></div></div></form>"
  );


  $templateCache.put('customers.html',
    "<header-breadcrum header-big=\"Customer\" header-small=\"Dashboard\" icon-class=\"fa-users\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-users fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\" ng-bind=\"vm.customerCount\"></div><div>Total Customers</div></div></div></div><div class=\"panel-footer\"><div class=\"row\"><a ui-sref=\"main.customers.add\"><div class=\"col-md-6 primary-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus-square\"></i></span></div></a><a ui-sref=\"main.customers.list\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-12\" ui-view></div></div>"
  );


  $templateCache.put('customer-form-body.html',
    "<div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.customerName.$dirty ||customerForm.$submitted)&& customerForm.customerName.$invalid}\"><label>Name</label><input type=\"text\" class=\"form-control\" name=\"customerName\" ng-model=\"vm.customer.name\" ng-required=\"true\" ng-pattern=\"/^[a-z A-Z]+$/\" capitalize><div ng-messages=\"(customerForm.customerName.$dirty ||customerForm.$submitted)&& customerForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" class=\"form-control\" name=\"contactNo\" ng-maxlength=\"10\" ng-minlength=\"10\" ng-model=\"vm.customer.mobileNumber\"><div ng-messages=\"(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-12\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.customer.address\" capitalize></textarea><div ng-messages=\"(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div>"
  );


  $templateCache.put('customers.edit.html',
    "<form name=\"customerForm\" role=\"form\" novalidate ng-submit=\"customerForm.$valid && vm.updateCustomer()\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i> Update Customer</h3></div><customer-form-body></customer-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-primary\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('customers.list.html',
    "<div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Customers</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><!--<h2>Bordered with Striped Rows</h2>--><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Contact No.</th><th>Address</th><th>Created On</th><th>Modified On</th><th></th></tr></thead><tbody><tr ng-repeat=\"customer in vm.customers track by customer._id\"><td ng-bind=\"customer.name\"></td><td ng-bind=\"customer.mobileNumber\"></td><td ng-bind=\"customer.address\"></td><td ng-bind=\"customer.createdOn | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"customer.modifiedOn | date:'dd-MM-yyyy hh:mm a'\"></td><td><button type=\"button\" class=\"btn btn-primary btn-circle\" ng-click=\"vm.editCustomer(customer._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);
