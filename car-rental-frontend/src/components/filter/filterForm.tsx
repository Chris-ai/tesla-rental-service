"use client";

import { searchVehicle } from "@/actions/searchVehicle";
import { Button, Datepicker, Select } from "flowbite-react";
import { useFormState } from "react-dom";
import InputWithLabel from "../inputWithLabel";
import { useMemo } from "react";
export default function FilterForm() {
  const [formState, action] = useFormState(searchVehicle, {
    error: "",
  });

  const startDate = useMemo(() => new Date(), []);
  const availableLocations = [
    "Palma Airport",
    "Palma City Center",
    "Alcudia",
    "Manacor",
  ];

  return (
    <div className="flex flex-col gap-1">
      <form
        action={action}
        className="flex flex-col sm:flex-row sm:items-end gap-2"
      >
        <InputWithLabel
          input={
            <Select id="location" name="pickuplocation">
              {availableLocations.map((location: string, index: number) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          }
          label="Pickup Location"
        />
        <InputWithLabel
          input={
            <Select id="location" name="returnLocation">
              {availableLocations.map((location: string, index: number) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          }
          label="Return Location"
        />
        <InputWithLabel
          input={
            <Datepicker name="startDate" id="startDate" minDate={startDate} />
          }
          label="Pickup Date"
        />
        <InputWithLabel
          input={<Datepicker name="endDate" id="endDate" minDate={startDate} />}
          label="Return Date"
        />
        <Button type="submit">Search</Button>
      </form>
      {formState.error && (
        <p className="text-red-700 italic text-sm">{formState.error}</p>
      )}
    </div>
  );
}
