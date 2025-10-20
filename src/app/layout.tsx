import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halloween Scavenger Hunt",
  description: "A fun Halloween scavenger hunt for kids!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-orange-50 text-gray-900 min-h-screen font-sans"
      >
        {children}
      </body>
    </html>
  );
}
