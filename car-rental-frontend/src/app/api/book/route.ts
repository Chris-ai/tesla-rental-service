import { pages } from "@/app/pages";
import { CustomResponse, ReservationDto } from "@/app/types";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") return new NextResponse(null, { status: 403 });

  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_API_URL}/Reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body.reservation),
    });

    const response: CustomResponse<ReservationDto> = await res.json();

    if (response.succeeded) {
      revalidatePath(pages.home);
      return NextResponse.json({
        succeded: response.succeeded,
        message: response.message,
      });
    } else {
      return NextResponse.json({
        succeded: response.succeeded,
        message: response.message,
      });
    }
  } catch (e: unknown) {
    let message = "Unexpected Error";
    if (e instanceof Error) {
      message = e.message;
    }
    return NextResponse.json({ succeded: false, message: message });
  }
}
