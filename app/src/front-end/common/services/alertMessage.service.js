(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('alertMessage', AlertMessage);

    AlertMessage.inject = [];

    function AlertMessage() {
        var service = {
            alerts:[],
            addAlert:addAlert,
            closeAlert:closeAlert
        };
        
        return service;
        
        function addAlert(type, message) {
            service.alerts.push({
                type: type,
                msg: message
            });
        }

        function closeAlert(index) {
            service.alerts.splice(index, 1);
        }
    }
})();