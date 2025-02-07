const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { response } = require('express');
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware/authMiddleware');
// signup -route

router.post('/signup', async (req, res) => {
    try{
        const {username,email,password} = req.body;
        if(!email || !password || !username)
        {
            return res.status(400).json({message: 'All fields are required'});
        }
        if(username.length < 5){
            return res
            .status(400)
            .json({message: 'Username must have 5 characters '});
        }
        if(password.length < 6){
            return res
            .status(400)
            .json({message: 'Password must have 5 characters'});
        }

        // check user exists or not
        const existingEmail = await User.findOne({email: email})
        const existingUsername = await User.findOne({username: username});
        if(existingEmail || existingUsername)
        {
            return res.status(400)
            .json({message: 'Email or username already exists'});
        }

        // has the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new User({email, username, password: hashedPass});
        await newUser.save();
        return res.status(200).json({message: 'Account created'});
    } catch (error){
        res.status(400).json({error});
    }
   
});

// login - route

router.post('/sign-in', async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email ||!password)
        {
            return res.status(400).json({message: 'All fields are required'});
        }
        // check userexist 

        const existingUser = await User.findOne({email: email});
        if(!existingUser){
            return res
            .status(400)
            .json({message: 'Invalid credentials'});
        }
        // check password is matched or not

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
            return res
           .status(400)
           .json({message: 'Invalid credentials'});
        }

        // generate JWT  token 

        const token = jwt.sign(
            {id:existingUser._id,email:existingUser.email},
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        );

        response.cookie("podcasterUserToken", token,{
            httpOnly: true,
            maxAge:30*24*60*60*100,
            secure: process.env.NODE_ENV === 'production',
            sameSite:"None",
        });
        return res.status(200).json({
            id:existingUser._id,
            username: existingUser.username,email:email,
            message:"Signed in successfully"
        });
    }catch (error){
        res.status(500).json({error});
    }
});

// logout 
 router.post("/logout",async(req , res)=>{
    res.clearCookie("podcasterUserToken",{
        httpOnly:true,
    });
    res.status(200).json({message: "Logged out successfully"});
 });
module.exports = router;

// check cookie present or not

router.post("/chec-cookie",async(req , res)=>{
    const  token = req.cookie.podcasterUserToken;
    if(!token){
        return res.status(200).json({message: "True"});
    }
    response.status(200).json({message: "False"});
});

// ROUTE TO FETCH USER DETAIL

router.post("/user-details", authMiddleware, async(req , res)=>{
  try{
    const {email} = req.user;
    const existingUser = await User.findOne({email: email}).select(
        "-password"
    );
    return res.status(200).json({
        user: existingUser, 
  });
  }catch(error){
    console.log(error);
    res.status(500).json({error: "Error"});
  }
});
