(function () {
    'use strict';

    angular
        .module('myShopApp')
        .service('alertMessage', AlertMessage);

    AlertMessage.inject = [];

    function AlertMessage() {
        this.alerts = [];
        this.addAlert = addAlert;
        this.closeAlert = closeAlert;

        function addAlert(type, message) {
            this.alerts.push({
                type: type,
                msg: message
            });
        }

        function closeAlert(index) {
            this.alerts.splice(index, 1);
        }
    }
})();