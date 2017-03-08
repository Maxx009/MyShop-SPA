(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddCustomerController', AddCustomerController);

    AddCustomerController.$inject = [];

    function AddCustomerController() {
        var vm = this;
        vm.customer = {
            name: "",
            shopName: "",
            mobileNumber: "",
            address: ""
        };

        vm.resetCustomer = resetCustomer;
        vm.saveCustomer = saveCustomer;

        function saveCustomer() {

        }

        function resetCustomer() {
            vm.customer = {
                name: "",
                shopName: "",
                mobileNumber: "",
                address: ""
            };
        }

    }
}());