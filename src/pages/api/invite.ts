import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.body;

  // Check if the user is authenticated using NextAuth.js


  try {
    // Create a Nodemailer transport with your Gmail credentials (same as in NextAuth.js)
    const emailServer = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.USER_EMAIL, // Your Gmail email address
        pass: process.env.USER_PASS, // The app password generated for your Gmail account
      },
    });

    // Send the invitation email
    await emailServer.sendMail({
      from: process.env.USER_EMAIL, // Your Gmail email address
      to: process.env.USER_EMAIL,
      subject: 'Invitation to join our app',
      text: 'You are invited to join our app. Click the link to sign up.',
      html: '<p>You are invited to join our app. Click the link to sign up.</p>',
    });

    return res.status(200).json({ message: 'Invitation sent successfully' });
  } catch (error) {
    console.error('Error sending invitation email:', error);
    return res.status(500).json({ error: 'Failed to send invitation email' });
  }
}
