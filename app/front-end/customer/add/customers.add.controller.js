(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddCustomerController', AddCustomerController);

    AddCustomerController.$inject = ["$state", "dataAccessService", "alertMessage", "messages"];

    function AddCustomerController($state, dataAccessService, alertMessage, messages) {
        var vm = this;
        vm.customer = {
            name: "",
            shopName: "",
            mobileNumber: "",
            address: ""
        };

        vm.resetCustomer = resetCustomer;
        vm.saveCustomer = saveCustomer;
        vm.alertService = alertMessage;

        function saveCustomer() {
            dataAccessService.feed("/api/post/add/customer", vm.customer)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("customers.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function resetCustomer() {
            vm.customer = {
                name: "",
                shopName: "",
                mobileNumber: "",
                address: ""
            };
        }

    }
}());