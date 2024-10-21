const express=require('express');
const cors=require("cors"); /* this helps to not blocking the ports to run on the client and serverside both */
const { extend } = require('joi');
require ('dotenv').config(); /* For connent the env file */
const mongoose =require('mongoose');
const getConnection=require("./utils/getConnection");
const userRouter=require("./routes/User");




const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true,limit:'50mb'})); /*it hepls to send the data in server side upto 50mb*/
app.use('/user',userRouter);
app.use((error,req,res,next)=>{
    const message=error.message || 'server error';
    const statusCode= error.statusCode ||500;

    res.status(statusCode).json({message:message});

}
);

getConnection();

app.listen(process.env.PORT,()=>console.log("The server is start on : " + process.env.PORT));





/*Errors */

/* 1. I get an error on connnecting the database . and i solve it to change the ip address into 0.0.0/0 port means the free local host thats connects to everywhere*/