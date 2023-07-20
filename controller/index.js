const register = require('./auth/registerController');
const login = require('./auth/loginController');
const userController = require('./auth/meController');

module.exports = {register, login, userController};

