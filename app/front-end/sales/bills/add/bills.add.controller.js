(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddBillController', AddBillController);

    AddBillController.$inject = ["$state", "dataAccessService", "SalesService", "constants", "alertMessage", "messages"];

    function AddBillController($state, dataAccessService, SalesService, constants, alertMessage, messages) {
        var vm = this;

        vm.billDetails = SalesService.billDetails;
        vm.getCustomers = SalesService.getCustomers;
        vm.getProducts = SalesService.getProducts;
        vm.addNewWeightRow = SalesService.addNewWeightRow;
        vm.removeWeightRow = SalesService.removeWeightRow;
        vm.calculate = SalesService.calculateBill;
        vm.alertService = alertMessage;
        vm.addNewRow = SalesService.addNewRow;
        vm.removeRow = SalesService.removeRow;
        vm.saveBill = saveBill;
        vm.resetBill = resetBill;

        function saveBill(form) {
            dataAccessService.feed("/api/post/add/bill", vm.billDetails)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    resetBill(form);
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function resetBill(form) {
            vm.calculate(vm.billDetails);
            form.$setValidity();
            form.$setPristine();
            form.$setUntouched();
        }

        function activate(params) {
            vm.calculate(vm.billDetails);
        }
        activate();

    }
}());