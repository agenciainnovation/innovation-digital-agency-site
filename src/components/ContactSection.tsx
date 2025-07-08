import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Criar o corpo do email
      const emailBody = `
Nome: ${formData.name}
E-mail: ${formData.email}
Mensagem: ${formData.message}

---
Enviado via formulário do site da Agência Innovation
Data: ${new Date().toLocaleString('pt-BR')}
      `.trim();

      // Criar o link mailto
      const mailtoLink = `mailto:contato@agenciainnovation.com.br?subject=Nova mensagem do site - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir o cliente de email
      window.location.href = mailtoLink;
      
      toast({
        title: "Cliente de email aberto!",
        description: "Seu cliente de email foi aberto com a mensagem preenchida. Complete o envio por lá."
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao abrir cliente de email",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail) return;

    try {
      // Criar o corpo do email para newsletter
      const emailBody = `
Nova inscrição na newsletter:

E-mail: ${newsletterEmail}

---
Enviado via formulário de newsletter do site
Data: ${new Date().toLocaleString('pt-BR')}
      `.trim();

      // Criar o link mailto para newsletter
      const mailtoLink = `mailto:contato@agenciainnovation.com.br?subject=Nova inscrição na newsletter&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir o cliente de email
      window.location.href = mailtoLink;
      
      toast({
        title: "Cliente de email aberto!",
        description: "Seu cliente de email foi aberto para processar a inscrição na newsletter."
      });
      
      setNewsletterEmail('');
    } catch (error) {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-innovation-black via-innovation-gray/10 to-innovation-black py-0">
      <div className="container mx-auto px-4 py-[15px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Vamos <span className="text-innovation-yellow">inovar juntos</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Entre em contato conosco e descubra como podemos transformar 
            a presença digital da sua empresa com estratégias inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie sua mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-innovation-yellow rounded-xl h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-innovation-yellow rounded-xl h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-innovation-yellow rounded-xl resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-innovation-black/30 border-t-innovation-black rounded-full animate-spin mr-2" />
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

            {/* Newsletter */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                📧 Newsletter Innovation
              </h3>
              <p className="text-white/70 mb-6">
                Receba dicas exclusivas, tendências do mercado e novidades sobre marketing digital.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu e-mail para newsletter"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-innovation-yellow rounded-xl h-12"
                />
                <Button
                  type="submit"
                  className="bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-fit">
              <h3 className="text-2xl font-bold text-white mb-8">
                Outras formas de contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-innovation-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-innovation-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-mail</h4>
                    <a 
                      href="mailto:contato@agenciainnovation.com.br"
                      className="text-innovation-yellow hover:text-innovation-yellow/80 transition-colors duration-300"
                    >
                      contato@agenciainnovation.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-innovation-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-innovation-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5511973473423"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-innovation-yellow hover:text-innovation-yellow/80 transition-colors duration-300"
                    >
                      (11) 97347-3423
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-innovation-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-innovation-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Localização</h4>
                    <p className="text-white/70">
                      São Paulo, SP<br />
                      Atendimento em todo Brasil
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/agenciainnovationbr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-white font-bold">IG</span>
                  </a>
                  <a 
                    href="https://facebook.com/agenciainnovationbr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-white font-bold">FB</span>
                  </a>
                  <a 
                    href="https://linkedin.com/company/agenciainnovationbr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-white font-bold">IN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
