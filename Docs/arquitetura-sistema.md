# Documento 02 — Arquitetura do Sistema

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo da Arquitetura

Este documento define a arquitetura inicial do sistema da aplicação Calebe Church.

O objetivo é organizar tecnicamente a estrutura do projeto, definindo como o frontend, backend e banco de dados irão se comunicar durante o funcionamento da aplicação.

A arquitetura foi planejada para manter:

- organização;
- escalabilidade;
- separação de responsabilidades;
- facilidade de manutenção;
- aprendizado prático de desenvolvimento full-stack.

---

# 2. Arquitetura Geral do Projeto

O sistema será dividido em três camadas principais:

- Frontend
- Backend
- Banco de Dados

Estrutura geral:

```txt
Usuário
   ↓
Frontend (React + TypeScript)
   ↓
API REST (FastAPI)
   ↓
Banco SQL
```

---

# 3. Frontend

O frontend será responsável pela interface visual da aplicação.

Principais responsabilidades:

- renderizar páginas;
- exibir conteúdos;
- controlar navegação;
- consumir APIs;
- exibir dados vindos do backend;
- garantir responsividade da interface.

Tecnologias previstas:

- React
- TypeScript
- Vite

---

# 4. Backend

O backend será responsável pelas regras de negócio da aplicação.

Principais responsabilidades:

- criar APIs REST;
- validar dados;
- processar requisições;
- conectar com banco de dados;
- organizar regras do sistema;
- responder requisições do frontend.

Tecnologias previstas:

- Python
- FastAPI

---

# 5. Banco de Dados

O banco de dados será responsável pelo armazenamento das informações da aplicação.

Dados previstos:

- ministérios;
- cultos;
- eventos;
- cursos;
- mensagens de contato.

Tecnologias previstas:

- SQLite no desenvolvimento;
- PostgreSQL futuramente em produção.

---

# 6. Fluxo do Usuário

Fluxo principal esperado:

```txt
Usuário entra no site
        ↓
Visualiza apresentação da igreja
        ↓
Conhece os horários dos cultos
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

# 7. Fluxo Técnico da Aplicação

Fluxo técnico inicial da aplicação:

```txt
Usuário abre o site
        ↓
Frontend renderiza interface
        ↓
Frontend envia requisição para API
        ↓
Backend processa requisição
        ↓
Backend consulta banco de dados
        ↓
Banco retorna dados
        ↓
Backend responde em JSON
        ↓
Frontend exibe dados na interface
```

---

# 8. Comunicação Frontend e Backend

A comunicação entre frontend e backend será feita utilizando APIs REST.

O frontend realizará requisições HTTP para o backend utilizando:

- GET
- POST
- PUT
- DELETE

As respostas da API serão retornadas no formato JSON.

---

# 9. Estrutura Inicial do Frontend

Estrutura inicial prevista:

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

# 10. Estrutura Inicial do Backend

Estrutura inicial prevista:

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

# 11. Estrutura Inicial de Páginas

Páginas previstas para o frontend:

```txt
Home
Sobre
Cultos
Ministérios
NAF
Contato
```

---

# 12. Estrutura Inicial de Componentes

Componentes previstos:

```txt
Navbar
Footer
HeroSection
ServiceCard
MinistryCard
NAFCard
SocialLinks
```

---

# 13. Estrutura Inicial das APIs

Rotas iniciais previstas:

```txt
GET /ministries
GET /services
GET /events
POST /contact
```

---

# 14. Estrutura Inicial do Banco de Dados

Tabelas previstas:

## ministries

```txt
id
name
description
icon
```

## services

```txt
id
name
day
hour
description
```

## contact_messages

```txt
id
name
email
message
created_at
```

---

# 15. Estratégia Inicial de Segurança

O sistema deverá possuir:

- validação de dados;
- proteção de formulários;
- separação entre frontend e backend;
- sanitização de entradas;
- proteção contra spam;
- HTTPS em produção;
- controle de exposição de dados.

---

# 16. Estratégia Inicial de SEO

O projeto deverá seguir boas práticas de SEO:

- headings organizados;
- estrutura semântica HTML;
- URLs amigáveis;
- textos institucionais claros;
- responsividade;
- otimização de carregamento;
- acessibilidade.

---

# 17. Estratégia Inicial de QA

Testes previstos:

- responsividade;
- navegação;
- acessibilidade;
- validação visual;
- testes de links;
- testes de API;
- testes de performance.

---

# 18. Resumo da Arquitetura

```txt
Frontend:
React + TypeScript

Backend:
Python + FastAPI

Banco:
SQLite/PostgreSQL

Comunicação:
API REST + JSON

Versionamento:
Git + GitHub
```