(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('EditCustomerController', EditCustomerController);

    EditCustomerController.$inject = ["$state", "dataAccessService", "customerItem", "alertMessage", "messages"];

    function EditCustomerController($state, dataAccessService, customerItem, alertMessage, messages) {
        var vm = this;
        vm.customer = customerItem;

        vm.cancelUpdate = cancelUpdate;
        vm.updateCustomer = updateCustomer;
        vm.alertService = alertMessage;

        function updateCustomer() {
            dataAccessService.update("/api/put/update/customer", vm.customer)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_UPDATED);
                    $state.go("main.customers.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_UPDATED);
                });
        }

        function cancelUpdate() {
            $state.go("main.customers.list");
        }
        
    }
}());