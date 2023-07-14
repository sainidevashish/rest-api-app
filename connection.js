const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rest-api').then(res=>{
    console.log('DB is connectted !');
}).catch(err =>{
    console.log('db is not connected !',err);
})
