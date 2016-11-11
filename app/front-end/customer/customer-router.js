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
            templateUrl:"customer/customer-dashboard.html"
        })
        .state('customer.add',
        {
            url:"/Customer/Add",
            templateUrl:"add-customer.html"
        })
    }
})();