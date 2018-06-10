const express=require('express');
var router=express.Router();

var {Employee}=require('../models/employee');
var ObjectId=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>{
    Employee.find((err,docs) => {
        if(err)
        console.log('Error : ',err);
        else
        res.send(docs);
        
    });
});

router.post('/',(req,res)=>{
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    });
    emp.save((err,docs)=>{
        if(err)
        res.send('Failed : ',err);
        else
        res.send(docs);
    });
});

router.get("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record Found for ID = ${req.params.id}`);

    Employee.findById(req.params.id,(err,doc)=>{
        if(!err) {
            res.send(doc);
        }
    });
});

router.put("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(404).send(`No Record Found for ID = ${req.params.id}`);
    var emp={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
       if(err)
       res.status(400).send(err);
       else
       res.send(doc); 
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(404).send(`${req.params.id} not found`);

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err)
        return res.status(400).send(err);
        else
        return res.status(200).send("Successfully Deleted");
    });
    });
router.get('/get/positions',(req,res)=>{
    Employee.distinct('position',(err,docs)=>{
        if(err)
        res.send("Error",err);
        else
        res.send(docs);
    });
});
module.exports=router;