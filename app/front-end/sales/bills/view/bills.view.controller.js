(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ViewBillController', ViewBillController);

    ViewBillController.$inject = ["bills", "$location"];

    function ViewBillController(bills, $location) {
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