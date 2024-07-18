import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/search/multi?language=en-US&page=1&include_adult=false&query=${search}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );
  const searchResult = await res.json();
  if (res.ok) {
    return NextResponse.json(searchResult, { status: 200 });
  } else {
    return NextResponse.json(
      { message: searchResult.status_message },
      { status: searchResult.status }
    );
  }
}
