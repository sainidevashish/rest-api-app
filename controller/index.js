const register = require('./auth/registerController');
const login = require('./auth/loginController');
const userController = require('./auth/meController');
const refreshController = require('./auth/refreshController');
const logoutController = require('./auth/logoutController');
const productController = require('./productsController');
module.exports = {register, login, userController, refreshController, logoutController, productController};