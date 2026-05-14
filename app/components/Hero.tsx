export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-700/40 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" />
            Terus Beroperasi untuk Indonesia
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Cerita Kota,{" "}
            <span className="text-blue-300">Kita Yang</span>{" "}
            Bersuara
          </h1>

          <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Dari jalanan Jakarta hingga transportasi publik — Jalur5 hadir sebagai
            platform media yang merekam denyut kota untuk jutaan warga.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-blue-400 hover:bg-blue-300 text-primary font-bold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-blue-400/30"
            >
              Kenali Kami
            </a>
            <a
              href="#endorse"
              className="border border-blue-400/50 hover:border-blue-300 text-blue-100 hover:text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:bg-blue-700/20"
            >
              Pasang Iklan →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: "150K+", label: "Followers Instagram" },
              { value: "150K+", label: "Followers Threads" },
              { value: "Multi-platform", label: "Hadir di 4 Platform" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-blue-300 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/60 text-xs">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
