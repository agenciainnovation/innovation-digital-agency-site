import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosMarquee from "@/components/LogosMarquee";
import ServicesSection from "@/components/ServicesSection";
import BusinessTypesSection from "@/components/BusinessTypesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/data/siteData";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Impede scroll durante a splash screen
  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Agência de Marketing Digital 360° em São Paulo | Innovation</title>
        <meta
          name="description"
          content="Tráfego pago, social media, branding, sites e SEO em um só time. Peça seu diagnóstico com a Agência Innovation."
        />
        <link rel="canonical" href={`${siteConfig.url}/`} />
        <meta property="og:url" content={`${siteConfig.url}/`} />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <LogosMarquee />
        <ServicesSection />
        <BusinessTypesSection />
        <ProcessSection />
        <DifferentialsSection />
        <CasesSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
};

export default Index;
