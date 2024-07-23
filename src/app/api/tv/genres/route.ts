import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/genre/tv/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      },
    }
  );

  if (res.ok) {
    const genres = await res.json();
    return NextResponse.json({ genres: genres.genres }, { status: 200 });
  } else {
    return NextResponse.json(
      { genres: [], message: "There is an error" },
      { status: 400 }
    );
  }
});
