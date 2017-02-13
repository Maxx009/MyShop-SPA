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
        var deferer;

        function error(error) {
            deferer.reject(error);
            console.error("In Data-Service Error-Callback :",error);            
        }

        function success(response) {
            deferer.resolve(response.data);
            console.info("In Data-Service Success-Callback :",response);
        }

        function get(url) {
            deferer = $q.defer();
            $http.get(url,{cache:false}).then(success, error);
            return deferer.promise;
        }

        function post(url,data) {
            deferer = $q.defer();
            $http.post(url,{payLoad:data}).then(success,error);
            return deferer.promise;
        }

        function put() {}

        function remove() {}
    }
}());