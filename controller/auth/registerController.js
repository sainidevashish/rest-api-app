const User = require("../../model/user");
const Joi = require("joi");


const register = async function (req, res, next) {

  const registerSchema = Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    emailId: Joi.string().email().required(),
    cpassword : Joi.ref('password')
  });

  const {error} = registerSchema.validate(req.body);

  if (error){
    console.log(error);
    return next(error);
  }

  
    const result = await User.create(req.body);
    res.status(201).json({ msg: "user created !", result });
  };



module.exports = register;
