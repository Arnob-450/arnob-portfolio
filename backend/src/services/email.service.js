import { Resend } from "resend";
import env from "../config/env.js";

let resendClient = null;

function getResendClient() {
  if (!resendClient) {
    if (!env.RESEND_API_KEY) {
      throw new Error("[Email Service] RESEND_API_KEY is not configured.");
    }
    resendClient = new Resend(env.RESEND_API_KEY);
  }
  return resendClient;
}

/**
 * Escape HTML characters to prevent XSS / HTML injection in the email body.
 */
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Send an email notification through Resend for a contact form submission.
 * @param {Object} params
 * @param {string} params.name - Visitor name
 * @param {string} params.email - Visitor email (used as reply-to)
 * @param {string} params.subject - Visitor subject
 * @param {string} params.message - Visitor message content
 * @returns {Promise<{ success: boolean, resendId?: string, error?: string }>}
 */
export async function sendContactNotification({ name, email, subject, message }) {
  try {
    const resend = getResendClient();

    const safeName = escapeHTML(name);
    const safeEmail = escapeHTML(email);
    const safeSubject = escapeHTML(subject);
    const safeMessage = escapeHTML(message).replace(/\n/g, "<br/>");

    // Clean single-line subject for email header safety (protect against header injection)
    const sanitizedEmailSubject = `[Portfolio Contact] ${subject.replace(/[\r\n]+/g, " ").trim()}`;

    // Sender from environment
    const fromAddress = env.EMAIL_FROM.includes("<")
      ? env.EMAIL_FROM
      : `Portfolio Notification <${env.EMAIL_FROM}>`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #09090b; color: #fafafa; border-radius: 12px; border: 1px solid #27272a;">
        <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #a78bfa; margin: 0 0 4px 0; font-size: 20px;">New Portfolio Contact Submission</h2>
          <p style="color: #a1a1aa; font-size: 13px; margin: 0;">Received through your personal portfolio website</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; width: 100px; font-weight: 600;">From:</td>
            <td style="padding: 8px 0; color: #fafafa; font-size: 14px; font-weight: 500;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;">
              <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; font-weight: 600;">Subject:</td>
            <td style="padding: 8px 0; color: #fafafa; font-size: 14px;">${safeSubject}</td>
          </tr>
        </table>

        <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
          <div style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 8px;">Message Content:</div>
          <div style="color: #fafafa; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
        </div>

        <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 12px; color: #71717a; text-align: center;">
          <p style="margin: 0;">You can reply directly to this email to respond to <strong>${safeName}</strong> (${safeEmail}).</p>
        </div>
      </div>
    `;

    const textContent = `
New Contact Message Received:
-----------------------------
From: ${name} (${email})
Subject: ${subject}

Message:
${message}

-----------------------------
Reply-To: ${email}
    `.trim();

    const result = await resend.emails.send({
      from: fromAddress,
      to: [env.RECEIVER_EMAIL],
      replyTo: email,
      subject: sanitizedEmailSubject,
      html: htmlContent,
      text: textContent,
    });

    if (result.error) {
      console.error("[Email Service] Resend API returned error:", result.error);
      return {
        success: false,
        error: result.error.message || "Failed to deliver email through Resend.",
      };
    }

    return {
      success: true,
      resendId: result.data?.id,
    };
  } catch (error) {
    console.error("[Email Service] Unexpected error sending email:", error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

export default {
  sendContactNotification,
};
