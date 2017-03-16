(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListCustomerController', ListCustomerController);

    ListCustomerController.$inject = ["customers", "$location"];

    function ListCustomerController(customers, $location) {
        var vm = this;
        vm.editCustomer = editCustomer;

        activate();

        ////////////////

        function editCustomer(customerId) {
            $location.path('/main/customers/edit/' +customerId);
        }

        function activate() {
            vm.customers = customers;
        }
    }
}());