var dataAccess = require('../services/data-access');
const constants = require('../constants/customer.constant');
var ObjectId = require('mongodb').ObjectId;

module.exports = function (app) {
    app.get('/api/get/list/customer', function (req, res, next) {
        dataAccess.getDataFromCollection(constants.CUSTOMER_MASTER, {})
            .then(function (data) {
                console.log(data);
                data.toArray(function (error, docs) {
                    if (error) {
                        res.status(500).json(error);
                        return;
                    }
                    res.status(200).json(docs);
                });
            }, next);
    });
    app.get('/api/get/single/customer/:id', function (req, res, next) {
        dataAccess.getSingleDocument(constants.CUSTOMER_MASTER, {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }, next);
    });
    app.put('/api/put/update/customer', function (req, res, next) {
        var customer = req.body.payLoad;
        dataAccess.updateDocument(constants.CUSTOMER_MASTER, {
                query: {
                    "_id": ObjectId(customer._id)
                },
                update: {
                    name: customer.name,
                    shopName: customer.shopName,
                    mobileNumber: customer.mobileNumber,
                    address: customer.address
                }
            })
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Updated one item"
                });
            }, next);
    });
    app.post('/api/post/add/customer', function (req, res, next) {
        var customer = req.body.payLoad;
        dataAccess.addDocumentToCollection(constants.CUSTOMER_MASTER, customer)
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Inserted one item"
                })
            }, next);

    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(400).send(err);
    });
};