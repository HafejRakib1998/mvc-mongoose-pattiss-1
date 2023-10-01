// ---------init code-------
require('dotenv').config();
 const mongoose = require('mongoose');
//  const  asserts =require('assert');
// const { error } = require('console');
// assert(5 > 7);
const db_url=process.env.DB_URL;

//---------- mongo db connection code -------------
const connectDB= ()=>{
    try {

    mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');
     console.log("db is connected")

    } catch (error) {
        console.log("db is not connected");
        console.log(error.message);
    }
    }
// --function call--
    connectDB()