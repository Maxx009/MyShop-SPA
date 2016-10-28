// app/back-end/models/data-access.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our dataAccess model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('DataAccess', {
    name : {type : String, default: ''}
});