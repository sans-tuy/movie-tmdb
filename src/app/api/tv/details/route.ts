import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const idTv = req.nextUrl.searchParams.get("idTv");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tv/${idTv}?append_to_response=recommendations%2Cvideos%2Cimages%2Ccredits%2Ckeywords%2Clists`,
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
