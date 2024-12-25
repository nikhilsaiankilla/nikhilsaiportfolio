const { MyData } = require('../model/adminModel');
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation checks
        if (!email || !password) {
            return res.status(400).send({
                message: "Missing required fields",
                error: "Email and password are required."
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

        const user = await MyData.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({
                message: "failed",
                error: "user not found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({
                message: "failed",
                error: "invalid credentials"
            })
        }

        const token = JWT.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).send({
            message: "success",
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        });

    } catch (error) {
        console.error("Error in adminLoginController:", error);
        return res.status(500).send({
            message: "failed",
            error: error.message || "Internal Server Error"
        });
    }
}

module.exports = { adminLoginController }