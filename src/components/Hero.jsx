export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pop rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="bg-accent/20 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Novo na moda
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Seu stylist pessoal,{' '}
              <span className="text-accent">sempre disponível</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Especialistas em moda que entendem você e montam looks perfeitos para cada momento da sua vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-amber-500 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                Começar agora
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30">
                Conheça nossos stylists
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-accent">50k+</div>
                <div className="text-gray-300 text-sm">Clientes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pop">4.9</div>
                <div className="text-gray-300 text-sm">Avaliação</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">200k+</div>
                <div className="text-gray-300 text-sm">Looks criados</div>
              </div>
            </div>
          </div>

          {/* Right Image/Mockup */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Mockup placeholder - você pode substituir por imagem real */}
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-white/20 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="aspect-square bg-primary rounded-xl"></div>
                    <div className="aspect-square bg-accent rounded-xl"></div>
                    <div className="aspect-square bg-pop rounded-xl"></div>
                    <div className="aspect-square bg-primary-dark rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -right-4 top-1/4 bg-white rounded-2xl p-4 shadow-2xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary rounded-full"></div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                  <div className="h-2 bg-gray-100 rounded w-16"></div>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded mb-1"></div>
              <div className="h-2 bg-gray-100 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}