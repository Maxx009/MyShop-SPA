(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddBillController', AddBillController);

    AddBillController.$inject = ["$state", "dataAccessService","SalesService", "constants", "alertMessage", "messages"];

    function AddBillController($state, dataAccessService,SalesService, constants, alertMessage, messages) {
        function BillItem() {
            this.product = "";
            this.units = 1;
            this.weights = [0.0];
            this.rate = 0.0;

        }

        var vm = this;

        vm.billDetails = {};
        vm.billDetails.billDate = new Date();
        vm.billDetails.lavy = 0.0;
        vm.billDetails.labourCharge = 0.0;
        vm.billDetails.billItems = [
            new BillItem()
        ];

        vm.saveBill = saveBill;
        vm.resetBill = resetBill;
        vm.getCustomers = SalesService.getCustomers;
        vm.getProducts = SalesService.getProducts;
        vm.alertService = alertMessage;
        vm.addNewRow = addNewRow;
        vm.removeRow = removeRow;
        vm.calculate = calculate;
        vm.calibrateWeights = calibrateWeights;

        function saveBill() {
            dataAccessService.feed("/api/post/add/bill", vm.billDetails)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("main.sales.listBill");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function resetBill() {
            vm.billDetails.billItems = [
                new BillItem()
            ];
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

        function calibrateWeights(currentItem) {
            var array = new Array(Math.round(currentItem.units));
            for (var index = 0; index < array.length; index++) {
                array[index] = 0.0
            }
            currentItem.weights = array;
        }

        function activate(params) {
            calculate();
        }
        activate();

    }
}());