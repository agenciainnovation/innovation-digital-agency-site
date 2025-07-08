
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "E-commerce Fashion",
      role: "CEO",
      content: "A Agência Innovation transformou completamente nossa presença digital. O ROI das campanhas aumentou 300% em apenas 3 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Tech Startup",
      role: "Fundador",
      content: "Profissionalismo excepcional e resultados impressionantes. Nossa marca ganhou visibilidade nacional graças às estratégias inovadoras.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Restaurante Premium",
      role: "Proprietária",
      content: "Desde que começamos a trabalhar juntos, nossas vendas online triplicaram. Equipe dedicada e sempre disponível.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-innovation-gray/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            O que nossos <span className="text-innovation-yellow">clientes dizem</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Resultados que falam por si só. Conheça as histórias de sucesso 
            de empresas que confiaram na Innovation para crescer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-innovation-yellow rounded-full flex items-center justify-center hover:bg-innovation-yellow/90 transition-colors duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-innovation-black" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-innovation-yellow' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-innovation-yellow rounded-full flex items-center justify-center hover:bg-innovation-yellow/90 transition-colors duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-innovation-black" />
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-innovation-yellow fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white font-light mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div>
                <h4 className="text-innovation-yellow font-bold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white/70">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center bg-innovation-yellow/10 border border-innovation-yellow/30 rounded-full py-4 px-8">
            <span className="text-innovation-yellow font-medium text-base">
              ⭐ Mais de 200 empresas confiam na Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
