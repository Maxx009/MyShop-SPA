(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddCustomerController', AddCustomerController);

    AddCustomerController.$inject = ["dataAccessService", "alertMessage", "messages"];

    function AddCustomerController(dataAccessService, alertMessage, messages) {
        var vm = this;
        vm.customer = {
            name: "",
            mobileNumber: "",
            landLineNumber: {
                stdCode:"",
                number:""
            },
            address: ""
        };

        vm.resetCustomer = resetCustomer;
        vm.saveCustomer = saveCustomer;
        vm.alertService = alertMessage;

        function saveCustomer(form) {
            dataAccessService.feed("/api/post/add/customer", vm.customer)
                .then(function (response) {
                    vm.alertService.addAlert('success', messages.successMsgs.ITEM_ADDED);
                    resetCustomer(form);
                    // data.customerCount = parseInt(data.customerCount,10)+1;
                }, function (error) {
                    vm.alertService.addAlert('danger', messages.errorMsgs.ITEM_ADDED +" Because "+ error.errorMessage);
                });
        }

        function resetCustomer(form) {
            vm.customer = {
                name: "",
                mobileNumber: "",
                address: ""
            };
            form.$setValidity();
            form.$setPristine();
            form.$setUntouched();
        }

    }
}());