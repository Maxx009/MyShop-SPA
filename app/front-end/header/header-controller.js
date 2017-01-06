(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('HeaderController', HeaderController);

    HeaderController.inject = [];

    function HeaderController() {
        var vm = this;
        vm.showSidebar = true;
        activate();

        function activate() {}
    }
}());