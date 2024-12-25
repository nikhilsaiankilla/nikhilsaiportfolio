const { MyData } = require('../model/adminModel');
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation checks
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                error: "Email and password are required."
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

        const user = await MyData.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({
                success: false,
                error: "user not found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({
                success: false,
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
        return res.status(500).send({
            success: false,
            error: error || "something went wrong while logging to your account"
        });
    }
}

module.exports = { adminLoginController }