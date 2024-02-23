import FilterForm from "./filter/filterForm";

export default function InputSection({}: {}) {
  return (
    <div className="border p-4 rounded-lg m-2 sm:w-auto">
      <FilterForm />
    </div>
  );
}
