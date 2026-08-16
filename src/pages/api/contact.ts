import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Standard Astro way to read environment variables
    const apiKey = import.meta.env.RESEND_API_KEY;
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Resend API Key is missing on the Vercel server.' 
        }), 
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const data = await request.formData();
    
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: ['sopheaktun.tsp@gmail.com'],
      subject: subject || `New Portfolio Message from ${name}`,
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
      return new Response(JSON.stringify({ error: `Resend Error: ${error.message}` }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: `Server crash: ${error.message || 'Unknown error'}` }), { status: 500 });
  }
};