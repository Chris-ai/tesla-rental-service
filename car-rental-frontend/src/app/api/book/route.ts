import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = "http://localhost:5022/api/";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") return new NextResponse(null, { status: 403 });

  try {
    const body = await req.json();

    console.log("body", body);
    console.log("body", JSON.stringify(body));

    const res = await fetch(`${BACKEND_API_URL}Reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body.reservation),
    });

    console.log("res", res);

    revalidatePath("/");
    return NextResponse.json({ succeded: true });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    console.error(e);
    return NextResponse.json({ succeded: false });
  }
}
