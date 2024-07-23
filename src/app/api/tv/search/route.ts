import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const page = req.nextUrl.searchParams.get("page");
  const query = req.nextUrl.searchParams.get("query");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/search/tv?language=en-US&page=${page}&query=${query}`,
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
      { status: data.status }
    );
  }
});
