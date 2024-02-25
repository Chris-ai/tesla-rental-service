import { pages } from "@/app/pages";
import {
  CookieName,
  formatPrice,
  getTotalPriceBetweenDates,
} from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { Location, Seat } from "../icons";
import RentForm from "../rent/rentForm";
import { cookies } from "next/headers";
import { Car } from "@/app/types";

//TODO:: Fix type when be will be ready
export default function VehicleView({ vehicle }: { vehicle: Car }) {
  const cookiesStore = cookies();

  const startDateCookie = cookiesStore.get(
    CookieName.START_DATE_COOKIE_NAME
  )?.value;
  const endDateCookie = cookiesStore.get(
    CookieName.END_DATE_COOKIE_NAME
  )?.value;

  const totalPrice = formatPrice(
    getTotalPriceBetweenDates(
      vehicle.pricePerDay,
      new Date(startDateCookie ?? new Date().toLocaleDateString()),
      new Date(endDateCookie ?? new Date().toLocaleDateString())
    )
  );

  return (
    <div className="flex flex-col gap-2 px-2">
      <div>
        <Link href={pages.home} className="text-blue-700 cursor-pointer">
          Go Back
        </Link>
      </div>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-1">
        <div>
          <Image
            src={vehicle.imageSrc}
            alt="vehicle-image"
            height={400}
            width={400}
            className="w-[400px] h-[400px] rounded-lg"
            sizes="min(680px) 620px"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-3 px-2">
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-3xl font-bold">{vehicle.model}</h1>
            <h1 className="text-2xl font-semibold text-blue-800">
              {formatPrice(vehicle.pricePerDay)}
              <span className="text-sm text-font-dark">/per day</span>
            </h1>
            <div className="flex w-full gap-3">
              <div className="w-full flex gap-2 items-center">
                <Location />
                <p className="text-sm">
                  {new Date(startDateCookie!).toLocaleDateString()} -{" "}
                  {new Date(endDateCookie!).toLocaleDateString()}
                </p>
              </div>
              <div className="w-full flex gap-2 items-center">
                <Location />
                <p>Location, Mallorca</p>
              </div>
              <div className="w-full flex gap-2 items-center">
                <Seat />
                <p>{vehicle.seatingCapacity} seats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
