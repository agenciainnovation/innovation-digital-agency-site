
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
Assunto: ${formData.subject}
Mensagem: ${formData.message}

---
Enviado via página de contato do site da Agência Innovation
Data: ${new Date().toLocaleString('pt-BR')}
      `.trim();

      // Criar o link mailto
      const mailtoLink = `mailto:contato@agenciainnovation.com.br?subject=Contato via site - ${formData.subject || formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir o cliente de email
      window.location.href = mailtoLink;
      
      toast({
        title: "Cliente de email aberto!",
        description: "Seu cliente de email foi aberto com a mensagem preenchida. Complete o envio por lá."
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
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
Enviado via página de contato do site
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
    <div className="min-h-screen bg-innovation-black">
      {/* Header */}
      <header className="border-b border-innovation-gray/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png" 
                alt="Agência Innovation" 
                className="w-10 h-10"
              />
              <span className="text-innovation-yellow font-bold text-xl font-poppins">
                Innovation
              </span>
            </Link>
            
            <Link 
              to="/"
              className="flex items-center space-x-2 text-white/80 hover:text-innovation-yellow transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Vamos <span className="text-innovation-yellow">inovar juntos</span>?
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Entre em contato conosco e descubra como podemos transformar 
              a presença digital da sua empresa com estratégias inovadoras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envie sua mensagem
                </h2>
                
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
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-innovation-yellow rounded-xl h-12">
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent className="bg-innovation-gray border-innovation-yellow/30">
                        <SelectItem value="trafego">Gestão de Tráfego Pago</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="branding">Branding e Design</SelectItem>
                        <SelectItem value="website">Criação de Website</SelectItem>
                        <SelectItem value="seo">SEO e Otimização</SelectItem>
                        <SelectItem value="consultoria">Consultoria Estratégica</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
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
                    Quero receber novidades
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

                {/* CTA Box */}
                <div className="mt-8 p-6 bg-innovation-yellow/10 border border-innovation-yellow/30 rounded-2xl">
                  <h4 className="text-innovation-yellow font-bold mb-2">💡 Pronto para inovar?</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Agende uma conversa sem compromisso e descubra como podemos acelerar o crescimento do seu negócio.
                  </p>
                  <a 
                    href="https://wa.me/5511973473423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-innovation-yellow text-innovation-black hover:bg-innovation-yellow/90 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105"
                  >
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
