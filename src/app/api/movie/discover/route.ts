import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page");
  const language = req.nextUrl.searchParams.get("language");
  const watchMonetization = req.nextUrl.searchParams.get(
    "with_watch_monetization_types"
  );
  const mediaType = req.nextUrl.searchParams.get("media_type");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/discover/${
      mediaType || "movie"
    }?language=${language || "en-US"}&page=${
      page || 1
    }&with_watch_monetization_types=${
      watchMonetization || "free"
    }&sort_by=revenue.desc`,
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
}
