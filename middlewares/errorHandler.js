const {DEBUG_MODE} = require('../config');
const {ValidationError} = require('joi');
const CustomErrorHandler = require('../services/customErrorHandler');
// console.log(DEBUG_MODE);
const errorHandler = (err,req,res,next) =>{
    let statusCode = 500;
    let data = {
        message : "Internal server error",
        
        ...(DEBUG_MODE === 'true' && {originalError : err.message})
    }
    if (err instanceof ValidationError ){
        statusCode = 422;
        data = {
            message : err.message
        }
    }
    if (err instanceof CustomErrorHandler){
        statusCode = err.status;
        data = {
           message: err.message
        }
    }

res.status(statusCode).json(data);
    
}

module.exports = errorHandler;