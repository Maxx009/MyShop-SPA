(function () {
    'use strict';
    angular.module('myShopApp', [])
        .controller('LoginController', LoginController);

    LoginController.$inject = ["$http"];

    function LoginController($http) {
        var vm = this;
        vm.login = login;

        function login() {
            $http.post("/api/login", {
                    userName: vm.username,
                    password: vm.password
                })
                .then(function (success) {
                    console.log(success);
                }, function (error) {
                    console.log(error);
                });
        }
    }
}());