"use client";

import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

export default function FilterButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isProcessing={pending} disabled={pending}>
      Search
    </Button>
  );
}
