const Joi = require("joi");
const CustomErrorHandler = require("../../services/customErrorHandler");
const jwt = require("../../services/jwt");
const { REFRESH_SECRET } = require("../../config");
const User = require("../../model/user");
const RefreshToken = require("../../model/refreshToken");

const refreshTokenController = async (req, res, next) => {
  // validate user

  const refreshSchema = Joi.object({
    refresh_token: Joi.string().required(),
  });
  const { error } = refreshSchema.validate(req.body);
  if (error) {
    console.log(error);
    return next(error);
  }
  let refreshToken;
  try {
    const token = req.body.refresh_token;
    refreshToken = await RefreshToken.findOne({token});
    // console.log(refreshToken);
    if (!refreshToken) {
      return next(CustomErrorHandler.unauthorized("Invalid refresh token"));
    }

    try {
      const { _id } = await jwt.verify(refreshToken.token, REFRESH_SECRET);
      userId = _id;
    //   console.log(userId);
    } catch (err) {
        console.log(err);
      return next(CustomErrorHandler.unauthorized("Invalid refresh token due to failer of jwt"));
    }

    // user check
    const user = User.findOne({ _id: userId });
    if (!user) {
      return next(CustomErrorHandler.unauthorized("No user found"));
    }

    // tokens

    const access_token = jwt.sign({ _id: user._id, role: user.role });

    const refresh_token = jwt.sign(
      { _id: user._id, role: user.role },
      "1y",
      REFRESH_SECRET
    );

    await RefreshToken.create({ token: refresh_token });

    res.json({ access_token, refresh_token });
  } catch (err) {
    console.log(err);
    return next(new Error("something went wrong!" + err.message));
  }
};

module.exports = refreshTokenController;
