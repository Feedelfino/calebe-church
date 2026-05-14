# Documento 08 — Organização do Arquivo Figma

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo do Documento

Este documento define como o arquivo do Figma será organizado durante a criação do wireframe, design system e protótipo visual da aplicação Calebe Church.

O objetivo é manter o design organizado, padronizado e preparado para facilitar o desenvolvimento posterior no frontend em React.

---

# 2. Objetivo da Organização no Figma

A organização do arquivo Figma deverá permitir:

- fácil navegação entre telas;
- separação entre wireframe e protótipo final;
- reutilização de componentes;
- padronização visual;
- melhor transição entre design e código;
- manutenção futura do projeto.

---

# 3. Estrutura de Páginas no Figma

O arquivo Figma deverá ser dividido em páginas internas.

Estrutura prevista:

```txt
01 — Referências
02 — Wireframe Mobile
03 — Wireframe Desktop
04 — Design System
05 — Componentes
06 — Protótipo Alta Fidelidade
07 — Fluxo de Navegação
```

---

# 4. Página 01 — Referências

Objetivo:

Reunir materiais de apoio visual e institucional.

Conteúdo previsto:

- logo da igreja;
- paleta visual;
- prints dos modelos de referência;
- imagens institucionais;
- referências visuais;
- anotações iniciais.

---

# 5. Página 02 — Wireframe Mobile

Objetivo:

Criar a estrutura inicial das telas em formato mobile.

Conteúdo previsto:

- Home mobile;
- menu mobile;
- seções principais;
- estrutura de navegação;
- organização dos blocos de conteúdo.

---

# 6. Página 03 — Wireframe Desktop

Objetivo:

Criar a estrutura inicial das telas em formato desktop.

Conteúdo previsto:

- Home desktop;
- navbar desktop;
- organização horizontal das seções;
- distribuição de grids;
- adaptação das seções mobile para telas maiores.

---

# 7. Página 04 — Design System

Objetivo:

Organizar os padrões visuais definidos para a interface.

Conteúdo previsto:

- cores;
- tipografia;
- botões;
- cards;
- espaçamentos;
- estilos visuais;
- estados de componentes.

---

# 8. Página 05 — Componentes

Objetivo:

Centralizar os elementos reutilizáveis da interface.

Componentes previstos:

```txt
Navbar
Footer
Button
ServiceCard
MinistryCard
NAFCard
SocialButton
SectionTitle
```

---

# 9. Página 06 — Protótipo Alta Fidelidade

Objetivo:

Criar a versão visual final das telas antes do desenvolvimento.

Conteúdo previsto:

- Home final;
- versão mobile;
- versão desktop;
- interações principais;
- aplicação real da identidade visual;
- visual próximo do produto final.

---

# 10. Página 07 — Fluxo de Navegação

Objetivo:

Representar visualmente o caminho do usuário dentro da aplicação.

Fluxos previstos:

```txt
Home → Cultos
Home → Ministérios
Home → NAF
Home → Localização
Home → Redes Sociais
```

---

# 11. Nomenclatura dos Frames

Os frames deverão possuir nomes claros e padronizados.

Padrão previsto:

```txt
Dispositivo / Página / Versão
```

Exemplos:

```txt
Mobile / Home / Wireframe
Desktop / Home / Wireframe
Mobile / Home / Alta Fidelidade
Desktop / Home / Alta Fidelidade
```

---

# 12. Nomenclatura de Componentes

Os componentes deverão utilizar nomes próximos aos componentes que serão criados no React.

Exemplos:

```txt
Navbar
HeroSection
ServiceCard
MinistryCard
NAFCard
Footer
```

---

# 13. Organização de Camadas

As camadas deverão ser nomeadas de forma clara.

Boas práticas:

- evitar nomes genéricos;
- agrupar elementos relacionados;
- nomear seções;
- manter hierarquia visual;
- remover elementos não utilizados.

Exemplos de nomes ruins:

```txt
Rectangle 1
Group 23
Frame 8
```

Exemplos de nomes bons:

```txt
Hero Background
Navbar Container
Service Card Domingo
Button Visite-nos
```

---

# 14. Separação entre Wireframe e Alta Fidelidade

O arquivo deverá manter separação clara entre:

- wireframe;
- design system;
- protótipo final.

O wireframe deverá focar em estrutura.

O protótipo de alta fidelidade deverá focar em aparência final.

---

# 15. Estratégia Mobile e Desktop

O projeto deverá possuir versões para:

- mobile;
- desktop.

A versão mobile será criada primeiro, seguindo a estratégia Mobile First.

A versão desktop será criada depois, adaptando a estrutura mobile para telas maiores.

---

# 16. Preparação para Desenvolvimento React

A organização do Figma deverá facilitar a criação dos componentes no frontend.

Relação prevista:

```txt
Figma Component → React Component
Navbar → Navbar.tsx
HeroSection → HeroSection.tsx
ServiceCard → ServiceCard.tsx
MinistryCard → MinistryCard.tsx
Footer → Footer.tsx
```

---

# 17. Estratégia de Versionamento Visual

Alterações importantes no design deverão ser documentadas.

Exemplos:

```txt
v1 — Wireframe inicial
v2 — Ajuste de hierarquia visual
v3 — Aplicação de cores
v4 — Protótipo final
```

---

# 18. Boas Práticas no Figma

Boas práticas previstas:

- manter páginas organizadas;
- nomear frames e camadas;
- evitar elementos soltos;
- reutilizar componentes;
- separar mobile e desktop;
- manter consistência visual;
- documentar mudanças relevantes.

---

# 19. Resumo da Organização

```txt
Figma:
01 — Referências
02 — Wireframe Mobile
03 — Wireframe Desktop
04 — Design System
05 — Componentes
06 — Protótipo Alta Fidelidade
07 — Fluxo de Navegação

Estratégia:
Mobile First
Componentização
Organização por páginas
Preparação para React
```