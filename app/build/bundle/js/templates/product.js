angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('products.add.html',
    "<form name=\"addProduct\" ng-submit=\"vm.saveProduct()\" role=\"form\" novalidate>\r" +
    "\n" +
    "    <div class=\"panel panel-green\">\r" +
    "\n" +
    "        <div class=\"panel-heading\">\r" +
    "\n" +
    "            <h3 class=\"panel-title\"><i class=\"fa fa-plus fa-fw\"></i>&nbsp; Add Product</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error':addProduct.productName.$dirty && addProduct.productName.$invalid}\">\r" +
    "\n" +
    "                        <label>Product Name</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productName\" class=\"form-control\" ng-required=\"true\" ng-model=\"vm.product.name\" />\r" +
    "\n" +
    "                        <div ng-messages=\"addProduct.productName.$dirty && addProduct.productName.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>Vendor Name</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productVendor\" class=\"form-control\" ng-model=\"vm.product.vendorName\" />\r" +
    "\n" +
    "                        <div ng-messages=\"addProduct.productVendor.$dirty && addProduct.productVendor.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>Brand</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productBrand\" class=\"form-control\" ng-model=\"vm.product.brand\" />\r" +
    "\n" +
    "                        <div ng-messages=\"addProduct.productBrand.$dirty && addProduct.productBrand.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
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
    "                <button type=\"submit\" class=\"btn btn-success\">Save</button>\r" +
    "\n" +
    "                <button type=\"reset\" class=\"btn btn-default\">Reset</button>\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('products.edit.html',
    "<form name=\"editProduct\" ng-submit=\"vm.updateProduct()\" role=\"form\" novalidate>\r" +
    "\n" +
    "    <div class=\"panel panel-green\">\r" +
    "\n" +
    "        <div class=\"panel-heading\">\r" +
    "\n" +
    "            <h3 class=\"panel-title\"><i class=\"fa fa-pencil-square-o fa-fw\"></i>&nbsp; Edit Product</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error':editProduct.productName.$dirty && editProduct.productName.$invalid}\">\r" +
    "\n" +
    "                        <label>Product Name</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productName\" class=\"form-control\" ng-required=\"true\" ng-model=\"vm.product.name\" />\r" +
    "\n" +
    "                        <div ng-messages=\"editProduct.productName.$dirty && editProduct.productName.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>Vendor Name</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productVendor\" class=\"form-control\" ng-model=\"vm.product.vendorName\" />\r" +
    "\n" +
    "                        <div ng-messages=\"editProduct.productVendor.$dirty && editProduct.productVendor.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-6\">\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label>Brand</label>\r" +
    "\n" +
    "                        <input type=\"text\" name=\"productBrand\" class=\"form-control\" ng-model=\"vm.product.brand\" />\r" +
    "\n" +
    "                        <div ng-messages=\"editProduct.productBrand.$dirty && editProduct.productBrand.$error\">\r" +
    "\n" +
    "                            <div ng-messages-include=\"common/templates/error-messages.html\"></div>\r" +
    "\n" +
    "                        </div>\r" +
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
    "                <button type=\"submit\" class=\"btn btn-success\">Update</button>\r" +
    "\n" +
    "                <button type=\"reset\" class=\"btn btn-default\">cancel</button>\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('products.html',
    "<header-breadcrum header-big=\"Product\" header-small=\"Dashboard\" icon-class=\"fa-dashboard\"></header-breadcrum>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-green\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-cubes fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">26</div>\r" +
    "\n" +
    "                        <div>Total Products</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"panel-footer\">\r" +
    "\n" +
    "                <div class=\"row green-color\">\r" +
    "\n" +
    "                    <div class=\"col-md-6 green-right-border\">\r" +
    "\n" +
    "                        <a ui-sref=\"main.products.add\">\r" +
    "\n" +
    "                            <span class=\"pull-left\">Add New</span>\r" +
    "\n" +
    "                            <span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-md-6\">\r" +
    "\n" +
    "                        <a ui-sref=\"main.products.list\">\r" +
    "\n" +
    "                            <span class=\"pull-left\">View List</span>\r" +
    "\n" +
    "                            <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--<div class=\"col-lg-3 col-md-6\">\r" +
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
    "    </div>-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-12\" ui-view>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('products.list.html',
    "<div class=\"panel panel-green\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\"><i class=\"fa fa-list fa-fw\"></i>Products </h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-lg-12\">\r" +
    "\n" +
    "                <!--<h2>Bordered with Striped Rows</h2>-->\r" +
    "\n" +
    "                <div class=\"table-responsive\">\r" +
    "\n" +
    "                    <table class=\"table table-bordered table-hover table-striped\">\r" +
    "\n" +
    "                        <thead>\r" +
    "\n" +
    "                            <tr>\r" +
    "\n" +
    "                                <th>Name</th>\r" +
    "\n" +
    "                                <th>Brand</th>\r" +
    "\n" +
    "                                <th>Vendor</th>\r" +
    "\n" +
    "                                <th>Action</th>\r" +
    "\n" +
    "                            </tr>\r" +
    "\n" +
    "                        </thead>\r" +
    "\n" +
    "                        <tbody>\r" +
    "\n" +
    "                            <tr ng-repeat=\"product in vm.products\">\r" +
    "\n" +
    "                                <td ng-bind=\"product.name\"></td>\r" +
    "\n" +
    "                                <td ng-bind=\"product.brand\"></td>\r" +
    "\n" +
    "                                <td ng-bind=\"product.vendorName\"></td>\r" +
    "\n" +
    "                                <td>\r" +
    "\n" +
    "                                    <button type=\"button\" class=\"btn btn-success btn-circle\" ng-click=\"vm.editProduct(product._id)\"><i class=\"fa fa-pencil-square-o\"aria-hidden=\"true\"></i></button>\r" +
    "\n" +
    "                                </td>\r" +
    "\n" +
    "                            </tr>                             \r" +
    "\n" +
    "                        </tbody>\r" +
    "\n" +
    "                    </table>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
