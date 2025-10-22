const Featured = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-red-950 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-8 border-pink-600 shadow-2xl">
          <img 
            src="/images/img6.jpg" 
            alt="Featured Collection" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-transparent flex items-center">
            <div className="p-12 max-w-2xl">
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-gray-900 transform -rotate-2 shadow-lg">
                <span className="text-sm font-black tracking-wider">NOVA COLEÇÃO</span>
              </div>
              <h2 className="text-6xl font-black text-white mb-4 leading-tight" style={{ textShadow: '4px 4px 0px #000' }}>
                PRIMAVERA/VERÃO 2025
              </h2>
              <p className="text-2xl text-gray-200 mb-6">Tendências urbanas que vão dominar a temporada</p>
              <button className="px-10 py-4 bg-pink-600 hover:bg-pink-500 text-white font-black text-xl transform hover:scale-105 transition-all shadow-xl border-4 border-white">
                EXPLORAR AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;