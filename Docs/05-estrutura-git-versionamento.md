# Documento 05 — Estrutura Git e Versionamento

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo do Documento

Este documento define a estratégia de versionamento e organização do código-fonte do projeto utilizando Git e GitHub.

O objetivo é manter controle da evolução do sistema, organização das alterações e rastreabilidade do desenvolvimento.

---

# 2. Ferramentas Utilizadas

Ferramentas previstas:

- Git
- GitHub
- VS Code

---

# 3. Objetivos do Versionamento

O versionamento deverá permitir:

- registrar evolução do projeto;
- controlar alterações;
- manter histórico do desenvolvimento;
- evitar perda de código;
- organizar funcionalidades;
- facilitar manutenção futura.

---

# 4. Estrutura Inicial do Repositório

Estrutura inicial prevista:

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

# 5. Estratégia de Branches

Estrutura inicial de branches:

```txt
main
develop
feature/
fix/
```

---

## 5.1 Branch Main

Responsável pela versão principal e estável do projeto.

---

## 5.2 Branch Develop

Responsável pelo ambiente principal de desenvolvimento.

---

## 5.3 Branches Feature

Responsáveis por novas funcionalidades.

Exemplos:

```txt
feature/navbar
feature/homepage
feature/backend-api
```

---

## 5.4 Branches Fix

Responsáveis por correções de bugs.

Exemplos:

```txt
fix/mobile-navbar
fix/contact-form
```

---

# 6. Estratégia de Commits

Os commits deverão possuir mensagens claras e objetivas.

Padrão previsto:

```txt
tipo: descrição
```

---

# 7. Tipos de Commit

## feat

Nova funcionalidade.

Exemplo:

```txt
feat: create homepage hero section
```

---

## fix

Correção de bug.

Exemplo:

```txt
fix: adjust mobile menu spacing
```

---

## docs

Alterações em documentação.

Exemplo:

```txt
docs: add architecture documentation
```

---

## style

Alterações visuais e estilização.

Exemplo:

```txt
style: update homepage colors
```

---

## refactor

Refatoração de código.

Exemplo:

```txt
refactor: simplify navbar component
```

---

# 8. Estratégia de Organização do Código

O projeto deverá manter:

- separação entre frontend e backend;
- separação de responsabilidades;
- estrutura de pastas organizada;
- componentes reutilizáveis;
- padronização de nomes.

---

# 9. Versionamento do Frontend

O frontend será versionado dentro da pasta:

```txt
frontend/
```

Tecnologias previstas:

- React
- TypeScript
- Vite

---

# 10. Versionamento do Backend

O backend será versionado dentro da pasta:

```txt
backend/
```

Tecnologias previstas:

- Python
- FastAPI

---

# 11. Estratégia de Backup

O GitHub será utilizado como repositório remoto principal do projeto.

Objetivos:

- backup do código;
- histórico do projeto;
- compartilhamento;
- portfólio;
- controle de evolução.

---

# 12. Organização de Arquivos

Padrões previstos:

Frontend:
- PascalCase para componentes;
- camelCase para variáveis.

Backend:
- snake_case para arquivos Python;
- nomes descritivos.

---

# 13. Controle de Documentação

Toda documentação ficará centralizada na pasta:

```txt
Docs/
```

Documentos previstos:

- briefing;
- arquitetura;
- navegação;
- convenções;
- versionamento;
- segurança;
- deploy.

---

# 14. Controle de Diagramas

Todos os diagramas e fluxogramas ficarão centralizados na pasta:

```txt
Diagramas/
```

Arquivos previstos:

- fluxogramas;
- arquitetura visual;
- banco de dados;
- wireframes;
- mapas de navegação.

---

# 15. Estratégia de Crescimento do Projeto

O versionamento deverá permitir crescimento futuro do sistema, incluindo:

- painel administrativo;
- autenticação;
- dashboard;
- gerenciamento de eventos;
- gerenciamento de ministérios;
- integração com APIs externas.

---

# 16. Boas Práticas de Versionamento

Boas práticas previstas:

- commits pequenos e organizados;
- mensagens claras;
- separação de funcionalidades;
- evitar commits genéricos;
- documentação atualizada;
- organização de branches.

---

# 17. Resumo da Estratégia Git

```txt
Versionamento:
Git + GitHub

Branches:
main
develop
feature/*
fix/*

Commits:
feat
fix
docs
style
refactor
```