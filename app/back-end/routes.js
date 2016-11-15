var dataAccess = require('./models/data-access');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    // app.get('/api/data-access', function(req, res) {
    //     // use mongoose to get all data in the database
    //     dataAccess.find(function(err, data) {
    //         // if there is an error retrieving, send the error. 
    //         // nothing after res.send(err) will execute
    //         if (err)
    //             res.send(err);

    //         res.json(data); // return all data in JSON format
    //     });
    // });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    
    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html'); // load our public/index.html file
    });
    app.get('/Login', function (req, res) {
        res.sendfile(__dirname + '/login.html'); // load our public/index.html file
    });

};