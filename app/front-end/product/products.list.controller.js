(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['$location', 'dataAccessService'];

    function ProductListController($location, dataAccessService) {
        var vm = this;
        activate();

        vm.editProduct = editProduct;

        function editProduct(id) {
            //TODO : redirect to Edit Controller
            $location.path('/main/products/edit/' + id);
        }

        function activate() {
            dataAccessService.fetch("/api/get/list/product")
                .then(function (products) {
                    vm.products = products;
                });
        }
    }
}());