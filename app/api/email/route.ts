import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_URL = process.env.API_URL;
const CUSTOM_AUTH_TOKEN = process.env.CUSTOM_AUTH_TOKEN;

export async function POST(req: Request) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Parse the request body as JSON
    const body = await req.json();
    
    if (!body.template || !body.variables || !body.recipients || !body.subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const response = await fetch(`${API_URL}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Custom ${CUSTOM_AUTH_TOKEN}`,
      },
      body: JSON.stringify(body),
    });
    

    const responseText = await response.text();

    if (!response.ok) {
      try {
        const errorJson = JSON.parse(responseText);
        return NextResponse.json(
          {
            error: errorJson.error || "Email sending failed",
            details: errorJson.details || "Unknown error",
          },
          { status: response.status }
        );
      } catch {
        return NextResponse.json(
          {
            error: "Email sending failed",
            details: responseText,
          },
          { status: response.status }
        );
      }
    }

    const result = JSON.parse(responseText);
    return NextResponse.json(
      { message: "Email sent successfully!", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
