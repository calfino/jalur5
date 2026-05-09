"use client";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const platforms = ["Instagram @jalur5", "Threads @jalur5", "X @jalur5_", "TikTok @jalur5", "YouTube Jalur5 Media"];
const contentTypes = ["Story / Reels", "Feed Post / Video", "Thread / Tweet", "Paket Bundling"];
const budgetRanges = ["< Rp 1 Juta", "Rp 1–5 Juta", "Rp 5–10 Juta", "Rp 10 Juta+", "Diskusi Dulu"];

type FormData = {
  brand: string;
  name: string;
  email: string;
  phone: string;
  platforms: string[];
  contentType: string;
  budget: string;
  message: string;
};

export default function EndorseSection() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  const [form, setForm] = useState<FormData>({
    brand: "",
    name: "",
    email: "",
    phone: "",
    platforms: [],
    contentType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePlatform = (p: string) => {
    setForm((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(p)
        ? prev.platforms.filter((x) => x !== p)
        : [...prev.platforms, p],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.brand || !form.email || form.platforms.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/endorse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Gagal mengirim");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="endorse" className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-white mb-3">Permintaan Dikirim!</h3>
          <p className="text-blue-200">
            Formulir Anda berhasil dikirim. Tim kami akan menghubungi dalam 1–2 hari kerja.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 border border-blue-400/40 text-blue-300 hover:text-white px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Kirim lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="endorse" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${leftIn ? "in-view" : ""}`}
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">
              Kerjasama & Endorsement
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Pasang Iklan di{" "}
              <span className="text-blue-300">Jalur5</span>
            </h2>
            <p className="mt-6 text-blue-100 text-lg leading-relaxed">
              Jangkau ratusan ribu audiens aktif di Jakarta dan sekitarnya melalui
              platform media sosial Jalur5. Cocok untuk brand, produk, dan layanan
              yang relevan dengan gaya hidup urban.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: "👥",
                  title: "Audiens Tertarget",
                  desc: "150K+ followers aktif, mayoritas warga urban Jakarta usia 18–35 tahun.",
                },
                {
                  icon: "📈",
                  title: "Engagement Tinggi",
                  desc: "Konten kami secara konsisten mendapat interaksi yang tinggi di semua platform.",
                },
                {
                  icon: "🎯",
                  title: "Multi-Platform",
                  desc: "Hadir di Instagram, Threads, X, TikTok, dan YouTube — pilih satu atau paket bundling.",
                },
                {
                  icon: "⚡",
                  title: "Respons Cepat",
                  desc: "Tim kami merespons dalam 1–2 hari kerja untuk diskusi lebih lanjut.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`flex gap-4 reveal ${leftIn ? "in-view" : ""}`}
                  style={{ transitionDelay: `${200 + i * 90}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-blue-200 text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${rightIn ? "in-view" : ""}`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30">
              <h3 className="text-2xl font-black text-primary mb-6">Formulir Endorse</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Brand / Bisnis <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      placeholder="Nama brand Anda"
                      required
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Nama PIC
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@domain.com"
                      required
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Platform <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {platforms.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => togglePlatform(p)}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          form.platforms.includes(p)
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-blue-300"
                        }`}
                      >
                        {form.platforms.includes(p) ? "✓ " : ""}{p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Jenis Konten
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {contentTypes.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setForm({ ...form, contentType: c })}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          form.contentType === c
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-blue-300"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Estimasi Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition-all ${
                          form.budget === b
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-blue-300"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ceritakan produk / layanan Anda dan tujuan kampanye..."
                    className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Mengirim..." : "Kirim Permintaan Endorse →"}
                </button>

                {error && (
                  <p className="text-center text-sm text-red-500">{error}</p>
                )}

                <p className="text-center text-xs text-gray-400">
                  Data Anda aman. Tim kami akan merespons dalam 1–2 hari kerja.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
