const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(err)
    console.log('Connection Error : ',JSON.stringify(err,undefined,2));
    else
    console.log('Database Successfully Connected !');
});
module.exports.mongoose;