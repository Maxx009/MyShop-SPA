var dataAccess = require('./models/data-access');

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
};