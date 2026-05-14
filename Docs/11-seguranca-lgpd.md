# Documento 11 — Segurança e LGPD

## Projeto

Calebe Church — Site Institucional Full-Stack

---

# 1. Objetivo do Documento

Este documento define as diretrizes iniciais de segurança e LGPD aplicadas ao projeto Calebe Church.

O objetivo é centralizar as decisões relacionadas à proteção de dados, privacidade, validação de informações e segurança básica da aplicação.

---

# 2. Princípio Geral

O projeto deverá coletar apenas os dados necessários para sua finalidade institucional.

Toda coleta de dados deverá possuir objetivo claro, justificável e alinhado à experiência do usuário.

---

# 3. Dados Pessoais

Na primeira versão, o projeto deverá evitar coleta excessiva de dados pessoais.

Dados previstos futuramente:

```txt
nome
e-mail
telefone
mensagem de contato
```

---

# 4. Finalidade da Coleta

Os dados coletados futuramente deverão ser utilizados apenas para:

- responder contatos;
- orientar visitantes;
- direcionar solicitações;
- facilitar comunicação institucional.

---

# 5. Boas Práticas de LGPD

O sistema deverá:

- coletar apenas dados necessários;
- informar a finalidade do contato;
- evitar armazenamento desnecessário;
- proteger dados enviados;
- não expor informações pessoais publicamente;
- permitir revisão futura da política de privacidade.

---

# 6. Boas Práticas de Segurança

O sistema deverá considerar:

- validação de formulários;
- sanitização de entradas;
- proteção contra spam;
- uso de HTTPS em produção;
- separação entre frontend e backend;
- controle de exposição de dados sensíveis;
- tratamento adequado de erros.

---

# 7. Formulários

Quando o formulário de contato for implementado, deverá possuir:

- campos mínimos necessários;
- validação no frontend;
- validação no backend;
- mensagem clara de finalidade;
- proteção contra envios abusivos.

---

# 8. Backend

O backend deverá validar todas as informações recebidas antes de processar ou armazenar dados.

Validações previstas:

- campos obrigatórios;
- formato de e-mail;
- tamanho máximo da mensagem;
- bloqueio de conteúdo inválido;
- tratamento de erros.

---

# 9. Banco de Dados

O banco de dados deverá armazenar apenas informações necessárias para o funcionamento da aplicação.

Diretrizes:

- evitar dados sensíveis desnecessários;
- manter campos objetivos;
- registrar data de criação quando necessário;
- preparar estrutura para exclusão futura de dados, se aplicável.

---

# 10. Produção

Em ambiente de produção, o projeto deverá utilizar:

- HTTPS;
- variáveis de ambiente;
- proteção de chaves e tokens;
- configurações seguras no backend;
- permissões adequadas no banco de dados.

---

# 11. Relação com Outros Documentos

Este documento passa a ser a fonte oficial para decisões relacionadas a segurança e LGPD.

Outros documentos deverão referenciar este arquivo em vez de duplicar conteúdo.

Referência padrão:

```txt
Segurança e LGPD: ver Documento 11 — Segurança e LGPD
```