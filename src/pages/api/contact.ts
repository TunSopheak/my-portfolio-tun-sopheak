import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  
  const name = String(data.get('name') || '');
  const email = String(data.get('email') || '');
  const subject = String(data.get('subject') || '');
  const message = String(data.get('message') || '');

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  try {
    // IMPORTANT: For now, 'onboarding@resend.dev' is the ONLY allowed 'from' address 
    // unless you buy and verify a custom domain on Resend.
    const { data: emailData, error } = await resend.emails.send({
      from: 'Tun Sopheak Portfolio <onboarding@resend.dev>', 
      to: ['sopheaktun.tsp@gmail.com'],
      subject: subject || `New Portfolio Message from ${name}`,
      // Includes the visitor's real email inside the body so you can reply to them!
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Visitor Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};