"use client";

import { searchVehicle } from "@/actions/searchVehicle";
import { Datepicker, Button } from "flowbite-react";
import { useFormState } from "react-dom";
import LocationSelect from "../locationSelect";
export default function FilterForm() {
  const [formState, action] = useFormState(searchVehicle, {
    error: "",
  });
  const currentDate = new Date();

  return (
    <div className="flex flex-col gap-1">
      <form
        action={action}
        className="flex flex-col sm:flex-row sm:items-center gap-2"
      >
        <LocationSelect />

        <Datepicker name="startDate" minDate={currentDate} />
        <Datepicker name="endDate" minDate={currentDate} />

        <Button type="submit">Search</Button>
      </form>
      {formState.error && (
        <p className="text-red-700 italic text-sm">{formState.error}</p>
      )}
    </div>
  );
}
