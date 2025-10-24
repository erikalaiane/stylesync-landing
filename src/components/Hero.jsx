const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-pink-600 transform -rotate-1 shadow-lg">
              <span className="text-sm font-bold tracking-wider">MODA URBANA</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block" style={{ textShadow: '4px 4px 0px #8B1538' }}>STYLE</span>
              <span className="block text-pink-500" style={{ textShadow: '4px 4px 0px #5C0E26' }}>SYNC</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Sua plataforma de styling pessoal impulsionada por IA. Vista-se com atitude, destaque-se na multidão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-900 to-pink-600 hover:from-red-800 hover:to-pink-500 font-bold text-lg transform hover:scale-105 transition-all shadow-xl border-2 border-pink-400">
                COMEÇAR AGORA
              </button>
              <button className="px-8 py-4 bg-transparent border-3 border-white hover:bg-white hover:text-gray-900 font-bold text-lg transform hover:scale-105 transition-all">
                SABER MAIS
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-red-900 transform rotate-3 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-gray-800 rounded-3xl p-8 border-4 border-pink-600 transform -rotate-2 shadow-2xl">
              <img 
                src="/stylesync-landing/images/img1.jpg" 
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 transform rotate-12 font-black text-xl shadow-xl">
                EM ALTA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
