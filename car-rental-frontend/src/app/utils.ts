export enum CookieName {
  LOCATION_COOKIE_NAME = "location",
  END_DATE_COOKIE_NAME = "endDate",
  START_DATE_COOKIE_NAME = "startDate",
}

export const formatPrice = (price: number) =>
  `${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}€`;
