var dataAccess = require('../services/data-access');
var ObjectId = require('mongodb').ObjectId;

function validateProduct(product) {
    var isValid = true
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
    app.get('/api/get/single/product/:id', function (req, res) {
        dataAccess.getSingleDocument("ProductMaster", {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }, function (error) {
                console.error(error);
                res.status(500).json(error);
            });
    });
    app.get('/api/get/list/product', function (req, res, next) {
        dataAccess.getDataFromCollection("ProductMaster", {}).then(function (data) {
            data.toArray(function (error, docs) {
                if (error) {
                    res.status(500).json(error);
                    return;
                }
                res.status(200).json(docs);
            });
        }, function (error) {
            console.error(error);
            res.status(500).json(error);
        });
    });
    app.post('/api/post/add/product', function (req, res, next) {
        var product = req.body.payLoad;
        if (validateProduct(product)) {
            dataAccess.addDocumentToCollection("ProductMaster", product)
                .then(function (databaseResponse) {
                    res.status(200).json({
                        message: "Inserted one item"
                    })
                }, function (error) {
                    res.status(500, {
                        error: error
                    });
                })
                .catch(function (error) {
                    res.status(500, {
                        error: error
                    });
                });;
        } else {
            res.status(500, {
                error: "error"
            });
        }
    });
};