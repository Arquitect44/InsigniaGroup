import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, inquiryType, message } = body;

    // Here you would integrate with an email service like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - Or forward to a form service like Formspree

    // For now, we'll log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      inquiryType,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, send email here
    // Example with SendGrid/Resend:
    // await sendEmail({
    //   to: 'info@insigniagroup.com',
    //   subject: `New Contact Form: ${inquiryType}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
