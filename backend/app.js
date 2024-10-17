const express=require('express');
const { Sequelize } = require('sequelize');
const app=express();
const {sequelize} =require('./models')

require('dotenv').config({
    path:require('path').resolve(__dirname,'./.env')
})


const PORT= process.env.PORT || 8050;

app.listen(8050,()=>{
    sequelize.authenticate()
    console.log("Server is listening on Port ",PORT)
})



