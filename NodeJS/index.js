const express=require('express');
const bodyParser=require('body-parser');

const { mongoose } =require('./db.js');

var employeeController=require('./controllers/employeeController');

const port=3000;
var app=express();
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.listen(port,(err)=>{
    if(err)
    console.log('Error : ',JSON.stringify(err,undefined,2));
    else
    console.log('Port Started');
});
app.use('/employees',employeeController);