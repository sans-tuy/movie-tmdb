import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/genre/movie/list?language=en`,
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
}
