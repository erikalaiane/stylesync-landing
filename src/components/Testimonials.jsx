import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Maria Silva", 
      role: "Influencer", 
      text: "StyleSync revolucionou minha forma de me vestir!", 
      rating: 5,
      img: "/images/img11.jpg"
    },
    { 
      name: "João Costa", 
      role: "Executivo", 
      text: "Economizo tempo e sempre estou bem vestido.", 
      rating: 5,
      img: "/images/img12.jpg"
    },
    { 
      name: "Ana Oliveira", 
      role: "Designer", 
      text: "A IA entende perfeitamente meu estilo!", 
      rating: 5,
      img: "/images/img13.jpg"
    }
  ];
  
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4 text-gray-900" style={{ textShadow: '3px 3px 0px #FFB703' }}>
          O QUE DIZEM
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-pink-600 mx-auto mb-16 transform -rotate-1"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border-4 border-gray-900 shadow-xl transform hover:scale-105 hover:rotate-1 transition-all">
              <div className="flex mb-3">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-lg italic">"{test.text}"</p>
              <div className="flex items-center">
                <img 
                  src={test.img} 
                  alt={test.name}
                  className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-pink-600"
                />
                <div>
                  <p className="font-black text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-600">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;