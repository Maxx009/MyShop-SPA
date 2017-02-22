(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        let commonScripts = [];
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    '': {
                        templateUrl: "main/main.html"
                    },
                    'navigation@main': {
                        templateUrl: "main/navigation.html",
                        controller: "NavigationController",
                        controllerAs: "vm"
                    }
                }
            })
            .state('main.dashboard', {
                url: "/Dashboard",
                views: {
                    '@main': {
                        templateUrl: "dashboard/dashboard.html",
                        controller: "DashboardController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "dashboard/dashboard.controller.js"
                        ]);
                    }]
                }
            })
            .state('main.customers', {
                url: "/Customers",
                views: {
                    '@main': {
                        templateUrl: "customer/customers.html",
                        controller: "DashboardCustomerController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/customers.controller.js"
                        ]);
                    }]
                }
            })
            .state('main.customers.add', {
                url: "/Add",
                templateUrl: "customer/customers.add.html",
                controller: "AddCustomerController",
                controllerAs: "customer",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/customers.add.controller.js"
                        ]);
                    }]
                }
            })
            .state('main.customers.list', {
                url: "/List",
                templateUrl: "customer/customers.list.html",
                controller: "ListCustomerController",
                controllerAs: "customerList",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load(commonScripts.concat([
                            "customer/customers.list.controller.js"
                        ]));
                    }]
                }
            })
            .state('main.products', {
                url: "/Products",
                views: {
                    '@main': {
                        templateUrl: "products.html",
                        controller: "DashboardProductController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        $ocLazyLoad.load(commonScripts.concat(["/bundle/js/products.min.js"]));
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
                        return $ocLazyLoad.load(commonScripts.concat(["/bundle/js/products.min.js"]));
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
                        return $ocLazyLoad.load(commonScripts.concat(["/bundle/js/products.min.js"]));
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
                        return $ocLazyLoad.load(commonScripts.concat(["bundle/js/products.min.js"]));
                    }]
                }
            })
            // .state('main.purchases', {
            //     url: "/Purchases",
            //     templateUrl: "customer/dashboard-customer.html"
            // })
            // .state('main.sales', {
            //     url: "/sales",
            //     templateUrl: "customer/dashboard-customer.html"
            // });
            .state('login', {
                url: "/login",
                templateUrl: "login/login.html",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "login/login.controller.js"
                        ]);
                    }]
                }
            })
        $urlRouterProvider.otherwise('/main/dashboard');
        $httpProvider.interceptors.push('APIInterceptorService');
    }
}());