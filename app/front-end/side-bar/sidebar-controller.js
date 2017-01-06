(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('SideBarController', SideBarController);

    SideBarController.inject = ['$rootScope', '$location'];

    function SideBarController($rootScope, $location) {
        var vm = this;
        vm.showSidebar = true;
        activate();

        function activate() {
            selectCurrentSideMenu();
        }

        function selectCurrentSideMenu() {
            vm.selectedSideMenu = $location.$$path.split('/')[2];
        }
        
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                selectedSideMenu();
            });
    }
}());