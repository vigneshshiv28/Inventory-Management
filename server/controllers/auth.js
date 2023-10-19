const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");


const login = async (req, res) => {  
    try {
        console.log(req.body);
        const {username, password} = req.body;
        console.log(username);
        console.log(password);
        const user = await User.findOne({username : username});
        if(user == null){
            console.log("400 send")
            return res.status(400).json({message: 'User does not exist'});
            
        }
        const password_correct = await bcrypt.compare(password,user.password);
        if(!password_correct)
        {
            console.log("400 send")
            return res.status(400).json({msg:"Password Not Correct Please Enter Correct Password"});   
        }
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token,user});
        console.log("200 send")
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log("500 send")
    }
 }

  const register = async (req, res) => {  
    try{
        const {username, password} = req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            password: passwordHash,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(500).json({error: error.message});   
    }

 }

 module.exports = {login,register};