(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('EditBillController', EditBillController);

    EditBillController.$inject = ["$state", "dataAccessService", "SalesService", "constants", "alertMessage", "messages", "billItem"];

    function EditBillController($state, dataAccessService, SalesService, constants, alertMessage, messages, billItem) {
        var vm = this;

        vm.billDetails = billItem;
        vm.getCustomers = SalesService.getCustomers;
        vm.getProducts = SalesService.getProducts;
        vm.addNewWeightRow = SalesService.addNewWeightRow;
        vm.removeWeightRow = SalesService.removeWeightRow;
        vm.calculate = SalesService.calculateBill;
        vm.alertService = alertMessage;
        vm.addNewRow = SalesService.addNewRow;
        vm.removeRow = SalesService.removeRow;
        vm.updateBill = updateBill;
        vm.cancelUpdate = cancelUpdate;

        function updateBill() {
            dataAccessService.update("/api/put/update/bill", vm.billDetails)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("main.sales.listBill");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function cancelUpdate() {
            $state.go("main.sales.listBill");
        }

        function activate(params) {
            vm.calculate(vm.billDetails);
            vm.billDetails.billDate = new Date(vm.billDetails.billDate);
        }
        activate();
    }
}());