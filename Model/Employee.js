const mongoose=require('mongoose')

var Details=mongoose.model('Detail',{
 
  fname:{type:String,required:true},
  lname:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:Number,required:true},
  password1:{type:Number,required:true},
  position:{type:String,required:true},
  },'Details');

module.exports={Details}


