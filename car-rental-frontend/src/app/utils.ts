export enum CookieName {
  PICKUP_LOCATION_COOKIE_NAME = "pickupLocation",
  RETURN_LOCATION_COOKIE_NAME = "returnLocation",
  END_DATE_COOKIE_NAME = "endDate",
  START_DATE_COOKIE_NAME = "startDate",
}

export const formatPrice = (price: number) =>
  `${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}€`;

export const getTotalPriceBetweenDates = (
  pricePerDay: number,
  startDate: Date,
  endDate: Date
) => {
  const differenceInTime = endDate.getTime() - startDate.getTime();

  return Math.round(differenceInTime / (1000 * 3600 * 24)) * pricePerDay;
};

export const displayDate = (date: Date) => new Date(date).toLocaleDateString();
