import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalur5 — Station For Your Mobility",
  description:
    "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
  keywords: ["Jakarta", "transportasi", "media", "jalur5", "lalu lintas"],
  icons: {
    icon: "/logo-j5-ori.png",
    apple: "/logo-j5-ori.png",
  },
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
