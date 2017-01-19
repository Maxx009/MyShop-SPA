(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', ProductRoutesConfiguration]);

    function ProductRoutesConfiguration($stateProvider) {
        $stateProvider
            .state('main.products.add', {
                url: "/Add",
                templateUrl: "product/add-product.html",
                controller: "AddCustomerController",
                controllerAs: "product",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "product/add-product-controller.js"
                        ]);
                    }]
                }
            })
            .state('main.products.list', {
                url: "/List",
                templateUrl: "product/list-product.html",
                controller: "ListCustomerController",
                controllerAs: "productList",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "common/services/data-access-service.js",
                            "product/list-product-controller.js"
                        ]);
                    }]
                }
            })
    }
}());

