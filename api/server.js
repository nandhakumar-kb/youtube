const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));
app.use(express.json());

// Email Transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify transporter connection
transporter.verify(function (error, success) {
    if (error) {
        console.log('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server is ready to take our messages');
    }
});

// Routes
app.post('/api/newsletter', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    try {
        // 1. Send "Thanks for Subscribing" email to the user
        const mailOptions = {
            from: process.env.FROM_EMAIL || process.env.SMTP_USER,
            to: email,
            subject: 'Thanks for Subscribing!',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to the Newsletter!</h2>
          <p>Hi there,</p>
          <p>Thanks for subscribing to my newsletter. I'm excited to share my story with you.</p>
          <p>Stay tuned for updates!</p>
          <br>
          <p>Best regards,</p>
          <p>My Story</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        console.log(`Newsletter subscription email sent to ${email}`);

        res.status(200).json({ success: true, message: 'Thanks for subscribing! Check your inbox.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again later.' });
    }
});

// // Export the app for Vercel
// module.exports = app;

// // Only listen if run directly (local dev)
// if (require.main === module) {
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// }
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});