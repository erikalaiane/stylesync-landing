import { Sparkles, Zap, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: <Sparkles className="w-8 h-8" />, title: "Crie seu Perfil", desc: "Conte seu estilo e preferências" },
    { icon: <Zap className="w-8 h-8" />, title: "IA Analisa", desc: "Nossa IA cria looks personalizados" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Vista & Arrasa", desc: "Receba sugestões diárias incríveis" }
  ];
  
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4 text-gray-900" style={{ textShadow: '3px 3px 0px #E63946' }}>
          COMO FUNCIONA
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-red-900 to-pink-600 mx-auto mb-16 transform -rotate-1"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-pink-600 transform rotate-2 group-hover:rotate-0 transition-transform rounded-2xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform border-4 border-gray-900">
                <div className="bg-gradient-to-br from-red-900 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 transform -rotate-12">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
                <div className="absolute -top-3 -left-3 bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl border-3 border-gray-900">
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
