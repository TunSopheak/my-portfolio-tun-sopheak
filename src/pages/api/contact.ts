import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // BYPASS TEST: Returning a success immediately
  return new Response(JSON.stringify({ success: true, message: "Bypass successful!" }), { status: 200 });
};