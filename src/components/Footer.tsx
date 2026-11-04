import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { siteConfig, contact, socials, whatsappLink } from "@/data/siteData";
import { trackEvent, getUtmParams } from "@/lib/tracking";

const newsletterSchema = z.object({
  email: z.string().trim().email("E-mail inválido").max(255),
});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = newsletterSchema.safeParse({ email: newsletterEmail });
    if (!result.success) {
      setNewsletterError(result.error.issues[0].message);
      return;
    }
    setNewsletterError("");
    setIsNewsletterSubmitting(true);

    try {
      const utms = getUtmParams();
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: result.data.email, ...utms });

      if (error) throw error;

      trackEvent("newsletter_submit");
      toast({
        variant: "success",
        title: "Inscrição confirmada!",
        description:
          "Você entrou para a newsletter da Innovation. Em breve receberá dicas e novidades no seu e-mail.",
        duration: 12000,
      });
      setNewsletterEmail("");
    } catch {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "servicos", label: "Serviços" },
    { id: "diferenciais", label: "Diferenciais" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "faq", label: "FAQ" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={siteConfig.logo}
                alt="Agência Innovation"
                className="w-12 h-12"
              />
              <span className="text-primary font-bold text-xl font-display">
                Agência Innovation
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-primary font-medium text-sm">{siteConfig.tagline}</p>
            {siteConfig.cnpj && (
              <p className="text-muted-foreground text-sm mt-3">
                CNPJ: {siteConfig.cnpj}
              </p>
            )}
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-foreground font-semibold text-lg mb-6 font-display">
              Navegação
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 min-h-[44px] md:min-h-0"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato e redes */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6 font-display">
              Contato
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_whatsapp", { location: "footer" })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li className="text-muted-foreground">{contact.location}</li>
            </ul>

            <div className="flex gap-3">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Agência Innovation"
                className="w-11 h-11 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Agência Innovation"
                className="w-11 h-11 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Agência Innovation"
                className="w-11 h-11 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6 font-display">
              Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Receba dicas exclusivas, tendências do mercado e novidades sobre
              marketing digital.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Seu e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl h-12"
                maxLength={255}
              />
              {newsletterError && (
                <p className="text-sm text-destructive">{newsletterError}</p>
              )}
              <Button
                type="submit"
                disabled={isNewsletterSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 min-h-[44px]"
              >
                {isNewsletterSubmitting ? "Enviando..." : "Quero receber novidades"}
              </Button>
            </form>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Agência Innovation. Todos os direitos reservados.
              <span className="mx-2" aria-hidden="true">·</span>
              <Link to="/privacidade" className="hover:text-primary transition-colors">
                Privacidade
              </Link>
              <span className="mx-2" aria-hidden="true">·</span>
              <Link to="/termos" className="hover:text-primary transition-colors">
                Termos
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm min-h-[44px]"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <span className="w-8 h-8 border border-primary rounded-full flex items-center justify-center">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
