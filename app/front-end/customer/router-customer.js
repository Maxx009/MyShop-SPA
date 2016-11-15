(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', CusrtomerRoutesConfiguration]);

    function CusrtomerRoutesConfiguration($stateProvider) {
        $stateProvider
            .state('customers.add', {
                url: "/Add",
                templateUrl: "customer/add-customer.html",
                controller: "AddCustomerController",
                controllerAs: "customer",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/add-customer-controller.js"
                        ]);
                    }]
                }
            })
            .state('customers.list', {
                url: "/List",
                templateUrl: "customer/list-customer.html",
                controller: "ListCustomerController",
                controllerAs: "customerList",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/list-customer-controller.js"
                        ]);
                    }]
                }
            })
    }
}());

