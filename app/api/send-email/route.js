// app/api/send-email/route.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    const msg = {
      to: email, // Change to your recipient
      from: "vishalkumar@solvative.com", // Change to your verified sender
      subject: "New Contact Form Submission",
      templateId: process.env.TEMPLATE_ID,
      text: `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Company: ${company}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };

    await sgMail.send(msg);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500 }
    );
  }
}
