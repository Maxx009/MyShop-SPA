(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListVendorController', ListVendorController);

    ListVendorController.$inject = ["vendors", "$location"];

    function ListVendorController(vendors, $location) {
        var vm = this;
        vm.editVendor = editVendor;

        activate();

        ////////////////

        function editVendor(vendorId) {
            $location.path('/main/vendors/edit/' +vendorId);
        }

        function activate() {
            vm.vendors = vendors;
        }
    }
}());