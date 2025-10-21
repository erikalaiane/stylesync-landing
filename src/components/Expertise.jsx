const Expertise = () => {
  const categories = [
    { title: "STREETWEAR", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop", color: "from-red-900 to-red-700" },
    { title: "CASUAL CHIC", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop", color: "from-pink-600 to-pink-400" },
    { title: "BUSINESS", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", color: "from-gray-800 to-gray-600" },
    { title: "EVENING", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=300&fit=crop", color: "from-purple-900 to-red-900" }
  ];
  
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4 text-gray-900" style={{ textShadow: '3px 3px 0px #FFB703' }}>
          NOSSOS ESTILOS
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-pink-600 mx-auto mb-16 transform rotate-1"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl border-4 border-gray-900 shadow-xl transform group-hover:scale-105 group-hover:rotate-2 transition-all">
                <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-2xl font-black tracking-wider">{cat.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-black transform rotate-12 group-hover:rotate-0 transition-transform">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
