import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { siteConfig, contact } from "@/data/siteData";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidade | Agência Innovation</title>
        <meta
          name="description"
          content="Política de Privacidade da Agência Innovation: como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD."
        />
        <link rel="canonical" href={`${siteConfig.url}/privacidade`} />
      </Helmet>

      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={siteConfig.logo} alt="Agência Innovation" className="w-10 h-10" />
            <span className="text-primary font-bold text-xl font-display">Innovation</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao site</span>
          </Link>
        </div>
      </header>

      <main className="py-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-bold text-foreground mb-8 font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Política de Privacidade
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">1. Quem somos</h2>
              <p>
                A Agência Innovation é uma agência de marketing digital sediada em
                São Paulo, SP, que atende empresas em todo o Brasil. Esta política
                descreve como tratamos dados pessoais em conformidade com a Lei
                Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">2. Dados que coletamos</h2>
              <p>
                Coletamos os dados que você fornece voluntariamente em nossos
                formulários: nome, e-mail, telefone/WhatsApp, empresa e mensagem.
                Também coletamos parâmetros de campanha (UTMs) e, mediante seu
                consentimento, dados de navegação por meio de cookies analíticos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">3. Como usamos seus dados</h2>
              <p>
                Utilizamos seus dados para responder solicitações de contato,
                enviar nossa newsletter (quando você se inscreve) e melhorar nossos
                serviços e comunicação. Não vendemos nem compartilhamos seus dados
                com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">4. Cookies e rastreamento</h2>
              <p>
                Ferramentas de análise (como Google Analytics) só são ativadas após
                o seu consentimento no banner de cookies. Você pode recusar sem
                perder acesso a nenhum conteúdo do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">5. Seus direitos</h2>
              <p>
                Você pode solicitar a qualquer momento a confirmação, o acesso, a
                correção, a anonimização, a portabilidade ou a exclusão dos seus
                dados pessoais, além de revogar consentimentos. Para exercer esses
                direitos, escreva para{" "}
                <a href={`mailto:${contact.email}`} className="text-primary underline">
                  {contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">6. Segurança e armazenamento</h2>
              <p>
                Seus dados são armazenados em infraestrutura segura, com acesso
                restrito à equipe responsável pelo atendimento. Mantemos os dados
                apenas pelo tempo necessário para as finalidades descritas nesta
                política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">7. Contato do encarregado de dados</h2>
              <p>
                Para dúvidas sobre esta política ou sobre o tratamento dos seus
                dados, entre em contato pelo e-mail{" "}
                <a href={`mailto:${contact.email}`} className="text-primary underline">
                  {contact.email}
                </a>{" "}
                ou pelo WhatsApp {contact.whatsappDisplay}.
              </p>
            </section>

            <p className="text-sm">Última atualização: outubro de 2026.</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Privacidade;
