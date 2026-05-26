# Calebe Church — Site Institucional Full-Stack

Projeto full-stack institucional da Calebe Church, desenvolvido do zero com foco em aprendizado prático, arquitetura moderna, boas práticas de desenvolvimento, documentação técnica, SEO, LGPD, QA e construção de aplicações full-stack profissionais.

---

## Sobre o Projeto

A Calebe Church é uma igreja cristã localizada em Barueri/SP.

Este projeto tem como objetivo desenvolver um site institucional moderno, responsivo e otimizado para apresentar a igreja, divulgar horários de cultos, ministérios, ações do NAF, localização e canais oficiais de comunicação.

Além de atender uma necessidade real, o projeto também está sendo utilizado como laboratório prático de aprendizado em desenvolvimento full-stack.

---

## Objetivos do Projeto

O sistema deverá permitir que visitantes possam:

- conhecer a Calebe Church;
- consultar horários dos cultos;
- conhecer os ministérios;
- acessar informações do NAF — Núcleo de Acompanhamento Familiar;
- acessar redes sociais oficiais;
- localizar a igreja;
- planejar uma visita presencial.

Futuramente o sistema também contará com:

- painel administrativo;
- gerenciamento de conteúdos;
- autenticação;
- integração com banco de dados;
- APIs REST completas.

---

# Tecnologias Utilizadas

## Frontend

- React
- TypeScript
- Vite

## Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

## Banco de Dados

- SQLite (desenvolvimento)
- PostgreSQL (produção futuramente)

## Ferramentas

- Git
- GitHub
- VS Code
- Figma
- Swagger/OpenAPI
- Postman ou Insomnia

---

# Estrutura Atual do Projeto

```txt
calebe-church/
│
├── backend/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       ├── health.py
│   │   │       └── cultos.py
│   │   │
│   │   ├── schemas/
│   │   │   └── culto.py
│   │   │
│   │   ├── services/
│   │   │   └── culto_service.py
│   │   │
│   │   ├── models/
│   │   ├── database/
│   │   └── core/
│   │
│   ├── requirements.txt
│   
│
├── frontend/
│
├── Docs/
├── Diagramas/
├── CHANGELOG.md
└── README.md
```

---

# Como Executar o Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Como Executar o Backend

```bash
cd backend

venv\Scripts\activate

uvicorn app.main:app --reload
```

---

# Documentação do Projeto

A documentação técnica e estratégica está localizada na pasta:

```txt
Docs/
```

## Documentos atuais

```txt
01 — Briefing Técnico e Criativo
02 — Arquitetura do Sistema
03 — Fluxo de Navegação e Wireframe
04 — Convenções e Organização do Projeto
05 — Estrutura Git e Versionamento
06 — Design System e Direção Visual
07 — Estrutura de Wireframe e Prototipação
08 — Organização do Arquivo Figma
09 — Análise do Protótipo Figma Make
10 — Roadmap e Status do Projeto
11 — Segurança e LGPD
```

---

# Histórico do Projeto

O histórico técnico e evolutivo do projeto está documentado em:

```txt
CHANGELOG.md
```

O CHANGELOG registra:

- funcionalidades adicionadas;
- mudanças estruturais;
- correções;
- evolução arquitetural;
- evolução backend e frontend.

---

# Funcionalidades Implementadas

## Frontend Institucional

- Navbar com navegação por âncoras
- HeroSection com logo oficial
- AboutSection institucional
- ServicesSection com horários de cultos
- MinistriesSection
- NAFSection com cursos gratuitos
- SocialMediaSection com Instagram e YouTube
- LocationSection com Google Maps
- Footer institucional completo
- Responsividade mobile
- Refinamento visual baseado no Figma
- Design System baseado em tokens globais

---

# Backend Atual

O backend está sendo desenvolvido com FastAPI seguindo arquitetura em camadas.

## Implementado atualmente

- FastAPI configurado
- Uvicorn configurado
- Estrutura backend modular
- APIRouter implementado
- Swagger/OpenAPI automático
- Endpoint GET `/`
- Endpoint GET `/health`
- Endpoint GET `/cultos`
- Schemas Pydantic
- Response Models tipados
- Service Layer inicial
- Arquitetura preparada para SQLite
- SQLite integrado
- Persistência real de dados
- Endpoint POST `/cultos`
- Integração SQL com FastAPI

---

# Endpoints Atuais da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Verificação inicial da API |
| GET | `/health` | Health Check |
| GET | `/cultos` | Lista cultos persistidos |
| POST | `/cultos` | Cria novo culto |

---

# Funcionalidades Futuras

- Integração com PostgreSQL
- CRUD completo de cultos
- CRUD de ministérios
- CRUD de eventos
- Formulário de contato
- Painel administrativo
- Sistema de autenticação
- Controle de permissões
- Deploy em produção
- Integração frontend/backend
- Consumo de APIs no frontend

---

# Arquitetura Backend

O backend segue arquitetura em camadas para facilitar manutenção, escalabilidade e separação de responsabilidades.

## Estrutura de responsabilidades

| Camada | Responsabilidade |
|---|---|
| Routes | Endpoints HTTP |
| Schemas | Validação e tipagem |
| Services | Regras de negócio |
| Models | Entidades do banco |
| Database | Conexão SQL |
| Core | Configurações centrais |

---

# Fluxo Arquitetural

```txt
Frontend React
        ↓
FastAPI Routes
        ↓
Services
        ↓
Database
        ↓
SQLite/PostgreSQL
```

---

# Identidade Visual

A identidade visual do projeto é baseada no logo oficial da Calebe Church.

## Paleta principal

```txt
Azul escuro
Dourado
Branco
```

## Direção visual

```txt
Moderna
Elegante
Institucional
Acolhedora
Espiritual
```

---

# Referência Visual

A interface do projeto foi construída com base em referências visuais criadas no Figma.

As referências oficiais estão documentadas no:

```txt
Documento 07 — Estrutura de Wireframe e Prototipação
```

---

# Status do Projeto

```txt
Documentação inicial: concluída
Git local: configurado
GitHub: configurado
Frontend institucional: concluído
Backend FastAPI: em desenvolvimento
Rotas iniciais da API: implementadas
Arquitetura backend: implementada
Swagger/OpenAPI: funcionando
Banco de dados SQLite: implementado
Persistência backend: funcionando
Deploy: não iniciado
```

---

# Progresso Estimado

```txt
Documentação: 100%
Git/GitHub: 100%
Frontend institucional: 100%
Backend: 50%
Banco de dados: 35%
QA: 25%
Deploy: 0%

Progresso geral estimado: 72%
Falta estimada: 28%
```

---

# Objetivos Técnicos do Projeto

Além do produto final, este projeto possui foco educacional e arquitetural.

## Objetivos de aprendizado

- Desenvolvimento Full-Stack
- Arquitetura Frontend
- Arquitetura Backend
- APIs REST
- FastAPI
- TypeScript
- Organização profissional de projetos
- Git Flow
- Documentação técnica
- Boas práticas de mercado
- SQL e persistência de dados
- QA e validação

---

# Autor

Desenvolvido por Felipe Delfino como projeto prático de estudo, portfólio e evolução profissional em desenvolvimento full-stack.

---

# Licença

Este projeto está em desenvolvimento e ainda não possui licença definida.