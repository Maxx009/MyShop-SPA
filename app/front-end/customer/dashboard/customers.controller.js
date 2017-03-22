(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('DashboardCustomerController', DashboardCustomerController);

    DashboardCustomerController.inject = ["dataAccessService"];

    function DashboardCustomerController(dataAccessService) {
        var vm = this;

        activate();

        function activate() {
            dataAccessService.fetch("/api/get/count/customer/")
                .then(function (count) {
                    vm.customerCount = count;
                });
        }
    }
}());