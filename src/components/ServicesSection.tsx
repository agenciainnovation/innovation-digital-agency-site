import {
  TrendingUp,
  Users,
  Palette,
  Globe,
  Search,
  Target,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { services } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Palette,
  Globe,
  Search,
  Target,
};

const ServicesSection = () => {
  const scrollToContactWithService = (serviceTitle: string) => {
    // Pré-seleciona o serviço no formulário de contato
    window.dispatchEvent(
      new CustomEvent("preselect-service", { detail: serviceTitle })
    );
    const element = document.getElementById("contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-light-section text-innovation-black">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Nossos <span className="text-innovation-black bg-primary px-3 rounded-lg inline-block">Serviços</span>
          </h2>
          <p className="text-lg text-innovation-black/70 max-w-3xl mx-auto">
            Soluções completas de marketing digital para o crescimento da sua empresa.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <FadeUp key={service.id} delay={0.08 * index}>
                <div className="group h-full p-8 rounded-2xl bg-white border border-innovation-black/10 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-innovation-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-innovation-black/70 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <button
                    onClick={() => scrollToContactWithService(service.title)}
                    className="inline-flex items-center gap-2 text-innovation-black font-semibold hover:gap-3 transition-all duration-300 min-h-[44px] self-start"
                    aria-label={`Quero o serviço ${service.title}`}
                  >
                    Quero este serviço
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.3} className="text-center mt-14">
          <div className="inline-flex items-center bg-innovation-black rounded-full py-4 px-8">
            <span className="text-primary font-medium">
              Personalizamos cada estratégia para as necessidades do seu negócio
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ServicesSection;
