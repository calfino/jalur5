"use client";
import { useInView } from "../hooks/useInView";

const topics = [
  { emoji: "🚇", title: "MRT & LRT Jakarta", tag: "Transportasi" },
  { emoji: "🚌", title: "TransJakarta", tag: "Transportasi" },
  { emoji: "🚆", title: "KRL Commuter Line", tag: "Transportasi" },
  { emoji: "🛣️", title: "Kondisi Jalan Tol", tag: "Lalu Lintas" },
  { emoji: "🚦", title: "Update Kemacetan", tag: "Lalu Lintas" },
  { emoji: "🏙️", title: "Kehidupan Jakarta", tag: "Urban" },
  { emoji: "📋", title: "Kebijakan Kota", tag: "Berita" },
  { emoji: "🚲", title: "Mobilitas Aktif", tag: "Urban" },
  { emoji: "✈️", title: "Bandara & Akses", tag: "Transportasi" },
];

const tagColors: Record<string, string> = {
  Transportasi: "bg-blue-100 text-blue-700",
  "Lalu Lintas": "bg-primary/10 text-primary",
  Urban: "bg-teal-50 text-teal-700",
  Berita: "bg-gray-100 text-gray-600",
};

export default function Coverage() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();

  return (
    <section id="coverage" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 reveal ${headIn ? "in-view" : ""}`}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Apa yang kami liput
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-primary">
            Topik <span className="text-blue-400">Unggulan</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Dari rel hingga aspal — kami merekam semua aspek mobilitas dan kehidupan
            ibu kota untuk audiens yang terus berkembang.
          </p>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {topics.map((t, i) => (
            <div
              key={t.title}
              className={`reveal bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-md hover:shadow-blue-100 hover:-translate-y-0.5 transition-all duration-200 border border-blue-100/60 ${gridIn ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-3xl flex-shrink-0">{t.emoji}</span>
              <div>
                <div className="font-semibold text-primary">{t.title}</div>
                <span
                  className={`mt-1 inline-block text-xs font-medium px-2 py-0.5 rounded-full ${tagColors[t.tag]}`}
                >
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
