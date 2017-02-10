(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductEditController', ProductEditController);

    ProductEditController.$inject = ["dataAccessService"];

    function ProductEditController(dataAccessService) {
        var vm = this;
        vm.product = {
            brand: "",
            name: "",
            vendorName: ""
        };
        vm.updateProduct = updateProduct;  

        function updateProduct() {
            dataAccessService.update("/api/post/update/product", vm.product)
                .then(function (response) {
                    console.info(response);
                }, function (error) {
                    console.error(error);
                })
        }
    }
}());