import { Reservation } from "./features/reservation/types";

export type Car = {
  id: number;
  model: string;
  imageSrc: string;
  seatingCapacity: number;
  pricePerDay: number;
  bodyStyle: "SUV" | "Sedan";
  range: number;
  reservations: Reservation[];
};

export type Offer = {
  car: Car;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
};
