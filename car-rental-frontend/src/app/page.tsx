import InputSection from "@/components/inputSection";
import SectionContainer from "@/components/sectionContainer";
import VehicleList from "@/components/vehicle/vehicleList";
import { cookies } from "next/headers";
import { CookieName } from "./utils";

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: PageProps) {
  const cookiesStore = cookies();

  const locationCookie = cookiesStore.get(
    CookieName.LOCATION_COOKIE_NAME
  )?.value;

  const startDateCookie = cookiesStore.get(
    CookieName.START_DATE_COOKIE_NAME
  )?.value;

  console.log("cookies (loc)::", locationCookie);
  console.log("cookies (sd)::", startDateCookie);
  //TODO:: Fecth vehicle list with a cookies as a params ;)

  const vehicles = [
    {
      model: "Tesla Model 3",
      year: 2021,
      color: "Midnight Silver Metallic",
      bodyStyle: "Sedan",
      seatingCapacity: 5,
      pricePerDay: 100,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model S",
      year: 2020,
      color: "Pearl White Multi-Coat",
      bodyStyle: "Sedan",
      seatingCapacity: 5,
      pricePerDay: 150,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model X",
      year: 2019,
      color: "Deep Blue Metallic",
      bodyStyle: "SUV",
      seatingCapacity: 7,
      pricePerDay: 180,
      availability: false,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model Y",
      year: 2022,
      color: "Red Multi-Coat",
      bodyStyle: "SUV",
      seatingCapacity: 5,
      pricePerDay: 140,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Roadster",
      year: 2023,
      color: "Obsidian Black Metallic",
      bodyStyle: "Coupe",
      seatingCapacity: 2,
      pricePerDay: 250,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Cybertruck",
      year: 2022,
      color: "Silver Metallic",
      bodyStyle: "Truck",
      seatingCapacity: 6,
      pricePerDay: 200,
      availability: false,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model 3",
      year: 2020,
      color: "White",
      bodyStyle: "Sedan",
      seatingCapacity: 5,
      pricePerDay: 110,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model S",
      year: 2021,
      color: "Black",
      bodyStyle: "Sedan",
      seatingCapacity: 5,
      pricePerDay: 160,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model X",
      year: 2018,
      color: "Blue Metallic",
      bodyStyle: "SUV",
      seatingCapacity: 7,
      pricePerDay: 170,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Model Y",
      year: 2020,
      color: "Silver Metallic",
      bodyStyle: "SUV",
      seatingCapacity: 5,
      pricePerDay: 145,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Roadster",
      year: 2024,
      color: "White",
      bodyStyle: "Coupe",
      seatingCapacity: 2,
      pricePerDay: 260,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
    {
      model: "Tesla Cybertruck",
      year: 2023,
      color: "Matte Black",
      bodyStyle: "Truck",
      seatingCapacity: 6,
      pricePerDay: 220,
      availability: true,
      imageSrc: "/images/tesla3.webp",
    },
  ];
  return (
    <main className="flex flex-col gap-12 items-center">
      <div className="w-full h-[40vh] grid place-items-center bg-opacity-80">
        <SectionContainer>
          <InputSection />
        </SectionContainer>
      </div>
      <SectionContainer>
        <VehicleList vehicles={vehicles} />
      </SectionContainer>
    </main>
  );
}
