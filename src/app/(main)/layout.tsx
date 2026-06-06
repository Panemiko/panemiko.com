export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="pt-16 pb-24 md:pt-24 md:pb-32">
      {children}
    </main>
  );
}
