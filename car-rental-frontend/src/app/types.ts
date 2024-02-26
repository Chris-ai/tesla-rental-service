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
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  returnLocation: string;
  totalPrice: number;
  car: Car;
};

export type CustomResponse<T> = {
  succeeded: boolean;
  data: T;
  message: string;
};

export type ReservationDto = {
  pickupLocation: string;
  returnLocation: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  carId: number;
};

export type Reservation = {
  id: number;
  pickupLocation: string;
  returnLocation: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  carId: number;
};
