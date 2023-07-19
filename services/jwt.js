const {JWT_SECRET} = require('../config');
const jwt = require('jsonwebtoken');
class Jwt {
    static sign(payload,expiry = '60s', secret = JWT_SECRET){
return jwt.sign(payload,secret, {expiresIn : expiry});
    }
}
module.exports = Jwt;