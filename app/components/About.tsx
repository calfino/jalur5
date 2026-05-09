"use client";
import { useInView } from "../hooks/useInView";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Transportasi Publik",
    desc: "Liputan mendalam tentang MRT, LRT, TransJakarta, KRL, dan segala moda transportasi ibu kota.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Lalu Lintas Jakarta",
    desc: "Pembaruan kondisi jalan, kemacetan, dan rute alternatif untuk membantu warga Jakarta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "Berita Kota",
    desc: "Konten media umum seputar kehidupan, kebijakan, dan isu-isu yang relevan bagi warga Jakarta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Komunitas",
    desc: "Membangun komunitas warga Jakarta yang peduli terhadap mobilitas dan kehidupan kota.",
  },
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();
  const { ref: statsRef, inView: statsIn } = useInView();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${leftIn ? "in-view" : ""}`}
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
              Tentang Jalur5
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-primary leading-tight">
              Berawal dari jalanan,{" "}
              <span className="text-blue-400">kini menjadi lebih</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Jalur5 lahir dari kepedulian terhadap kondisi transportasi publik dan lalu
              lintas di Jakarta. Dari sebuah akun media sosial kecil, kini kami berkembang
              menjadi platform media yang diikuti ratusan ribu orang.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Kami percaya bahwa informasi yang tepat dan cepat dapat membantu warga
              Jakarta menjalani hari-hari mereka dengan lebih baik. Itulah mengapa kami
              terus hadir — merekam, melapor, dan berbagi.
            </p>
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className={`mt-8 flex gap-6 stagger ${statsIn ? "in-view" : ""}`}
            >
              {[
                { value: "2020", label: "Tahun berdiri" },
                { value: "5", label: "Platform aktif" },
                { value: "150K+", label: "Total followers" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`border-l-4 border-blue-400 pl-4 reveal ${statsIn ? "in-view" : ""}`}
                >
                  <div className="text-3xl font-black text-primary">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-2 gap-4 stagger ${rightIn ? "" : ""}`}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal bg-blue-50 hover:bg-primary group p-6 rounded-2xl transition-all duration-300 cursor-default ${rightIn ? "in-view" : ""}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="text-blue-500 group-hover:text-blue-300 mb-3 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-bold text-primary group-hover:text-white text-base mb-2 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
