// const mongodb = require('mongodb');
// var MongoClient = mongodb.MongoClient;
const dbUrl = process.env.database_url;
  
// const winston = require('winston');
const mongoose = require('mongoose');


const databaseConnector  = () =>{

  mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${dbUrl}...`));
}

  


export default databaseConnector;
