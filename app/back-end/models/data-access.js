var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const dbURL = "mongodb://LocalHost:7000/MyShopPrimary"
var mongo = {};

var getConnection = mongoClient.connect(dbURL);

mongo.getCollection = function getCollection(collectionName) {
    return getConnection
        .then(function getConnectionSuccess(connection) {
            return connection.collection(collectionName);
        });
};
mongo.getDataFromCollection = function getDataFromCollection(collectionName, jsonQuery) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.find(jsonQuery);
        });
};
mongo.getSingleDocument = function getSingleDocument(collectionName, jsonQuery) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.findOne(jsonQuery);
        });
};
mongo.addDocumentToCollection = function addDocumentToCollection(collectionName, jsonObject) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.insert(jsonObject);
        });
}
mongo.updateDocument = function updateDocument(collectionName, jsonObject) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.updateOne(jsonObject);
        });
}
module.exports = mongo;