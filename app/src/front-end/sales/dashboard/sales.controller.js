(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('DashboardSalesController', DashboardSalesController);

    DashboardSalesController.inject = ["dataAccessService"];

    function DashboardSalesController(dataAccessService) {
        var vm = this;

        activate();

        function activate() {
            dataAccessService.fetch("/api/get/count/bill")
                .then(function (count) {
                    vm.billCount = count;
                });
        }
    }
}());