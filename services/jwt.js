const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
class Jwt {
  static sign(payload, expiry = "600s", secret = JWT_SECRET) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static verify(token, secret = JWT_SECRET) {
    return jwt.verify(token, secret);
  }
}
module.exports = Jwt;
