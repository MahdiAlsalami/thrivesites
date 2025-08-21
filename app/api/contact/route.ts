import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_FROM = "onboarding@resend.dev";           
const RESEND_TO   = "mahdialsalami0@gmail.com";        

export async function POST(req: Request) {
  try {
    const { name, email, business, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing name or email" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      replyTo: email,
      subject: `New ThriveSites lead: ${business || "No business name"}`,
      text: `Name: ${name}
Email: ${email}
Business: ${business || "-"}

Message:
${message || "-"}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
