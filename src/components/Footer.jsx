import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-black mb-4 text-pink-500">STYLESYNC</h3>
            <p className="text-gray-400">Moda urbana com atitude</p>
          </div>
          
          <div>
            <h4 className="font-black mb-3 text-lg">PRODUTO</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-pink-500 cursor-pointer">Como funciona</li>
              <li className="hover:text-pink-500 cursor-pointer">Preços</li>
              <li className="hover:text-pink-500 cursor-pointer">FAQ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-3 text-lg">EMPRESA</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-pink-500 cursor-pointer">Sobre</li>
              <li className="hover:text-pink-500 cursor-pointer">Blog</li>
              <li className="hover:text-pink-500 cursor-pointer">Carreiras</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-3 text-lg">SOCIAL</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 StyleSync. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <span className="hover:text-pink-500 cursor-pointer">Privacidade</span>
            <span className="hover:text-pink-500 cursor-pointer">Termos</span>
            <span className="hover:text-pink-500 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;