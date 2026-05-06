# Documento 04 — Convenções e Organização do Projeto

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo do Documento

Este documento define os padrões de organização, nomenclatura e estrutura utilizados durante o desenvolvimento do projeto.

O objetivo é manter o código organizado, padronizado, legível e escalável.

---

# 2. Organização Geral do Projeto

Estrutura principal prevista:

```txt
calebe-church/
│
├── backend/
├── frontend/
├── Docs/
├── Diagramas/
└── README.md
```

---

# 3. Convenções do Frontend

Tecnologias previstas:

- React
- TypeScript
- Vite

---

## 3.1 Nome de Componentes

Os componentes React deverão utilizar:

- PascalCase;
- nomes descritivos;
- arquivos separados.

Exemplos:

```txt
Navbar.tsx
HeroSection.tsx
MinistryCard.tsx
Footer.tsx
```

---

## 3.2 Nome de Páginas

As páginas deverão seguir o padrão:

```txt
HomePage.tsx
AboutPage.tsx
ContactPage.tsx
```

---

## 3.3 Nome de Variáveis

As variáveis deverão utilizar:

- camelCase;
- nomes claros;
- evitar abreviações desnecessárias.

Exemplos:

```txt
churchName
serviceTime
heroTitle
```

---

## 3.4 Nome de Funções

As funções deverão descrever claramente sua responsabilidade.

Exemplos:

```txt
handleSubmit()
fetchMinistries()
getServiceSchedule()
```

---

## 3.5 Estrutura Inicial do Frontend

Estrutura prevista:

```txt
frontend/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   └── App.tsx
```

---

# 4. Convenções do Backend

Tecnologias previstas:

- Python
- FastAPI

---

## 4.1 Nome de Arquivos Python

Os arquivos Python deverão utilizar:

- snake_case;
- nomes objetivos;
- responsabilidade clara.

Exemplos:

```txt
main.py
database_connection.py
ministry_routes.py
```

---

## 4.2 Nome de Variáveis Python

As variáveis Python deverão utilizar:

```txt
church_name
service_time
database_url
```

---

## 4.3 Estrutura Inicial do Backend

Estrutura prevista:

```txt
backend/
│
├── app/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   ├── database/
│   └── main.py
```

---

# 5. Organização de Componentes React

Os componentes deverão ser separados por responsabilidade.

Estrutura prevista:

```txt
components/
│
├── layout/
├── sections/
├── cards/
├── forms/
├── buttons/
└── ui/
```

---

# 6. Organização de Rotas Backend

As rotas deverão ser separadas por domínio.

Estrutura prevista:

```txt
routes/
│
├── ministry_routes.py
├── service_routes.py
├── event_routes.py
└── contact_routes.py
```

---

# 7. Organização de APIs

As APIs deverão seguir padrão REST.

Exemplos:

```txt
GET /ministries
GET /services
POST /contact
```

---

# 8. Organização do Banco de Dados

As tabelas deverão:

- possuir nomes claros;
- utilizar inglês;
- manter padrão consistente.

Exemplos:

```txt
ministries
services
events
contact_messages
```

---

# 9. Organização Visual

O projeto deverá manter:

- consistência visual;
- espaçamentos padronizados;
- responsividade;
- reutilização de estilos;
- padronização de cores e tipografia.

---

# 10. Estratégia de Componentização

Cada componente deverá possuir responsabilidade única.

Exemplos:

```txt
Navbar → navegação
Footer → rodapé
HeroSection → apresentação principal
```

Evitar componentes excessivamente grandes.

---

# 11. Estratégia de Segurança

Boas práticas previstas:

- validação de dados;
- sanitização de inputs;
- proteção contra spam;
- separação frontend/backend;
- HTTPS em produção;
- controle de exposição de dados.

---

# 12. Estratégia de LGPD

O sistema deverá:

- coletar apenas dados necessários;
- informar finalidade dos dados;
- evitar armazenamento desnecessário;
- proteger dados enviados.

---

# 13. Estratégia de QA

Boas práticas previstas:

- testes responsivos;
- validação visual;
- testes de navegação;
- testes de API;
- revisão de acessibilidade;
- validação de links.

---

# 14. Padrão de Documentação

Todos os documentos deverão possuir:

- título;
- objetivo;
- estrutura organizada;
- padronização visual;
- separação clara de assuntos.

---

# 15. Resumo das Convenções

```txt
Frontend:
PascalCase
camelCase

Backend:
snake_case

API:
REST + JSON

Versionamento:
Git + GitHub

Organização:
Separação por responsabilidade
```