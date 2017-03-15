(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ["$location", "products"];

    function ProductListController($location,products) {
        var vm = this;
        activate();

        vm.editProduct = editProduct;

        function editProduct(id) {
            //TODO : redirect to Edit Controller
            $location.path('/main/products/edit/' + id);
        }

        function activate() {
            vm.products = products;
        }
    }
}());