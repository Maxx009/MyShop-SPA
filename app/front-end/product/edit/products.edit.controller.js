(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductEditController', ProductEditController);

    ProductEditController.$inject = ["dataAccessService", "productItem", "alertMessage", "messages"];

    function ProductEditController(dataAccessService, productItem, alertMessage, messages) {
        var vm = this;
        vm.product = productItem;
        vm.updateProduct = updateProduct;
        vm.cancelUpdate = cancelUpdate;
        vm.alertService = alertMessage;

        function cancelUpdate() {
            $state.go("products.lists");
        }

        function updateProduct() {
            dataAccessService.update("/api/post/update/product", vm.product)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_UPDATED);
                    $state.go("products.lists");
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_UPDATED);                    
                });
        }
    }
}());