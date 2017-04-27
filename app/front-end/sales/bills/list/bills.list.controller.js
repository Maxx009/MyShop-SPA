(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListBillController', ListBillController);

    ListBillController.$inject = ["bills", "$location"];

    function ListBillController(bills, $location) {
        var vm = this;
        vm.editBill = editBill;
        vm.viewBill = viewBill;

        activate();

        function editBill(billId) {
            $location.path('/main/sales/editbill/' + billId);
        }

        function viewBill(billId) {
            $location.path('/main/sales/viewbill/' + billId);
        }

        function activate() {
            vm.bills = bills;
        }
    }
}());