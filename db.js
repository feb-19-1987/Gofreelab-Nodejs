const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/registration',(err)=>{
    if(!err){
        console.log('Mongodb connection succeeded')
    }
    else{
        console.log('Error in connection'+JSON.stringify(err))
    }
})