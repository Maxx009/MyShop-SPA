(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('productFormBody', productFormBodyDirective);

    productFormBodyDirective.inject = [];
    function productFormBodyDirective() {
        // Usage:<product-form-body></product-form-body>
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:"product-form-body.html"
        };
        return directive;
    }
}());