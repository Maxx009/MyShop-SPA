(function () {
    'use strict';

    angular
        .module('myShopApp')
        .directive('sideBar', SideBarDirective);

    SideBarDirective.$inject = [];

    function SideBarDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: "common/templates/sidebar.html",
            bindToController: true,
            controller: ["$rootScope", "$location", SideBarController],
            controllerAs: 'sideBar',
            restrict: 'E',
            scope: {}
        };
        return directive;


    }
    /* @ngInject */
    function SideBarController($rootScope, $location) {
        var vm = this;
        vm.showSidebar = true;
        vm.selectedSideMenu = $location.$$path.split('/')[1];

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                vm.selectedSideMenu = $location.$$path.split('/')[1];
            });
    }
}());