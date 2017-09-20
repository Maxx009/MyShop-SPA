(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main.customers', {
                url: "/Customers",
                views: {
                    '@main': {
                        templateUrl: "customers.html",
                        controller: "DashboardCustomerController",
                        controllerAs: "vm"
                    }
                },
                resolve: {                   
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }],
                }
            })
            .state('main.customers.add', {
                url: "/Add",
                templateUrl: "customers.add.html",
                controller: "AddCustomerController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }]
                }
            })
            .state('main.customers.edit', {
                url: "/Edit/:customerId",
                templateUrl: "customers.edit.html",
                controller: "EditCustomerController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }],
                    customerItem: ["dataAccessService", "$stateParams", function (dataAccessService, $stateParams) {
                        return dataAccessService.fetch("/api/get/single/customer/" + $stateParams.customerId)
                            .then(function (customer) {
                                return customer;
                            });
                    }]
                }
            })
            .state('main.customers.list', {
                url: "/List",
                templateUrl: "customers.list.html",
                controller: "ListCustomerController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }],
                    customers: ["dataAccessService", function (dataAccessService) {
                        return dataAccessService.fetch("/api/get/list/customer")
                            .then(function (customers) {
                                return customers;
                            });
                    }]
                }
            });
    }
}());