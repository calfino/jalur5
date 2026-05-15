import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalur5 — Station For Your Mobility",
  description:
    "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
  keywords: ["jalur5", "jalur 5", "media jakarta", "transportasi jakarta", "lalu lintas jakarta", "berita transportasi", "jalur5.com"],
  metadataBase: new URL("https://jalur5.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jalur5 — Station For Your Mobility",
    description: "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
    url: "https://jalur5.com",
    siteName: "Jalur5",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/logo-j5-ori.png", width: 800, height: 800, alt: "Jalur5" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalur5 — Station For Your Mobility",
    description: "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
    images: ["/logo-j5-ori.png"],
  },
  icons: {
    icon: "/logo-j5-ori.png",
    apple: "/logo-j5-ori.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
