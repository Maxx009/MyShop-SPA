(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('picker', Directive);

    Directive.inject = ['dependency1'];
    function Directive(dependency1) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'A',
            templateUrl:'',
            scope: {
                elementName:"@",
                modelObject:"=",
                placeHolder:"@",
                typeAheadExpression:"="
            }
        };
        return directive;
    }
    /* @ngInject */
})();