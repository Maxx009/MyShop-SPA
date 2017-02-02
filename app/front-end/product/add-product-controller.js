(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddProductController', AddProductController);

    AddProductController.$inject = ["dataAccessService"];

    function AddProductController(dataAccessService) {
        var vm = this;
        vm.product = {
            brand: "",
            name: "",
            vendorName: ""
        };
        vm.saveProduct = saveProduct;

        activate();

        ////////////////

        function activate() {}

        function saveProduct() {
            dataAccessService.feed("/api/post/product", vm.product)
                .then(function (response) {
                    console.info(response);
                }, function (error) {
                    console.error(error);
                })
        }
    }
}());