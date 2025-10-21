import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  return (
    <div className="bg-gradient-to-r from-red-900 via-pink-600 to-red-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-white mb-4" style={{ textShadow: '4px 4px 0px #000' }}>
          FIQUE POR DENTRO
        </h2>
        <p className="text-xl text-gray-100 mb-8">Receba as últimas tendências e dicas exclusivas</p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="flex-1 px-6 py-4 rounded-xl border-4 border-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
          />
          <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-black text-lg transform hover:scale-105 transition-all shadow-xl border-4 border-white">
            INSCREVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;