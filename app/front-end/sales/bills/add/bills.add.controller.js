(function () {
        'use strict';

        angular
            .module('myShopApp')
            .controller('AddBillController', AddBillController);

        AddBillController.$inject = ["$state", "dataAccessService", "constants", "alertMessage", "messages"];

        function AddBillController($state, dataAccessService, constants, alertMessage, messages) {
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
            vm.getCustomers = getCustomers;
            vm.getProducts = getProducts;
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

            function getCustomers(val) {
                return dataAccessService.fetch("/api/get/find/customer/" + val)
                    .then(function (customers) {
                        return customers;
                    });
            }

            function getProducts(val) {
                return dataAccessService.fetch("/api/get/find/product/" + val)
                    .then(function (products) {
                        return products;
                    });
            }

            function addNewRow() {
                vm.billDetails.billItems.push(new BillItem());
            }

            function removeRow(index) {
                vm.billDetails.billItems.splice(index, 1);
            }

            function calculate() {
                vm.billDetails.grandTotal = 0.0;
                for (var index = 0; index < vm.billDetails.billItems.length; index++) {
                    var item = vm.billDetails.billItems[index];
                    item.total = 0.0;
                    if (!isNaN(item.rate) && !isNaN(item.units)) {
                        for (var weightIndex = 0; weightIndex < item.weights.length; weightIndex++) {
                            if (item.weights[weightIndex]) {
                                item.total += Math.round((item.rate * item.weights[weightIndex]) * 100) / 100;
                            }
                        }
                        vm.billDetails.grandTotal += item.total;
                    }
                }
                vm.billDetails.lavy = constants.LAVY;
                if (vm.billDetails.grandTotal) {
                    vm.billDetails.labourCharge = Math.round(((constants.LABOUR_CHARGE_PERCENTAGE / vm.billDetails.grandTotal) * 100) * 100) / 100;
            }
            vm.billDetails.grandTotal += vm.billDetails.lavy + vm.billDetails.labourCharge;
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