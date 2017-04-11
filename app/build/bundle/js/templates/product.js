angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('products.add.html',
    "<form name=\"productForm\" ng-submit=\"productForm.$valid && vm.saveProduct(productForm)\" role=\"form\" novalidate><div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-plus-square\"></i>&nbsp; Add Product</h3></div><product-form-body></product-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-success\">Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetProduct();\">Reset</button></span></div></div></form>"
  );


  $templateCache.put('products.html',
    "<header-breadcrum header-big=\"Product\" header-small=\"Dashboard\" icon-class=\"fa-cubes\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-green\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-cubes fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">26</div><div>Total Products</div></div></div></div><div class=\"panel-footer\"><div class=\"row green-color\"><a ui-sref=\"main.products.add\"><div class=\"col-md-6 green-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus-square\"></i></span></div></a><a ui-sref=\"main.products.list\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-12\" ui-view></div></div>"
  );


  $templateCache.put('product-form-body.html',
    "<div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(productForm.productName.$dirty ||productForm.$submitted)&& productForm.productName.$invalid}\"><label>Product Name</label><input type=\"text\" name=\"productName\" class=\"form-control\" ng-required=\"true\" ng-model=\"vm.product.name\" capitalize><div ng-messages=\"(productForm.productName.$dirty ||productForm.$submitted)&& productForm.productName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':(productForm.productVendor.$dirty ||productForm.$submitted)&& productForm.productVendor.$invalid}\"><label>Vendor Name</label><input type=\"text\" name=\"productVendor\" ng-model=\"vm.product.vendorName\" placeholder=\"Type vendor name\" uib-typeahead=\"vendor as vendor.name for vendor in vm.getVendors($viewValue)\" typeahead-loading=\"vm.loading\" typeahead-no-results=\"vm.noResults\" class=\"form-control\"> <i ng-show=\"vm.loading\" class=\"fa fa-refresh\"></i><div ng-show=\"vm.noResults\"><i class=\"fa fa-remove\"></i> No Vendor Found</div><div ng-messages=\"(productForm.productVendor.$dirty ||productForm.$submitted)&& productForm.productVendor.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div>"
  );


  $templateCache.put('products.edit.html',
    "<form name=\"productForm\" ng-submit=\"productForm.$valid && vm.updateProduct()\" role=\"form\" novalidate><div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp; Edit Product</h3></div><product-form-body></product-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-success\">Update</button> <button type=\"button\" ng-click=\"vm.cancelUpdate();\" class=\"btn btn-default\">cancel</button></span></div></div></form>"
  );


  $templateCache.put('products.list.html',
    "<div class=\"panel panel-green\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp;Products</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><!--<h2>Bordered with Striped Rows</h2>--><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Vendor</th><th>Created On</th><th>Modified On</th><th></th></tr></thead><tbody><tr ng-repeat=\"product in vm.products\"><td ng-bind=\"product.name\"></td><td ng-bind=\"product.vendorName.name\"></td><td ng-bind=\"product.createdOn | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"product.modifiedOn | date:'dd-MM-yyyy hh:mm a'\"></td><td><button type=\"button\" class=\"btn btn-success btn-circle\" ng-click=\"vm.editProduct(product._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);
