"use server";

import { pages } from "@/app/pages";
import { revalidatePath, redirect } from "next/cache";
import { cookies } from "next/headers";

interface RentVehicleState {
  error?: string;
}

export async function rentVehicle(
  formState: RentVehicleState,
  formData: FormData
): Promise<RentVehicleState> {
    const endDate = formData.get('endDate');
    const startDate = formData.get('startDate');

  if (endDate < startDate) {
    return {
      error: "Data oddania nie może byc wcześniejsza niż data odebrania",
    };
  } else {
    revalidatePath(pages.home);
    //revalidate for this vehicle?

    redirect(pages.home);
    return {};
  }
}
