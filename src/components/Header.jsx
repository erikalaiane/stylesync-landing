import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Como funciona', href: '#how-it-works' },
    { name: 'Especialidades', href: '#expertise' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Depoimentos', href: '#testimonials' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}>
              Style<span className="text-pink-600">Sync</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors hover:text-red-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              isScrolled
                ? 'text-primary hover:text-primary-dark'
                : 'text-white/90 hover:text-white'
            }`}>
              Entrar
            </button>
            <button className="bg-amber-500 hover:bg-red-800 hover:text-white text-secondary px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Começar grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl border border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-1 px-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              <button className="px-4 py-3 text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors text-left">
                Entrar
              </button>
              <button className="mx-4 bg-accent hover:bg-amber-500 text-secondary px-6 py-3 rounded-lg font-semibold transition-all shadow-lg">
                Começar grátis ✨
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}