import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";
import Vibrant from "node-vibrant";

export async function GET(req: NextRequest) {
  const idMovie = req.nextUrl.searchParams.get("idMovie");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${idMovie}?append_to_response=recommendations%2Cvideos%2Ckeywords%2Clists%2Creviews%2Ccredits&language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.status_message },
        { status: data.status }
      );
    }

    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${data.backdrop_path}`;
    const palette = await Vibrant.from(imageUrl).getPalette();
    const dominantColor = palette?.Vibrant;
    const rgba = `${dominantColor?.rgb[0]}, ${dominantColor?.rgb[1]}, ${dominantColor?.rgb[2]}`;
    const gradientStyle = `linear-gradient(to right, rgba(${rgba}, 1) calc((50vw - 170px) - 340px), rgba(${rgba}, 0.44) 30%, rgba(${rgba}, 0.44) 100%)`;

    return NextResponse.json({ ...data, gradientStyle }, { status: 200 });
  } catch (error: Error | any) {
    return NextResponse.json(
      { message: `Error fetching movie data: ${error.message}` },
      { status: 500 }
    );
  }
}
