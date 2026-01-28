import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, type } = await request.json();

    const inquiryTypes: Record<string, string> = {
      general: "General Inquiry",
      quote: "Request a Quote",
      partner: "Partnership Inquiry",
      support: "Support Request",
    };

    const { error } = await resend.emails.send({
      from: "Goldman Merchant Services <noreply@goldmanmerchantservices.com>",
      to: ["info@goldmanmerchantservices.com"],
      replyTo: email,
      subject: `${inquiryTypes[type] || "Contact Form"}: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Goldman Merchant Services</h1>
                    </td>
                  </tr>
                  <!-- Accent Bar -->
                  <tr>
                    <td style="background-color: #d97706; height: 4px;"></td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 24px 0; color: #0f172a; font-size: 20px; font-weight: 600;">New Contact Form Submission</h2>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Inquiry Type</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${inquiryTypes[type] || type}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Name</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Email</span><br>
                            <a href="mailto:${email}" style="color: #d97706; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Phone</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${phone}</span>
                          </td>
                        </tr>
                        ` : ""}
                        ${company ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Company</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${company}</span>
                          </td>
                        </tr>
                        ` : ""}
                      </table>

                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                        <span style="color: #64748b; font-size: 14px; display: block; margin-bottom: 8px;">Message</span>
                        <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>

                      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #d97706; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 14px;">Reply to ${name}</a>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0; color: #64748b; font-size: 13px;">This message was sent from the contact form at goldmanmerchantservices.com</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
