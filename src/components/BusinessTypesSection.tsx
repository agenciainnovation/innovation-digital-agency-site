import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { businessTypes } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const BusinessTypesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-14">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Cada negócio tem um desafio.{" "}
            <span className="text-primary">Montamos o time certo.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <Tabs defaultValue={businessTypes[0].id} className="max-w-4xl mx-auto">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              {businessTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="rounded-full px-5 py-3 min-h-[44px] text-sm font-medium bg-card border border-border text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300"
                >
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {businessTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                  <p className="text-lg text-foreground mb-8 leading-relaxed">
                    {type.challenge}
                  </p>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                    Serviços que combinam
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {type.services.map((service) => (
                      <li key={service} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </span>
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeUp>
      </div>
    </section>
  );
};

export default BusinessTypesSection;
