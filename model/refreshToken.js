const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      unique : true
    }
  }
);

const refreshToken = new mongoose.model("refreshToken", refreshTokenSchema);

module.exports = refreshToken;
