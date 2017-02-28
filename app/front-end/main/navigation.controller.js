(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('NavigationController', NavigationController);

    NavigationController.inject = ['$rootScope', '$location'];

    function NavigationController($rootScope, $location) {
        var vm = this;
        activate();

        function activate() {
            selectCurrentSideMenu();
        }

        function selectCurrentSideMenu() {
            var moduleName= $location.$$path.split('/')[2];
            vm.selectedSideMenu = moduleName ? moduleName.toLowerCase():"";
        }
        // $rootScope.$on('$stateChangeStart',
        //     function (event, toState, toParams, fromState, fromParams, options) {
        //         vm.selectedSideMenu = $location.$$path.split('/')[2];
        //     });
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams, options) {
                selectCurrentSideMenu();
            });
    }
}());