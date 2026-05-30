# Roadmap do Projeto — Calebe Church

Este documento define o planejamento estratégico, as fases de desenvolvimento, o status atual e os próximos passos do projeto Calebe Church.

---

# 1. Visão Geral do Projeto

O projeto Calebe Church é um site institucional full-stack desenvolvido com foco em:

- aprendizado prático de desenvolvimento;
- arquitetura moderna;
- componentização;
- documentação técnica;
- boas práticas de frontend e backend;
- SEO;
- LGPD;
- QA;
- versionamento profissional com Git e GitHub.

---

# 2. Objetivos do Projeto

O sistema deverá permitir:

- apresentação institucional da igreja;
- divulgação dos horários de cultos;
- apresentação dos ministérios;
- divulgação do NAF;
- acesso às redes sociais;
- localização da igreja;
- contato com visitantes;
- expansão futura para painel administrativo.

---

# 3. Fases do Projeto

## Fase 1 — Estruturação Inicial

Status: ✅ Concluído

### Objetivos
- estruturação do projeto;
- documentação técnica;
- configuração Git;
- configuração GitHub;
- setup do frontend.

### Entregas
- documentação criada;
- arquitetura inicial definida;
- Git configurado;
- GitHub conectado;
- frontend React iniciado.

---

## Fase 2 — Frontend Institucional

Status: Status: ✅ Concluído

### Objetivos
- construção da HomePage;
- criação das seções institucionais;
- componentização React;
- responsividade;
- refinamento visual.

### Entregas concluídas
- Navbar
- HeroSection
- AboutSection
- ServicesSection
- MinistriesSection
- NAFSection
- SocialMediaSection
- LocationSection
- Footer
- Responsividade mobile
- Refinamento visual final

---

## Fase 3 — Backend e APIs

Status: 🟡 Em andamento

### Objetivos
- criação da API REST;
- estruturação FastAPI;
- integração frontend/backend;
- endpoints institucionais.

### Entregas previstas
- FastAPI;
- rotas REST;
- integração frontend;
- testes iniciais.

---

## Fase 4 — Banco de Dados

Status: 🟡 Em andamento

### Objetivos
- modelagem SQL;
- persistência de dados;
- integração com backend.

### Entregas concluídas
- SQLite configurado;
- banco `calebe_church.db` criado;
- tabela `cultos` implementada;
- persistência de dados implementada;
- integração SQLite + FastAPI concluída;
- seed inicial de banco implementada.

### Entregas previstas
- tabelas institucionais adicionais;
- armazenamento de contatos;
- estrutura preparada para PostgreSQL.

---

## Fase 5 — QA e Segurança

Status: 🟡 Em andamento

### Objetivos
- validações;
- testes;
- acessibilidade;
- LGPD;
- segurança básica.

### Entregas previstas
- testes manuais;
- testes de responsividade;
- validação de formulários;
- melhorias de acessibilidade.

### Entregas concluídas
- testes manuais do endpoint GET /cultos;
- testes manuais do endpoint POST /cultos;
- validação da persistência SQLite;
- validação da integração frontend/backend;
- validação da renderização dinâmica da seção de cultos.

---

## Fase 6 — Deploy e Produção

Status: ⚪ Não iniciado

### Objetivos
- hospedagem;
- domínio;
- publicação final.

### Entregas previstas
- deploy frontend;
- deploy backend;
- domínio;
- HTTPS;
- ambiente de produção.

---

# 4. Status Atual do Projeto

## Documentação

```txt
100% concluída
```

## Git e GitHub

```txt
100% concluído
```

## Frontend — Progresso por Entregáveis

Critério de cálculo:

```txt
Percentual = entregáveis concluídos / total de entregáveis planejados
```

```txt
[x] Navbar
[x] HeroSection
[x] AboutSection
[x] ServicesSection
[x] MinistriesSection
[x] Footer
[x] NAFSection
[x] SocialMediaSection
[x] LocationSection
[x] Responsividade mobile
[x] Refinamento visual final
```

```txt
Concluído: 11/11
Frontend institucional: 100%
```

## Backend

```txt
Backend:
- Estrutura arquitetural backend criada
- FastAPI configurado
- Uvicorn configurado
- Rotas modularizadas
- APIRouter implementado
- Swagger automático funcionando
- Endpoint `/health` implementado
- Endpoint `GET /cultos` implementado
- Endpoint `POST /cultos` implementado
- Schemas Pydantic implementados
- Response Models implementados
- Service Layer implementada
- SQLite integrado
- Persistência real de dados implementada
- Integração SQL com FastAPI funcional
- Seed inicial de banco implementada
- FastAPI configurado
- APIRouter implementado
- Swagger funcionando
- Endpoint GET /cultos implementado
- Endpoint POST /cultos implementado
- Integração frontend/backend concluída para cultos
- Serviço `cultosService` implementado
- Consumo da rota `GET /cultos` via React
- useState implementado para gerenciamento dos cultos
- useEffect implementado para carregamento automático
- Renderização dinâmica dos cultos implementada
- Configuração CORS implementada e validada

70%
```

## Banco de Dados

```txt
60%
```

## QA

```txt
40%
```

## Deploy

```txt
0%
```

---

# 5. Progresso Geral Estimado

Critério de cálculo:

```txt
O progresso geral considera:
- frontend;
- backend;
- banco de dados;
- QA;
- documentação;
- responsividade;
- deploy;
- arquitetura;
- funcionalidades planejadas.
```

```txt
Progresso geral: 84%
Falta estimada: 16%
```

---

# 6. Funcionalidades Já Implementadas

## Frontend
- Navbar
- HeroSection
- AboutSection
- ServicesSection
- MinistriesSection
- Footer institucional
- NAFSection
- Seção de cursos gratuitos do NAF
- Sistema global de estilos
- Variáveis CSS
- Tokens do Design System
- Container global
- Estrutura React inicial
- Responsividade inicial em seções principais
- Navegação por âncoras iniciada
- SocialMediaSection
- LocationSection
- Footer completo
- Responsividade mobile
- Integração Google Maps
- Integração com Instagram e YouTube
- Refinamento visual institucional

## Estrutura
- Git
- GitHub
- CHANGELOG
- Roadmap
- Documentação técnica
- Organização de pastas
- Assets visuais do Figma organizados
- Referências visuais oficiais documentadas
- Documento de Segurança e LGPD
- ADR no documento de arquitetura

## Backend

- FastAPI configurado
- APIRouter implementado
- Swagger funcionando
- Endpoint GET /cultos
- Endpoint POST /cultos
- Integração SQLite
- Persistência de dados
- Configuração de CORS
- Integração React ↔ FastAPI

---

# 7. Próximos Passos Imediatos

- Implementar endpoint PUT /cultos
- Implementar endpoint DELETE /cultos
- Implementar tratamento visual de loading
- Implementar tratamento visual de erro
- Planejar módulo de eventos

---

# 8. Backlog Futuro

## Funcionalidades futuras
- painel administrativo;
- integração Instagram;
- sistema de eventos;
- gerenciamento de ministérios;
- formulário avançado de contato;
- analytics;
- SEO avançado.

---

# 9. Tecnologias do Projeto

## Frontend
- React
- TypeScript
- Vite

## Backend
- Python
- FastAPI

## Banco de Dados
- SQLite
- PostgreSQL (futuro)

## Ferramentas
- Git
- GitHub
- VS Code
- Figma