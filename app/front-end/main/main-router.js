(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', '$urlMatcherFactoryProvider', DashboardRoutesConfiguration]);

    function DashboardRoutesConfiguration($stateProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main.dashboard', {
                url: "/Dashboard",
                templateUrl: "dashboard/dashboard-main.html",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "dashboard/dashboard-main-controller.js"
                        ]);
                    }]
                }
            })
            .state('main.customers', {
                url: "/Customers",
                templateUrl: "customer/dashboard-customer.html",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/router-customer.js"
                        ]);
                    }]
                }
            })
            .state('main.products', {
                url: "/Products",
                templateUrl: "product/dashboard-product.html",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "product/router-product.js"
                        ]);
                    }]
                }
            })
            .state('main.purchases', {
                url: "/Purchases",
                templateUrl: "customer/dashboard-customer.html"
            })
            .state('main.sales', {
                url: "/sales",
                templateUrl: "customer/dashboard-customer.html"
            });
    }
}());