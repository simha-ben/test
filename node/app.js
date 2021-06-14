const express = require('express');
const app = express();
const raute = require('./rautes/api')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors =require('cors')
dotenv.config();


const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:true
}

mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error: "+err);

})

app.use(bodyParser.json())
app.use(cors())
app.use('/',raute)

app.listen(5200,()=>{
    console.log("listening on port 5200")
})