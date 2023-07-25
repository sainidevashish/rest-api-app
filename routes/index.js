const express = require('express');
const router = express.Router();
const controller = require ('../controller/index');
router.use(express.json());
const auth = require('../middlewares/auth');

router.post('/register',controller.register);
router.post('/login',controller.login);
router.get('/me',auth,controller.userController);
router.post('/refresh',controller.refreshController);
router.post('/logout',auth,controller.logoutController);

module.exports = router;