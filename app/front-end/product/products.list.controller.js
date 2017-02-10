(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['dataAccessService'];

    function ProductListController(dataAccessService) {
        var vm = this;  
        activate();

        function editProduct(id){
            //TODO : redirect to Edit Controller
        }

        function activate() {
            dataAccessService.fetch("/api/get/list/product")
            .then(function(products){
                vm.products = products;
            });
        }
    }
}());