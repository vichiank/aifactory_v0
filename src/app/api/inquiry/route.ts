import { NextResponse } from 'next/server';
import { Resend } from 'resend';

let resendClient: Resend | null = null;

function getResendClient() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error('RESEND_API_KEY is not defined');
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const resend = getResendClient();
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'vnagatara@gmail.com'],
      subject: 'New Inquiry from Portfolio',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00F5FF;">New Contact Inquiry</h2>
          <p><strong>From:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
