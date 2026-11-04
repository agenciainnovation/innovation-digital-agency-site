import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { siteConfig, contact } from "@/data/siteData";

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Termos de Uso | Agência Innovation</title>
        <meta
          name="description"
          content="Termos de Uso do site da Agência Innovation: condições de uso do conteúdo e dos canais de contato."
        />
        <link rel="canonical" href={`${siteConfig.url}/termos`} />
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
            Termos de Uso
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar este site, você concorda com estes Termos de
                Uso. Caso não concorde com alguma condição, recomendamos que não
                utilize o site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">2. Conteúdo do site</h2>
              <p>
                Todo o conteúdo deste site — textos, imagens, marca e layout — é de
                propriedade da Agência Innovation e protegido por direitos autorais.
                É proibida a reprodução sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">3. Informações e propostas</h2>
              <p>
                As informações apresentadas neste site têm caráter institucional.
                Propostas comerciais, prazos e condições de serviço são formalizadas
                individualmente em contrato, após diagnóstico e conversa com nossa
                equipe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">4. Formulários e contato</h2>
              <p>
                Ao enviar formulários neste site, você declara que as informações
                fornecidas são verdadeiras e autoriza o contato da nossa equipe
                para responder à sua solicitação, conforme nossa{" "}
                <Link to="/privacidade" className="text-primary underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">5. Limitação de responsabilidade</h2>
              <p>
                Empregamos todos os esforços para manter as informações do site
                atualizadas e corretas, mas não garantimos ausência de erros ou
                interrupções. O uso das informações é de responsabilidade do
                visitante.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">6. Alterações destes termos</h2>
              <p>
                Podemos atualizar estes Termos de Uso a qualquer momento. A versão
                vigente estará sempre disponível nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3 font-display">7. Contato</h2>
              <p>
                Dúvidas sobre estes termos podem ser enviadas para{" "}
                <a href={`mailto:${contact.email}`} className="text-primary underline">
                  {contact.email}
                </a>
                .
              </p>
            </section>

            <p className="text-sm">Última atualização: outubro de 2026.</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Termos;
