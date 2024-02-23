import { pages } from "@/app/pages";
import { formatPrice } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { Location, Seat } from "../icons";
import LocationSelect from "../locationSelect";
import { Datepicker, Button } from "flowbite-react";

//TODO:: Fix type when be will be ready
export default function VehicleView({ vehicle }: { vehicle: any }) {
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
            sizes="min(680px) 400px, 200px"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <div className="w-full flex flex-col gap-1 px-2">
            <h1 className="text-3xl font-bold">{vehicle.model}</h1>
            <h1 className="text-2xl font-semibold text-blue-800">
              {formatPrice(vehicle.pricePerDay)}
              <span className="text-sm text-font-dark">/per day</span>
            </h1>
            <div className="flex flex-col gap-3">
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
          <form className="w-full flex flex-col gap-3">
            <LocationSelect />
            <Datepicker />
            <Datepicker />
            <div className="flex justify-end">
              <Button type="submit">Rent</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
