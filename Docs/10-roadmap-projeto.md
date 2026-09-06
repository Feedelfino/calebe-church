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

Status: ✅ Concluído

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

Status: ✅ Concluído

### Objetivos
- criação da API REST;
- estruturação FastAPI;
- integração frontend/backend;
- endpoints institucionais.

### Entregas concluídas

- FastAPI;
- rotas REST;
- CRUD de cultos;
- integração frontend/backend;
- tratamento de registros inexistentes com HTTP 404;
- testes iniciais da API.

---

## Fase 4 — Banco de Dados

Status: ✅ Concluído

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
- testes manuais do endpoint PUT /cultos/{id};
- testes manuais do endpoint DELETE /cultos/{id};
- validação da persistência SQLite após criação;
- validação da persistência SQLite após atualização;
- validação da exclusão de registros;
- validação do retorno HTTP 404 para registros inexistentes;
- validação da integração frontend/backend;
- validação da renderização dinâmica da seção de cultos;
- identificação e correção de falhas encontradas durante o QA do CRUD;
- testes da API realizados com Thunder Client.
- Testes de integração entre frontend e backend
- Validação do carregamento dos cultos com a API disponível
- Validação do comportamento do site com a API indisponível
- Implementação e validação de fallback local para os horários dos cultos
- Refatoração dos dados de contingência para `cultosFallback.ts`

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
[x] Responsividade mobile, tablet e desktop
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
- Endpoint /health implementado
- Endpoint GET /cultos implementado
- Endpoint POST /cultos implementado
- Endpoint PUT /cultos/{id} implementado
- Endpoint DELETE /cultos/{id} implementado
- CRUD de cultos concluído
- Schemas Pydantic implementados
- Response Models implementados
- Service Layer implementada
- SQLite integrado
- Persistência real de dados implementada
- Integração SQL com FastAPI funcional
- Seed inicial de banco implementada
- Tratamento HTTP 404 para registros inexistentes
- Configuração CORS implementada e validada
- Serviço cultosService implementado
- Consumo da rota GET /cultos via React
- useState implementado para gerenciamento dos cultos
- useEffect implementado para carregamento automático
- Renderização dinâmica dos cultos implementada
- Integração frontend/backend concluída para cultos

90%
```

## Banco de Dados

```txt
100%
```

## QA

```txt
QA realizado:

- CRUD da API validado com Thunder Client
- Cenários positivos e negativos do CRUD validados
- Integração frontend/backend validada
- Fallback dos cultos validado com backend indisponível
- Responsividade mobile validada
- Responsividade tablet validada
- Responsividade desktop validada
- Navbar mobile e navegação por âncoras validadas
- Build de produção do frontend validado
- ESLint executado sem erros
- Ausência de regressões visuais identificada após os ajustes responsivos

90%
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
Progresso geral: 94%
Falta estimada: 6%
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
- Responsividade validada em mobile, tablet e desktop
- Menu responsivo da Navbar para dispositivos móveis
- Integração Google Maps
- Integração com Instagram e YouTube
- Refinamento visual institucional
- Integração da seção de cultos com a API FastAPI
- Fallback local dos horários dos cultos em caso de indisponibilidade da API
- Separação dos dados de contingência em `cultosFallback.ts`

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
- Endpoint PUT /cultos/{id}
- Endpoint DELETE /cultos/{id}
- CRUD completo de cultos
- Tratamento HTTP 404 para registros inexistentes
- Validação do CRUD com Thunder Client

---

# 7. Próximos Passos Imediatos

# 7. Próximos Passos Imediatos

1. Realizar revisão de segurança para produção

2. Revisar configurações do frontend e backend para ambiente de produção

3. Preparar o deploy da aplicação

4. Realizar o deploy da V1

5. Executar validação final em produção


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