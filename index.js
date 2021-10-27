const express=require('express');

const app=express();

const bodyParser=require('body-parser');

const {mongoose}=require('./db')

const cors=require('cors');

const detailController=require('./Controller/detailController')

app.use(cors());

app.use(bodyParser.json());

app.use('/Details',detailController)

app.use('/',(req,res)=>{
    res.send('Welcome')
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server started at port : ${PORT}`)
})

