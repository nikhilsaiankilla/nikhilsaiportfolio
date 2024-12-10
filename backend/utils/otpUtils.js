const nodemailer = require('nodemailer');

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Send OTP email
async function sendOTPEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nikhilsaiankilla@gmail.com', 
        pass: 'vdpr sbns izxm ouko' 
    }
});

  const mailOptions = {
    from: 'nikhilsaiankilla@gmail.com',
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for resetting your password is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { generateOTP, sendOTPEmail };
