const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nikhilsaiankilla@gmail.com', 
        pass: '******' 
    }
});

const sendMessageController = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Send email to yourself
        const mailToSelf = {
            from: email,
            to: 'nikhilsaiankilla@gmail.com',
            subject: 'New Message from Portfolio Contact Form',
            text: `You received a new message from:

            Name: ${name}
            Email: ${email}
            Message: ${message}`
        };

        await transporter.sendMail(mailToSelf);

        // Send confirmation email to the user
        const mailToUser = {
            from: 'nikhilsaiankilla@gmail.com',
            to: email,
            subject: 'Message Received',
            text: `Hello ${name},
        
                    Thank you for reaching out! I have received your message: 
                    
                    "${message}"
  
                    I will contact you soon.
  
                    Best regards,
                    Nikhil Sai Ankilla`
        };

        await transporter.sendMail(mailToUser);

        // Respond with success message
        res.status(200).json({ message: 'Your message has been sent. Nikhil will contact you soon. Thank you!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
}

module.exports = { sendMessageController };