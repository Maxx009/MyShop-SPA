(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ProductsController', ProductsController);

    ProductsController.inject = ['dataAccessService'];

    function ProductsController(dataAccessService) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            dataAccessService.fetch().then(function (count) {
                vm.totalProducts = count;
            });
        }
    }
})();