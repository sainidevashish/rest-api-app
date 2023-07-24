const User = require("../../model/user");
const refreshToken = require('../../model/refreshToken');
const Joi = require("joi");
const bcrypt = require("bcrypt");
const CustomErrorHandler = require("../../services/customErrorHandler");
const jwt = require("../../services/jwt");
const {REFRESH_SECRET} = require('../../config');

const register = async function (req, res, next) {
  const registerSchema = Joi.object({
    userName: Joi.string().min(3).max(15).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    emailId: Joi.string().email().required(),
    cpassword: Joi.ref("password"),
  });

  const { error } = registerSchema.validate(req.body);

  if (error) {
    // console.log(error);
    return next(error);
  }
  // if user is exits in database
  try {
    const exist = await User.exists({ emailId: req.body.emailId });
    if (exist) {
      return next(
        CustomErrorHandler.alreadyExist("This email is already taken")
      );
    }
  } catch (err) {
    return next(err);
  }

  const { userName, password, emailId } = req.body;

  // Hash password

  const hasedPassword = await bcrypt.hash(password, -10);

  // model  of data
  
  const user = new User({
    userName: userName,
    emailId: emailId,
    password: hasedPassword,
  });
let access_token;
let refresh_token;
  try {
    const result = await user.save();
    // Token

    access_token = jwt.sign({_id: result._id,role : result.role});

    // refresh Token
    refresh_token = jwt.sign({_id: result._id,role : result.role},'1y', REFRESH_SECRET);
    console.log(refresh_token,REFRESH_SECRET);
    await refreshToken.create({token : refresh_token});

    res.status(201).json({ msg: "user created !", result ,"access_token":access_token ,"refresh_token":refresh_token});

  } catch (err) {
    return next(err);
  }
};

module.exports = register;
