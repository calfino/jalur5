"use client";
import { useInView } from "../hooks/useInView";

const platforms = [
  {
    name: "Instagram",
    handle: "@jalur5",
    followers: "154K",
    url: "https://instagram.com/jalur5",
    color: "from-purple-500 to-pink-500",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    handle: "@jalur5",
    followers: "23.3K",
    url: "https://threads.net/@jalur5",
    color: "from-white to-gray-300",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.042 1.31-1.388 1.995-3.218 2.073-5.557-.207.048-.41.09-.615.129-1.327 4.81-5.204 5.769-8.988 5.769zm3.703-8.065c-.17 2.25-.988 3.922-2.437 4.869-1.248.806-2.817 1.103-4.663.906-2.217-.243-3.814-1.227-4.734-2.921-.891-1.638-1.286-3.755-1.176-6.314.119-2.833.885-5.038 2.279-6.552 1.269-1.38 2.99-2.08 5.11-2.08h.068c1.738.018 3.17.51 4.258 1.462.803.707 1.391 1.628 1.749 2.741l-1.961.543c-.546-1.9-1.81-2.85-3.74-2.872-1.567.006-2.803.528-3.677 1.556-.924 1.086-1.426 2.71-1.516 4.824-.079 1.808.201 3.317.832 4.49.641 1.192 1.686 1.899 3.099 2.103 1.177.168 2.196-.039 3.03-.617.806-.562 1.29-1.418 1.444-2.543a7.47 7.47 0 01-.748.045c-.585 0-1.136-.057-1.648-.169l-.002-.001a5.31 5.31 0 01-.55-.154c.015.151.021.307.021.466 0 1.785-1.268 3.061-3.003 3.061-1.716 0-3.003-1.302-3.003-3.061 0-1.767 1.258-3.052 3.003-3.061h.014c.553 0 1.068.107 1.517.302.058-.36.091-.736.091-1.123 0-2.513-1.67-4.264-4.062-4.264-2.484 0-4.186 1.791-4.186 4.449 0 2.652 1.694 4.447 4.186 4.447 1.265 0 2.391-.474 3.214-1.316z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@jalur5_",
    followers: "30.7K",
    url: "https://x.com/jalur5_",
    color: "from-white to-gray-400",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@jalur5",
    followers: "35.6K",
    url: "https://tiktok.com/@jalur5",
    color: "from-pink-500 to-red-500",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.86 4.86 0 01-1.03-.1z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Jalur5 Media",
    followers: "7.7K",
    url: "https://www.youtube.com/@Jalur5",
    color: "from-red-600 to-red-700",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Socials() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();

  return (
    <section id="socials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 reveal ${headIn ? "in-view" : ""}`}
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Temukan kami di
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-primary">
            Sosial <span className="text-blue-400">Media</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Ikuti Jalur5 di semua platform dan jadilah bagian dari komunitas kami yang
            terus berkembang.
          </p>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group relative overflow-hidden bg-primary rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 ${gridIn ? "in-view" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div className="text-blue-300 group-hover:text-white transition-colors duration-300 mb-4">{p.icon}</div>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-blue-300 text-sm mt-0.5">{p.handle}</div>
                <div className="mt-4 text-2xl font-black">{p.followers}</div>
                <div className="text-blue-200 text-xs">
                  {p.name === "YouTube" ? "subscribers" : "followers"}
                </div>
                <div className="mt-4 flex items-center gap-1 text-blue-300 text-sm font-medium group-hover:text-white transition-colors">
                  {p.name === "YouTube" ? "Tonton sekarang" : "Follow sekarang"}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
