import { Heart, Users, BarChart3, Brain, LucideIcon } from "lucide-react";
import { differentials, statsStrip } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  BarChart3,
  Brain,
};

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Por que escolher a{" "}
            <span className="text-primary">Agência Innovation</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Criatividade, tecnologia e estratégia integradas para o crescimento
            da sua marca.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {differentials.map((differential, index) => {
            const IconComponent = iconMap[differential.icon];
            return (
              <FadeUp key={differential.title} delay={0.1 * index}>
                <div className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors duration-300">
                        {differential.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Faixa de números */}
        <FadeUp delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {statsStrip.map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">
                  {stat.value !== null ? (
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default DifferentialsSection;
