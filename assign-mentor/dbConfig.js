const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const dbUrl=`mongodb://localhost:27017/assign-mentor/mentor`;

module.exports={mongodb,dbUrl,MongoClient} 