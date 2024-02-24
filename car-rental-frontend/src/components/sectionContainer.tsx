export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="items-center flex flex-col gap-6 max-w-[1200px] w-full">
      {children}
    </section>
  );
}
