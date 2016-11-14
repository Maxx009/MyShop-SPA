(function() {
    'use strict';

    angular.module('myShopApp')
    .config(['$stateProvider',CusrtomerRoutesConfiguration]);
    function CusrtomerRoutesConfiguration($stateProvider)
    {
        $stateProvider
        .state('customer',
        {
            url:"/Customer",
            templateUrl:"customer/dashboard.html"
        })
        .state('customer.add',
        {
            url:"/Add",
            templateUrl:"customer/add.html",
            controller:"AddCustomerController",
            controllerAs:"customer",
            resolve:{
                loadJS:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        "customer/add-controller.js"
                    ]);
                }]
            }
        })
    }
})();