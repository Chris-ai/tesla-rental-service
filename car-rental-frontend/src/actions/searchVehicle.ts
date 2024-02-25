"use server";

import { pages } from "@/app/pages";
import { CookieName } from "@/app/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SearchVehicleState {
  error?: string;
}

export async function searchVehicle(
  formState: SearchVehicleState,
  formData: FormData
): Promise<SearchVehicleState> {
  const cookiesStore = cookies();
  const pickuplocation = formData.get("pickuplocation") as string;
  const returnLocation = formData.get("returnLocation") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;

  if (endDate < startDate) {
    return {
      error: "Return date cannot be earlier than pickup date",
    };
  } else {
    cookiesStore.set(CookieName.PICKUP_LOCATION_COOKIE_NAME, pickuplocation);
    cookiesStore.set(CookieName.RETURN_LOCATION_COOKIE_NAME, returnLocation);
    cookiesStore.set(CookieName.START_DATE_COOKIE_NAME, startDate);
    cookiesStore.set(CookieName.END_DATE_COOKIE_NAME, endDate);
    revalidatePath(pages.home);
    return {};
  }
}
