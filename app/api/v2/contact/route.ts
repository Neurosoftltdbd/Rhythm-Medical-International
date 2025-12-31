import { sendEmail } from "@/utility/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await request.json();
    console.log(data);
    sendEmail(
      "nurhossainrepon7248@gmail.com, rhythmmedicalint@gmail.com, rhythmmedicalinternational@gmail.com, mijanur.sumon84@gmail.com, masud.spondon87@gmail.com",
      "New Message from Rhythm Medical International Website",
      `<p>Name: ${data.name}</p>
      <p>Phone: ${data.phone}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>`
    );
    return NextResponse.json({
      status: "success",
      message: "Message sent successfully. We will get back to you soon.",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Something went wrong. Please try again later.",
      error: error,
    });
  }
}
