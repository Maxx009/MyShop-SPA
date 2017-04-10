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
        vm.billDetails.labourCharge = 0.0;
        vm.billDetails.lavy = 0.0;
        vm.billDetails.billItems = [
            new BillItem()
        ];

        vm.saveBill = saveBill;
        vm.resetBill = resetBill;
        vm.getCustomers = SalesService.getCustomers;
        vm.getProducts = SalesService.getProducts;
        vm.addNewWeightRow = SalesService.addNewWeightRow;
        vm.removeWeightRow = SalesService.removeWeightRow;
        vm.alertService = alertMessage;
        vm.addNewRow = addNewRow;
        vm.removeRow = removeRow;
        vm.calculate = calculate;

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
            vm.billDetails.billItems = [
                new BillItem()
            ];
            form.$setValidity();
            form.$setPristine();
            form.$setUntouched();
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
        }
        activate();

    }
}());