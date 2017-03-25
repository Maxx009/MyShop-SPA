(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('EditBillController', EditBillController);

    EditBillController.$inject = ["$state", "dataAccessService", "billItem", "alertMessage", "messages"];

    function EditBillController($state, dataAccessService, billItem, alertMessage, messages) {
        var vm = this;
        vm.bill = billItem;

        vm.cancelUpdate = cancelUpdate;
        vm.updateBill = updateBill;
        vm.alertService = alertMessage;

        function updateBill() {
            dataAccessService.update("/api/put/update/bill", vm.bill)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_UPDATED);
                    $state.go("main.bills.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_UPDATED);
                });
        }

        function cancelUpdate() {
            $state.go("main.bills.list");
        }
        
    }
}());