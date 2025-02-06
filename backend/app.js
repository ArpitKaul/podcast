const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userApi = require("./routes/user.js")

require("dotenv").config();
require("./conn/conn");

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",userApi);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port:${process.env.PORT}`);
})