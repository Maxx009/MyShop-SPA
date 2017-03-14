var dataAccess = require('../services/data-access');
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
        dataAccess.getSingleDocument("ProductMaster", {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }, next).catch(next);;
    });
    app.get('/api/get/list/product', function (req, res, next) {
        dataAccess.getDataFromCollection("ProductMaster", {}).then(function (data) {
            data.toArray(function (error, docs) {
                if (error) {
                    return next(error);
                }
                res.status(200).json(docs);
            });
        }, next).catch(next);
    });
    app.post('/api/post/add/product', function (req, res, next) {
        var product = req.body.payLoad;
        if (validateProduct(product)) {
            dataAccess.addDocumentToCollection("ProductMaster", product)
                .then(function (databaseResponse) {
                    res.status(200).json({
                        message: "Inserted one item"
                    })
                }, next)
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