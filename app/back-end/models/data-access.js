var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const dbURL = "mongodb://LocalHost:7000/MyShopPrimary"
var mongo = {};

var getConnection = mongoClient.connect(dbURL);

mongo.getCollection = function getCollection(collectionName) {
    return getConnection.then(function getConnectionSuccess(connection){
       return connection.collection(collectionName);
    });
};
mongo.getDataFromCollection = function getDataFromCollection(collectionName,jsonQuery) {
   return mongo.getCollection(collectionName).then(function getCollectionSuccess(collection) {
         return collection.find(jsonQuery);
    });
};
mongo.addDocumentToCollection = function addDocumentToCollection(collectionName,jsonObject) {
    return mongo.getCollection(collectionName).then(function getCollectionSuccess(collection) {
         return collection.insert(jsonObject);
    });
}
module.exports = mongo;