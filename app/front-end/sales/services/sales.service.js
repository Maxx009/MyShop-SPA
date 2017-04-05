(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('SalesService', SalesService);

    SalesService.inject = ["dataAccessService", "constants"];

    function SalesService(dataAccessService, constants) {
        this.calculateBill = calculateBill;
        this.getCustomers = getCustomers;
        this.getProducts = getProducts;

        function calculateBill(billDetails) {
            billDetails.grandTotal = 0.0;
            for (var index = 0; index < billDetails.billItems.length; index++) {
                var item = billDetails.billItems[index];
                item.total = 0.0;
                if (!isNaN(item.rate) && !isNaN(item.units)) {
                    for (var weightIndex = 0; weightIndex < item.weights.length; weightIndex++) {
                        if (item.weights[weightIndex]) {
                            item.total += Math.round((item.rate * item.weights[weightIndex]) * 100) / 100;
                        }
                    }
                    billDetails.grandTotal += item.total;
                }
            }
            if (billDetails.grandTotal) {
                billDetails.lavy = constants.LAVY;
                billDetails.labourCharge = Math.round(((constants.LABOUR_CHARGE_PERCENTAGE / 100) * billDetails.grandTotal) * 100) / 100;
                billDetails.grandTotal += billDetails.lavy + billDetails.labourCharge;
            }
        }

        function getCustomers(val) {
            return dataAccessService.fetch("/api/get/find/customer/" + val)
                .then(function (customers) {
                    return customers;
                });
        }

        function getProducts(val) {
            return dataAccessService.fetch("/api/get/find/product/" + val)
                .then(function (products) {
                    return products;
                });
        }
    }
})();