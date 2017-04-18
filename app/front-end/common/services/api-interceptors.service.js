(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('APIInterceptorService', APIInterceptorService);

    APIInterceptorService.$inject = [];

    function APIInterceptorService() {
        this.request = request;
        this.response = response;
        this.requestError = requestError;
        this.responseError = responseError;

        ////////////////

        function request(config) {
            //TODO : Auth service to get authorization
            return config;
        }

        function response(config) {
            return config;
        }

        function requestError(response) {
            return response;
        }

        function responseError(response) {           
            return response;
        }
    }
}());