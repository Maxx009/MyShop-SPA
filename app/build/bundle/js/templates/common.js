angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/front-end/common/templates/error-messages.html',
    "<div><span class=\"text-danger\" ng-message=\"minlength\">Minmum allowed letters not entered</span> <span class=\"text-danger\" ng-message=\"maxlength\">Maximum allowed letters exceeded.</span> <span class=\"text-danger\" ng-message=\"required\">This field is required.</span></div>"
  );

}]);
