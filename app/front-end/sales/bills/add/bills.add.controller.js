(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddBillController', AddBillController);

    AddBillController.$inject = ["$state", "dataAccessService", "alertMessage", "messages"];

    function AddBillController($state, dataAccessService, alertMessage, messages) {
        function BillItem() {
            this.product = "";
            this.units = 1;
            this.quantity = 1;
            this.rate = 0.0;
            this.total = 0.0;
        }

        var vm = this;
        vm.quantities = [1, 5, 10, 25, 30, 50];

        vm.billDetails = {};
        vm.billDetails.billDate = new Date();
        vm.billDetails.billItems = [
            new BillItem()
        ];

        vm.resetBill = resetBill;
        vm.saveBill = saveBill;
        vm.getCustomers = getCustomers;
        vm.getProducts = getProducts;
        vm.alertService = alertMessage;
        vm.addNewRow = addNewRow;
        vm.removeRow = removeRow;
        vm.calculate = calculate;


        function saveBill() {
            dataAccessService.feed("/api/post/add/bill", vm.bill)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("bills.list");
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
                item.total = 0.0
                if (!isNaN(item.rate) && !isNaN(item.quantity) && !isNaN(item.units)) {
                    item.total = (item.rate * item.quantity) * item.units;
                    vm.billDetails.grandTotal += item.total;
                }
            }
        }

        function activate(params) {
            calculate();
        }
        activate();
        
    }
}());