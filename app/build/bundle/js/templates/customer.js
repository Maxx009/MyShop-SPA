angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('customers.add.html',
    "<form name=\"customerForm\" role=\"form\" novalidate ng-submit=\"customerForm.$valid && vm.saveCustomer()\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-plus-square\"></i> &nbsp; Add Customer</h3></div><div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.customerName.$dirty ||customerForm.$submitted)&& customerForm.customerName.$invalid}\"><label>Full Name</label><input type=\"text\" class=\"form-control\" name=\"customerName\" ng-model=\"vm.customer.name\" ng-required=\"true\" ng-pattern=\"/^[a-z A-Z]+$/\"><div ng-messages=\"(customerForm.customerName.$dirty ||customerForm.$submitted)&& customerForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.shopName.$dirty ||customerForm.$submitted)&& customerForm.shopName.$invalid}\"><label>Shop Name</label><input type=\"text\" class=\"form-control\" name=\"shopName\" ng-model=\"vm.customer.shopName\"><div ng-messages=\"(customerForm.shopName.$dirty ||customerForm.$submitted)&& customerForm.shopName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" class=\"form-control\" name=\"contactNo\" ng-maxlength=\"10\" ng-minlength=\"10\" ng-model=\"vm.customer.mobileNumber\"><div ng-messages=\"(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.customer.address\"></textarea><div ng-messages=\"(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetCustomer();\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button></span></div></div></form>"
  );


  $templateCache.put('customers.html',
    "<header-breadcrum header-big=\"Customer\" header-small=\"Dashboard\" icon-class=\"fa-users\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-users fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\" ng-bind=\"vm.customerCount\"></div><div>Total Customers</div></div></div></div><div class=\"panel-footer\"><div class=\"row\"><a ui-sref=\"main.customers.add\"><div class=\"col-md-6 primary-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus-square\"></i></span></div></a><a ui-sref=\"main.customers.list\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div><!--<div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-green\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-tasks fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">12</div>\r" +
    "\n" +
    "                        <div>New Tasks!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-yellow\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-shopping-cart fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">124</div>\r" +
    "\n" +
    "                        <div>New Orders!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-red\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-support fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">13</div>\r" +
    "\n" +
    "                        <div>Support Tickets!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>--></div><div class=\"row\"><div class=\"col-lg-12\" ui-view></div></div>"
  );


  $templateCache.put('customers.edit.html',
    "<form name=\"customerForm\" role=\"form\" novalidate ng-submit=\"customerForm.$valid && vm.updateCustomer()\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i> Update Customer</h3></div><div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.customerName.$dirty ||customerForm.$submitted) && customerForm.customerName.$invalid}\"><label>Full Name</label><input type=\"text\" class=\"form-control\" name=\"customerName\" ng-model=\"vm.customer.name\" ng-required=\"true\" ng-pattern=\"/^[a-z A-Z]+$/\"><div ng-messages=\"(customerForm.customerName.$dirty ||customerForm.$submitted)&& customerForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.shopName.$dirty ||customerForm.$submitted)&& customerForm.shopName.$invalid}\"><label>Shop Name</label><input type=\"text\" class=\"form-control\" name=\"shopName\" ng-model=\"vm.customer.shopName\" ng-pattern=\"/^[a-z A-Z]+$/\"><div ng-messages=\"(customerForm.shopName.$dirty ||customerForm.$submitted)&& customerForm.shopName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" class=\"form-control\" name=\"contactNo\" ng-maxlength=\"10\" ng-minlength=\"10\" ng-model=\"vm.customer.mobileNumber\"><div ng-messages=\"(customerForm.contactNo.$dirty ||customerForm.$submitted)&& customerForm.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.customer.address\"></textarea><div ng-messages=\"(customerForm.address.$dirty ||customerForm.$submitted)&& customerForm.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-primary\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('customers.list.html',
    "<div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Customers</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><!--<h2>Bordered with Striped Rows</h2>--><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Shop Name</th><th>Mobile</th><th>Address</th><th></th></tr></thead><tbody><tr ng-repeat=\"customer in vm.customers track by customer._id\"><td ng-bind=\"customer.name\"></td><td ng-bind=\"customer.shopName\"></td><td ng-bind=\"customer.mobileNumber\"></td><td ng-bind=\"customer.address\"></td><td><button type=\"button\" class=\"btn btn-primary btn-circle\" ng-click=\"vm.editCustomer(customer._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);
