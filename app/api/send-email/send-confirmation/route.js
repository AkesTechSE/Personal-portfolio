

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { clientEmail, clientName } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Confirmation email to client
    const mailOptionsToClient = {
      from: process.env.EMAIL_USER,
      to: clientEmail,
      subject: 'Thank you for contacting Aklilu Abera',
      html: `
        <h3>Hi ${clientName},</h3>
        <p>Thank you for reaching out! I've received your message and will get back to you As soon as possible.</p>
        <p>Looking forward to connecting with you!</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Aklilu Abera</strong></p>
        <p>Full-Stack & AI Engineer</p>
        <p>Email: akililuabera44@gmail.com</p>
        <p>Phone: +251 909 630346</p>
      `,
    };

    await transporter.sendMail(mailOptionsToClient);

    return NextResponse.json({ message: 'Confirmation email sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json({ error: 'Error sending confirmation email' }, { status: 500 });
  }
}