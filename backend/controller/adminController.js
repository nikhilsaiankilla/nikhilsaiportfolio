const bcrypt = require('bcrypt');

const { generateOTP, sendOTPEmail } = require('../utils/otpUtils')

const { MyData } = require('../model/adminModel')

const getAdminDataController = async (req, res) => {
    try {
        const data = await MyData.findAll();

        return res.status(500).send({
            success: true,
            data: data
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error || "something went wrong while fetching the admin"
        });
    }
};

const createAdminController = async (req, res) => {
    try {
        const { name, email, password, phone, role, social_links, resume, bio } = req.body;

        // Validation checks
        if (!name || !email || !password || !phone || !role || !social_links) {
            return res.status(400).send({
                success: false,
                error: "Name, email, password, phone, role, and social_links are required."
            });
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({
                success: false,
                error: "Please provide a valid email address."
            });
        }

        // Validate password strength (minimum 8 characters)
        if (password.length < 8) {
            return res.status(400).send({
                success: false,
                error: "Password must be at least 8 characters long."
            });
        }

        // Validate phone number (only digits and reasonable length)
        const phoneRegex = /^[0-9]{10}$/; // assuming 10-digit phone number
        if (!phoneRegex.test(phone)) {
            return res.status(400).send({
                success: false,
                error: "Please provide a valid 10-digit phone number."
            });
        }

        // Validate social_links (ensure it's a valid URL or array of URLs)
        try {
            if (Array.isArray(social_links)) {
                social_links.forEach(link => {
                    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]+)*\/?$/;
                    if (!urlRegex.test(link)) {
                        throw new Error("Invalid URL in social_links");
                    }
                });
            } else {
                return res.status(400).send({
                    success: false,
                    error: "social_links should be an array of valid URLs."
                });
            }
        } catch (err) {
            return res.status(400).send({
                success: false,
                error: err || "something went wrong while evaluating the social links"
            });
        }

        const saltRounds = 10;
        // Hash password asynchronously
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newAdmin = await MyData.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role,
            social_links: JSON.stringify(social_links),
            profile_resume: resume,
            bio,
        });

        return res.status(200).send({
            success: true,
            data: newAdmin,
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error || "something went wrong while creating admin",
        });
    }
};

const updateAdminController = async (req, res) => {
    try {
        const { email, name, phone, role, social_links, resume, bio } = req.body;

        // Ensure email is provided to identify the record
        if (!email) {
            return res.status(400).send({
                success: false,
                error: "Please provide the email of the admin to update."
            });
        }

        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                success: false,
                error: "No admin found with the provided email."
            });
        }

        const updates = {};
        if (name) updates.name = name;
        if (phone) updates.phone = phone;
        if (role) updates.role = role;
        if (social_links) updates.social_links = JSON.stringify(social_links);
        if (resume) updates.profile_resume = resume;
        if (bio) updates.bio = bio;

        //return if there are no updates
        if (Object.keys(updates).length === 0) {
            return res.status(400).send({
                success: false,
                error: "At least one field (other than password) must be provided for updating."
            });
        }

        const updatedAdmin = await admin.update(updates);

        return res.status(200).send({
            success: true,
            data: updatedAdmin
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error || "something went wrong while updating the admin data"
        });
    }
};

const updatePasswordController = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        // Ensure all required fields are provided
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).send({
                success: false,
                error: "Please provide email, new password, and confirm password."
            });
        }

        // Validate that the new password and confirm password match
        if (newPassword !== confirmPassword) {
            return res.status(400).send({
                success: false,
                error: "The new password and confirmation password must match."
            });
        }

        // Validate the new password strength
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(newPassword)) {
            return res.status(400).send({
                success: false,
                error: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            });
        }

        // Check if the email exists in the database
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                success: false,
                error: "No admin found with the provided email."
            });
        }

        const saltRounds = 10;

        // Hash password asynchronously
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await admin.update({ password: hashedPassword });

        user.password = undefined;

        return res.status(200).send({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error || "something went wrong while updating password"
        });
    }
};

const forgetPasswordController = async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                success: true,
                error: "admin not found"
            });
        }

        // Generate OTP
        const otp = generateOTP();
        const otpExpiry = new Date();

        // OTP valid for 10 minutes
        otpExpiry.setMinutes(otpExpiry.getMinutes() + 10);

        admin.otp = otp;
        admin.otp_expiration = otpExpiry;
        await admin.save();

        // Send OTP to user email
        const data = await sendOTPEmail(email, otp);

        return res.status(200).send({
            success: false,
            data: data
        });
    } catch (error) {

        return res.status(500).send({
            success: false,
            error: error || "something went wrong while resetting password" 
        });
    }
};

const resetPasswordController = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    try {
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                success: false,
                error: "Email not found."
            });
        }

        if (admin.otp !== parseInt(otp, 10)) {
            return res.status(400).send({
                success: false,
                error: "Invalid OTP."
            });
        }

        if (new Date() > new Date(admin.otp_expiration)) {
            return res.status(400).send({
                success: false,
                error: "OTP has expired."
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds)

        // Update password
        admin.password = hashedPassword;
        admin.otp = null;
        admin.otpExpiry = null;
        const updatedData = await admin.save();

        return res.status(200).send({ 
            success: false,
            data: updatedData 
        })
    } catch (error) {
        return res.status(500).send({ 
            success: false,
            error: error || "something went wrong while resetting password"
        });
    }
}

module.exports = {
    getAdminDataController,
    createAdminController,
    updateAdminController,
    updatePasswordController,
    forgetPasswordController,
    resetPasswordController
}