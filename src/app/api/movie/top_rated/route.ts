import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page");
  const language = req.nextUrl.searchParams.get("language");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/top_rated?language=${
      language ?? "en-US"
    }&page=${page ?? 1}`,
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
    return NextResponse.json({ message: "There is an error" }, { status: 400 });
  }
}
