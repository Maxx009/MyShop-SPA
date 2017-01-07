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
        var deferer = $q.defer();

        function error(error) {
            deferer.reject(error);
            console.error("In Data-Service Error-Callback :",error);            
        }

        function success(response) {
            deferer.resolve(response.data);
            console.info("In Data-Service Success-Callback :",response);
        }

        function get(url) {
            $http.get(url).then(success, error);
            return deferer.promise;
        }

        function post() {}

        function put() {}

        function remove() {}
    }
}());