var dataAccess = require('../services/data-access');
const constants = require('../constants/sales.constant');
var ObjectId = require('mongodb').ObjectId;

function processBillObject(billObject) {
    if (!billObject) {
        return false;
    }
    billObject.billDate = new Date(billObject.billDate);
    billObject.customer._id = ObjectId(billObject.customer._id);
    for (var index = 0; index < billObject.billItems.length; index++) {
        billObject.billItems[index].product._id = ObjectId(billObject.billItems[index].product._id);        
    }
    return billObject;
}
module.exports = function (app) {
    app.get('/api/get/list/bill', function (req, res, next) {
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {},{"customer.name": 1, "billDate": 1, "_id": 1, "grandTotal": 1},{"billDate": -1})
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

    app.get('/api/get/count/bill', function (req, res, next) {
        dataAccess.getDocumentCount(constants.COLLECTION_NAME, {})
            .then(function (count) {
                res.status(200).send(count.toString());
            }).catch(next);
    });

    app.get('/api/get/single/bill/:id', function (req, res, next) {
        dataAccess.getSingleDocument(constants.COLLECTION_NAME, {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }).catch(next);
    });

    app.get('/api/get/find/bill/:name', function (req, res, next) {
        var searchToken = req.params.name;
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {
                name: new RegExp(searchToken,'i')
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

    app.put('/api/put/update/bill', function (req, res, next) {
        var bill = req.body.payLoad;
        dataAccess.updateDocument(constants.COLLECTION_NAME, {
                query: {
                    "_id": ObjectId(bill._id)
                },
                update: {
                    name: bill.name,
                    mobileNumber: bill.mobileNumber,
                    address: bill.address
                }
            })
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Updated one item"
                });
            }).catch(next);
    });

    app.post('/api/post/add/bill', function (req, res, next) {
        var bill = processBillObject(req.body.payLoad);
        dataAccess.addDocumentToCollection(constants.COLLECTION_NAME, bill)
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