"use server";

import { pages } from "@/app/pages";
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

  const location = formData.get("location") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;

  if (endDate < startDate) {
    return {
      error: "Data oddania nie może byc wcześniejsza niż data odebrania",
    };
  } else {
    cookiesStore.set("location", location);
    cookiesStore.set("startDate", startDate);
    cookiesStore.set("endDate", endDate);
    revalidatePath(pages.home);
    return {};
  }
}
