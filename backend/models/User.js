const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
    },
    username:{
        type:String,
        required: true,
    },
    password: { 
        type:String, 
    },
    role: { type: String, default: 'user' }
}, { versionKey: false })

const User = mongoose.model('Users',userSchema)
module.exports =User;