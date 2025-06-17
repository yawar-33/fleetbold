import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_URL = process.env.API_URL;
const CUSTOM_AUTH_TOKEN = process.env.CUSTOM_AUTH_TOKEN;

export async function POST(request: Request) {
  try {
    // Parse the request body to get the hash
    const { hash } = await request.json();
    console.log("Hash:", hash);

    if (!hash) {
      return NextResponse.json(
        { error: "Hash is required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_URL}/v2/vehicle/booking/report-view/${hash}`, {
    // const response = await fetch(`${API_URL}/vehicle/booking/report-view/${hash}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Custom ${CUSTOM_AUTH_TOKEN}`,
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch booking report",
          details: await response.text()
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(JSON.stringify(data))
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching booking report:", error);
    return NextResponse.json(
      {
        error: "Something went wrong",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}