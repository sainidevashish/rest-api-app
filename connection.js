const mongoose = require('mongoose');
const {DB_URL} = require('./config');

mongoose.connect(DB_URL).then(res=>{
    console.log('DB is connected !');
}).catch(err =>{
    console.log('db is not connected !',err);
})
        