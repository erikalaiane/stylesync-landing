const Team = () => {
  const team = [
    { 
      name: "Sofia Ribeiro", 
      role: "CEO & Co-fundadora", 
      bio: "Ex-stylist de celebridades, apaixonada por tech",
      img: "/stylesync-landing/images/img7.jpg"
    },
    { 
      name: "Rafael Santos", 
      role: "CTO & Co-fundador", 
      bio: "Especialista em IA e machine learning",
      img: "/stylesync-landing/images/img8.jpg"
    },
    { 
      name: "Camila Torres", 
      role: "Head de Styling", 
      bio: "15 anos de experiência em moda",
      img: "/stylesync-landing/images/img9.jpg"
    },
    { 
      name: "Lucas Mendes", 
      role: "Lead Designer", 
      bio: "Design thinking aplicado à moda",
      img: "/stylesync-landing/images/img10.jpg"
    }
  ];
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center mb-4" style={{ textShadow: '3px 3px 0px #FF006E' }}>
          NOSSO TIME
        </h2>
        <p className="text-xl text-center text-gray-300 mb-4">Mentes criativas por trás da revolução do styling</p>
        <div className="w-32 h-2 bg-gradient-to-r from-pink-600 to-yellow-400 mx-auto mb-16 transform rotate-1"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl border-4 border-pink-600 shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-red-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                  <p className="text-pink-400 font-bold mb-2 text-sm tracking-wider">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl transform rotate-12 group-hover:rotate-0 transition-transform border-3 border-gray-900">
                  ★
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;