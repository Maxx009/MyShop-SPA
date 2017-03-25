(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddBillController', AddBillController);

    AddBillController.$inject = ["$state", "dataAccessService", "alertMessage", "messages"];

    function AddBillController($state, dataAccessService, alertMessage, messages) {
        var vm = this;
        vm.bill = {
            name: "",
            mobileNumber: "",
            address: ""
        };
        vm.today = new Date();
        vm.resetBill = resetBill;
        vm.saveBill = saveBill;
        vm.getCustomers = getCustomers;
        vm.alertService = alertMessage;

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
            vm.bill = {
                name: "",
                mobileNumber: "",
                address: ""
            };
        }

        function getCustomers(val) {
            return dataAccessService.fetch("/api/get/find/customer/" + val)
                .then(function (customers) {
                    return customers;
                });
        }
    }
}());