const express= require("express");
const dotenv = require("dotenv").config();

const app =express();

const port= process.env.port ||5000;

app.use("/api/contacts",require("./Routes/ContactRoutes"));

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
}) 