import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_URL = process.env.API_URL;
const CUSTOM_AUTH_TOKEN = process.env.CUSTOM_AUTH_TOKEN;

export async function POST(request: Request) {
  try {
    // Parse the request body to get the reportId
    const { hash } = await request.json();
    console.log("Hash:", hash);

    if (!hash) {
      return NextResponse.json(
        { error: "Report ID is required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_URL}/vehicle/trip/report-view/${hash}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Custom ${CUSTOM_AUTH_TOKEN}`,
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { 
          error: "Failed to fetch trip report", 
          details: await response.text() 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching trip report:", error);
    return NextResponse.json(
      { 
        error: "Something went wrong", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}