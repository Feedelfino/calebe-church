# Documento 03 — Fluxo de Navegação e Wireframe

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo do Documento

Este documento define o fluxo de navegação da aplicação e a estrutura inicial das interfaces do sistema.

O objetivo é organizar a experiência do usuário, definir a hierarquia visual das páginas e preparar o projeto para prototipação no Figma e desenvolvimento do frontend em React.

---

# 2. Objetivo da Navegação

A navegação da aplicação deverá ser:

- simples;
- intuitiva;
- responsiva;
- organizada;
- acessível;
- objetiva.

O visitante deverá compreender rapidamente:

- quem é a igreja;
- horários dos cultos;
- localização;
- ministérios;
- ações sociais;
- formas de contato.

---

# 3. Fluxo Principal do Usuário

Fluxo principal esperado:

```txt
Usuário entra no site
        ↓
Visualiza identidade da igreja
        ↓
Lê slogan e apresentação
        ↓
Visualiza horários dos cultos
        ↓
Conhece os ministérios
        ↓
Conhece o NAF
        ↓
Visualiza localização
        ↓
Acessa redes sociais
        ↓
Decide visitar a igreja
```

---

# 4. Estrutura Inicial de Navegação

Estrutura prevista para o menu principal:

```txt
Home
Sobre
Cultos
Ministérios
NAF
Contato
```

---

# 5. Estrutura da Página Home

A Home será a principal página institucional da aplicação.

Ela deverá possuir as seguintes seções:

---

## 5.1 Navbar

Elementos previstos:

- logo da igreja;
- links de navegação;
- acesso às redes sociais;
- menu responsivo para dispositivos móveis.

Itens previstos:

```txt
Logo
Home
Sobre
Cultos
Ministérios
NAF
Contato
Instagram
YouTube
```

---

## 5.2 Hero Section

Objetivo:

Criar o primeiro impacto visual da aplicação.

Elementos previstos:

- logo da igreja;
- slogan;
- imagem de fundo;
- chamada principal;
- botão de visita.

Texto institucional:

```txt
Perseverar em seguir ao Senhor
```

---

## 5.3 Sobre a Igreja

Objetivo:

Apresentar institucionalmente a Calebe Church.

Conteúdo previsto:

- visão;
- propósito;
- acolhimento;
- comunhão;
- identidade espiritual.

---

## 5.4 Horários dos Cultos

Objetivo:

Facilitar acesso rápido aos horários da igreja.

Cultos previstos:

### Domingo — 18h

Comunhão ao Senhor

### Quarta-feira — 20h

Noite de Conquista

---

## 5.5 Ministérios

Objetivo:

Apresentar os departamentos e áreas ministeriais.

Ministérios previstos:

- Mulheres Determinadas
- Teleios
- Homens Calebe
- Ministério de Intercessão
- Calebe Worship
- Calebinhos
- Calebe Dance
- Escola Bíblica
- NAF

---

## 5.6 NAF — Núcleo de Acompanhamento Familiar

Objetivo:

Apresentar os projetos familiares, sociais e educativos da igreja.

Frentes previstas:

- acompanhamento familiar;
- cursos e capacitações;
- aconselhamento pastoral;
- assistência social.

---

## 5.7 Redes Sociais

Objetivo:

Direcionar visitantes para os canais oficiais da igreja.

Redes previstas:

- Instagram;
- YouTube.

---

## 5.8 Localização

Objetivo:

Facilitar visitas presenciais.

Conteúdo previsto:

- endereço;
- mapa;
- botão de rota.

Endereço:

```txt
Avenida Etiópia, 443
Vila Morellato — Barueri/SP
```

---

## 5.9 Footer

Objetivo:

Finalizar institucionalmente a página.

Conteúdo previsto:

- logo;
- slogan;
- endereço;
- horários;
- redes sociais;
- direitos reservados.

---

# 6. Estrutura Visual da Home

Estrutura visual prevista:

```txt
Navbar
   ↓
Hero Section
   ↓
Sobre
   ↓
Cultos
   ↓
Ministérios
   ↓
NAF
   ↓
Redes Sociais
   ↓
Mapa
   ↓
Footer
```

---

# 7. Estratégia de UX

A experiência do usuário deverá priorizar:

- clareza visual;
- leitura simples;
- navegação intuitiva;
- carregamento rápido;
- destaque para informações importantes;
- facilidade de acesso em dispositivos móveis.

---

# 8. Estratégia Mobile First

O projeto será desenvolvido com foco inicial em dispositivos móveis.

Responsividade prevista para:

- celulares;
- tablets;
- desktops.

---

# 9. Estrutura Inicial de Componentes

Componentes previstos:

```txt
Navbar
Footer
HeroSection
SectionTitle
ServiceCard
MinistryCard
NAFCard
SocialButton
MapSection
Button
```

---

# 10. Estrutura Inicial de Páginas React

Estrutura prevista:

```txt
pages/
│
├── HomePage.tsx
├── AboutPage.tsx
├── MinistriesPage.tsx
├── ContactPage.tsx
└── ServicesPage.tsx
```

---

# 11. Estrutura Inicial de Componentes React

Estrutura prevista:

```txt
components/
│
├── layout/
├── sections/
├── cards/
├── buttons/
├── forms/
└── ui/
```

---

# 12. Estratégia Visual

Direção visual prevista:

- moderna;
- elegante;
- acolhedora;
- espiritual;
- institucional.

Paleta principal:

- azul escuro;
- dourado;
- branco.

---

# 13. Estratégia de SEO na Interface

A interface deverá priorizar:

- headings organizados;
- imagens otimizadas;
- textos institucionais claros;
- estrutura semântica HTML;
- acessibilidade;
- performance;
- responsividade.

---

# 14. Preparação para Prototipação

Este documento servirá como base para:

- wireframes;
- protótipos;
- design system;
- fluxo visual das telas;
- estrutura visual do frontend.

---

# 15. Resumo da Estrutura da Home

```txt
Navbar
Hero Section
Sobre
Cultos
Ministérios
NAF
Redes Sociais
Localização
Footer
```