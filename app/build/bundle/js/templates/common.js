angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('error-messages.html',
    "<div><span class=\"text-danger\" ng-message=\"minlength\">Minmum allowed characters not entered</span> <span class=\"text-danger\" ng-message=\"maxlength\">Maximum allowed characters exceeded.</span> <span class=\"text-danger\" ng-message=\"number\">Only number are allowed</span> <span class=\"text-danger\" ng-message=\"min\">Value too less</span> <span class=\"text-danger\" ng-message=\"max\">Value too more</span> <span class=\"text-danger\" ng-message=\"required\">This field is required.</span></div>"
  );


  $templateCache.put('picker.html',
    "<div><input type=\"text\" name=\"vm.elementName\" ng-model=\"vm.modelObject\" placeholder=\"vm.placeholder\" uib-typeahead=\"vm.typeAheadExpression\" typeahead-loading=\"vm.loading\" typeahead-no-results=\"vm.noResults\" class=\"form-control\"> <i ng-show=\"vm.loading\" class=\"fa fa-refresh\"></i><div ng-show=\"vm.noResults\"><i class=\"fa fa-remove\"></i> No data Found</div></div>"
  );


  $templateCache.put('login.html',
    "<div class=\"container-fluid\"><div class=\"col-md-4 col-md-offset-8\"><h2>Login</h2><form name=\"loginForm\" ng-submit=\"vm.login()\" role=\"form\"><div class=\"form-group\" ng-class=\"{ 'has-error': (loginForm.username.$dirty ||loginForm.$submitted)&& loginForm.username.$error.required }\"><label for=\"username\">Username</label><input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" ng-required=\"true\"><!--<span ng-show=\"(loginForm.username.$dirty ||loginForm.$submitted)&& loginForm.username.$error.required\" class=\"help-block\">Username is required</span>--><div ng-messages=\"(loginForm.username.$dirty ||loginForm.$submitted)&& loginForm.username.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div><div class=\"form-group\" ng-class=\"{ 'has-error': (loginForm.password.$dirty ||loginForm.$submitted)&& loginForm.password.$error.required }\"><label for=\"password\">Password</label><input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" ng-required=\"true\"> <span ng-show=\"(loginForm.password.$dirty ||loginForm.$submitted)&& loginForm.password.$error.required\" class=\"help-block\">Password is required</span></div><div class=\"form-actions\"><button type=\"submit\" class=\"btn btn-primary\">Login</button></div></form></div></div>"
  );

}]);
