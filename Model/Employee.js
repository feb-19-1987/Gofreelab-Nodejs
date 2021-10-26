const mongoose=require('mongoose')

var Detail=mongoose.model('Detail',{
  
  fname:{type:String,required:true},
  lname:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:Number,required:true},
  position:{type:String,required:true},
  },'Detail');

module.exports={Detail}


