"use server";

import { pages } from "@/app/pages";
import { CookieName } from "@/app/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface SearchVehicleState {
  error?: string;
}

const setCookie = (cookieName: CookieName, value: string) => {
  const oneDay = 24 * 60 * 60 * 1;
  const cookiesStore = cookies();
  cookiesStore.set(cookieName, value, {
    maxAge: oneDay,
  });
};

export async function searchVehicle(
  formState: SearchVehicleState,
  formData: FormData
): Promise<SearchVehicleState> {
  const pickuplocation = formData.get("pickuplocation") as string;
  const returnLocation = formData.get("returnLocation") as string;
  const startDateFormData = formData.get("startDate") as string;
  const endDateFormData = formData.get("endDate") as string;

  const startDate = new Date(startDateFormData);
  const endDate = new Date(endDateFormData);

  if (endDate < startDate) {
    return {
      error: "Return date cannot be earlier than pickup date",
    };
  } else {
    setCookie(CookieName.PICKUP_LOCATION_COOKIE_NAME, pickuplocation);
    setCookie(CookieName.RETURN_LOCATION_COOKIE_NAME, returnLocation);
    setCookie(CookieName.START_DATE_COOKIE_NAME, startDateFormData);
    setCookie(CookieName.END_DATE_COOKIE_NAME, endDateFormData);
    revalidatePath(pages.home);
    return {};
  }
}
