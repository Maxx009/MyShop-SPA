(function() {
'use strict';

    angular
        .module('myShopApp')
        .service('ProductValidationService', ProductValidationService);

    ProductValidationService.inject = ['dependency1'];
    function ProductValidationService(dependency1) {
        this.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { }
        }
})();