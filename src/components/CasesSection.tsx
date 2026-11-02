import { TrendingUp } from "lucide-react";
import { flags, cases } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

// Seção oculta até que flags.showCases = true e haja cases reais em siteData.ts
const CasesSection = () => {
  if (!flags.showCases || cases.length === 0) return null;

  return (
    <section id="cases" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Cases de <span className="text-primary">sucesso</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <FadeUp key={item.segment} delay={0.1 * index}>
              <div className="h-full bg-background border border-border rounded-2xl p-8 flex flex-col">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-4">
                  {item.segment}
                </span>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Desafio:</strong> {item.challenge}
                </p>
                <p className="text-muted-foreground mb-6 flex-1">
                  <strong className="text-foreground">Ação:</strong> {item.action}
                </p>
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary font-semibold">{item.result}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
