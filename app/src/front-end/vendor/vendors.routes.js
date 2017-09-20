(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main.vendors', {
                url: "/Vendors",
                views: {
                    '@main': {
                        templateUrl: "vendors.html",
                        controller: "DashboardVendorController",
                        controllerAs: "vm"
                    }
                },
                resolve: {                   
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/vendor.min.js");
                    }],
                }
            })
            .state('main.vendors.add', {
                url: "/Add",
                templateUrl: "vendors.add.html",
                controller: "AddVendorController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/vendor.min.js");
                    }]
                }
            })
            .state('main.vendors.edit', {
                url: "/Edit/:vendorId",
                templateUrl: "vendors.edit.html",
                controller: "EditVendorController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/vendor.min.js");
                    }],
                    vendorItem: ["dataAccessService", "$stateParams", function (dataAccessService, $stateParams) {
                        return dataAccessService.fetch("/api/get/single/vendor/" + $stateParams.vendorId)
                            .then(function (vendor) {
                                return vendor;
                            });
                    }]
                }
            })
            .state('main.vendors.list', {
                url: "/List",
                templateUrl: "vendors.list.html",
                controller: "ListVendorController",
                controllerAs: "vm",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("/bundle/js/vendor.min.js");
                    }],
                    vendors: ["dataAccessService", function (dataAccessService) {
                        return dataAccessService.fetch("/api/get/list/vendor")
                            .then(function (vendors) {
                                return vendors;
                            });
                    }]
                }
            });
    }
}());