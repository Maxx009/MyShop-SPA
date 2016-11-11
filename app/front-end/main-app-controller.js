(function() {
'use strict';

    angular
        .module('myShopApp')
        .controller('MainAppController', MainAppController);

    MainAppController.$inject = [];
    function MainAppController() {
        var vm = this;
        vm.showSidebar = true;
    }
}());