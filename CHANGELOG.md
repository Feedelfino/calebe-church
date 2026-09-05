# CHANGELOG

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

Este projeto segue uma organização baseada em evolução contínua, versionamento com Git e documentação técnica.

---

# [2026-05-06]

## Added

### Documentação
- Criação da estrutura inicial de documentação técnica
- Criação do briefing técnico e criativo
- Criação da arquitetura inicial do sistema
- Criação do documento de fluxo de navegação
- Criação do documento de convenções do projeto
- Criação da estrutura Git e versionamento
- Criação do Design System inicial
- Criação do documento de wireframe e prototipação
- Criação do documento de organização do Figma
- Criação da análise do protótipo Figma Make

### Git e GitHub
- Inicialização do Git local
- Configuração da branch `main`
- Conexão do projeto com GitHub
- Primeiro push realizado

### Frontend
- Criação do frontend React com Vite
- Configuração do TypeScript
- Estrutura inicial do frontend criada
- Limpeza do template padrão do Vite
- Criação da HomePage
- Criação da Navbar componentizada
- Criação da HeroSection
- Implementação do sistema global de estilos
- Implementação de variáveis CSS globais
- Implementação do container global
- Implementação inicial de Flexbox

---

## Changed

### Frontend
- Refatoração do CSS global
- Separação de responsabilidades entre App e páginas
- Reorganização estrutural das pastas do frontend

---

## Fixed

### Frontend
- Correção de imports CSS
- Correção de variáveis globais CSS
- Correção de sintaxe CSS
- Correção da estrutura de pastas do frontend

### Git
- Correção do nome do documento de convenções
- Remoção da pasta `Docs/Docs`

---

# [2026-05-08]

## Added

### Documentação
- Criação do roadmap do projeto
- Criação do CHANGELOG

### Frontend
- Criação da AboutSection
- Criação da ServicesSection
- Estruturação institucional da HomePage
- Implementação de cards de cultos

---

## Fixed

### Frontend
- Correção de imports CSS
- Correção de nomes de classes
- Correção de estrutura de grid
- Correção de erros de className

# [2026-05-12]

## Added

### Frontend
- Criação da MinistriesSection
- Implementação de cards de ministérios
- Implementação do Footer institucional
- Implementação de sombras com box-shadow
- Estruturação final da HomePage desktop

---

## Changed

### Frontend
- Ajustes de container global
- Melhorias de espaçamento lateral
- Refinamento visual da HomePage

---

## Fixed

### Frontend
- Correção de imports CSS da MinistriesSection
- Correção de nomes de arquivos CSS
- Correção de classes do Footer
- Correção de alinhamento do Footer com Flexbox
- Correção de typos institucionais

# [2026-05-14]

## Added

### Documentação
- Criação do Documento 11 — Segurança e LGPD
- Implementação de ADR (Architecture Decision Record)
- Implementação oficial de tokens do Design System
- Padronização documental com numeração oficial

### Frontend
- Refatoração do frontend para utilização de tokens globais
- Integração do Design System ao CSS existente

---

## Changed

### Documentação
- Atualização do Roadmap com progresso calculável
- Atualização das referências cruzadas entre documentos
- Oficialização do CSS modular como padrão visual do projeto

### Frontend
- Refatoração de Navbar, Hero, About, Services, Ministries e Footer para utilização de tokens globais

---

## Fixed

### Documentação
- Correção de inconsistências no roadmap
- Correção de duplicação de conteúdo LGPD
- Correção de inconsistência documental entre roadmap e changelog

### Frontend
- Correção do token `--section-padding`
- Correção estrutural do sistema global de estilos
# [2026-05-15]

## Added

### Frontend
- Criação da NAFSection
- Implementação da seção de cursos gratuitos
- Implementação de cards institucionais do NAF
- Implementação da navegação por âncoras com IDs nas seções
- Integração inicial da arquitetura visual baseada no Figma

### Documentação
- Adição das referências visuais oficiais no Documento 07
- Organização dos assets visuais do frontend
- Estruturação da biblioteca visual do projeto

---

## Changed

### Frontend
- Refatoração visual da NAFSection
- Migração da estrutura interna do NAF para CSS Grid
- Refinamento visual dos cards institucionais
- Ajustes de responsividade da seção NAF
- Aproximação visual do frontend ao novo protótipo Figma

### Arquitetura
- Integração entre frontend React e referências visuais documentadas

---

## Fixed

### Frontend
- Correção da classe `naf-grid`
- Correção de inconsistência entre JSX e CSS
- Correção de responsividade dos cards NAF
- Correção de variáveis CSS incorretas
- Correção de estrutura visual dos cursos gratuitos
- Correção da navegação por âncoras do menu

---

# [2026-05-16]

## Added

### Frontend
- Criação da SocialMediaSection
- Criação da LocationSection
- Integração do Google Maps na seção de localização
- Implementação de links externos para Instagram e YouTube
- Adição de ícones personalizados para redes sociais
- Adição do logo oficial na HeroSection

---

## Changed

### Frontend
- Refinamento visual da HeroSection com uso do logo oficial
- Refatoração visual da AboutSection para layout em duas colunas
- Refinamento visual dos cards de cultos
- Refinamento visual dos cards de ministérios
- Refinamento visual da SocialMediaSection
- Refatoração do Footer institucional
- Ajustes finais de responsividade mobile
- Ajustes globais de alinhamento e centralização de containers

---

## Fixed

### Frontend
- Correção da navegação do botão “Venha nos Visitar”
- Correção do link “Contato” para direcionamento externo ao Instagram
- Correção de imports e caminhos de assets
- Correção de overflow horizontal causado por elementos largos
- Correção de desalinhamento global da página
- Correção de tipografia e quebras no mobile
- Correção de espaçamentos e proporções dos cards

