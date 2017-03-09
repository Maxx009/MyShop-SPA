angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('error-messages.html',
    "<script type=\"text/ng-template\" id=\"error-messages.html\"><span class=\"text-danger\" ng-message=\"minlength\">Minmum allowed letters not entered</span>\r" +
    "\n" +
    "    <span class=\"text-danger\" ng-message=\"maxlength\">Maximum allowed letters exceeded.</span>\r" +
    "\n" +
    "    <span class=\"text-danger\" ng-message=\"number\">Only number are allowed</span>\r" +
    "\n" +
    "    <span class=\"text-danger\" ng-message=\"required\">This field is required.</span></script>"
  );


  $templateCache.put('login.html',
    "<div class=\"container-fluid\"><div class=\"col-md-4 col-md-offset-4 white-color\"><h2>Login</h2><form name=\"form\" ng-submit=\"vm.login()\" role=\"form\"><div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\"><label for=\"username\">Username</label><input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" required> <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span></div><div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\"><label for=\"password\">Password</label><input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" required> <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span></div><div class=\"form-actions\"><button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" class=\"btn btn-primary\">Login</button></div></form></div></div>"
  );

}]);
