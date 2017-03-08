angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('customers.add.html',
    "<form name=\"addCustomer\" role=\"form\" novalidate ng-submit=\"addCustomer.$valid && vm.saveCustomer()\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-user-plus fa-fw\"></i> &nbsp; Add Customer</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':addCustomer.customerName.$dirty && addCustomer.customerName.$invalid}\"><label>Full Name</label><input type=\"text\" class=\"form-control\" name=\"customerName\" ng-model=\"vm.customer.name\" ng-required=\"true\" ng-pattern=\"/^[a-zA-Z]+$/\"><div ng-messages=\"addCustomer.customerName.$dirty && addCustomer.customerName.$error\"><!--<div ng-messages-include=\"error-messages\"></div>--><ng-messages-include src=\"error-messages.html\">...</ng-messages-include></div></div><div class=\"form-group\" ng-class=\"{'has-error':addCustomer.shopName.$dirty && addCustomer.shopName.$invalid}\"><label>Shop Name</label><input type=\"text\" class=\"form-control\" name=\"shopName\" ng-model=\"vm.customer.shopName\" ng-pattern=\"/^[a-zA-Z]+$/\"><div ng-messages=\"addCustomer.shopName.$dirty && addCustomer.shopName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':addCustomer.contactNo.$dirty && addCustomer.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" max=\"10\" class=\"form-control\" name=\"contactNo\" ng-model=\"vm.customer.mobileNumber\"><div ng-messages=\"addCustomer.contactNo.$dirty && addCustomer.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div><div class=\"form-group\" ng-class=\"{'has-error':addCustomer.address.$dirty && addCustomer.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.customer.address\"></textarea><div ng-messages=\"addCustomer.address.$dirty && addCustomer.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-primary\">Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetCustomer();\">Reset</button></span></div></div></form>"
  );


  $templateCache.put('customers.html',
    "<header-breadcrum header-big=\"Customer\" header-small=\"Dashboard\" icon-class=\"fa-users\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-users fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">26</div><div>Total Customers</div></div></div></div><div class=\"panel-footer\"><div class=\"row\"><a ui-sref=\"main.customers.add\"><div class=\"col-md-6 primary-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-user-plus\"></i></span></div></a><a ui-sref=\"main.customers.list\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div><!--<div class=\"col-lg-3 col-md-6\">\r" +
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


  $templateCache.put('customers.list.html',
    "<div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list fa-fw\"></i>Customers</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><!--<h2>Bordered with Striped Rows</h2>--><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Shop Name</th><th>Mobile</th><th>Address</th></tr></thead><tbody><tr ng-repeat=\"customer in customerList.customers track by customer._id\"><td ng-bind=\"customer.name\"></td><td ng-bind=\"customer.shopName\"></td><td ng-bind=\"customer.mobileNumber\"></td><td ng-bind=\"customer.address\"></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);
