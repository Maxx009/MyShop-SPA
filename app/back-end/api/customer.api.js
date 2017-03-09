var dataAccess = require('../services/data-access');
var ObjectId = require('mongodb').ObjectId;

module.exports = function (app) {
    app.get('/api/get/list/customer', function (req, res, next) {
        dataAccess.getDataFromCollection("CustomerMaster", {})
            .then(function (data) {
                console.log(data);
                data.toArray(function (error, docs) {
                    if (error) {
                        res.status(500).json(error);
                        return;
                    }
                    res.status(200).json(docs);
                });
            }, function (error) {
                console.error(error);
            });
    });
    app.get('/api/get/single/customer/:id', function (req, res, next) {
        dataAccess.getSingleDocument("CustomerMaster", {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }, function (error) {
                console.error(error);
                res.status(500).json(error);
            });
    });
    app.post('/api/post/add/customer', function (req, res, next) {
        var customer = req.body.payLoad;
        dataAccess.addDocumentToCollection("CustomerMaster", customer)
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Inserted one item"
                })
            }, function (error) {
                return res.status(500).json(error);
            });

    });
};