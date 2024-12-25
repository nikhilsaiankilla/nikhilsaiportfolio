const nodemailer = require('nodemailer');

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Send OTP email
async function sendOTPEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: 'Password Reset OTP',
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Password Reset Request</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear User,</p>
              <p>You have requested to reset your password. Use the OTP below to proceed:</p>
              <div style="text-align: center; margin: 20px 0;">
                <span style="display: inline-block; padding: 10px 20px; font-size: 18px; font-weight: bold; color: #4CAF50; border: 1px dashed #4CAF50; border-radius: 5px; background-color: #f9f9f9;">
                  ${otp}
                </span>
              </div>
              <p>This OTP is valid for the next <strong>15 minutes</strong>. Please do not share it with anyone.</p>
              <p>If you did not request this change, please ignore this email or contact support immediately.</p>
              <p>Thank you,</p>
              <p><strong>The [Your Company Name] Team</strong></p>
            </div>
            <div style="background-color: #f4f4f4; padding: 10px 20px; text-align: center; font-size: 12px; color: #666;">
              <p style="margin: 0;">If you have any questions, contact us at <a href="mailto:support@yourcompany.com" style="color: #4CAF50;">support@yourcompany.com</a></p>
            </div>
          </div>
        </div>
  `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { generateOTP, sendOTPEmail };
