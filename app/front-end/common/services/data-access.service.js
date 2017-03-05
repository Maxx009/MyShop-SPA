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

        function get(url) {
            deferrer = $q.defer();
            $http.get(url, {
                cache: false
            }).then(success, error);
            return deferrer.promise;
        }

        function post(url, data) {
            var deferrer = $q.defer();
            $http.post(url, {
                payLoad: data
            }).then(function success(response) {
                deferrer.resolve(response.data);
                console.info("In Data-Service Success-Callback :", response);
            }, function error(error) {
                deferrer.reject(error);
                console.error("In Data-Service Error-Callback :", error);
            });
            return deferrer.promise;
        }

        function put() {}

        function remove() {}
    }
}());