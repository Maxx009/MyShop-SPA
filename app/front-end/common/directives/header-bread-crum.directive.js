(function () {
    'use strict';

    angular
        .module('myShopApp')
        .directive('headerBreadcrum', headerBreadcrumDirective);

    headerBreadcrumDirective.$inject = [];

    function headerBreadcrumDirective() {
        // Usage:
        //
        // Creates:a Title for the current page and bread crum
        //
        var directive = {
            template: '<div class="row"> '  +     
                    '<div class="col-lg-12">'+
                        '<h1 class="page-header">'+
                           ' {{vm.headerBig}} <small>{{vm.headerSmall}}</small>'+
                       ' </h1>'+
                        '<ol class="breadcrumb">'+
                            '<li class="active">'+
                               ' <i class="fa {{vm.iconClass}}"></i> {{vm.headerBig}}'+
                            '</li>'+
                        '</ol>'+
                    '</div>'+
                '</div>',
            bindToController: true,
            controller: HearderBreadCrumController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                headerBig: "@",
                headerSmall: "@",
                iconClass: "@"
            }
        };
        return directive;
    }
    /* @ngInject */
    function HearderBreadCrumController() {
        var vm = this;
    }
}());