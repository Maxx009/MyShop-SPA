(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
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
                            "main/navigation-controller.js",
                            "main/main-controller.js",
                            "main/main-router.js"
                        ]);
                    }]
                }
            })
            .state('login', {
                url: "/login",
                templateUrl: "login/login.html",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "login/login-controller.js"
                        ]);
                    }]
                }
            })
        $urlRouterProvider.otherwise('/main');
    }
}());