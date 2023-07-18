const dotenv = require('dotenv');
dotenv.config({path: './vars/.env'});
const  {PORT,DEBUG_MODE} = process.env;
module.exports = {PORT,DEBUG_MODE};
