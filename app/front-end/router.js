(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', CommonRoutesConfiguration]);

    function CommonRoutesConfiguration($stateProvider) {
        $stateProvider         
            .state('customers', {
                url: "/Customers",
                templateUrl: "customer/dashboard-customer.html",
                resolve:{
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/router-customer.js"
                        ]);
                    }]
                }
            })
            .state('products', {
                url: "/Products",
                templateUrl: "customer/dashboard-customer.html"
            })
            .state('purchases', {
                url: "/Purchases",
                templateUrl: "customer/dashboard-customer.html"
            })
            .state('sales', {
                url: "/sales",
                templateUrl: "customer/dashboard-customer.html"
            })
           
    }
}());