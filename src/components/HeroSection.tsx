import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { heroStats, whatsappLink } from "@/data/siteData";
import { trackEvent } from "@/lib/tracking";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeUp from "@/components/FadeUp";

const serviceChips = ["Tráfego", "Social", "Branding", "Sites", "SEO"];

const HeroSection = () => {
  const scrollToContact = () => {
    trackEvent("click_cta_hero", { location: "hero" });
    const element = document.getElementById("contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    trackEvent("click_whatsapp", { location: "hero" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Formas geométricas de fundo */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary/30 rounded-3xl rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Chips flutuantes de serviços */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        {serviceChips.map((chip, i) => (
          <span
            key={chip}
            className="absolute px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground animate-float"
            style={{
              top: `${18 + i * 14}%`,
              left: i % 2 === 0 ? `${4 + i * 2}%` : undefined,
              right: i % 2 === 1 ? `${4 + i * 2}%` : undefined,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10 mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="inline-block text-sm font-medium text-primary bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8">
              Agência de marketing digital 360°
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-bold text-foreground mb-6 leading-tight text-balance" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Inovação que conecta{" "}
              <span className="text-primary">marcas ao futuro</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Transformamos sua presença digital com estratégias inteligentes,
              criatividade e resultados mensuráveis.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 glow-yellow min-h-[44px] h-14"
              >
                Fale com um especialista
              </Button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 min-h-[44px] h-14"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Sem compromisso · Resposta rápida
            </p>
          </FadeUp>

          {/* Cards de números */}
          <FadeUp delay={0.4}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
