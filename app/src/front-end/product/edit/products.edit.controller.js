(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductEditController', ProductEditController);

    ProductEditController.$inject = ["$state","dataAccessService", "productItem", "alertMessage", "messages"];

    function ProductEditController($state,dataAccessService, productItem, alertMessage, messages) {
        var vm = this;
        vm.product = productItem;
        vm.updateProduct = updateProduct;
        vm.getVendors = getVendors;
        vm.cancelUpdate = cancelUpdate;
        vm.alertService = alertMessage;

        function cancelUpdate() {
            $state.go("main.products.list");
        }

        function updateProduct() {
            dataAccessService.update("/api/put/update/product", vm.product)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_UPDATED);
                    $state.go("main.products.list");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_UPDATED);                    
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