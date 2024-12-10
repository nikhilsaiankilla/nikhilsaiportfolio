const bcrypt = require('bcrypt');

const { generateOTP, sendOTPEmail } = require('../utils/otpUtils')

const { MyData } = require('../model/adminModel')

const getAdminDataController = async (req, res) => {
    try {
        const data = await MyData.findAll();

        return res.status(500).send({
            message: "success",
            data: data
        })
    } catch (error) {
        return res.status(500).send({
            message: "failed",
            err: error || "error in adminModel"
        })
    }
};

const createAdminController = async (req, res) => {
    try {
        const { name, email, password, phone, role, social_links, resume, bio } = req.body;

        // Validation checks
        if (!name || !email || !password || !phone || !role || !social_links) {
            return res.status(400).send({
                message: "Missing required fields",
                error: "Name, email, password, phone, role, and social_links are required."
            });
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({
                message: "Invalid email format",
                error: "Please provide a valid email address."
            });
        }

        // Validate password strength (minimum 8 characters)
        if (password.length < 8) {
            return res.status(400).send({
                message: "Weak password",
                error: "Password must be at least 8 characters long."
            });
        }

        // Validate phone number (only digits and reasonable length)
        const phoneRegex = /^[0-9]{10}$/; // assuming 10-digit phone number
        if (!phoneRegex.test(phone)) {
            return res.status(400).send({
                message: "Invalid phone number",
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
                    message: "Invalid social_links format",
                    error: "social_links should be an array of valid URLs."
                });
            }
        } catch (err) {
            return res.status(400).send({
                message: "Invalid social_links",
                error: err.message
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
            message: "Admin created successfully",
            data: newAdmin,
        });

    } catch (error) {
        return res.status(500).send({
            message: "Failed",
            err: error
        });
    }
};

const updateAdminController = async (req, res) => {
    try {
        const { email, name, phone, role, social_links, resume, bio } = req.body;

        // Ensure email is provided to identify the record
        if (!email) {
            return res.status(400).send({
                message: "Email is required",
                error: "Please provide the email of the admin to update."
            });
        }

        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                message: "Admin not found",
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
                message: "No valid fields to update",
                error: "At least one field (other than password) must be provided for updating."
            });
        }

        const updatedAdmin = await admin.update(updates);

        return res.status(200).send({
            message: "Admin data updated successfully",
            data: updatedAdmin
        });

    } catch (error) {
        return res.status(500).send({
            message: "Failed",
            error: error.message || error
        });
    }
};

const updatePasswordController = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        // Ensure all required fields are provided
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).send({
                message: "All fields are required",
                error: "Please provide email, new password, and confirm password."
            });
        }

        // Validate that the new password and confirm password match
        if (newPassword !== confirmPassword) {
            return res.status(400).send({
                message: "Passwords do not match",
                error: "The new password and confirmation password must match."
            });
        }

        // Validate the new password strength
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(newPassword)) {
            return res.status(400).send({
                message: "Invalid password",
                error: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            });
        }

        // Check if the email exists in the database
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                message: "Admin not found",
                error: "No admin found with the provided email."
            });
        }

        const saltRounds = 10;

        // Hash password asynchronously
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await admin.update({ password: hashedPassword });

        return res.status(200).send({
            message: "Password updated successfully"
        });
    } catch (error) {
        return res.status(500).send({
            message: "Failed",
            error: error
        });
    }
};

const forgetPasswordController = async (req, res) => {
    const { email } = req.body;

    try {
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send('Email not found.');
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

        return res.status(200).send({ message: "success", data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "failed",
            error: error.message || error
        });
    }
};

const resetPasswordController = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    try {
        const admin = await MyData.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).send({
                message : "failed",
                error : "Email not found."
            });
        }

        if (admin.otp !== parseInt(otp, 10)) {
            return res.status(400).send({
                message : "failed",
                error : "Invalid OTP."
            });
        }

        if (new Date() > new Date(admin.otp_expiration)) {
            return res.status(400).send({
                message : "failed",
                error : "OTP has expired."
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds)

        // Update password
        admin.password = hashedPassword;
        admin.otp = null;
        admin.otpExpiry = null;
        const updatedData = await admin.save();

        return res.status(200).send({ message: "success", data: updatedData })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "failed", error: error.message || error });
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