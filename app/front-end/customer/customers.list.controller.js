(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListCustomerController', ListCustomerController);

    ListCustomerController.$inject = ['dataAccessService'];

    function ListCustomerController(dataAccessService) {
        var vm = this;  
        activate();

        ////////////////

        function activate() {
            dataAccessService.fetch("/api/get/customers")
            .then(function(customers){
                vm.customers = customers;
            });
        }
    }
}());