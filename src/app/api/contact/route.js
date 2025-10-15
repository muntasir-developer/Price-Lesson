"use server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(request) {
  console.log("USER:", process.env.EMAIL_USER ? "✅ set" : "❌ missing");
  console.log("PASS:", process.env.EMAIL_PASS ? "✅ set" : "❌ missing");

  try {
    const data = await request.json();
    let { name, email, subject, message } = data;

    // ✅ Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // ✅ Sanitize inputs
    name = validator.escape(name.trim());
    email = validator.normalizeEmail(email.trim());
    subject = subject ? validator.escape(subject.trim()) : "No Subject";
    message = validator.escape(message.trim());

    // ✅ Validate email format
    if (!validator.isEmail(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

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

    // ✅ Prepare mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject,
      text: message,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // ✅ Send email
    const emailSend = await transporter.sendMail(mailOptions);
    console.log("Email sent:", emailSend.messageId);

    return Response.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
