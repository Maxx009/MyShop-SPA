(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('billBody', billBodyDirective);

    billBodyDirective.inject = [];
    function billBodyDirective() {
        // Usage:<bill-body></bill-body>
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:"bill-body.html"
        };
        return directive;
    }
}());