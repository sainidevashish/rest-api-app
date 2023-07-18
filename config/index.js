const dotenv = require('dotenv');
dotenv.config();
const  {PORT,DEBUG_MODE} = process.env;
module.exports = {PORT,DEBUG_MODE};
