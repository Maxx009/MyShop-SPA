(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('dataAccessService', DataAccessService);

    DataAccessService.$inject = ["$http"];

    function DataAccessService($http) {
        this.fetch = get;
        this.feed = post;
        this.update = post;
        this.remove = remove;

        ////////////////

        function get(url) {
            $
        }

        function post() {}

        function remove() {}
    }
}());