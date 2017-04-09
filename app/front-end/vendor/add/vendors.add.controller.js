(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddVendorController', AddVendorController);

    AddVendorController.$inject = ["$state", "dataAccessService", "alertMessage", "messages"];

    function AddVendorController($state, dataAccessService, alertMessage, messages) {
        var vm = this;
        vm.vendor = {
            name: "",
            mobileNumber: "",
            address: ""
        };

        vm.resetVendor = resetVendor;
        vm.saveVendor = saveVendor;
        vm.alertService = alertMessage;

        function saveVendor() {
            dataAccessService.feed("/api/post/add/vendor", vm.vendor)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("vendors.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function resetVendor(form) {
            vm.vendor = {
                name: "",
                mobileNumber: "",
                address: ""
            };
            form.$setValidity();
            form.$setPristine();
            form.$setUntouched();
        }

    }
}());