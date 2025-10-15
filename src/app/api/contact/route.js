"use server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(request) {
  console.log("USER:", process.env.EMAIL_USER ? "✅ set" : "❌ missing");
  console.log("PASS:", process.env.EMAIL_PASS ? "✅ set" : "❌ missing");
  try {
    const data = await request.json();
    let { name, email, subject, message } = data;

    // ✅ Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // ✅ Sanitize and validate
    name = validator.escape(name.trim());
    email = validator.normalizeEmail(email.trim());
    subject = subject ? validator.escape(subject.trim()) : "No Subject";
    message = validator.escape(message.trim());

    if (!validator.isEmail(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    // ✅ Check environment variables

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Internal Servers Error" }, { status: 500 });
  }
}
