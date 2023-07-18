const express = require('express');
const router = express.Router();
const registercontroller = require ('../controller/index');
router.use(express.json());

router.post('/register',registercontroller.register);
router.post('/login',registercontroller.login);


module.exports = router;