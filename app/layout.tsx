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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jalur5.com/#organization",
      name: "Jalur5",
      url: "https://jalur5.com",
      logo: {
        "@type": "ImageObject",
        url: "https://jalur5.com/logo-j5-ori.png",
      },
      sameAs: [
        "https://www.instagram.com/jalur5",
        "https://www.threads.net/@jalur5",
      ],
      description:
        "Jalur5 adalah media Jakarta yang meliput transportasi publik, lalu lintas, dan kehidupan kota.",
    },
    {
      "@type": "WebSite",
      "@id": "https://jalur5.com/#website",
      url: "https://jalur5.com",
      name: "Jalur5",
      publisher: { "@id": "https://jalur5.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://jalur5.com/artikel?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
