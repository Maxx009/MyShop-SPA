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

        function resetProduct() {
            vm.product = {
                brand: "",
                name: "",
                vendorName: ""
            };
        }

        function saveProduct() {
            dataAccessService.feed("/api/post/add/product", vm.product)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    $state.go("products.lists");
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