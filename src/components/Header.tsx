import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { trackEvent } from "@/lib/tracking";

const navLinks = [
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleCta = () => {
    trackEvent("click_cta_hero", { location: "header" });
    scrollToSection("contato");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
            aria-label="Ir para o início"
          >
            <img
              src={siteConfig.logo}
              alt="Agência Innovation"
              className="w-10 h-10"
            />
            <span className="text-primary font-bold font-display text-base">
              Agência Innovation
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium min-h-[44px]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleCta}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-full transition-all duration-300 hover:scale-105 glow-yellow-sm min-h-[44px]"
            >
              Fale com um especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-2" aria-label="Navegação móvel">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-3 min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={handleCta}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-full transition-all duration-300 w-full mt-4 min-h-[44px]"
              >
                Fale com um especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
