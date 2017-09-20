(function () {
    'use strict';

    angular
        .module('myShopApp')
        .directive('capitalize', capitalizeDirective);

    capitalizeDirective.inject = ['$parse'];

    function capitalizeDirective($parse) {
        // Usage:<input type="text" ng-model="test" capitalize/>
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            require:'ngModel'
        };
        return directive;

        function link(scope, element, attrs, modelCtrl) {
            function capitalize(inputValue) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                var capitalized = inputValue.charAt(0).toUpperCase() +
                    inputValue.substring(1);
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
        }
    }
}());