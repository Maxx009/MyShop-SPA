angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bills.add.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.saveBill()\">\r" +
    "\n" +
    "    <div class=\"panel panel-red\">\r" +
    "\n" +
    "        <div class=\"panel-heading\">\r" +
    "\n" +
    "            <h3 class=\"panel-title\"><i class=\"fa fa-inr \"></i> Add Bill</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "           <pre> {{vm.billDetails | json}}</pre>\r" +
    "\n" +
    "            <div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\"\r" +
    "\n" +
    "                dismiss-on-timeout=\"2000\">{{alert.msg}}</div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-lg-8\">\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error':(billForm.customerName.$dirty || billForm.$submitted) && billForm.customerName.$invalid}\">\r" +
    "\n" +
    "                        <label>Customer Name</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"customerName\" ng-required=\"true\" ng-model=\"vm.billDetails.customerName\" placeholder=\"Type Customer name\"\r" +
    "\n" +
    "                            uib-typeahead=\"customer as customer.name for customer in vm.getCustomers($viewValue)\" typeahead-loading=\"vm.loading\"\r" +
    "\n" +
    "                            typeahead-no-results=\"vm.noResults\" class=\"form-control\">\r" +
    "\n" +
    "                        <i ng-show=\"vm.loading\" class=\"fa fa-refresh\"></i>\r" +
    "\n" +
    "                        <div ng-show=\"vm.noResults\">\r" +
    "\n" +
    "                            <i class=\"fa fa-remove\"></i> No Customers Found\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-messages=\"(billForm.customerName.$dirty || billForm.$submitted)&& billForm.customerName.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-4\">\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error':(billForm.billDate.$dirty || billForm.$submitted) && billForm.billDate.$invalid}\">\r" +
    "\n" +
    "                        <label>Bill Date</label>\r" +
    "\n" +
    "                        <p class=\"input-group\">\r" +
    "\n" +
    "                            <input type=\"text\" name=\"billDate\" class=\"form-control\" uib-datepicker-popup=\"{{'dd-MMMM-yyyy'}}\" ng-model=\"vm.billDetails.billDate\"\r" +
    "\n" +
    "                                is-open=\"vm.isBillDateOpen\" mix-date=\"vm.today\" ng-required=\"true\" ng-readonly=\"true\" close-text=\"Close\"\r" +
    "\n" +
    "                            />\r" +
    "\n" +
    "                            <span class=\"input-group-btn\">\r" +
    "\n" +
    "                                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.isBillDateOpen = !vm.isBillDateOpen\"><i class=\"fa fa-calendar\"></i></button>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            <div ng-messages=\"(billForm.billDate.$dirty || billForm.$submitted)&& billForm.billDate.$error\">\r" +
    "\n" +
    "                                <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <!--<pre>{{vm.billDetails | json}}</pre>-->\r" +
    "\n" +
    "                <div class=\"col-lg-12\">\r" +
    "\n" +
    "                    <div class=\"table-responsive\">\r" +
    "\n" +
    "                        <table class=\"table table-hover table-striped\">\r" +
    "\n" +
    "                            <thead>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <th>Product</th>\r" +
    "\n" +
    "                                    <th style=\"width: 75px\">Units</th>\r" +
    "\n" +
    "                                    <th style=\"width: 150px\">Quantity (in kgs.)</th>\r" +
    "\n" +
    "                                    <th style=\"width: 150px\">Rate (per kg.)</th>\r" +
    "\n" +
    "                                    <th style=\"width: 150px\">Total</th>\r" +
    "\n" +
    "                                    <th style=\"width: 80px\" </th>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </thead>\r" +
    "\n" +
    "                            <tbody>\r" +
    "\n" +
    "                                <tr ng-repeat=\"item in vm.billDetails.billItems\">\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <div ng-class=\"{'has-error':(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <input type=\"text\" name=\"{{'product'+$index}}\" ng-model=\"item.product\" placeholder=\"Type product name\" uib-typeahead=\"product as product.name for product in vm.getProducts($viewValue)\"\r" +
    "\n" +
    "                                                class=\"form-control\" ng-required=\"true\">\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <div ng-class=\"{'has-error':(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <input type=\"number\" name=\"{{'unit'+$index}}\" class=\"form-control\" ng-model=\"item.units\" ng-change=\"item.units !== undefined && vm.calculate();\"\r" +
    "\n" +
    "                                                ng-required=\"true\" min=\"1\" max=\"1000\"/>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <div ng-class=\"{'has-error':(billForm['quantity'+$index].$dirty || billForm.$submitted)&& billForm['quantity'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <select class=\"form-control\" name=\"{{'quantity'+$index}}\" ng-model=\"item.quantity\" ng-options=\"quantity for quantity in vm.quantities\"\r" +
    "\n" +
    "                                                ng-change=\"item.quantity !== undefined && vm.calculate();\" ng-required=\"true\"></select>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['quantity'+$index].$dirty || billForm.$submitted)&& billForm['quantity'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <div ng-class=\"{'has-error':(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <input type=\"number\" class=\"form-control\" name=\"{{'rate'+$index}}\" ng-model=\"item.rate\" ng-change=\"item.rate !== undefined && vm.calculate();\"\r" +
    "\n" +
    "                                                ng-required=\"true\" min=\"1\" max=\"999999\"/>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <i class=\"fa fa-inr\"></i>&nbsp;\r" +
    "\n" +
    "                                        <label ng-bind=\"item.total\"></label>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                    <td>\r" +
    "\n" +
    "                                        <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Add Row\" ng-click=\"vm.addNewRow()\" ng-if=\"$last\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                        <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Remove Row\" ng-click=\"vm.removeRow($index)\" ng-if=\"vm.billDetails.billItems.length >1\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                    </td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                                <tr>\r" +
    "\n" +
    "                                    <td colspan=\"4\" class=\"text-right\"><label>Grand Total</label></td>\r" +
    "\n" +
    "                                    <td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.grandTotal\"></label></td>\r" +
    "\n" +
    "                                    <td></td>\r" +
    "\n" +
    "                                </tr>\r" +
    "\n" +
    "                            </tbody>\r" +
    "\n" +
    "                        </table>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <span class=\"\">\r" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-danger\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetBill();\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button>\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('bills.edit.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.updateBill()\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i> Update Bill</h3></div><div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':billForm.billName.$dirty && billForm.billName.$invalid}\"><label>Full Name</label><input type=\"text\" class=\"form-control\" name=\"billName\" ng-model=\"vm.bill.name\" ng-required=\"true\" ng-pattern=\"/^[a-z A-Z]+$/\"><div ng-messages=\"billForm.billName.$dirty && billForm.billName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':billForm.contactNo.$dirty && billForm.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" class=\"form-control\" name=\"contactNo\" ng-maxlength=\"10\" ng-minlength=\"10\" ng-model=\"vm.bill.mobileNumber\"><div ng-messages=\"billForm.contactNo.$dirty && billForm.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':billForm.address.$dirty && billForm.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.bill.address\"></textarea><div ng-messages=\"billForm.address.$dirty && billForm.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-danger\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('bills.list.html',
    "<div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Vendors</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Mobile</th><th>Address</th><th></th></tr></thead><tbody><tr ng-repeat=\"bill in vm.bills track by bill._id\"><td ng-bind=\"bill.name\"></td><td ng-bind=\"bill.mobileNumber\"></td><td ng-bind=\"bill.address\"></td><td><button type=\"button\" class=\"btn btn-danger btn-circle\" ng-click=\"vm.editVendor(bill._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );


  $templateCache.put('bills.view.html',
    "<div class=\"panel panel-yellow\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Bills</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Mobile</th><th>Address</th><th></th></tr></thead><tbody><tr ng-repeat=\"bill in vm.bills track by bill._id\"><td ng-bind=\"bill.name\"></td><td ng-bind=\"bill.mobileNumber\"></td><td ng-bind=\"bill.address\"></td><td><button type=\"button\" class=\"btn btn-warning btn-circle\" ng-click=\"vm.editBill(bill._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );


  $templateCache.put('sales.html',
    "<header-breadcrum header-big=\"Sales\" header-small=\"Dashboard\" icon-class=\"fa-inr\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-inr fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\" ng-bind=\"vm.billCount\"></div><div>Total Bills</div></div></div></div><div class=\"panel-footer\"><div class=\"row red-color\"><a ui-sref=\"main.sales.addBill\"><div class=\"col-md-6 red-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus-square\"></i></span></div></a><a ui-sref=\"main.sales.listBill\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div><!--<div class=\"col-lg-3 col-md-6\">\r" +
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

}]);
