
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <footer className="bg-innovation-black border-t border-innovation-gray/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png" alt="Agência Innovation" className="w-12 h-12" />
              <span className="text-innovation-yellow font-bold text-2xl font-poppins">Agência Innovation</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Transformamos marcas através de estratégias digitais inovadoras, 
              conectando empresas ao futuro com criatividade e resultados mensuráveis.
            </p>
            <div className="text-innovation-yellow font-medium">
              Agência Innovation — Estratégia, Criatividade e Resultado.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Navegação Rápida</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('diferenciais')} className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('depoimentos')} className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@agenciainnovation.com.br" className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  contato@agenciainnovation.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511973473423" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-innovation-yellow transition-colors duration-300">
                  (11) 97347-3423
                </a>
              </li>
              <li className="text-white/70">
                São Paulo, SP
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/agenciainnovationbr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://facebook.com/agenciainnovationbr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com/company/agenciainnovationbr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-innovation-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Agência Innovation. Todos os direitos reservados.
            </div>
            <button onClick={scrollToTop} className="flex items-center space-x-2 text-innovation-yellow hover:text-innovation-yellow/80 transition-colors duration-300 text-sm">
              <span>Voltar ao topo</span>
              <div className="w-6 h-6 border border-innovation-yellow rounded-full flex items-center justify-center">
                <span className="text-xs">↑</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
