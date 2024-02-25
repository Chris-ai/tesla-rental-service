import {
  CookieName,
  formatPrice,
  getTotalPriceBetweenDates,
} from "@/app/utils";
import Image from "next/image";
import { Location, Seat } from "@/components/icons";
import { cookies } from "next/headers";
import { Car } from "@/app/types";
import RentModal from "../rent/rentModal";

export default function VehicleCard({ vehicle }: { vehicle: Car }) {
  const cookiesStore = cookies();

  const startDateCookie = cookiesStore.get(
    CookieName.START_DATE_COOKIE_NAME
  )?.value;
  const endDateCookie = cookiesStore.get(
    CookieName.END_DATE_COOKIE_NAME
  )?.value;

  const pickupLocation = cookiesStore.get(
    CookieName.PICKUP_LOCATION_COOKIE_NAME
  )?.value;
  const returnLocation = cookiesStore.get(
    CookieName.RETURN_LOCATION_COOKIE_NAME
  )?.value;

  const totalPrice = getTotalPriceBetweenDates(
    vehicle.pricePerDay,
    new Date(startDateCookie ?? new Date().toLocaleDateString()),
    new Date(endDateCookie ?? new Date().toLocaleDateString())
  );

  return (
    <>
      <div className="w-full shadow-lg border-gray-200 text-font-dark rounded-lg flex flex-col justify-between items-center relative">
        <div className="absolute top-2 right-2 bg-blue-200/30 backdrop-blur-sm px-3 py-1 rounded-full">
          {vehicle.bodyStyle}
        </div>
        <Image
          src={vehicle.imageSrc}
          alt="tesla-model-image"
          width={400}
          height={400}
          className="aspect-square rounded-md h-1/2 w-full rounded-b-none p-12"
          sizes="(min-width: 1300px) 640w, (min-width: 680px) 384w, 128w)"
        />
        <div className="w-full flex flex-col gap-1 px-2">
          <h1 className="text-xl font-bold">{vehicle.model}</h1>
          <h1 className="text-2xl font-semibold text-blue-800">
            {formatPrice(vehicle.pricePerDay)}
            <span className="text-sm text-font-dark">/per day</span>
          </h1>
          <div className="flex flex-col gap-3">
            <div className="w-full flex gap-2 items-center">
              <Seat />
              <p>{vehicle.seatingCapacity} seats</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-2">
          <h1 className="font-bold">Total: {formatPrice(totalPrice)}</h1>
          <RentModal
            carId={vehicle.id}
            imageSrc={vehicle.imageSrc}
            model={vehicle.model}
            totalPrice={totalPrice}
            startDate={new Date(startDateCookie!)}
            endDate={new Date(endDateCookie!)}
            pickupLocation={pickupLocation ?? ""}
            returnLocation={returnLocation ?? ""}
          />
        </div>
      </div>
    </>
  );
}
