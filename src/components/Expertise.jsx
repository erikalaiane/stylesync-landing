export default function Expertise() {
  const categories = [
    {
      title: 'Work & Career',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
      color: 'from-primary/90 to-primary-dark/90'
    },
    {
      title: 'Casual Everyday',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      color: 'from-accent/90 to-amber-600/90'
    },
    {
      title: 'Special Events',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      color: 'from-pop/90 to-emerald-600/90'
    },
    {
      title: 'Date Nights',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
      color: 'from-primary-dark/90 to-primary/90'
    },
    {
      title: 'Travel Style',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
      color: 'from-secondary/90 to-gray-700/90'
    },
    {
      title: 'Personal Brand',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      color: 'from-accent/90 to-primary/90'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossas especialidades</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">
            Looks para <span className="text-primary">todos os momentos</span> da sua vida
          </h2>
          <p className="text-gray-600 text-lg">
            Nossos stylists são especializados em criar o visual perfeito para cada ocasião
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Hidden button that appears on hover */}
                <button className="mt-4 bg-white text-secondary px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 inline-block w-fit">
                  Ver estilos →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}