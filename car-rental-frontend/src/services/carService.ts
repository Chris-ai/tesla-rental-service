import { Car } from "@/app/types";

export const getCars = async (
  pickupLocation?: string,
  returnLocation?: string,
  startDate?: string,
  endDate?: string
): Promise<Car[]> => {
  const urlParams = new URLSearchParams();

  if (pickupLocation) urlParams.append("PickUpLocation", pickupLocation);
  if (returnLocation) urlParams.append("ReturnLocation", returnLocation);
  if (startDate) urlParams.append("StartDate", startDate);
  if (endDate) urlParams.append("EndDate", endDate);

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/Cars?${urlParams}`,
      {
        method: "GET",
      }
    );

    const carList: Car[] = await response.json();

    return carList;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("EORR", e.message);
    }

    return [];
  }
};
