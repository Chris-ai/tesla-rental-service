import { Offer } from "@/app/types";

export const getOffers = async (
  pickupLocation?: string,
  returnLocation?: string,
  startDate?: string,
  endDate?: string
): Promise<Offer[]> => {
  const urlParams = new URLSearchParams();
  if (pickupLocation) urlParams.append("PickUpLocation", pickupLocation);
  if (returnLocation) urlParams.append("ReturnLocation", returnLocation);
  if (startDate)
    urlParams.append("StartDate", new Date(startDate).toISOString());
  if (endDate) urlParams.append("EndDate", new Date(endDate).toISOString());
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/Cars?${urlParams}`,
      {
        method: "GET",
      }
    );
    return await response.json();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("EORR", e.message);
    }
    return [];
  }
};
