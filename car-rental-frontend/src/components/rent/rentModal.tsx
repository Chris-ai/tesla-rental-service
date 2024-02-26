"use client";

import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import { Location, Calendar } from "../icons";
import { displayDate, formatPrice } from "@/app/utils";
import { useRouter } from "next/navigation";
import { ReservationDto } from "@/app/types";

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
  const [booked, setBooked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

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
      const res = await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify({ reservation: newReservation }),
      });

      const { succeded, message } = await res.json();

      if (succeded) {
        setBooked(true);
      } else {
        setErrorMessage(message);
      }
      setBooking(false);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
      }
      setBooking(false);
    }
  };

  const returnToHomePage = () => {
    changeModalState();
    router.refresh();
  };

  const onClose = () => {
    if (booked) {
      returnToHomePage();
    } else {
      changeModalState();
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
        onClose={onClose}
        className="bg-white/30 backdrop-blur-sm"
      >
        <Modal.Header>Confirm Order</Modal.Header>
        <Modal.Body>
          {booked ? (
            <div className="flex flex-col items-center justify-center gap-6">
              Congratulations! Reservation created successfully.
              <Button onClick={returnToHomePage}>Ok</Button>
            </div>
          ) : (
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
                      {displayDate(startDate)} - {displayDate(endDate)}
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
          )}
        </Modal.Body>
        {!booked && (
          <Modal.Footer>
            <div className="flex flex-col gap-2 w-full">
              {errorMessage && (
                <h1 className="w-full text-red-700">{errorMessage}</h1>
              )}
              <div className="flex w-full items-center justify-end gap-3">
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
              </div>
            </div>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
