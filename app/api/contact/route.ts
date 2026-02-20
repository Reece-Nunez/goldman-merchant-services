import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_TYPES = ["general", "quote", "partner", "support"];
const MIN_SUBMISSION_TIME = 3000; // 3 seconds minimum

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, message, type, _t } = body;

    // Time-based bot check: reject if submitted faster than 3 seconds
    if (_t && Date.now() - _t < MIN_SUBMISSION_TIME) {
      // Silently accept to not reveal detection to bots
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Message must be between 10 and 5000 characters." }, { status: 400 });
    }
    if (!type || !VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: "Invalid inquiry type." }, { status: 400 });
    }
    if (phone && (typeof phone !== "string" || phone.length > 20)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }
    if (company && (typeof company !== "string" || company.length > 100)) {
      return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
    }

    // Sanitize inputs for HTML email
    const sanitize = (str: string) =>
      str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const safeName = sanitize(name.trim());
    const safeEmail = sanitize(email.trim());
    const safePhone = phone ? sanitize(phone.trim()) : "";
    const safeCompany = company ? sanitize(company.trim()) : "";
    const safeMessage = sanitize(message.trim());

    const inquiryTypes: Record<string, string> = {
      general: "General Inquiry",
      quote: "Request a Quote",
      partner: "Partnership Inquiry",
      support: "Support Request",
    };

    const { error } = await resend.emails.send({
      from: "Goldman Merchant Services <noreply@goldmanmerchantservices.com>",
      to: ["info@goldmanmerchantservices.com"],
      replyTo: email.trim(),
      subject: `${inquiryTypes[type] || "Contact Form"}: ${name.trim()}`,
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
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${safeName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Email</span><br>
                            <a href="mailto:${safeEmail}" style="color: #d97706; font-size: 16px; font-weight: 500; text-decoration: none;">${safeEmail}</a>
                          </td>
                        </tr>
                        ${safePhone ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Phone</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${safePhone}</span>
                          </td>
                        </tr>
                        ` : ""}
                        ${safeCompany ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                            <span style="color: #64748b; font-size: 14px;">Company</span><br>
                            <span style="color: #0f172a; font-size: 16px; font-weight: 500;">${safeCompany}</span>
                          </td>
                        </tr>
                        ` : ""}
                      </table>

                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                        <span style="color: #64748b; font-size: 14px; display: block; margin-bottom: 8px;">Message</span>
                        <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                      </div>

                      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                        <a href="mailto:${safeEmail}" style="display: inline-block; background-color: #d97706; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 14px;">Reply to ${safeName}</a>
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
