(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductEditController', ProductEditController);

    ProductEditController.$inject = ["dataAccessService", "productItem"];

    function ProductEditController(dataAccessService, productItem) {
        var vm = this;
        vm.product = productItem;
        vm.updateProduct = updateProduct;

        function updateProduct() {
            dataAccessService.update("/api/post/update/product", vm.product)
                .then(function (response) {
                     $state.go("products.lists");
                }, function (error) {
                    console.error(error);
                })
        }
    }
}());