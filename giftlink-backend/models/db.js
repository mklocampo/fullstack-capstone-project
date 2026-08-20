// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    // {{insert code}}
       
    await client.connect();
    console.log("giftdb connected");

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}

    dbInstance = client.db(dbName);
    console.log("giftdb Instanced");

    // Task 3: Return database instance
    // {{insert code}}
    console.log("Instance returned");
    return dbInstance;
}

module.exports = connectToDatabase;
