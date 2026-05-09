export type EndorseFormData = {
  brand: string;
  name: string;
  email: string;
  phone: string;
  platforms: string[];
  contentType: string;
  budget: string;
  message: string;
};

export function buildEmailHtml(data: EndorseFormData): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 12px;font-size:13px;color:#6b7280;width:140px;vertical-align:top;border-bottom:1px solid #f3f4f6">${label}</td><td style="padding:8px 12px;font-size:13px;color:#111827;border-bottom:1px solid #f3f4f6">${value}</td></tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);max-width:600px;width:100%">

        <!-- Header -->
        <tr><td style="background:#07334c;padding:24px 32px">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="background:#1a8fc8;border-radius:6px;padding:6px 10px;margin-right:12px">
              <span style="color:#07334c;font-weight:900;font-size:14px">J5</span>
            </td>
            <td style="padding-left:10px;color:#ffffff;font-size:20px;font-weight:700">
              Jalur<span style="color:#4ab3e8">5</span>
            </td>
          </tr></table>
          <p style="margin:12px 0 0;color:#93c5fd;font-size:13px">Permintaan Endorse Baru</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:24px 32px">
          <h2 style="margin:0 0 4px;font-size:20px;color:#07334c">${escHtml(data.brand)}</h2>
          <p style="margin:0 0 20px;font-size:13px;color:#6b7280">Diterima pada ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
            ${row("Nama PIC", data.name)}
            ${row("Email", data.email)}
            ${row("WhatsApp", data.phone)}
            ${row("Platform", data.platforms.join(" · "))}
            ${row("Jenis Konten", data.contentType)}
            ${row("Budget", data.budget)}
          </table>

          ${
            data.message
              ? `<div style="margin-top:16px;background:#f0f9ff;border-left:3px solid #1a8fc8;border-radius:0 8px 8px 0;padding:14px 16px">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1271a6;text-transform:uppercase;letter-spacing:.05em">Deskripsi</p>
                  <p style="margin:0;font-size:14px;color:#374151;line-height:1.6">${escHtml(data.message)}</p>
                </div>`
              : ""
          }

          <div style="margin-top:24px;text-align:center">
            <a href="https://wa.me/6287855502016?text=${encodeURIComponent(`Halo! Saya ingin membalas inquiry dari ${data.brand} (${data.email}).`)}"
               style="display:inline-block;background:#25D366;color:#ffffff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none">
              Balas via WhatsApp
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f3f4f6;text-align:center">
          <p style="margin:0;font-size:12px;color:#9ca3af">Email ini dikirim otomatis dari form endorse jalur5.id</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
