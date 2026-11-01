// ============================================================
// Agência Innovation — Dados centralizados do site
// Todos os números, textos e contatos editáveis ficam aqui.
// ============================================================

export const siteConfig = {
  name: "Agência Innovation",
  tagline: "Agência Innovation — Estratégia, Criatividade e Resultado.",
  description:
    "Transformamos marcas através de estratégias digitais inovadoras, conectando empresas ao futuro com criatividade e resultados mensuráveis.",
  logo: "/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png",
  url: "https://innovation-digital-agency-site.lovable.app",
  cnpj: "", // Preencher quando disponível — fica oculto enquanto vazio
};

export const contact = {
  email: "contato@agenciainnovation.com.br",
  whatsappNumber: "5511973473423",
  whatsappDisplay: "(11) 97347-3423",
  whatsappMessage:
    "Olá! Vim pelo site da Agência Innovation e quero falar com um especialista.",
  location: "São Paulo, SP — Atendimento em todo Brasil",
};

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`;

export const socials = {
  instagram: "https://instagram.com/agenciainnovationbr",
  facebook: "https://facebook.com/agenciainnovationbr",
  linkedin: "https://linkedin.com/company/agenciainnovationbr",
  x: "@agenciainnovationbr",
};

// IDs de rastreamento (configuráveis)
export const tracking = {
  gaId: "G-NS21VWCHNF",
  metaPixelId: "", // Preencher com o ID do Meta Pixel quando disponível
};

// ============================================================
// Flags de seções — ativar apenas quando houver conteúdo real
// ============================================================
export const flags = {
  showLogos: false, // Marquee de logos de clientes
  showCases: false, // Cases com resultados
  showTeam: false, // Equipe
};

// ============================================================
// Estatísticas (mesmos valores em todas as seções)
// ============================================================
export const heroStats = [
  { value: 200, prefix: "+", suffix: "", label: "Projetos entregues" },
  { value: 98, prefix: "", suffix: "%", label: "Satisfação dos clientes" },
  { value: 5, prefix: "", suffix: "+", label: "Anos de experiência" },
];

export const statsStrip = [
  { value: 150, prefix: "+", suffix: "", label: "Empresas atendidas" },
  { value: 15, prefix: "", suffix: " dias", label: "Prazo médio de entrega" },
  { value: null, display: "24/7", label: "Suporte via WhatsApp" },
  { value: 2, prefix: "+", suffix: "M", label: "Impressões geradas" },
];

export const companiesCount = 150; // Usado no chip de depoimentos

// ============================================================
// Serviços
// ============================================================
export const services = [
  {
    id: "trafego",
    icon: "TrendingUp",
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas estratégicas no Google Ads, Facebook e Instagram para maximizar seu ROI e alcançar resultados mensuráveis.",
  },
  {
    id: "social",
    icon: "Users",
    title: "Social Media Estratégico",
    description:
      "Gestão completa das redes sociais com conteúdo engajador, estratégias de crescimento e análise de performance.",
  },
  {
    id: "branding",
    icon: "Palette",
    title: "Branding e Posicionamento",
    description:
      "Construção de identidade visual marcante e posicionamento estratégico que diferencia sua marca no mercado.",
  },
  {
    id: "sites",
    icon: "Globe",
    title: "Sites e Landing Pages",
    description:
      "Desenvolvimento de websites modernos e landing pages otimizadas para conversão e experiência do usuário.",
  },
  {
    id: "seo",
    icon: "Search",
    title: "SEO e Otimização Digital",
    description:
      "Estratégias de SEO para melhorar o ranking orgânico e aumentar a visibilidade da sua marca no Google.",
  },
  {
    id: "consultoria",
    icon: "Target",
    title: "Consultoria Estratégica",
    description:
      "Análise completa do negócio e desenvolvimento de estratégias personalizadas para o crescimento digital.",
  },
];

// ============================================================
// Segmentos atendidos (abas)
// ============================================================
export const businessTypes = [
  {
    id: "comercio",
    label: "Comércio local",
    challenge:
      "O desafio é ser encontrado por quem está perto e pronto para comprar.",
    services: ["Gestão de Tráfego Pago", "Social Media Estratégico", "SEO e Otimização Digital"],
  },
  {
    id: "ecommerce",
    label: "E-commerce e varejo",
    challenge:
      "O desafio é transformar visitas em vendas com campanhas que escalam.",
    services: ["Gestão de Tráfego Pago", "Sites e Landing Pages", "Social Media Estratégico"],
  },
  {
    id: "servicos",
    label: "Serviços e profissionais liberais",
    challenge:
      "O desafio é construir autoridade e gerar uma agenda previsível de clientes.",
    services: ["Branding e Posicionamento", "Social Media Estratégico", "Sites e Landing Pages"],
  },
  {
    id: "b2b",
    label: "B2B e indústria",
    challenge:
      "O desafio é gerar oportunidades qualificadas em ciclos de venda mais longos.",
    services: ["Consultoria Estratégica", "Gestão de Tráfego Pago", "SEO e Otimização Digital"],
  },
  {
    id: "saude",
    label: "Saúde, educação e alimentação",
    challenge:
      "O desafio é transmitir confiança e atrair o público certo com consistência.",
    services: ["Social Media Estratégico", "Branding e Posicionamento", "Gestão de Tráfego Pago"],
  },
];

// ============================================================
// Processo de trabalho
// ============================================================
export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Analisamos seu negócio, seu mercado e sua presença digital atual.",
  },
  {
    step: "02",
    title: "Estratégia",
    description: "Desenhamos um plano sob medida com objetivos e canais prioritários.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Colocamos o plano em prática com um time especializado em cada área.",
  },
  {
    step: "04",
    title: "Otimização e relatórios",
    description: "Acompanhamos os resultados e otimizamos continuamente, com relatórios claros.",
  },
];

export const deliveryTime = "Prazo médio de entrega de projetos: 15 dias";

// ============================================================
// Diferenciais
// ============================================================
export const differentials = [
  {
    icon: "Heart",
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Desenvolvemos estratégias sob medida que se alinham perfeitamente com os objetivos e valores da sua marca.",
  },
  {
    icon: "Users",
    title: "Equipe Especializada",
    description:
      "Time multidisciplinar com profissionais experientes em todas as áreas do marketing digital e tecnologia.",
  },
  {
    icon: "BarChart3",
    title: "Foco em Resultados",
    description:
      "Utilizamos métricas e KPIs precisos para garantir que cada ação gere resultados mensuráveis e retorno sobre investimento.",
  },
  {
    icon: "Brain",
    title: "Inovação com IA",
    description:
      "Integramos inteligência artificial e análise de dados avançada para otimizar campanhas e prever tendências do mercado.",
  },
];

// ============================================================
// Depoimentos (textos já existentes no projeto)
// ============================================================
export const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO",
    company: "E-commerce Fashion",
    content:
      "A Agência Innovation transformou completamente nossa presença digital. O ROI das campanhas aumentou 300% em apenas 3 meses.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Fundador",
    company: "Tech Startup",
    content:
      "Profissionalismo excepcional e resultados impressionantes. Nossa marca ganhou visibilidade nacional graças às estratégias inovadoras.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Proprietária",
    company: "Restaurante Premium",
    content:
      "Desde que começamos a trabalhar juntos, nossas vendas online triplicaram. Equipe dedicada e sempre disponível.",
    rating: 5,
  },
];

// ============================================================
// FAQ
// ============================================================
export const faqItems = [
  {
    question: "Quanto custa?",
    // CONFIRMAR: política de preços da agência
    answer:
      "Cada projeto é orçado sob medida, de acordo com os serviços contratados e os objetivos do seu negócio. Peça um diagnóstico gratuito e apresentamos uma proposta clara, sem surpresas.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Depende do serviço: campanhas de tráfego pago costumam gerar os primeiros resultados nas primeiras semanas, enquanto SEO e branding constroem resultados consistentes no médio prazo. No diagnóstico inicial, apresentamos prazos realistas para o seu caso.",
  },
  {
    question: "Existe contrato de fidelidade?",
    // CONFIRMAR: política de fidelidade da agência
    answer:
      "Trabalhamos com contratos claros e transparentes. As condições de prazo e fidelidade variam conforme o serviço e são sempre apresentadas antes da assinatura.",
  },
  {
    question: "Atendem empresas fora de São Paulo?",
    answer:
      "Sim! Atendemos empresas de todo o Brasil, com reuniões online e acompanhamento próximo, independentemente da cidade onde você está.",
  },
  {
    question: "De quem são as contas de anúncio?",
    // CONFIRMAR: política de propriedade das contas
    answer:
      "As contas de anúncio são sempre da sua empresa. Você mantém a propriedade e o acesso total a todos os ativos digitais criados durante o trabalho.",
  },
  {
    question: "Como acompanho os resultados?",
    answer:
      "Você recebe relatórios periódicos com as principais métricas e tem acesso direto à equipe pelo WhatsApp para tirar dúvidas a qualquer momento.",
  },
];

// ============================================================
// Conteúdo para seções ocultas por flags (preencher quando real)
// ============================================================
export const clientLogos: { name: string; logo: string }[] = [];

export const cases: {
  segment: string;
  challenge: string;
  action: string;
  result: string;
}[] = [];

export const team: { name: string; role: string; photo?: string }[] = [];
