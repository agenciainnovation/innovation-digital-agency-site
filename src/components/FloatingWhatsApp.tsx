import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteData";
import { trackEvent } from "@/lib/tracking";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    trackEvent("click_whatsapp", { location: "floating_button" });
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#1fb857] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};

export default FloatingWhatsApp;
