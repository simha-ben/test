const raute=require('express').Router();
const { model } = require('mongoose');
const user=require('../controllers/user')

raute.post('/newUser',user.newUser);
raute.get('/getAllUsers',user.getAllUsers);

module.exports=raute;
