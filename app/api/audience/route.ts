import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_SERVER;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const USERNAME = process.env.MAILCHIMP_USERNAME;

export async function POST(req: Request) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {

    const body = await req.json();

    if (!body.email_address) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${USERNAME}:${API_KEY}`),
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();

    if (!response.ok) {
      try {
        const errorJson = JSON.parse(responseText);
        return NextResponse.json(
          {
            error: errorJson.title || "Subscription failed",
            details: errorJson.detail || "Unknown error",
          },
          { status: response.status }
        );
      } catch {
        return NextResponse.json(
          {
            error: "Subscription failed",
            details: responseText,
          },
          { status: response.status }
        );
      }
    }

    const result = JSON.parse(responseText);
    return NextResponse.json(
      { message: "Subscription successful!", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
