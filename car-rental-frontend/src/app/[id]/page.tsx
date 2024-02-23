import SectionContainer from "@/components/sectionContainer";
import VehicleView from "@/components/vehicle/vehicleView";
import Link from "next/link";

export default async function RentVehiclePage({
  params,
}: {
  params: { id: number };
}) {
  const vehicle = {
    model: "Tesla Model 3",
    year: 2021,
    color: "Midnight Silver Metallic",
    bodyStyle: "Sedan",
    seatingCapacity: 5,
    pricePerDay: 100,
    availability: true,
    imageSrc: "/images/tesla3.webp",
  };

  return (
    <div className="grid place-items-center h-full">
      <SectionContainer>
        <VehicleView vehicle={vehicle} />
      </SectionContainer>
    </div>
  );
}
