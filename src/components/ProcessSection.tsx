import { Clock } from "lucide-react";
import { processSteps, deliveryTime } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const ProcessSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Como <span className="text-primary">trabalhamos</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <FadeUp key={step.step} delay={0.1 * index}>
              <div className="relative h-full bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <span className="text-5xl font-bold text-primary/20 font-display absolute top-6 right-6" aria-hidden="true">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full py-3 px-6">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">{deliveryTime}</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ProcessSection;
