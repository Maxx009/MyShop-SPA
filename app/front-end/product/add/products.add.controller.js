(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddProductController', AddProductController);

    AddProductController.$inject = ["$state", "dataAccessService", "alertMessage", "messages"];

    function AddProductController($state, dataAccessService, alertMessage, messages) {
        var vm = this;
        vm.product = {
            brand: "",
            name: "",
            vendorName: ""
        };
        vm.getVendors = getVendors;
        vm.saveProduct = saveProduct;
        vm.resetProduct = resetProduct;
        vm.alertService = alertMessage;

        function resetProduct(form) {
            vm.product = {
                brand: "",
                name: "",
                vendorName: ""
            };
            form.$setValidity();
            form.$setPristine();
            form.$setUntouched();
        }

        function saveProduct(form) {
            dataAccessService.feed("/api/post/add/product", vm.product)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    resetProduct(form);
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED);
                });
        }

        function getVendors(val) {
            return dataAccessService.fetch("/api/get/find/vendor/" + val)
                .then(function (vendors) {
                    return vendors;
                });
        }
    }
}());