(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('vendorFormBody', vendorFormBodyDirective);

    vendorFormBodyDirective.inject = [];
    function vendorFormBodyDirective() {
        // Usage:<vendor-form-body></vendor-form-body>
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:"vendor-form-body.html"
        };
        return directive;
    }
}());