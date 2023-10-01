// //--(1)-- Basic Lib Import
// const express =require('express');
// const app=express();


// //--(2)-- Security Middleware Lib Import
// const rateLimit =require('express-rate-limit');
// const helmet =require('helmet');
// const mongoSanitize =require('express-mongo-sanitize');
// const hpp =require('hpp');
// const cors =require('cors');


// //--(3)-- Database Lib Import
// const mongoose =require('mongoose');
// // app.use(express.static('client/build'));


// //--(4)-- Security Middleware Implement
// app.use(cors())
// app.use(helmet())
// app.use(mongoSanitize())
// app.use(xss())
// app.use(hpp())



// //--(5)-- Request Rate Limit
// const limiter= rateLimit({windowMs:15*60*1000,max:3000})
// app.use(limiter)

// //--(6)--Mongo db database Connection ---
// const connectDB= async()=>{
//     try {

//      await  mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');
//      console.log("db is connected")

//     } catch (error) {
//         console.log("db is not connected");
//         console.log(error.message);
//     }
//     }
// // ---mongoose call---
// await connectDB();




// // //--(7)--Routing Implement
// // app.use("/api/v1",router)




// //--(8) export---
// module.exports=app;


