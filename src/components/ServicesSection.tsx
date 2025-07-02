import { TrendingUp, Users, Palette, Globe, Search, Target } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: TrendingUp,
    title: "Gestão de Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads, Facebook e Instagram para maximizar seu ROI e alcançar resultados mensuráveis."
  }, {
    icon: Users,
    title: "Social Media Estratégico",
    description: "Gestão completa das redes sociais com conteúdo engajador, estratégias de crescimento e análise de performance."
  }, {
    icon: Palette,
    title: "Branding e Posicionamento",
    description: "Construção de identidade visual marcante e posicionamento estratégico que diferencia sua marca no mercado."
  }, {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de websites modernos e landing pages otimizadas para conversão e experiência do usuário."
  }, {
    icon: Search,
    title: "SEO e Otimização Digital",
    description: "Estratégias de SEO para melhorar o ranking orgânico e aumentar a visibilidade da sua marca no Google."
  }, {
    icon: Target,
    title: "Consultoria Estratégica",
    description: "Análise completa do negócio e desenvolvimento de estratégias personalizadas para o crescimento digital."
  }];
  return <section id="servicos" className="py-20 bg-innovation-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Nossos <span className="text-innovation-yellow">Serviços</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Soluções completas de marketing digital para impulsionar o crescimento 
            da sua empresa com estratégias inovadoras e resultados comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-innovation-yellow/50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{
            animationDelay: `${0.1 * index}s`
          }}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-innovation-yellow rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-innovation-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-innovation-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{
        animationDelay: '0.8s'
      }}>
          <div className="inline-flex items-center bg-innovation-yellow/10 border border-innovation-yellow/30 rounded-full py-0 px-0">
            <span className="text-innovation-yellow px-0 font-medium mx-0 text-base">
              ✨ Personalizamos cada estratégia para as necessidades do seu negócio
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;