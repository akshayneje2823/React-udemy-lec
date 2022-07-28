const mongoose = require('mongoose');

const signupTemplete = new mongoose.Schema({
    fullName:{
        type: String,
        requred: true
    },
    email:{
        type:String,
        requred: true,
    
    },
    password:{
        type:String,
        requred:true
    },
    date:{
        type:Date(),
        default: Date.now
    }
})

module.exports = mongoose.model('mytale',signupTemplete)