(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ViewBillController', ViewBillController);

    ViewBillController.$inject = ["billItem", "$location","SalesService"];

    function ViewBillController(billItem, $location,SalesService) {
        var vm = this;
        vm.printBill = printBill;
        vm.cancelView = cancelView;

        activate();

        function printBill(billId) {
            
        }
        function cancelView() {
            $location.path("/main/sales/listBill");
        }

        function activate() {
            vm.billDetails = billItem;
            SalesService.calculateBill(vm.billDetails);
        }
    }
}());