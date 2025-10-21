import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { name: "BÁSICO", price: "R$29", features: ["5 looks/mês", "IA básica", "Suporte email"], popular: false },
    { name: "PRO", price: "R$59", features: ["Looks ilimitados", "IA avançada", "Stylist dedicado", "Tendências exclusivas"], popular: true },
    { name: "PREMIUM", price: "R$99", features: ["Tudo do Pro", "Consultoria mensal", "Descontos em marcas", "Acesso VIP"], popular: false }
  ];
  
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4 text-gray-900" style={{ textShadow: '3px 3px 0px #8B1538' }}>
          PLANOS & PREÇOS
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-red-900 to-pink-600 mx-auto mb-16 transform rotate-1"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 font-black text-sm rotate-2 shadow-lg border-3 border-gray-900">
                  MAIS POPULAR
                </div>
              )}
              <div className={`bg-white rounded-2xl p-8 shadow-xl border-4 ${plan.popular ? 'border-pink-600' : 'border-gray-900'}`}>
                <h3 className="text-3xl font-black mb-2 text-gray-900">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-red-900">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 font-black text-lg transform hover:scale-105 transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-red-900 to-pink-600 text-white border-4 border-gray-900' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  ESCOLHER PLANO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;