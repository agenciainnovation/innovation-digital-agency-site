# Plano — Repaginação da Landing Page Agência Innovation

Objetivo: transformar a home em uma landing page focada em gerar leads, mantendo a identidade (logo, preto + amarelo) e reaproveitando os textos já existentes.

## 1. Base de dados centralizada
- Criar `src/data/siteData.ts` com: estatísticas, serviços, diferenciais, depoimentos (os 3 atuais), contatos, redes sociais, CNPJ (vazio) e flags `showLogos`, `showCases`, `showTeam` (todas `false` — seções construídas mas ocultas até haver conteúdo real).
- Todos os números do site passam a vir desse arquivo (mesmo valor em todas as seções).

## 2. Design system
- Nova paleta: fundo `#0F0F10`, superfícies `#1A1A1C`, amarelo `#FFE600`, texto branco e secundário `#D4D4D8`; seções claras alternadas em `#F7F7F5`.
- Tipografia: Sora (títulos, com `clamp()` fluido) + Inter (corpo, mín. 16px).
- Estilo: bento grid, cantos 16–24px, brilho amarelo sutil, botões amarelos com texto preto, alvos de toque 44px+, mobile-first.
- Movimento: fade-up ao rolar e contadores animados (uma vez), respeitando `prefers-reduced-motion`. Instalar `framer-motion` e `react-helmet-async`.
- Header fixo com blur (links: Serviços, Diferenciais, Depoimentos, FAQ, Contato + botão "Fale com um especialista"; hambúrguer no mobile). Manter botão flutuante de WhatsApp com mensagem pré-preenchida e evento GA já existente.

## 3. Seções da home (nesta ordem)
1. **Hero** — eyebrow, H1 com "marcas ao futuro" em amarelo, subtítulo, CTAs (formulário / WhatsApp), microcopy, 3 cards de números (+200 projetos, 98% satisfação, 5+ anos), formas geométricas e chips flutuantes de serviços.
2. **Logos de clientes** — marquee, oculta via flag.
3. **Nossos Serviços** — 6 cards com os textos atuais + novo card "Consultoria Estratégica"; cada card com botão "Quero este serviço" que rola ao formulário com o serviço pré-selecionado.
4. **Para qualquer tipo de negócio** — abas (Comércio local, E-commerce, Serviços/liberais, B2B/indústria, Saúde/educação/alimentação) com desafio + serviços combinados.
5. **Como trabalhamos** — linha do tempo em 4 passos + chip "Prazo médio: 15 dias".
6. **Por que escolher** — 4 cards com textos atuais + faixa de números (+150 empresas, 15 dias, 24/7 WhatsApp, +2M impressões).
7. **Cases** — oculta via flag.
8. **Depoimentos** — carrossel com os 3 depoimentos atuais, 5 estrelas, avatar com iniciais, 3 por vez no desktop + chip "Mais de 150 empresas".
9. **Equipe** — oculta via flag.
10. **FAQ** — acordeão com 6 perguntas; respostas que dependem de política da agência marcadas com `// CONFIRMAR`.
11. **Contato** — título "Vamos inovar juntos?", formulário completo (nome, e-mail, WhatsApp, empresa, select de serviço, mensagem, checkbox LGPD) + card com e-mail, WhatsApp, localização e redes sociais.
12. **Footer** — logo, descrição, assinatura institucional, menu, contatos, redes, newsletter compacta (movida para cá), links Privacidade/Termos, CNPJ (oculto se vazio), © 2026 e "Voltar ao topo".

## 4. Funcionalidades, SEO e qualidade
- **Formulários**: validação com zod, honeypot anti-spam, captura de UTMs em campos ocultos. Envio: como o projeto não tem backend ativo, proponho ativar o **Lovable Cloud** para salvar leads em tabela `leads` e newsletter em tabela própria, com notificação por e-mail para contato@agenciainnovation.com.br. (Sem Cloud, o envio automático por e-mail não é garantido — o Formspree atual é apenas fallback.)
- **Rastreamento**: manter GA4 (G-NS21VWCHNF); banner de cookies LGPD que só dispara GA/Meta Pixel após consentimento; eventos `click_whatsapp`, `click_cta_hero`, `form_start`, `form_submit`, `newsletter_submit`. Meta Pixel com ID configurável (vazio por enquanto).
- **Rotas novas**: `/privacidade`, `/termos` (texto-base LGPD) e 404 (já existe).
- **SEO**: title e meta description novos, canonical, OG/Twitter Card com imagem própria 1200×630 em `public/og-image.jpg` (gerada com a marca), JSON-LD (Organization + ProfessionalService), `sitemap.xml`, `robots.txt`, alts e lazy loading.
- **Acessibilidade**: contraste AA, navegação por teclado, aria-labels.

## 5. Entrega
- Ao final, listo o que ficou pendente: flags desativadas (logos, cases, equipe) e itens `// CONFIRMAR` (respostas do FAQ que dependem de política da agência, CNPJ, ID do Meta Pixel).

## Decisões que preciso de você
- **Backend dos formulários**: ativar o Lovable Cloud para salvar leads e enviar notificação por e-mail automaticamente? (Recomendado — sem ele, o envio por e-mail depende de serviço externo.)
