// Cloudflare Pages Function — POST /api/contact
// Sends the contact form via Resend to nitinroy.hireme@gmail.com

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const esc = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    if (!env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: "Email service not configured" }), { status: 500, headers: cors });
    }

    const ct = request.headers.get("content-type") || "";
    let body: Record<string, string> = {};
    if (ct.includes("application/json")) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      fd.forEach((v, k) => { body[k] = String(v); });
    }

    if (body._honey) return new Response(JSON.stringify({ ok: true }), { headers: cors });

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const budget = (body.budget || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email) {
      return new Response(JSON.stringify({ ok: false, error: "Name and email are required" }), { status: 400, headers: cors });
    }

    const to = env.CONTACT_TO || "nitinroy.hireme@gmail.com";
    const from = env.CONTACT_FROM || "Nr Techworks <onboarding@resend.dev>";
    const subject = `New enquiry from ${name} — Nr Techworks`;

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0f2a1d;max-width:640px">
        <h2 style="margin:0 0 16px;font-family:Georgia,serif">New Enquiry</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;background:#f5f1e8">
          <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(phone) || "—"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${esc(service) || "—"}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${esc(budget) || "—"}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${esc(message).replace(/\n/g, "<br>") || "—"}</td></tr>
        </table>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, html }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(JSON.stringify({ ok: false, error: `Resend ${res.status}: ${errText}` }), { status: 502, headers: cors });
    }

    return new Response(JSON.stringify({ ok: true }), { headers: cors });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: (err as Error).message }), { status: 500, headers: cors });
  }
};