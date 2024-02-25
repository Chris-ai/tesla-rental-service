import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesla Rental",
  description: "Rent a car on Mallorca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>{children}</body>
    </html>
  );
}
