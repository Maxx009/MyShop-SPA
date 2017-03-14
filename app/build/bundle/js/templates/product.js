angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('products.add.html',
    "<form name=\"addProduct\" ng-submit=\"addProduct.$valid && vm.saveProduct()\" role=\"form\" novalidate><div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-plus fa-fw\"></i>&nbsp; Add Product</h3></div><div class=\"panel-body\"><!--<pre>{{vm.product|json}}</pre>--><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':addProduct.productName.$dirty && addProduct.productName.$invalid}\"><label>Product Name</label><input type=\"text\" name=\"productName\" class=\"form-control\" ng-required=\"true\" ng-model=\"vm.product.name\"><div ng-messages=\"addProduct.productName.$dirty && addProduct.productName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div><div class=\"form-group\"><label>Vendor Name</label><input type=\"text\" name=\"productVendor\" class=\"form-control\" ng-model=\"vm.product.vendorName\"><div ng-messages=\"addProduct.productVendor.$dirty && addProduct.productVendor.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\"><label>Brand</label><label class=\"text-danger\">*</label><input type=\"text\" name=\"productBrand\" class=\"form-control\" ng-model=\"vm.product.brand\"><div ng-messages=\"addProduct.productBrand.$dirty && addProduct.productBrand.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-success\">Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetProduct();\">Reset</button></span></div></div></form>"
  );


  $templateCache.put('products.html',
    "<header-breadcrum header-big=\"Product\" header-small=\"Dashboard\" icon-class=\"fa-cubes\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-green\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-cubes fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">26</div><div>Total Products</div></div></div></div><div class=\"panel-footer\"><div class=\"row green-color\"><div class=\"col-md-6 green-right-border\"><a ui-sref=\"main.products.add\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span></a></div><div class=\"col-md-6\"><a ui-sref=\"main.products.list\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></a></div></div><div class=\"clearfix\"></div></div></div></div><!--<div class=\"col-lg-3 col-md-6\">\r" +
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


  $templateCache.put('products.edit.html',
    "<form name=\"editProduct\" ng-submit=\"vm.updateProduct()\" role=\"form\" novalidate><div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>&nbsp; Edit Product</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':editProduct.productName.$dirty && editProduct.productName.$invalid}\"><label>Product Name</label><input type=\"text\" name=\"productName\" class=\"form-control\" ng-required=\"true\" ng-model=\"vm.product.name\"><div ng-messages=\"editProduct.productName.$dirty && editProduct.productName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div><div class=\"form-group\"><label>Vendor Name</label><input type=\"text\" name=\"productVendor\" class=\"form-control\" ng-model=\"vm.product.vendorName\"><div ng-messages=\"editProduct.productVendor.$dirty && editProduct.productVendor.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\"><label>Brand</label><input type=\"text\" name=\"productBrand\" class=\"form-control\" ng-model=\"vm.product.brand\"><div ng-messages=\"editProduct.productBrand.$dirty && editProduct.productBrand.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-success\">Update</button> <button type=\"button\" ng-click=\"vm.cancelUpdate();\" class=\"btn btn-default\">cancel</button></span></div></div></form>"
  );


  $templateCache.put('products.list.html',
    "<div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list fa-fw\"></i>Products</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><!--<h2>Bordered with Striped Rows</h2>--><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Brand</th><th>Vendor</th><th>Action</th></tr></thead><tbody><tr ng-repeat=\"product in vm.products\"><td ng-bind=\"product.name\"></td><td ng-bind=\"product.brand\"></td><td ng-bind=\"product.vendorName\"></td><td><button type=\"button\" class=\"btn btn-success btn-circle\" ng-click=\"vm.editProduct(product._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);
