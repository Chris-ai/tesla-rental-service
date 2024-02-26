import { displayDate, formatPrice } from "@/app/utils";
import Image from "next/image";
import { Offer } from "@/app/types";
import RentModal from "../rent/rentModal";
import { Calendar, Location } from "../icons";

export default function VehicleCard({ offer }: { offer: Offer }) {
  return (
    <>
      <div className="w-full shadow-lg border-gray-200 text-font-dark rounded-lg flex flex-col justify-between items-center relative">
        <div className="absolute top-2 right-2 bg-blue-200/30 backdrop-blur-sm px-3 py-1 rounded-full">
          {offer.car.bodyStyle}
        </div>
        <Image
          src={offer.car.imageSrc}
          alt="tesla-model-image"
          width={400}
          height={400}
          className="aspect-square rounded-md h-1/2 w-full rounded-b-none p-12"
          sizes="(min-width: 1300px) 640w, (min-width: 680px) 384w, 128w)"
        />
        <div className="w-full flex flex-col gap-1 px-2">
          <h1 className="text-xl font-bold">{offer.car.model}</h1>
          <h1 className="text-2xl font-semibold text-blue-800">
            {formatPrice(offer.car.pricePerDay)}
            <span className="text-sm text-font-dark">/per day</span>
          </h1>
          <div className="w-full flex gap-2 items-center">
            <Calendar />
            <p className="text-sm">
              {displayDate(offer.startDate)} - {displayDate(offer.endDate)}
            </p>
          </div>
          <div className="w-full flex gap-2 items-center">
            <Location />
            <p>
              {offer.pickupLocation} - {offer.returnLocation}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-2">
          <h1 className="font-bold">Total: {formatPrice(offer.totalPrice)}</h1>
          <RentModal
            carId={offer.car.id}
            imageSrc={offer.car.imageSrc}
            model={offer.car.model}
            totalPrice={offer.totalPrice}
            startDate={offer.startDate}
            endDate={offer.endDate}
            pickupLocation={offer.pickupLocation}
            returnLocation={offer.returnLocation}
          />
        </div>
      </div>
    </>
  );
}
