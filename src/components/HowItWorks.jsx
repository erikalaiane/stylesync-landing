export default function HowItWorks() {
  const steps = [
    {
      icon: '💬',
      title: 'Conte sua história',
      description: 'Conversa com stylist sobre seu estilo, tipo de corpo e rotina diária'
    },
    {
      icon: '👔',
      title: 'Seu closet digital',
      description: 'Fotografe suas peças ou receba sugestões personalizadas de compra'
    },
    {
      icon: '✨',
      title: 'Looks personalizados',
      description: 'Stylist monta combinações exclusivas pensadas especialmente para você'
    },
    {
      icon: '📲',
      title: 'Acesso ilimitado',
      description: 'Chat direto com seu especialista sempre que precisar de ajuda'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Como funciona</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">
            Simples, rápido e <span className="text-primary">totalmente personalizado</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Em apenas 4 passos você terá acesso ao seu stylist pessoal e looks incríveis todos os dias
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile, shown on desktop between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent -z-10"></div>
              )}
              
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-primary/20">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl">{step.icon}</span>
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Começar minha jornada →
          </button>
        </div>
      </div>
    </section>
  )
}