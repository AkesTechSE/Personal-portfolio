import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to you (Aklilu)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['akililuabera44@gmail.com'], // Your email
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #667eea; }
                .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Portfolio Contact</h1>
                    <p>You have a new message from your portfolio website</p>
                </div>
                <div class="content">
                    <div class="field">
                        <span class="label">Name:</span> ${name}
                    </div>
                    <div class="field">
                        <span class="label">Email:</span> ${email}
                    </div>
                    <div class="field">
                        <span class="label">Subject:</span> ${subject}
                    </div>
                    <div class="field">
                        <span class="label">Message:</span>
                        <div class="message">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to the client
    await resend.emails.send({
      from: 'Aklilu Abera <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting me!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .signature { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You for Reaching Out!</h1>
                </div>
                <div class="content">
                    <p>Hi <strong>${name}</strong>,</p>
                    
                    <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you As soon as possible.</p>
                    
                    <p><strong>Here's a summary of your inquiry:</strong></p>
                    <ul>
                        <li><strong>Subject:</strong> ${subject}</li>
                        <li><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</li>
                    </ul>
                    
                    <p>I look forward to connecting with you and discussing how we can work together!</p>
                    
                    <div class="signature">
                        <p>Best regards,</p>
                        <p><strong>Aklilu Abera</strong></p>
                        <p>Full-Stack & AI Engineer</p>
                        <p>📧 akililuabera44@gmail.com</p>
                        <p>📱 +251 909 630346</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}