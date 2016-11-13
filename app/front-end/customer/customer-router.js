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
            templateUrl:"customer/add.html"
        })
    }
})();