const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.post('/login', userController.login);
router.post('/create_token', userController.createToken);
router.post('/reset_password', userController.resetPassword);
module.exports = router;
