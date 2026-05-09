import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalur5 — Media Jakarta",
  description:
    "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
  keywords: ["Jakarta", "transportasi", "media", "jalur5", "lalu lintas"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
