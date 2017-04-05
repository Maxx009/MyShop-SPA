var dataAccess = require('../services/data-access');
const constants = require('../constants/product.constant');
var ObjectId = require('mongodb').ObjectId;

function validateProduct(product) {
    const isValid = true
    if (!product.name) {
        isValid = false;
    } else if (!product.vendorName) {
        isValid = false;
    } else if (!product.brand) {
        isValid = false;
    }
    return isValid;
}
module.exports = function (app) {
    app.get('/api/get/single/product/:id', function (req, res, next) {
        dataAccess.getSingleDocument(constants.COLLECTION_NAME, {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }).catch(next);;
    });

    app.get('/api/get/list/product', function (req, res, next) {
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {},{},{modifiedOn:-1}).then(function (data) {
            data.toArray(function (error, docs) {
                if (error) {
                    return next(error);
                }
                res.status(200).json(docs);
            });
        }).catch(next);
    });

    app.get('/api/get/find/product/:name', function (req, res, next) {
        var searchToken = req.params.name;
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {
                name: new RegExp(searchToken, 'i')
            }, {
                _id: 1,
                name: 1,
                brand: 1
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

    app.put('/api/put/update/product', function (req, res, next) {
        var product = req.body.payLoad;
        dataAccess.updateDocument(constants.COLLECTION_NAME, {
                query: {
                    "_id": ObjectId(product._id)
                },
                update: {
                    name: product.name,
                    brand: product.brand,
                    vendorName: product.vendorName,
                    modifiedOn: new Date()
                }
            })
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Updated one item"
                });
            }).catch(next);
    });

    app.post('/api/post/add/product', function (req, res, next) {
        var product = req.body.payLoad;
        product.createdOn = new Date();
        product.modifiedOn = new Date();
        if (validateProduct(product)) {
            dataAccess.addDocumentToCollection(constants.COLLECTION_NAME, product)
                .then(function (databaseResponse) {
                    res.status(200).json({
                        message: "Inserted one item"
                    });
                })
                .catch(next);
        } else {
            next(error);
        }
    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(400).send(err);
    });
};