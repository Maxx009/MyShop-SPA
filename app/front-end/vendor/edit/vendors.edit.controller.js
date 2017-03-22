(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('EditVendorController', EditVendorController);

    EditVendorController.$inject = ["$state", "dataAccessService", "vendorItem", "alertMessage", "messages"];

    function EditVendorController($state, dataAccessService, vendorItem, alertMessage, messages) {
        var vm = this;
        vm.vendor = vendorItem;

        vm.cancelUpdate = cancelUpdate;
        vm.updateVendor = updateVendor;
        vm.alertService = alertMessage;

        function updateVendor() {
            dataAccessService.update("/api/put/update/vendor", vm.vendor)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_UPDATED);
                    $state.go("main.vendors.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_UPDATED);
                });
        }

        function cancelUpdate() {
            $state.go("main.vendors.list");
        }
        
    }
}());