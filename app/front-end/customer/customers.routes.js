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
                    }]
                }
            })
            .state('main.customers.add', {
                url: "/Add",
                templateUrl: "customers.add.html",
                controller: "AddCustomerController",
                controllerAs: "customer",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }]
                }
            })
            .state('main.customers.list', {
                url: "/List",
                templateUrl: "customers.list.html",
                controller: "ListCustomerController",
                controllerAs: "customerList",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/customer.min.js");
                    }]
                }
            });
    }
}());