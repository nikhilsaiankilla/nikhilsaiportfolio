const express = require('express');
const db = require('../db/db');
const router = express.Router();
const middleware = require('../middleware/middleware');
const { getAdminDataController, createAdminController, updateAdminController, updatePasswordController, forgetPasswordController, resetPasswordController } = require('../controller/adminController');

const { upload } = require('../middleware/multerMiddleware');
const { pdfUpload } = require('../middleware/pdfMulterMiddleware');

//add admin
router.post('/createAdmin', (req, res, next) => {
    pdfUpload.single('resume_url')(req, res, (err) => {
        if (err) {
            return res.status(400).send({ success: false, error: err.message });
        }
        next();
    });
}, createAdminController);

//get admin data
router.get('/getAdmin', getAdminDataController);

//update admin data
router.put('/updateAdminData', middleware, (req, res, next) => {
    pdfUpload.single('resume_url')(req, res, (err) => {
        if (err) {
            return res.status(400).send({ success: false, error: err.message });
        }
        next();
    });
}, updateAdminController);

//update password
router.put('/updatePassword', middleware, updatePasswordController);

//forget password
router.get('/forgetPassword', forgetPasswordController);

//reset password with otp
router.put('/resetPasswordWithOpt', resetPasswordController)

module.exports = router;