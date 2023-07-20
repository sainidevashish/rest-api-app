const CustomErrorHandler = require("../services/customErrorHandler");
const Jwt = require("../services/jwt");

const auth = async (req,res,next) =>{
let authHeader = req.headers.authorization;
console.log(authHeader);
if(!authHeader){
    return next(CustomErrorHandler.unauthorized());
}

const token = authHeader.split(' ')[1];
// console.log(token);

try{
    const {_id,role}= await Jwt.verify(token);
    const user = {
        _id,
        role
    }
    req.user = user;

}catch(err){
    return next(CustomErrorHandler.unauthorized());  
}

next();

}

module.exports = auth;