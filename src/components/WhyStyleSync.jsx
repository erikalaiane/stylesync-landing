import { Sparkles, Users, TrendingUp, Star } from 'lucide-react';

const WhyStyleSync = () => {
  const benefits = [
    { icon: <Sparkles />, title: "IA Avançada", desc: "Tecnologia de ponta para looks perfeitos" },
    { icon: <Users />, title: "Stylist 24/7", desc: "Seu personal stylist sempre disponível" },
    { icon: <TrendingUp />, title: "Tendências", desc: "Sempre à frente das últimas modas" },
    { icon: <Star />, title: "Personalizado", desc: "100% adaptado ao seu estilo único" }
  ];
  
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4" style={{ textShadow: '3px 3px 0px #FF006E' }}>
          POR QUE STYLESYNC?
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-pink-600 to-yellow-400 mx-auto mb-16 transform -rotate-1"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-4 border-pink-600 transform hover:scale-105 hover:rotate-2 transition-all shadow-xl">
              <div className="bg-pink-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 transform -rotate-12">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyStyleSync;