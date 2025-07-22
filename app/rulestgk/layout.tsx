export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl pt-1 px-6 flex-grow">
      <div className="container mx-auto max-w-7xl pt-1 px-6 flex-grow">
        {children}
      </div>
    </section>
  );
}
