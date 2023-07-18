const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required :  true
    },
    password : {
        type : String,
        required : true
    },
    emailId : {
        type : String,
        required : true
    }
});


const User = new mongoose.model('user_deva',userSchema);

module.exports = User;
