const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { getAdminDataController, createAdminController, updateAdminController, updatePasswordController, forgetPasswordController, resetPasswordController } = require('../controller/adminController');

//add admin
router.post('/createAdmin', createAdminController);

//get admin data
router.get('/getAdmin', getAdminDataController);

//update admin data
router.put('/updateAdminData',middleware, updateAdminController);

//update password
router.put('/updatePassword',middleware, updatePasswordController);

//forget password
router.get('/forgetPassword', forgetPasswordController);

//reset password with otp
router.put('/resetPasswordWithOpt', resetPasswordController)

module.exports = router;