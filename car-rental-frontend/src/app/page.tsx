import FilterSection from "@/components/filter/filterSection";
import SectionContainer from "@/components/sectionContainer";
import VehicleList from "@/components/vehicle/vehicleList";
import { getCars } from "@/services/carService";
import { cookies } from "next/headers";
import { CookieName } from "./utils";

export const getParamsFromCookies = () => {
  const cookiesStore = cookies();

  const pickupLocation = cookiesStore.get(
    CookieName.PICKUP_LOCATION_COOKIE_NAME
  )?.value;

  const returnLocation = cookiesStore.get(
    CookieName.RETURN_LOCATION_COOKIE_NAME
  )?.value;

  const startDate = cookiesStore.get(CookieName.START_DATE_COOKIE_NAME)?.value;

  const endDate = cookiesStore.get(CookieName.END_DATE_COOKIE_NAME)?.value;

  return {
    pickupLocation,
    returnLocation,
    startDate,
    endDate,
  };
};

export default async function Home() {
  const { pickupLocation, returnLocation, startDate, endDate } =
    getParamsFromCookies();

  const cars = await getCars(
    pickupLocation,
    returnLocation,
    startDate,
    endDate
  );
  return (
    <main className="flex flex-col gap-12 items-center">
      <SectionContainer>
        <FilterSection />
      </SectionContainer>
      <SectionContainer>
        <VehicleList vehicles={cars} />
      </SectionContainer>
    </main>
  );
}
