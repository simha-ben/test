const User = require('../models/User')
const jwt = require('jsonwebtoken')
// const request = require('request')
// const dotenv = require('dotenv');
// dotenv.config();


const newUser = async (req, res) => {
    console.log('new user');
    try {
        let newU = new User(req.body);
        await newU.save()
        res.status(200).json({ "user": newU })
    }
    catch (err) {
        res.status(500).json({ "error": err });
    }
}

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find().select({'name':1,'email':1})
        if (users)
            res.status(200).json({ myUsers: users });
        else
            res.status(500).json({ message: "dont have users" });
    }
    catch (err) {
        res.status(500).json({ "error": err });
    }
}

module.exports = { newUser,getAllUsers };