export default function WhyStyleSync() {
  const features = [
    {
      icon: '👨‍🎨',
      title: 'Time de stylists certificados',
      description: 'Profissionais formados e com anos de experiência no mercado da moda'
    },
    {
      icon: '💝',
      title: 'Atendimento personalizado 1:1',
      description: 'Você sempre terá um stylist dedicado que conhece seu estilo'
    },
    {
      icon: '👔',
      title: 'Entendemos todos os tipos de corpo',
      description: 'Celebramos a diversidade e criamos looks que valorizam você'
    },
    {
      icon: '💰',
      title: 'Respeitamos seu orçamento',
      description: 'Sugestões adaptadas à sua realidade financeira'
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade em primeiro lugar',
      description: 'Incentivamos moda consciente e reutilização de peças'
    },
    {
      icon: '🤝',
      title: 'Comunidade de membros inspiradora',
      description: 'Compartilhe looks e inspire-se com outros membros'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por que StyleSync</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">
            Mais que styling, uma <span className="text-primary">transformação completa</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nos preocupamos genuinamente com sua jornada de estilo e bem-estar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-200">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <div className="text-gray-200">Clientes ativos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200k+</div>
              <div className="text-gray-200">Looks criados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <div className="text-gray-200">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}