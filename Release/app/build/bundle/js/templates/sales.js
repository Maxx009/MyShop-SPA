angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bills.add.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.saveBill(billForm)\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-inr\"></i> Add Bill</h3></div><ng-include src=\"'bill-body.html'\"></ng-include><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-danger\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetBill(billForm);\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button></span></div></div></form>"
  );


  $templateCache.put('bills.edit.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.updateBill()\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i> Update Bill</h3></div><ng-include src=\"'bill-body.html'\"></ng-include><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-danger\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('bills.list.html',
    "<div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Bills</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Customer</th><th>Amount</th><th>Bill Date</th><th>Created On</th><th>Modified On</th><th></th></tr></thead><tbody><tr ng-repeat=\"bill in vm.bills track by bill._id\"><td ng-bind=\"bill.customer.name\"></td><td ng-bind=\"bill.grandTotal\"></td><td ng-bind=\"bill.billDate | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"bill.createdOn | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"bill.modifiedOn | date:'dd-MM-yyyy hh:mm a'\"></td><td><button type=\"button\" uib-tooltip=\"Edit\" class=\"btn btn-danger btn-circle\" ng-click=\"vm.editBill(bill._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> <button type=\"button\" uib-tooltip=\"View\" class=\"btn btn-danger btn-circle\" ng-click=\"vm.viewBill(bill._id)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );


  $templateCache.put('bills.view.html',
    "<div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Bills</h3></div><div class=\"panel-body\"><div class=\"row padding-bottom-25\"><div class=\"col-lg-6 col-md-6 col-sm-6\"></div><div class=\"col-lg-6 col-md-6 col-sm-6\"><strong>M/s. Rameshchandra Hiralal Jhawar</strong><br>245/908 , Adat Bazar,<br>Ahmednagar,414001<br><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> : <strong>+91-9253380029</strong><br><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> : <strong>+0241-2345037</strong></div></div><div class=\"row padding-bottom-25 client-info\"><div class=\"col-lg-6 col-md-6 col-sm-6\"><h4><strong>Customer Information</strong></h4><strong ng-bind=\"vm.billDetails.customer.name\"></strong><div ng-if=\"vm.billDetails.customer.address\"><b>Address :</b> <span ng-bind=\"vm.billDetails.customer.address\"></span></div><div ng-if=\"vm.billDetails.customer.mobileNumber || vm.billDetails.customer.landLineNumber\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> : <strong ng-bind=\"vm.billDetails.customer.mobileNumber ||'-'\"></strong><br><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> : <strong ng-bind=\"vm.billDetails.customer.landLineNumber.stdCode +' - '+vm.billDetails.customer.landLineNumber.number\"></strong></div></div><div class=\"col-lg-6 col-md-6 col-sm-6\"><h4><strong>Payment Details</strong></h4><b>Bill Amount : <i class=\"fa fa-inr\"></i>&nbsp;{{vm.billDetails.grandTotal}}</b><br>Bill Date : {{vm.billDetails.billDate | date:'dd-MMMM-yyyy'}}<br><b>Payment Status : Paid</b><br><b>Payment Mode : Cash</b></div></div><div class=\"row\"><div class=\"col-lg-12 col-md-12 col-sm-12\"><div class=\"table-responsive\"><table class=\"table table-bordered\"><thead><tr><th>Product</th><th>Brand</th><th>Units</th><th>Rate (per kg.)</th><th>Weight (in kgs.)</th><th>Total</th></tr></thead><tbody><tr ng-repeat=\"item in vm.billDetails.billItems\"><td ng-bind=\"item.product.name\"></td><td ng-bind=\"item.brand\"></td><td ng-bind=\"item.units\"></td><td ng-bind=\"item.rate\"></td><td><span class=\"weight\" ng-repeat=\"weight in item.weights track by $index\" class=\"margin-bottom-10\" ng-bind=\"weight\"></span></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"item.total\"></label></td></tr><tr class=\"success\"><td colspan=\"5\" class=\"text-right\"><label>Sub Total</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.subTotal\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Labour Charge</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.labourCharge\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Lavy</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.lavy\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Transport Charge</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.transportCharge\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>VAT/CST</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.tax\"></label></td></tr></tbody></table></div></div></div><div class=\"ttl-amts\"><h4><strong>Bill Amount <i class=\"fa fa-inr\"></i>&nbsp;{{vm.billDetails.grandTotal}}</strong></h4></div></div><div class=\"panel-footer red\"><span class=\"\"><button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.printBill();\"><i class=\"fa fa-print\"></i>&nbsp; Print</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelView();\"><i class=\"fa fa-reply\"></i>&nbsp; Back</button></span></div></div>"
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


  $templateCache.put('bill-body.html',
    "<div class=\"panel-body\"><!--<pre> {{vm.billDetails | json}}</pre>--><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-8\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.customerName.$dirty || billForm.$submitted) && billForm.customerName.$invalid}\"><label>Customer Name</label><input type=\"text\" name=\"customerName\" typeahead-editable=\"false\" typeahead-select-on-exact=\"true\" ng-required=\"true\" ng-model=\"vm.billDetails.customer\" placeholder=\"Type Customer name\" uib-typeahead=\"customer as customer.name for customer in vm.getCustomers($viewValue)\" typeahead-loading=\"vm.loading\" typeahead-no-results=\"vm.noResults\" class=\"form-control\"><div ng-messages=\"(billForm.customerName.$dirty || billForm.$submitted)&& billForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-4\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.billDate.$dirty || billForm.$submitted) && billForm.billDate.$invalid}\"><label>Bill Date</label><p class=\"input-group\"><input type=\"text\" name=\"billDate\" class=\"form-control\" uib-datepicker-popup=\"{{'dd-MMMM-yyyy'}}\" ng-model=\"vm.billDetails.billDate\" is-open=\"vm.isBillDateOpen\" mix-date=\"vm.today\" ng-required=\"true\" ng-readonly=\"true\" close-text=\"Close\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.isBillDateOpen = !vm.isBillDateOpen\"><i class=\"fa fa-calendar\"></i></button></span></p><div ng-messages=\"(billForm.billDate.$dirty || billForm.$submitted)&& billForm.billDate.$error\"><div ng-messages-include=\"error-messages.html\"></div></div><p></p></div></div></div><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-striped\"><thead><tr><th>Product</th><th style=\"width: 150px\">Brand</th><th style=\"width: 100px\">Units</th><th style=\"width: 150px\">Rate (per kg.)</th><th style=\"width: 150px\">Weight (in kgs.)</th><th style=\"width: 150px\">Total</th><th style=\"width: 100px\"></th></tr></thead><tbody><tr ng-repeat=\"item in vm.billDetails.billItems\"><td><div ng-class=\"{'has-error':(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$invalid}\"><input type=\"text\" name=\"{{'product'+$index}}\" ng-model=\"item.product\" placeholder=\"Type product name\" typeahead-editable=\"false\" typeahead-select-on-exact=\"true\" uib-typeahead=\"product as product.name for product in vm.getProducts($viewValue)\" class=\"form-control\" ng-required=\"true\"></div><div ng-messages=\"(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['brand'+$index].$dirty || billForm.$submitted)&& billForm['brand'+$index].$invalid}\"><input type=\"text\" name=\"{{'brand'+$index}}\" ng-model=\"item.brand\" class=\"form-control\" ng-pattern=\"/^[a-z A-Z]+$/\" capitalize></div><div ng-messages=\"(billForm['brand'+$index].$dirty || billForm.$submitted)&& billForm['brand'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'unit'+$index}}\" ng-model=\"item.units\" ng-change=\"item.units !== undefined && vm.calculate(vm.billDetails);\" ng-required=\"true\" min=\"1\" max=\"10\"></div><div ng-messages=\"(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'rate'+$index}}\" ng-model=\"item.rate\" ng-change=\"vm.calculate(vm.billDetails);\" ng-required=\"true\" min=\"1\" max=\"999999\"></div><div ng-messages=\"(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-repeat=\"weight in item.weights track by $index\" class=\"margin-bottom-10\"><div ng-class=\"{'has-error':(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$invalid}\"><p class=\"input-group\"><input type=\"number\" name=\"{{'weights'+$parent.$index+''+$index}}\" class=\"form-control\" ng-model=\"item.weights[$index]\" ng-change=\"vm.calculate(vm.billDetails);\" ng-required=\"true\" min=\"1\" max=\"1000\"> <span class=\"input-group-btn\" ng-if=\"item.units && item.units > 1\"><button type=\"button\" class=\"btn btn-danger\" tooltip-placement=\"right\" uib-tooltip=\"Add another weight\" ng-click=\"vm.addNewWeightRow(item);\" ng-if=\"item.units > item.weights.length && $last\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> <button type=\"button\" class=\"btn btn-danger\" tooltip-placement=\"right\" uib-tooltip=\"Remove weight\" ng-click=\"vm.removeWeightRow(item,$index);vm.calculate(vm.billDetails);\" ng-if=\"!$last\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button></span></p></div><div ng-messages=\"(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"item.total\"></label></td><td><button type=\"button\" class=\"btn btn-danger\" uib-tooltip=\"Add Row\" ng-click=\"vm.addNewRow(vm.billDetails);\" ng-if=\"$last\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> <button type=\"button\" class=\"btn btn-danger\" uib-tooltip=\"Remove Row\" ng-click=\"vm.removeRow($index,vm.billDetails);vm.calculate(vm.billDetails);\" ng-if=\"vm.billDetails.billItems.length >1\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button></td></tr><tr class=\"success\"><td colspan=\"5\" class=\"text-right\"><label>Sub Total</label></td><td colspan=\"2\"><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.subTotal\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Labour Charge</label></td><td colspan=\"2\"><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.labourCharge\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Lavy</label></td><td colspan=\"2\"><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.lavy\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>Transport Charge</label></td><td colspan=\"2\"><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.transportCharge\"></label></td></tr><tr class=\"warning\"><td colspan=\"5\" class=\"text-right\"><label>VAT/CST</label></td><td colspan=\"2\"><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.tax\"></label></td></tr><tr class=\"success\"><td colspan=\"5\" class=\"text-right\"><h4><label>Grant total</label></h4></td><td colspan=\"2\"><h4><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.grandTotal\"></label></h4></td></tr></tbody></table></div></div></div></div>"
  );

}]);
