(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('EditBillController', EditBillController);

    EditBillController.$inject = ["$state", "dataAccessService","SalesService", "constants", "alertMessage", "messages","billItem"];

    function EditBillController($state, dataAccessService,SalesService, constants, alertMessage, messages,billItem) {
        function BillItem() {
            this.product = "";
            this.units = 1;
            this.weights = [0.0];
            this.rate = 0.0;
        }
        var vm = this;

        vm.billDetails = billItem;

        vm.updateBill = updateBill;
        vm.cancelUpdate = cancelUpdate;
        vm.getCustomers = SalesService.getCustomers;
        vm.getProducts = SalesService.getProducts;
        vm.addNewWeightRow = SalesService.addNewWeightRow;
        vm.removeWeightRow = SalesService.removeWeightRow;
        vm.alertService = alertMessage;
        vm.addNewRow = addNewRow;
        vm.removeRow = removeRow;
        vm.calculate = calculate;

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

        function addNewRow() {
            vm.billDetails.billItems.push(new BillItem());
        }

        function removeRow(index) {
            vm.billDetails.billItems.splice(index, 1);
        }

        function calculate() {
            SalesService.calculateBill(vm.billDetails);
        }

        function activate(params) {
            calculate();
            vm.billDetails.billDate = new Date(vm.billDetails.billDate);
        }
        activate();

    }
}());