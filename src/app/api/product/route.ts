import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const idReq = req.nextUrl.searchParams.get("id");
  //   if (idReq) {
  //     const detailProduct = data.find((prd) => prd.id === Number(idReq));
  //     if (detailProduct) {
  //       return NextResponse.json(
  //         { message: "Success", data: detailProduct },
  //         { status: 200 }
  //       );
  //     } else {
  //       return NextResponse.json(
  //         { message: "Not found", data: [] },
  //         { status: 404 }
  //       );
  //     }
  //   } else {
  //     return NextResponse.json(
  //       { message: "Success", data: data },
  //       { status: 200 }
  //     );
  //   }
  return NextResponse.json(
    { message: process.env.TMDB_API_READ_ACCESS_TOKEN },
    { status: 200 }
  );
}
