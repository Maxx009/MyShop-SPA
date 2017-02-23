(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main.products', {
                url: "/Products",
                views: {
                    '@main': {
                        templateUrl: "products.html"    
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        $ocLazyLoad.load("/bundle/js/products.min.js");
                    }]
                }
            })
            .state('main.products.add', {
                url: "/Add",
                templateUrl: "products.add.html",
                controller: "AddProductController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/products.min.js");
                    }]
                }
            })
            .state('main.products.edit', {
                url: "/Edit/:productId",
                templateUrl: "products.edit.html",
                controller: "ProductEditController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/products.min.js");
                    }],
                    productItem: ["dataAccessService", "$stateParams", function (dataAccessService, $stateParams) {
                        return dataAccessService.fetch("/api/get/single/product/" + $stateParams.productId)
                            .then(function (product) {
                                return product;
                            });
                    }]
                }
            })
            .state('main.products.list', {
                url: "/List",
                templateUrl: "products.list.html",
                controller: "ProductListController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/products.min.js");
                    }]
                }
            })

    }
}());