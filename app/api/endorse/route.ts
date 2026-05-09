import { Resend } from "resend";
import { buildEmailHtml, type EndorseFormData } from "./emailTemplate";

export async function POST(request: Request): Promise<Response> {
  let data: EndorseFormData;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!data.brand || !data.email || !Array.isArray(data.platforms) || data.platforms.length === 0) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Send email via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Jalur5 Form <onboarding@resend.dev>",
      to: "jalur5contact@gmail.com",
      replyTo: data.email,
      subject: `[Endorse Inquiry] ${data.brand}`,
      html: buildEmailHtml(data),
    });
  } catch (err) {
    console.error("[endorse] Resend error:", err);
    return Response.json({ error: "Gagal mengirim email. Coba lagi." }, { status: 500 });
  }

  // Log to Google Sheets — failure does NOT block the email success response
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    try {
      await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          brand: data.brand,
          name: data.name,
          email: data.email,
          phone: data.phone,
          platforms: data.platforms.join(", "),
          contentType: data.contentType,
          budget: data.budget,
          message: data.message,
        }),
      });
    } catch (err) {
      console.error("[endorse] Google Sheets webhook error:", err);
    }
  }

  return Response.json({ success: true });
}
