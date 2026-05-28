export default function Footer() {
  return (
    <footer className="relative py-20 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white/10 uppercase tracking-tighter leading-none">
            Arystan Tanekov
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-8 border-t border-white/10">
          <p className="text-white/60 text-xs">
            (C) 2025 - All registered
          </p>
          <a href="/terms" className="text-white/60 text-xs hover:text-white/80 transition-colors">
            Terms, Privacy & Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}
