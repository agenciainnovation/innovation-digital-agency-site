
import { MessageCircle } from 'lucide-react';

// Declare gtag function type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Floating Button',
        transport_type: 'beacon'
      });
    }
    window.open('https://wa.me/5511973473423', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};

export default FloatingWhatsApp;
