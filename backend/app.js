const express=require('express');
const { Sequelize } = require('sequelize');
const app=express();
const {sequelize} =require('./models')
const cors=require('cors')

require('dotenv').config({
    path:require('path').resolve(__dirname,'./.env')
})

app.use(cors({
    origin:"*"  
}))

app.use(express.json());
app.use(express.urlencoded({ extended:true }))


//testing api

app.get("/",(req,res)=>{
    res.send({msg: "Hello form api ..This is index page"})
})

//router 

const router=require('./src/routes/router');
app.use("/rx/",router);


const PORT= process.env.PORT || 8050;

app.listen(8050,()=>{
    sequelize.authenticate()
    console.log("Server is listening on Port ",PORT)
})



