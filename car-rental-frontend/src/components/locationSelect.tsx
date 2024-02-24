import { CookieName } from "@/app/utils";
import { Select } from "flowbite-react";

export default function LocationSelect() {
  const availableLocations = [
    "Palma Airport",
    "Palma City Center",
    "Alcudia",
    "Manacor",
  ];
  return (
    <Select id="location" name="location">
      {availableLocations.map((location: string, index: number) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </Select>
  );
}
