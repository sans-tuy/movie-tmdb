import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const timeWindow = req.nextUrl.searchParams.get("time_window");
  const language = req.nextUrl.searchParams.get("language") || "en-US";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/trending/all/${timeWindow}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  if (res.ok) {
    return NextResponse.json(data, { status: 200 });
  } else {
    return NextResponse.json(
      { message: data.status_message },
      { status: res.status }
    );
  }
}
