const express=require('express')

const {ObjectId}=require('bson');

const router=express.Router();

const {Detail}=require('../Model/Employee')

router.get('/',(req,res)=>{
   
    Detail.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving details'+JSON.stringify(err))
        }
    })
})

router.post('/',(req,res)=>{
    var details=new Detail({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        position:req.body.position,
    })
    details.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log("Error in uploading"+JSON.stringify(err))
        }
    })
})
   
    


module.exports=router