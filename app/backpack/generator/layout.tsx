"use client";
export default async function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-950 bg-gradient-to-br pb-12 relative`}
    >
      {children}
    </div>
  );
}
