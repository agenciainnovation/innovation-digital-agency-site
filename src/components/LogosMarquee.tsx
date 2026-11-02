import { flags, clientLogos } from "@/data/siteData";

// Seção oculta até que flags.showLogos = true e haja logos reais em siteData.ts
const LogosMarquee = () => {
  if (!flags.showLogos || clientLogos.length === 0) return null;

  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden" aria-label="Empresas que confiam na Innovation">
      <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wide mb-8">
        Empresas que confiam na Innovation
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-marquee w-max">
          {doubled.map((client, index) => (
            <img
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
