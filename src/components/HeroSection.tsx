import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-innovation-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-innovation-yellow rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-innovation-gray rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10 my-[100px]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Inovação que conecta{' '}
            <span className="text-innovation-yellow">marcas ao futuro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Transformamos sua presença digital com estratégias inteligentes, 
            criatividade sem limites e resultados que superam expectativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button onClick={scrollToContact} className="bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 transform">
              Fale com um especialista
            </Button>
            
            <a href="https://wa.me/5511973473423" target="_blank" rel="noopener noreferrer" className="border-2 border-innovation-yellow text-innovation-yellow hover:bg-innovation-yellow hover:text-innovation-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 transform">
              WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-innovation-yellow mb-2">+150</div>
              <div className="text-white/80">Projetos Entregues</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-innovation-yellow mb-2">98%</div>
              <div className="text-white/80">Satisfação dos Clientes</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-innovation-yellow mb-2">5+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-innovation-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-innovation-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;