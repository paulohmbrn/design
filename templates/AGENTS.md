# AGENTS.md

Este projeto segue **Abraço Digital**.

## Regra principal

Não crie uma identidade visual nova para este projeto. Use a base instalada por `@paulohmbrn/design`.

Instalação recomendada do pacote:

```bash
npm install -g github:paulohmbrn/design
```

Aplicar em um projeto:

```bash
abraco-design install
```

## Arquivos de referência

- `docs/identity.md` — norte visual e tom.
- `tokens/abraco-digital.tokens.json` — tokens canônicos.
- `src/styles/abraco-digital.css` — CSS variables/classes base.
- `tailwind.abraco-digital.cjs` — preset Tailwind.

Leia esses arquivos antes de mexer em UI.

## Direção visual

A estética correta é:

- clara;
- sóbria;
- confiável;
- operacional;
- premium sem exagero;
- focada em decisão e prova.

Use:

- fundo `#F7F5EF`;
- superfície `#FFFFFF`;
- texto `#171A1C`;
- primária `#123A2F`;
- acento `#B28A3C`;
- borda `#DDD5C8`.

Evite:

- tema SaaS genérico;
- gradientes sem função;
- excesso de roxo/azul neon;
- placeholders de marketing;
- copy vaga.

## Padrão para agentes de código

Antes de editar:

1. Inspecione a estrutura real do projeto.
2. Localize onde estilos globais entram.
3. Veja se Tailwind, CSS modules, styled-components ou outro stack já existe.
4. Integre Abraço Digital no stack existente; não force troca de arquitetura.

Ao editar:

1. Use tokens antes de valores soltos.
2. Centralize estilos globais.
3. Preserve responsividade.
4. Crie estados de loading/empty/error quando houver fluxo de dados.
5. Evite refatoração lateral não solicitada.

Antes de finalizar:

1. Rode os testes/build/lint relevantes.
2. Corrija falhas causadas pela sua mudança.
3. Informe comando e resultado real da validação.

## Critério de pronto

Pronto significa funcional, consistente e validado. Não entregue só plano, exemplo ou stub.
