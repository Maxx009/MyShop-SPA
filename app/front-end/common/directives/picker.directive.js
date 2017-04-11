(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('picker', pickerDirective);

    pickerDirective.inject = ['dependency1'];
    function pickerDirective(dependency1) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'A',
            templateUrl:'picker.html',
            controller:"PickerController",
            controllerAs:"vm",
            bindToController:true,
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
    function PickerController(params) {
        
    }
})();