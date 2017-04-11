(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('customerFormBody', customerFormBodyDirective);

    customerFormBodyDirective.inject = [];
    function customerFormBodyDirective() {
        // Usage:<bill-body></bill-body>
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:"customer-form-body.html"
        };
        return directive;
    }
}());