"use client";
import { useInView } from "../hooks/useInView";

const WA_BASE = "https://wa.me/6287855502016";

const packages = [
  {
    name: "Story / Reels",
    price: "Rp 500.000",
    desc: "Konten story atau reels singkat di Instagram atau TikTok.",
    features: ["Durasi 15–30 detik", "Satu platform pilihan", "Revisi 1×"],
    highlight: false,
  },
  {
    name: "Feed Post Foto",
    price: "Rp 750.000",
    desc: "Post foto statis di feed Instagram atau X dengan caption copywriting.",
    features: ["Caption profesional", "Satu platform pilihan", "Tagging brand"],
    highlight: false,
  },
  {
    name: "Video TikTok / YouTube",
    price: "Rp 1.500.000",
    desc: "Video endorsement penuh di TikTok atau YouTube dengan script konsep.",
    features: ["Durasi 60–90 detik", "Script & konsep konten", "Revisi 1×"],
    highlight: true,
  },
  {
    name: "Paket Bundling",
    price: "Rp 2.500.000",
    desc: "Kombinasi 3+ platform sekaligus dengan harga terbaik dan prioritas respons.",
    features: ["Min. 3 platform", "Semua format konten", "Prioritas respons"],
    highlight: false,
  },
];

function waLink(pkg: (typeof packages)[0]) {
  const text = `Halo Jalur5! Saya tertarik dengan paket *${pkg.name}* (${pkg.price}). Boleh minta info lebih lanjut?`;
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

const WA_GENERAL = `${WA_BASE}?text=${encodeURIComponent("Halo Jalur5! Saya ingin bertanya tentang paket endorsement.")}`;

export default function PricingSection() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();
  const { ref: ctaRef, inView: ctaIn } = useInView();

  return (
    <section id="pricing" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 reveal ${headIn ? "in-view" : ""}`}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Paket Endorsement
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-primary">
            Harga <span className="text-blue-400">Transparan</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan brand Anda — atau hubungi kami
            langsung untuk penawaran custom.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                pkg.highlight
                  ? "border-blue-400 shadow-md shadow-blue-100"
                  : "border-gray-100 hover:shadow-gray-100"
              } ${gridIn ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-400 text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-bold text-primary text-lg">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="my-4">
                <span className="text-3xl font-black text-primary">{pkg.price}</span>
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0 text-xs">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(pkg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-2.5 rounded-xl text-sm transition-all ${
                  pkg.highlight
                    ? "bg-primary text-white hover:bg-blue-700"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* General contact CTA */}
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`mt-12 text-center reveal ${ctaIn ? "in-view" : ""}`}
        >
          <p className="text-gray-500 text-sm mb-4">
            Butuh paket khusus atau ingin diskusi dulu sebelum memutuskan?
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
