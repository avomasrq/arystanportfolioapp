'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-white text-sm lg:text-base font-medium">
              TECH ENTREPRENEUR & FOUNDER
            </span>
          </div>

          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-white text-lg lg:text-xl font-semibold tracking-wider uppercase">
              ARYSTAN TANEKOV
            </h1>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-white text-sm lg:text-base hover:text-white/80 transition-colors"
            >
              Contact 
            </a>
            <a
              href="#about"
              className="text-white text-sm lg:text-base hover:text-white/80 transition-colors"
            >
              About Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
