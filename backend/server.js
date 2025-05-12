const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config/db');
const corsMiddleware = require('./middleware/corsMiddleware');
const userRouter = require('./routes/userRouter');
// const jwt =require('jsonwebtoken')
// const User = require('./models/users');
// const login = require('./models/user');

const app = express();
app.use(corsMiddleware)
app.use(express.json());
app.use('/user',userRouter)

mongoose.connect(config.db,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log('mongodb connection')
})
mongoose.connection.on('error',(err)=>{
    console.log('error'+err)
})

app.get('/',(req,res)=>{
    res
     .status(200)
     .json('welcome')
})

const port = process.env.PORT || 8080;
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Listening port ${port}`);
  })
