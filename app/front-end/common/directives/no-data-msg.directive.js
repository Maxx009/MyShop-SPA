(function() {
    'use strict';

    angular
        .module('myShopApp')
        .directive('noData', NoDataDirective);

    NoDataDirective.inject = [];
    function NoDataDirective() {
        // Usage:
        //
        // Creates:<no-data></no-data>
        //
        var directive = {
            template:"<div class='no-data-wrapper'><h4 class='no-data'>No Data Found</h4></div>",
            bindToController: true,
            controller: NoDataController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                collection:"=",
                textClass:"@"
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NoDataController () {
        var vm = this;

    }
})();