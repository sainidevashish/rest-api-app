const User = require("../../model/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("../../services/jwt");
const CustomErrorHandler = require("../../services/customErrorHandler");

// validate user
const login = async function (req, res, next) {
  const { emailId, password } = req.body;
  const loginSchema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    emailId: Joi.string().email().required(),
  });

  const { error } = loginSchema.validate(req.body);
  if (error) {
    console.log(error);
    return next(error);
  }

  //   console.log(req.body);
  try {
    const user = await User.findOne({ emailId: emailId });
    // console.log(user);
    if (!user) {
      return next(CustomErrorHandler.wrongCredential());
    }
    //compare the password
    const match = await bcrypt.compare(password, user.password);
    // console.log(match);
    if (!match) {
      return next(CustomErrorHandler.wrongCredential());
    }
    // Token
    const access_token = jwt.sign({ _id: user._id, role: user.role });

    res.json({access_token:access_token, "msg": "login successfully !"});
  } catch (err) {
    return next(err);
  }
};
module.exports = login;
