export default function Featured() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Large Featured Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-secondary min-h-[600px] flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-pop rounded-full blur-3xl"></div>
          </div>

          {/* Content Grid */}
          <div className="container mx-auto px-12 py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-block">
                  <span className="bg-accent text-secondary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    🔥 Oferta especial
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Primeiro mês com <span className="text-accent">50% OFF</span>
                </h2>

                <p className="text-xl text-gray-200 leading-relaxed">
                  Experimente o poder de ter um stylist pessoal por apenas R$ 24,95 no primeiro mês. Cancele quando quiser.
                </p>

                <ul className="space-y-4">
                  {[
                    'Consultas ilimitadas com stylists',
                    'Closet digital completo',
                    'Looks personalizados semanais',
                    'Acesso ao app mobile',
                    'Chat prioritário 24/7'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-pop flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-accent hover:bg-amber-500 text-secondary px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                    Aproveitar oferta →
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/30">
                    Saber mais
                  </button>
                </div>

                <p className="text-sm text-gray-300">
                  ⏰ Oferta válida apenas para novos clientes. Após o primeiro mês, R$ 49,90/mês.
                </p>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {/* Mock cards with different styles */}
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                      <div className="aspect-square bg-gradient-to-br from-accent to-amber-600 rounded-xl mb-4"></div>
                      <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                      <div className="aspect-square bg-gradient-to-br from-pop to-emerald-600 rounded-xl mb-4"></div>
                      <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                      <div className="aspect-square bg-gradient-to-br from-primary to-primary-dark rounded-xl mb-4"></div>
                      <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
                      <div className="aspect-square bg-gradient-to-br from-secondary to-gray-700 rounded-xl mb-4"></div>
                      <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}