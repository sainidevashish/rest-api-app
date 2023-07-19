const dotenv = require('dotenv');
dotenv.config({path: './vars/.env'});
const  {PORT,DEBUG_MODE,DB_URL,JWT_SECRET} = process.env;
module.exports = {PORT,DEBUG_MODE,DB_URL,JWT_SECRET};
