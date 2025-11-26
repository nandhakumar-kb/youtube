const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api', (req, res) => {
    res.json({ status: 'API is running' });
});

// Routes
app.post('/api/newsletter', async (req, res) => {
    console.log('Newsletter endpoint hit');
    console.log('Environment check:', {
        hasHost: !!process.env.SMTP_HOST,
        hasPort: !!process.env.SMTP_PORT,
        hasUser: !!process.env.SMTP_USER,
        hasPass: !!process.env.SMTP_PASS
    });

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    try {
        // Create transporter on demand
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
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

// Export the app for Vercel
module.exports = app;