# [2026-05-22]

## Added

- Estrutura inicial do backend criada
- Ambiente virtual Python configurado
- FastAPI instalado
- Uvicorn instalado
- Arquivo requirements.txt criado
- Estrutura arquitetural backend criada
- Pastas:
  - app
  - api
  - routes
  - core
  - schemas
  - models
  - services
  - database
- Primeira aplicação FastAPI criada
- Endpoint GET `/`
- Endpoint GET `/health`
- Servidor backend iniciado localmente
- Arquivo `.gitignore` configurado

## Changed

- README atualizado para refletir o status real do projeto
- Estrutura documental refinada
- Separação entre funcionalidades implementadas e roadmap futuro

## Fixed

- Correção do markdown quebrado no README
- Correção do rastreamento indevido do `venv`

# [2026-05-25]

## Added

- Estrutura inicial do backend criada
- Ambiente virtual Python configurado
- FastAPI instalado
- Uvicorn configurado
- Arquivo requirements.txt criado
- Arquivo .gitignore configurado
- Arquitetura backend inicial implementada
- Estrutura de pastas backend criada:
  - api
  - routes
  - schemas
  - services
  - models
  - database
  - core
- Primeira aplicação FastAPI criada
- Endpoint GET `/`
- Endpoint GET `/health`
- Endpoint GET `/cultos`
- Swagger automático configurado
- Schema `CultoResponse` implementado com Pydantic
- Validação tipada de respostas implementada
- Service Layer inicial implementada
- Arquivo `culto_service.py` criado

## Changed

- Modularização das rotas da API
- Refatoração da rota `/health`
- Refatoração da rota `/cultos`
- Separação de responsabilidades entre routes e services
- README atualizado para refletir status real do backend

## Fixed

- Correção da estrutura do `.gitignore`
- Correção da organização de rotas
- Correção da documentação Swagger
- Correção da tipagem `response_model`

# [2026-05-26]

## Added

- Configuração inicial do SQLite
- Arquivo `database.py` criado
- Arquivo `init_db.py` criado
- Banco de dados `calebe_church.db` criado
- Tabela `cultos` implementada
- Seed inicial de cultos implementada
- Persistência SQLite funcional
- Integração entre FastAPI e SQLite
- Endpoint `POST /cultos` implementado
- Inserção de dados via API REST
- Validação de entrada com Pydantic
- Schema `CultoCreate` implementado
- Fluxo completo de persistência backend implementado

## Changed

- Refatoração do `culto_service.py`
- Substituição de dados mockados por dados persistidos no SQLite
- Endpoint `GET /cultos` agora consome dados reais do banco
- Estrutura backend preparada para CRUD completo

## Fixed

- Correções de SQL no `init_db.py`
- Correções de conexão SQLite
- Correções de escopo no `culto_service.py`
- Correções de tipagem e validação no Swagger

# [2026-05-29]

## Added

* Arquivo `cultosService.ts` criado para centralizar o consumo da API de cultos
* Integração da seção `ServicesSection` com a API FastAPI
* Implementação de `useState` para gerenciamento dos cultos recebidos da API
* Implementação de `useEffect` para carregamento automático dos cultos ao iniciar a página
* Renderização dinâmica dos cards de cultos utilizando dados persistidos no banco SQLite

## Changed

* Removidos os cards hardcoded da seção de cultos
* Seção `ServicesSection` agora consome dados da rota `GET /cultos`
* Componente atualizado para exibir informações dinâmicas vindas do backend

## Fixed

* Correção do tipo `Culto` no frontend para refletir o schema da API
* Correção do caminho de importação do `cultosService`
* Correção da configuração de CORS entre FastAPI e React
* Correção da URL de consumo da API de cultos
* Correção da renderização JSX do componente `ServicesSection`
* Correção da ausência de `return` no componente React


# [2026-06-02]

## Added

* Tratamento de exceções utilizando HTTPException
* Validação de existência de registros utilizando cursor.rowcount

## Changed

* Endpoint PUT /cultos agora valida a existência do registro antes da atualização
* Endpoint DELETE /cultos agora valida a existência do registro antes da exclusão

## Fixed

* Correção do comportamento do PUT para IDs inexistentes
* Correção do comportamento do DELETE para IDs inexistentes
* Padronização da resposta HTTP 404 para cultos não encontrados

# [2026-09-05]

## Added

- Testes de QA do CRUD de cultos utilizando Thunder Client
- Validação de cenários positivos e negativos da API
- Implementado fallback local para os horários dos cultos em caso de indisponibilidade da API
- Criado `cultosFallback.ts` para separar os dados de contingência da lógica do componente
- Realizados testes de integração do frontend com o backend disponível e indisponível

## Changed

- Ajuste da função `criar_culto()` para persistir o registro com `commit()`
- Ajuste da função `criar_culto()` para retornar o objeto criado com o `id` gerado pelo SQLite
- Remoção do `response_model=CultoResponse` da rota DELETE, adequando a resposta ao formato de mensagem
- Ajustada a URL de consumo da API de cultos para a porta `800`
- Refatorado `ServicesSection.tsx` para utilizar dados de contingência externos ao componente

## Fixed

- Correção do erro 500 no endpoint POST `/cultos/`
- Correção do erro 500 no endpoint DELETE `/cultos/{id}`
- Confirmação do retorno 404 para PUT e DELETE com IDs inexistentes
- Corrigida falha de carregamento dos cultos causada pela divergência entre a porta do frontend e a porta utilizada pelo backend
- Corrigido desaparecimento dos cards de cultos quando a API está indisponível
