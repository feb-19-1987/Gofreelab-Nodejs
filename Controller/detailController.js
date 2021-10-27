const express=require('express')

const {ObjectId}=require('bson');

const router=express.Router();

const {Details}=require('../Model/Employee')

router.get('/',(req,res)=>{
   
    Details.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving details'+JSON.stringify(err))
        }
    })
})

router.post('/',(req,res)=>{
    var details=new Details({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        password1:req.body.password1,
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