(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddProductController', AddProductController);

    AddProductController.$inject = ["$state", "dataAccessService"];

    function AddProductController($state, dataAccessService) {
        var vm = this;
        vm.product = {
            brand: "",
            name: "",
            vendorName: ""
        };
        vm.saveProduct = saveProduct;

        function saveProduct() {
            dataAccessService.feed("/api/post/add/product", vm.product)
                .then(function (response) {
                    $state.go("main.products.list");
                }, function (error) {
                    console.error(error);
                })
        }
    }
}());