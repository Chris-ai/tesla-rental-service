import { Label } from "flowbite-react";

interface IProps {
  input: React.ReactNode;
  label: string;
}

export default function InputWithLabel({ input, label }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label value={label} />
      {input}
    </div>
  );
}
