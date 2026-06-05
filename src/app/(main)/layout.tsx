export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="max-w-4xl px-8 pt-16 pb-24 md:max-w-6xl md:px-24 md:pt-24 md:pb-32 lg:ml-[8%]">
      {children}
    </main>
  );
}
