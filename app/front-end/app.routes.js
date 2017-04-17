(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', AppRoutesConfiguration]);

    function AppRoutesConfiguration($httpProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    '': {
                        templateUrl: "main.html"
                    },
                    'navigation@main': {
                        templateUrl: "navigation.html",
                        controller: "NavigationController",
                        controllerAs: "vm"
                    }
                }
            })
            .state('main.dashboard', {
                url: "/Dashboard",
                views: {
                    '@main': {
                        templateUrl: "dashboard.html"
                    }
                }
            })
            .state('login', {
                url: "/login",
                templateUrl: "login.html",
                controller: "LoginController",
                controllerAs: "vm"
            });
        $urlRouterProvider.otherwise('/main/dashboard');
        $httpProvider.interceptors.push('APIInterceptorService');
       
    }
}());