(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('SalesService', SalesService);

    SalesService.inject = ["dataAccessService", "constants"];

    function SalesService(dataAccessService, constants) {
        function BillItem() {
            this.product = "";
            this.units = 1;
            this.weights = [0.0];
            this.rate = 0.0;
            this.brand = "";
        }

        this.billDetails = {
            billDate: new Date(),
            labourCharge: 0.0,
            transportCharge: 0.0,
            tax: 0.0,
            lavy: 0.0,
            subTotal: 0.0,
            billItems: [
                new BillItem()
            ],
        };
        this.calculateBill = calculateBill;
        this.getCustomers = getCustomers;
        this.getProducts = getProducts;
        this.calculateLavy = calculateLavy;
        this.removeWeightRow = removeWeightRow;
        this.addNewWeightRow = addNewWeightRow;
        this.addNewRow = addNewRow;
        this.removeRow = removeRow;

        function addNewRow(billDetails) {
            billDetails.billItems.push(new BillItem());
        }

        function removeRow(index,billDetails) {
            billDetails.billItems.splice(index, 1);
        }

        function calculateLavy(billDetails) {
            var totalWeight = 0.0;
            for (var index = 0; index < billDetails.weights.length; index++) {
                totalWeight += billDetails.weights[index];
            }
            //Calculate from configured number
            if (totalWeight < 25) {
                billDetails.lavy = "";
            } else if (condition) {

            } else if (condition) {

            } else if (condition) {

            }
        }

        function addNewWeightRow(currentItem) {
            currentItem.weights.push(0.0);
        }

        function removeWeightRow(currentItem, index) {
            currentItem.weights.splice(index, 1);
        }

        function calculateBill(billDetails) {
            billDetails.grandTotal = 0.0;
            billDetails.subTotal = 0.0;
            for (var index = 0; index < billDetails.billItems.length; index++) {
                var item = billDetails.billItems[index];
                item.total = 0.0;
                if (!isNaN(item.rate) && !isNaN(item.units)) {
                    for (var weightIndex = 0; weightIndex < item.weights.length; weightIndex++) {
                        if (item.weights[weightIndex]) {
                            item.total += Math.round((item.rate * item.weights[weightIndex]) * 100) / 100;
                        }
                    }
                    billDetails.subTotal += item.total;
                }
            }
            if (billDetails.subTotal) {
                billDetails.lavy = constants.LAVY;
                billDetails.labourCharge = Math.round(((constants.LABOUR_CHARGE_PERCENTAGE / 100) * billDetails.subTotal) * 100) / 100;
                billDetails.grandTotal += Math.round((billDetails.lavy + billDetails.labourCharge + billDetails.subTotal) * 100) / 100;
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