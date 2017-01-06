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
                        controller: "MainController"
                    },
                    'side-bar@main': {
                        templateUrl: "side-bar/sidebar.html",
                        controller: "SideBarController",
                        controllerAs: "sideBar"
                    },
                    'header@main':{
                        templateUrl: "header/header.html",
                        controller:"headerController",
                        controllerAs:"header"
                    }
                },
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "/common/directives/header-bread-crum-directive.js",
                            "side-bar/sidebar-controller.js",
                            "header/header-controller.js",
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