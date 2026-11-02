import { useState, useEffect } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { contact, socials, services, whatsappLink } from "@/data/siteData";
import { trackEvent, getUtmParams } from "@/lib/tracking";
import FadeUp from "@/components/FadeUp";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  whatsapp: z.string().trim().max(20, "Número muito longo").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Nome muito longo").optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Escreva sua mensagem").max(1000, "Mensagem muito longa"),
  lgpd: z.boolean().refine((v) => v === true, "É necessário aceitar a política de privacidade"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const initialForm: ContactFormData = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  service: "",
  message: "",
  lgpd: false,
};

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Pré-seleção de serviço vinda dos cards de serviços
  useEffect(() => {
    const handler = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      setFormData((prev) => ({ ...prev, service }));
    };
    window.addEventListener("preselect-service", handler);
    return () => window.removeEventListener("preselect-service", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-spam: se preenchido, é robô — ignora silenciosamente
    if (honeypot) return;

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const utms = getUtmParams();
      const { error } = await supabase.from("leads").insert({
        name: result.data.name,
        email: result.data.email,
        whatsapp: result.data.whatsapp || null,
        company: result.data.company || null,
        service: result.data.service || null,
        message: result.data.message,
        ...utms,
      });

      if (error) throw error;

      trackEvent("form_submit", { form: "contato" });
      toast({
        variant: "success",
        title: "Mensagem enviada com sucesso!",
        description:
          "Recebemos seu contato. Nosso time retornará em breve pelo e-mail ou WhatsApp informado.",
        duration: 12000,
      });
      setFormData(initialForm);
    } catch {
      toast({
        title: "Erro ao enviar mensagem",
        description: `Tente novamente ou fale conosco pelo WhatsApp ${contact.whatsappDisplay}.`,
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl h-12";
  const errorClass = "text-sm text-destructive mt-1";

  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Vamos <span className="text-primary">inovar juntos</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entre em contato e descubra como podemos transformar a presença
            digital da sua empresa com estratégias inovadoras.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Formulário */}
          <FadeUp delay={0.1}>
            <div className="bg-background border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">
                Envie sua mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot — invisível para humanos */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  style={{ position: "absolute", left: "-9999px" }}
                />

                <div>
                  <label htmlFor="contact-name" className="sr-only">Nome completo</label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    onFocus={() => trackEvent("form_start", { form: "contato" })}
                    className={inputClass}
                    maxLength={100}
                  />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="sr-only">E-mail</label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className={inputClass}
                      maxLength={255}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-whatsapp" className="sr-only">WhatsApp</label>
                    <Input
                      id="contact-whatsapp"
                      type="tel"
                      placeholder="Seu WhatsApp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData((p) => ({ ...p, whatsapp: e.target.value }))}
                      className={inputClass}
                      maxLength={20}
                    />
                    {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="sr-only">Empresa</label>
                  <Input
                    id="contact-company"
                    type="text"
                    placeholder="Sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    className={inputClass}
                    maxLength={100}
                  />
                  {errors.company && <p className={errorClass}>{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="contact-service" className="sr-only">Serviço de interesse</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData((p) => ({ ...p, service: value }))}
                  >
                    <SelectTrigger id="contact-service" className={inputClass}>
                      <SelectValue placeholder="Serviço de interesse" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Mensagem</label>
                  <Textarea
                    id="contact-message"
                    placeholder="Conte-nos sobre seu projeto ou dúvida…"
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    rows={5}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-xl resize-none"
                    maxLength={1000}
                  />
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="contact-lgpd"
                      checked={formData.lgpd}
                      onCheckedChange={(checked) =>
                        setFormData((p) => ({ ...p, lgpd: checked === true }))
                      }
                      className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="contact-lgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Autorizo o contato da Agência Innovation e concordo com o
                      tratamento dos meus dados conforme a{" "}
                      <Link to="/privacidade" className="text-primary underline">
                        Política de Privacidade
                      </Link>
                      .
                    </label>
                  </div>
                  {errors.lgpd && <p className={errorClass}>{errors.lgpd}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 min-h-[44px] h-14 glow-yellow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </FadeUp>

          {/* Outras formas de contato */}
          <FadeUp delay={0.2}>
            <div className="bg-background border border-border rounded-3xl p-8 h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-8 font-display">
                Outras formas de contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">E-mail</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">WhatsApp</h4>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("click_whatsapp", { location: "contato" })}
                      className="text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      {contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Localização</h4>
                    <p className="text-muted-foreground">{contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-foreground font-semibold mb-4">
                  Siga-nos nas redes sociais
                </h4>
                <div className="flex gap-4">
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Agência Innovation"
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook da Agência Innovation"
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn da Agência Innovation"
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
