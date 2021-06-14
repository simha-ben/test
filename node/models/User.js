const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('User', userSchema);