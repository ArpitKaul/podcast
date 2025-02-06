const mongoose = require('mongoose');
const user = new mongoose.Schema({
    username:{
        type: String,
        unique:true,
    },
    email:{
        type: String,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        unique:true,
    },
    podcast:[
        {
            type: mongoose.Types.ObjectId,
            ref:"podcasts"
        },
    ],  
},
    {timestamps:true},
)
module.exports = mongoose.model("user",user);