const express=require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const { mongoose } =require('./db.js');

var employeeController=require('./controllers/employeeController');

const port=3000;
var app=express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(port,(err)=>{
    if(err)
    console.log('Error : ',JSON.stringify(err,undefined,2));
    else
    console.log('Port Started');
});
app.use('/employees',employeeController);