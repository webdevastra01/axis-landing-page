import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Email to company
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "youraxisms@gmail.com",
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Message from Axis Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service Interest:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    const emailHtml = `
<div style="font-family: Inter, system-ui, -apple-system, sans-serif; background: #f3f4f6; padding: 40px 0;">

  <!-- Container -->
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #4b006e 0%, #36004f 100%); padding: 32px 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">
        Axis Marketing Solutions
      </h1>
      <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">
        We received your inquiry
      </p>
    </div>

    <!-- Body -->
    <div style="padding: 32px; color: #0a0a0a;">

      <h2 style="margin: 0 0 12px; font-size: 20px; font-weight: 700; color: #0a0a0a;">
        Thank you for reaching out, ${name} 👋
      </h2>

      <p style="margin: 0 0 20px; color: #4a4a4a; font-size: 15px; line-height: 1.7;">
        We've successfully received your inquiry and our marketing team is already reviewing it. Expect a response within 24 hours.
      </p>

      <!-- Subject Card -->
      <div style="background: #f3f4f6; border-left: 4px solid #4b006e; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280;">Service Interest</p>
        <p style="margin: 4px 0 0; font-weight: 600; color: #0a0a0a; font-size: 15px;">${subject}</p>
      </div>

      <!-- Message Box -->
      <div style="background: #ffffff; border: 1px solid #f3f4f6; padding: 16px; border-radius: 8px;">
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280;">
          Your Message
        </p>
        <p style="margin: 0; font-size: 15px; color: #0a0a0a; line-height: 1.7;">
          ${message}
        </p>
      </div>

      <!-- Divider -->
      <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 24px 0;" />

      <!-- Services Preview -->
      <div style="text-align: center; margin-bottom: 20px;">
        <p style="margin: 0 0 12px; font-size: 13px; color: #6b7280;">Our Services</p>
        <div style="display: inline-flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
          <span style="background: #f3f4f6; color: #4b006e; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600;">Social Media</span>
          <span style="background: #f3f4f6; color: #4b006e; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600;">Branding</span>
          <span style="background: #f3f4f6; color: #4b006e; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600;">Advertising</span>
        </div>
      </div>

      <!-- Footer Note -->
      <p style="margin: 0; font-size: 14px; color: #6b7280; text-align: center;">
        Need immediate assistance? Just reply to this email.
      </p>

      <p style="margin: 16px 0 0; font-size: 14px; font-weight: 700; color: #4b006e; text-align: center;">
        — The Axis Team
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #0a0a0a; padding: 20px; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">
        © ${new Date().getFullYear()} Axis Marketing Solutions. All rights reserved.
      </p>
      <p style="margin: 8px 0 0; font-size: 12px; color: #6b7280;">
        youraxisms@gmail.com
      </p>
    </div>

  </div>
</div>
`;

    // 2️⃣ Confirmation email to user
    await transporter.sendMail({
      from: `"Axis Marketing Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry — Axis Marketing Solutions",
      html: emailHtml,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
}