import VehicleCard from "./vehicleCard";

export default function VehicleList({ vehicles }: { vehicles: any[] }) {
  return (
    <div className="flex flex-col gap-6 items-center w-full px-4">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.model} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
