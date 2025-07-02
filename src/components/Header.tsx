import { useState } from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-40 bg-innovation-black/90 backdrop-blur-sm border-b border-innovation-gray/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png" alt="Agência Innovation" className="w-10 h-10" />
            <span className="text-innovation-yellow font-bold font-poppins mx-0 text-base">Agência Innovation</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contato')} className="bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`bg-white h-0.5 w-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`bg-white h-0.5 w-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`bg-white h-0.5 w-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-innovation-gray/20">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-white/80 hover:text-innovation-yellow transition-colors duration-300 font-medium text-left">
                Contato
              </button>
              <Button onClick={() => scrollToSection('contato')} className="bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 w-full mt-4">
                Fale Conosco
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;