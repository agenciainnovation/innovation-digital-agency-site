import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { setConsent, loadTrackers } from "@/lib/tracking";

const CONSENT_KEY = "innovation_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadTrackers();
    }
  }, []);

  const handleAccept = () => {
    setConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60] bg-card border border-border rounded-2xl p-6 shadow-2xl animate-fade-in-up"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground mb-1">
            Sua privacidade importa
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Utilizamos cookies para melhorar sua experiência e medir resultados,
            conforme a LGPD. Saiba mais na nossa{" "}
            <Link to="/privacidade" className="text-primary underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={handleAccept}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold min-h-[44px]"
        >
          Aceitar
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="flex-1 min-h-[44px]"
        >
          Recusar
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
