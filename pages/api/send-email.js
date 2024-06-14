// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from <strong>${name}</strong> (${email})</p><p>${message}</p>`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
