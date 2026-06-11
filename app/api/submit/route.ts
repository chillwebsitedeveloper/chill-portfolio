import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, type } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey && apiKey !== "re_xxxxxxxxxxxx") {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Chill Dev <onboarding@resend.dev>",
        to: "contact.chillweb@gmail.com",
        subject: `New Project Inquiry: ${type || "General"}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:24px;">
            <h2 style="font-size:18px;font-weight:600;color:#1A1A1A;margin:0 0 16px 0;">New Project Inquiry</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1A1A1A;">
              <tr><td style="padding:8px 0;color:#6B6B6B;width:80px;">Name</td><td style="padding:8px 0;font-weight:500;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6B6B6B;">Email</td><td style="padding:8px 0;font-weight:500;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#6B6B6B;">Need</td><td style="padding:8px 0;font-weight:500;">${type || "Not specified"}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #E8E7E4;margin:16px 0;" />
            <p style="font-size:12px;color:#6B6B6B;margin:0;">Sent from chill.dev contact form</p>
          </div>
        `,
      });
    } else {
      console.log("[DEV] Form submission:", { name, email, type });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}