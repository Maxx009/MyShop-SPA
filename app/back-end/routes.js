var dataAccess = require('./models/data-access');

function validateProduct(product) {
    let isValid = true
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

    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html'); // load our public/index.html file
    });
    app.get('/api/get/customers', function (req, res) {
        dataAccess.getDataFromCollection("CustomersMaster", {}).then(function (data, meta, leta) {
            console.log(data);
            data.toArray(function (error, docs) {
                res.send(JSON.stringify(docs));
            });
        }, function (error) {
            console.log(error)
        });
    });
    app.post('/api/post/product', function (req, res) {
        let product = req.body.payLoad;
        if (validateProduct(product)) {
            dataAccess.addDocumentToCollection("ProductMaster", product).then(function (databaseResponse) {
                res.status(200).json({
                    message: "Inserted one item"
                })
            }, function (error) {
                res.status(500).json({
                    error: error
                });
            });
        }
    });
};