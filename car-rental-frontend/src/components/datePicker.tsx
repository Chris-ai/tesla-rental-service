"use client";
import { ChangeEvent, useState } from "react";
import { Datepicker } from "flowbite-react";

interface CustomDatePickerProps {
  name: string;
  minDate: Date;
  defaultDate: Date;
}

export default function CustomDatePicker() {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  const onDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return <></>;
}
