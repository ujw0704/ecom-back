import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mail = express.Router();

const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,

  },
  debug: true
};

const transporter = nodemailer.createTransport(emailConfig);

mail.post('/register', async (req, res) => {
  try {
   
    if (req.body.shouldSendEmail) {
      const mailOptions = {
        from: 'ujwalsharma571@gmail.com',
        to: req.body.email,
        subject: 'Thank you for registering',
        text: 'You have successfully registered.',
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(201).json('Registration successful.');
  } catch (error) {
    console.error(error);
    res.status(500).json('Registration failed.');
  }
});

export default mail;

