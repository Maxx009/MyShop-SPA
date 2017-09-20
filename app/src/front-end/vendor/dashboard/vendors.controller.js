(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('DashboardVendorController', DashboardVendorController);

    DashboardVendorController.inject = ["dataAccessService"];

    function DashboardVendorController(dataAccessService) {
        var vm = this;

        activate();

        function activate() {
            dataAccessService.fetch("/api/get/count/vendor/")
                .then(function (count) {
                    vm.vendorCount = count;
                });
        }
    }
}());