
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechStart Solutions",
      content: "A Agência Innovation transformou completamente nossa presença digital. O ROI das campanhas superou todas as expectativas, e o atendimento é sempre impecável.",
      rating: 5,
      initials: "CS"
    },
    {
      name: "Maria Santos",
      role: "Diretora de Marketing",
      company: "Fashion Trends",
      content: "Profissionalismo e criatividade em cada projeto. Nossa marca ganhou uma identidade única e as vendas online cresceram 300% em 6 meses.",
      rating: 5,
      initials: "MS"
    },
    {
      name: "João Oliveira",
      role: "Fundador",
      company: "GreenLife Organic",
      content: "Estratégia impecável e resultados surpreendentes. A equipe entende profundamente o mercado e entrega soluções que realmente funcionam.",
      rating: 5,
      initials: "JO"
    },
    {
      name: "Ana Costa",
      role: "CMO",
      company: "Digital Ventures",
      content: "Parceria estratégica que mudou nosso patamar. O uso de IA e análise de dados trouxe insights valiosos para nossas campanhas.",
      rating: 5,
      initials: "AC"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-innovation-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-innovation-yellow/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            O que nossos <span className="text-innovation-yellow">clientes</span> dizem
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Depoimentos reais de empresas que transformaram seus resultados 
            com nossas estratégias de marketing digital.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-innovation-yellow fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-innovation-yellow rounded-full flex items-center justify-center">
                  <span className="text-innovation-black font-bold text-lg">
                    {testimonials[currentTestimonial].initials}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-innovation-yellow">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-innovation-yellow/20 hover:bg-innovation-yellow/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-innovation-yellow" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-innovation-yellow/20 hover:bg-innovation-yellow/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-innovation-yellow" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-innovation-yellow scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Mini testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${0.6 + (0.1 * index)}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-innovation-yellow rounded-full flex items-center justify-center mr-3">
                    <span className="text-innovation-black font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-innovation-yellow text-xs">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {testimonial.content.slice(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
