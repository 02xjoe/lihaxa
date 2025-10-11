import dotenv from 'dotenv';
import nodemailer from 'nodemailer';


dotenv.config();


async function sendTestEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself first
      subject: 'Zoho SMTP Test',
      html: `<p>This is a test email from Node.js using Zoho SMTP.</p>`
    });

    console.log('✅ Email sent:', info.messageId);
  } catch (err) {
    console.error('❌ Error sending email:', err);
  }
}

sendTestEmail();
