(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('ListCustomerController', ListCustomerController);

    ListCustomerController.$inject = [];

    function ListCustomerController() {
        var vm = this;
        vm.customers = [];

        activate();

        ////////////////

        function activate() {
            vm.customers = [{
                name: "Sudarshan Jhawar",
                mobileNumber: 9021528891,
                shopName: "Massive Dynamics",
                address: "Plot No. 6, Chanayanagar Kinetic Chowk,Ahmednagar"
            },{
                name: "Sudarshan Jhawar",
                mobileNumber: 9021528891,
                shopName: "Massive Dynamics",
                address: "Plot No. 6, Chanayanagar Kinetic Chowk,Ahmednagar"
            },{
                name: "Sudarshan Jhawar",
                mobileNumber: 9021528891,
                shopName: "0Massive Dynamics",
                address: "Plot No. 6, Chanayanagar Kinetic Chowk,Ahmednagar"
            },{
                name: "Sudarshan Jhawar",
                mobileNumber: 9021528891,
                shopName: "0Massive Dynamics",
                address: "Plot No. 6, Chanayanagar Kinetic Chowk,Ahmednagar"
            },{
                name: "Sudarshan Jhawar",
                mobileNumber: 9021528891,
                shopName: "0Massive Dynamics",
                address: "Plot No. 6, Chanayanagar Kinetic Chowk,Ahmednagar"
            }]
        }
    }
}());