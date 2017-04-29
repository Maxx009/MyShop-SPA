var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const dbURL = require("../config/db").url;
var mongo = {};

var getConnection = mongoClient.connect(dbURL);

mongo.getCollection = function getCollection(collectionName) {
    return getConnection
        .then(function getConnectionSuccess(connection) {
            return connection.collection(collectionName);
        });
};
mongo.getDataFromCollection = function getDataFromCollection(collectionName, jsonQuery,projection,sort) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.find(jsonQuery).project(projection).sort(sort);
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
            return collection.updateOne(jsonObject.query, {$set:jsonObject.update});
        });
}
mongo.getDocumentCount = function getDocumentCount(collectionName, jsonObject) {
    return mongo.getCollection(collectionName)
        .then(function getCollectionSuccess(collection) {
            return collection.count(jsonObject);
        });
}
module.exports = mongo;