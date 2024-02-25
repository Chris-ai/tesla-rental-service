"use client";

import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import { Location, Calendar } from "../icons";
import { formatPrice } from "@/app/utils";
import { ReservationDto } from "@/app/features/reservation/types";

interface IProps {
  carId: number;
  imageSrc: string;
  model: string;
  totalPrice: number;
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  returnLocation: string;
}

export default function RentModal({
  carId,
  imageSrc,
  model,
  totalPrice,
  startDate,
  endDate,
  pickupLocation,
  returnLocation,
}: IProps) {
  const [openModal, setOpenModal] = useState(false);
  const [booking, setBooking] = useState(false);

  const changeModalState = () => {
    setOpenModal((prev) => !prev);
  };

  const confirmRent = async () => {
    try {
      setBooking(true);
      const newReservation: ReservationDto = {
        pickupLocation,
        returnLocation,
        startDate,
        endDate,
        totalPrice,
        carId,
      };
      await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify({ reservation: newReservation }),
      });
      changeModalState();
      setBooking(false);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
      }
      setBooking(false);
    }
  };

  return (
    <>
      <button
        onClick={changeModalState}
        className="w-auto px-5 py-2 rounded-lg bg-blue-800 text-white"
      >
        Rent
      </button>
      <Modal
        show={openModal}
        onClose={changeModalState}
        className="bg-white/30 backdrop-blur-sm"
      >
        <Modal.Header>Confirm Order</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src={imageSrc}
              alt="tesla-model-image"
              width={200}
              height={200}
              className="aspect-square rounded-md rounded-b-none flex-1 py-8 px-2"
              sizes="(min-width: 1300px) 200px, (min-width: 680px) 200px, 128w)"
            />
            <div className="w-full flex flex-col gap-3 px-2 flex-1 justify-center">
              <h1 className="text-xl font-bold">{model}</h1>
              <div className="flex flex-col gap-3">
                <div className="w-full flex gap-2 items-center">
                  <Calendar />
                  <p className="text-sm">
                    {startDate.toLocaleDateString()} -{" "}
                    {endDate.toLocaleDateString()}
                  </p>
                </div>
                <div className="w-full flex gap-2 items-center">
                  <Location />
                  <p>
                    {pickupLocation} - {returnLocation}
                  </p>
                </div>
              </div>
              <h1 className="font-bold text-lg">
                Total: {formatPrice(totalPrice)}
              </h1>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            isProcessing={booking}
            onClick={confirmRent}
            disabled={booking}
          >
            Confirm
          </Button>
          <Button color="gray" onClick={changeModalState}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
