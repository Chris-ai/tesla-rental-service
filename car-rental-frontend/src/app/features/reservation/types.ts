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
