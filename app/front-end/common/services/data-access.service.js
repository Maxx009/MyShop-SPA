(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('dataAccessService', DataAccessService);

    DataAccessService.$inject = ["$http", "$q"];

    function DataAccessService($http, $q) {
        this.fetch = get;
        this.feed = post;
        this.update = put;
        this.remove = remove;
        ////////////////
        var deferrer;

        function error(error) {
            deferrer.reject(error);
            console.error("In Data-Service Error-Callback :", error);
        }

        function success(response) {
            deferrer.resolve(response.data);
            console.info("In Data-Service Success-Callback :", response);
        }

        function response(response) {
            if (response.status === 200) {
                success(response);
            } else {
                error(response.data);
            }
        }

        function get(url) {
            deferrer = $q.defer();
            $http.get(url, {
                cache: false
            }).then(response);
            return deferrer.promise;
        }

        function post(url, data) {
            deferrer = $q.defer();
            $http.post(url, {
                payLoad: data
            }).then(response);
            return deferrer.promise;
        }

        function put() {
            deferrer = $q.defer();
            $http.put(url, {
                payLoad: data
            }).then(response);
            return deferrer.promise;
        }

        function remove() {}
    }
}());