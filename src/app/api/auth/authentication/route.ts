import { NextResponse } from "next/server";
import useSWR from "swr";

interface ILogin {
  success: true;
  status_code: number;
  status_message: string;
}

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/authentication`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN_AUTH}`,
      },
    }
  );
  const authenticationServer: ILogin = await res.json();
  if (res.ok) {
    return NextResponse.json(
      { message: authenticationServer.status_message },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: authenticationServer.status_message },
      { status: 401 }
    );
  }
}
