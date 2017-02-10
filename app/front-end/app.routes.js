(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        let commonScripts = ["common/services/data-access.service.js"];
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    '': {
                        templateUrl: "main/main.html",
                        controller: "MainController",
                        controllerAs: "vm"
                    },
                    'navigation@main': {
                        templateUrl: "main/navigation.html",
                        controller: "NavigationController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "/lib/ui-bootstrap/src/collapse/collapse.js",
                            "/common/directives/header-bread-crum-directive.js",
                            "main/navigation.controller.js",
                            "main/main.controller.js"
                        ]);
                    }]
                }
            })
            .state('main.dashboard', {
                url: "/Dashboard",
                views: {
                    '@main': {
                        templateUrl: "dashboard/dashboard.html",
                        controller: "MainDashboardController",
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
                        templateUrl: "product/products.html",
                        controller: "DashboardProductController",
                        controllerAs: "vm"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "product/products.controller.js"
                        ]);
                    }]
                }
            })
            .state('main.products.add', {
                url: "/Add",
                templateUrl: "product/products.add.html",
                controller: "AddProductController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load(commonScripts.concat([
                            "lib/angular-messages/angular-messages.min.js",
                            "product/products.add.controller.js"
                        ]));
                    }]
                }
            })
            .state('main.products.add', {
                url: "/Edit",
                templateUrl: "product/products.edit.html",
                controller: "ProductEditController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load(commonScripts.concat([
                            "lib/angular-messages/angular-messages.min.js",
                            "product/products.edit.controller.js"
                        ]));
                    }]
                }
            })
            .state('main.products.list', {
                url: "/List",
                templateUrl: "product/products.list.html",
                controller: "ProductListController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load(commonScripts.concat([
                            "product/products.list.controller.js"
                        ]));
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
    }
}());