export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-blue-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center">
                <span className="text-primary font-black text-sm">J5</span>
              </div>
              <span className="text-white font-bold text-xl">
                Jalur<span className="text-blue-300">5</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Platform media Jakarta yang merekam cerita kota — dari jalanan hingga kehidupan urban.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Tentang Kami", href: "#about" },
                { label: "Liputan", href: "#coverage" },
                { label: "Sosial Media", href: "#socials" },
                { label: "Pasang Iklan", href: "#endorse" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "Instagram", handle: "@jalur5", url: "https://instagram.com/jalur5" },
                { label: "Threads", handle: "@jalur5", url: "https://threads.net/@jalur5" },
                { label: "X (Twitter)", handle: "@jalur5_", url: "https://x.com/jalur5_" },
                { label: "TikTok", handle: "@jalur5", url: "https://tiktok.com/@jalur5" },
                { label: "YouTube", handle: "Jalur5 Media", url: "https://www.youtube.com/@Jalur5" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="text-blue-300 group-hover:text-white transition-colors">{s.label}</span>
                  <span className="text-blue-400 group-hover:text-blue-200 transition-colors">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-700/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <span>© {year} Jalur5. Hak cipta dilindungi.</span>
          <span>Media Jakarta — Transportasi, Lalu Lintas, dan Kehidupan Kota</span>
        </div>
      </div>
    </footer>
  );
}
