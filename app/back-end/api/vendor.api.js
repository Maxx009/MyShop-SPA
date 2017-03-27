var dataAccess = require('../services/data-access');
const constants = require('../constants/vendor.constant');
var ObjectId = require('mongodb').ObjectId;

module.exports = function (app) {
    app.get('/api/get/list/vendor', function (req, res, next) {
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {})
            .then(function (data) {
                console.log(data);
                data.toArray(function (error, docs) {
                    if (error) {
                        next(error);
                    }
                    res.status(200).json(docs);
                });
            }).catch(next);
    });
    app.get('/api/get/count/vendor', function (req, res, next) {
        dataAccess.getDocumentCount(constants.COLLECTION_NAME, {})
            .then(function (count) {
                res.status(200).send(count.toString());
            }).catch(next);
    });
    app.get('/api/get/single/vendor/:id', function (req, res, next) {
        dataAccess.getSingleDocument(constants.COLLECTION_NAME, {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }).catch(next);
    });
    app.get('/api/get/find/vendor/:name', function (req, res, next) {
        var searchToken = req.params.name;
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {
                name: new RegExp(searchToken,'i')
            }, {
                _id: 1,
                name: 1
            })
            .then(function (data) {
                data.toArray(function (error, docs) {
                    if (error) {
                        next(error);
                    }
                    res.status(200).json(docs);
                });
            }).catch(next);
    });
    app.put('/api/put/update/vendor', function (req, res, next) {
        var vendor = req.body.payLoad;
        dataAccess.updateDocument(constants.COLLECTION_NAME, {
                query: {
                    "_id": ObjectId(vendor._id)
                },
                update: {
                    name: vendor.name,
                    mobileNumber: vendor.mobileNumber,
                    address: vendor.address
                }
            })
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Updated one item"
                });
            }).catch(next);
    });
    app.post('/api/post/add/vendor', function (req, res, next) {
        var vendor = req.body.payLoad;
        dataAccess.addDocumentToCollection(constants.COLLECTION_NAME, vendor)
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Inserted one item"
                })
            }).catch(next);

    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(400).send(err);
    });
};