import { Offer } from "@/app/types";
import VehicleCard from "./vehicleCard";

export default function VehicleList({ offers }: { offers: Offer[] }) {
  return (
    <div className="flex flex-col gap-6 items-center w-full px-4">
      {offers.length ? (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3  gap-4">
          {offers.map((offer: Offer, index: number) => (
            <VehicleCard key={index} offer={offer} />
          ))}
        </div>
      ) : (
        <div>Fill The form and search for car rental proposals</div>
      )}
    </div>
  );
}
