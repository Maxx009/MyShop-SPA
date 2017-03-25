(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main.sales', {
                url: "/Sales",
                views: {
                    '@main': {
                        templateUrl: "sales.html",
                        controller: "DashboardSalesController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/sales.min.js");
                    }],
                }
            })
            .state('main.sales.addBill', {
                url: "/AddBill",
                templateUrl: "bills.add.html",
                controller: "AddBillController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/sales.min.js");
                    }]
                }
            })
            .state('main.sales.editBill', {
                url: "/EditBill/:billId",
                templateUrl: "bills.edit.html",
                controller: "EditBillController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/sales.min.js");
                    }],
                    billItem: ["dataAccessService", "$stateParams", function (dataAccessService, $stateParams) {
                        return dataAccessService.fetch("/api/get/single/bill/" + $stateParams.billId)
                            .then(function (bill) {
                                return bill;
                            });
                    }]
                }
            })
            .state('main.sales.listBill', {
                url: "/ListBill",
                templateUrl: "bills.list.html",
                controller: "ListBillController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/sales.min.js");
                    }],
                    bills: ["dataAccessService", function (dataAccessService) {
                        return dataAccessService.fetch("/api/get/list/bill")
                            .then(function (bills) {
                                return bills;
                            });
                    }]
                }
            })
            .state('main.sales.viewBill', {
                url: "/ViewBill",
                templateUrl: "bills.viewss.html",
                controller: "ViewBillController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/sales.min.js");
                    }],
                    billItem: ["dataAccessService", "$stateParams", function (dataAccessService, $stateParams) {
                        return dataAccessService.fetch("/api/get/single/bill/" + $stateParams.billId)
                            .then(function (bill) {
                                return bill;
                            });
                    }]
                }
            });
    }
}());