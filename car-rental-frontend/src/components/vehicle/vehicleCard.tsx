import { formatPrice } from "@/app/utils";
import Image from "next/image";
import { Location, Seat } from "@/components/icons";
import Link from "next/link";
import { pages } from "@/app/pages";

//TODO:: fix type when be will be ready
export default function VehicleCard({ vehicle }: { vehicle: any }) {
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
          className="aspect-square rounded-md h-1/2 w-full rounded-b-none"
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
              <Location />
              <p>Location, Mallorca</p>
            </div>
            <div className="w-full flex gap-2 items-center">
              <Seat />
              <p>{vehicle.seatingCapacity} seats</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-full p-2">
          <Link href={pages.rent(1)}>
            <button className="w-auto px-5 py-2 rounded-lg bg-blue-500 text-white">
              Rent
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
