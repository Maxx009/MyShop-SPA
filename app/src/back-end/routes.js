module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html'); // load our index.html file for SPA
    });
};