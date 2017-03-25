(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListBillController', ListBillController);

    ListBillController.$inject = ["bills", "$location"];

    function ListBillController(bills, $location) {
        var vm = this;
        vm.editBill = editBill;

        activate();

        ////////////////

        function editBill(billId) {
            $location.path('/main/bills/edit/' +billId);
        }

        function activate() {
            vm.bills = bills;
        }
    }
}());