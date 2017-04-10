(function () {
    'use-strict'

    angular.module("myShopApp")
        .constant("values", {
            LAVY_LESS_25:2.0,
            LAVY_25_50:2.5,
            LAVY_50_75:5.0,
            LAVY_75_100:7.5,
            LAVY_MORE_100:10.0,
        });
}());