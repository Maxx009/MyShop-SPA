(function () {
    'use-strict'

    angular.module("myShopApp")
        .constant("messages", {
            successMsgs: {
                ITEM_ADDED: "Item Added Successfully",
                ITEM_UPDATED: "Item Updated Successfully",
                ITEM_DELETED: "Item Deleted Successfully"
            },
            errorMsgs: {
                ITEM_ADDED: "Failed to Add item",
                ITEM_UPDATED: "Failed to update item",
                ITEM_DELETED: "Failed to delete item"
            },
            generalMsgs:{
                
            }
        });
}());