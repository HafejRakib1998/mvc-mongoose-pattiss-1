//--(1)--import .env----
require('dotenv').config();


// ---(2)-init code-----
const express=require('express');
const morgan=require('morgan');
const cors =require('cors');
const app =express()


//-(2.5)-database.js file import-
const database=require('./database')



//-(3)- .env file call --
const port =process.env.PORT;



//--(4)--middleware setup-----
app.use(morgan('dev'));
app.use(cors());


//--(5)--defaults routes-----
app.all('/',function(req,res){
return res.json({
status:true,
message:'index page working.....'
})
})

//--(6)--star server---
app.listen( port,()=>{
console.log('server run is success 200 Ok')
})


