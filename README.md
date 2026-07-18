# Abraço Digital

Base reutilizável para manter a mesma identidade visual e o mesmo padrão de execução em qualquer projeto novo.

Este repositório entrega três coisas:

1. **Tokens de identidade visual** — cores, tipografia, raio, sombra, espaçamento e tom de interface.
2. **Assets técnicos** — CSS variables e preset de Tailwind para plugar em projetos web.
3. **Modelos para agentes** — arquivos prontos para Claude e Codex seguirem a mesma identidade, qualidade e critérios de entrega.

## Instalação recomendada

Como isso deve ser usado em vários projetos, a instalação recomendada é **global**:

```bash
npm install -g github:paulohmbrn/design
```

Depois, dentro de qualquer projeto:

```bash
abraco-design install
```

Isso instala, sem sobrescrever arquivos existentes por padrão:

- `docs/identity.md`
- `tokens/abraco-digital.tokens.json`
- `src/styles/abraco-digital.css`
- `tailwind.abraco-digital.cjs`
- `CLAUDE.md`
- `AGENTS.md`
- `CODEX.md`

Para sobrescrever arquivos existentes:

```bash
abraco-design install --force
```

Para instalar só os modelos de agentes:

```bash
abraco-design install --agents-only
```

Para instalar só a identidade visual:

```bash
abraco-design install --design-only
```

## Uso sem instalação global

Funciona, mas não é o caminho preferido:

```bash
npx github:paulohmbrn/design install
```

O global evita repetir URL, reduz fricção e deixa `abraco-design` disponível para qualquer projeto.

## Usando os tokens

### CSS

Importe `src/styles/abraco-digital.css` no entrypoint global do app.

Exemplo:

```ts
import './styles/abraco-digital.css'
```

Depois use variáveis CSS:

```css
.card {
  background: var(--abraco-surface);
  color: var(--abraco-text);
  border: 1px solid var(--abraco-border);
  border-radius: var(--abraco-radius-lg);
  box-shadow: var(--abraco-shadow-soft);
}
```

### Tailwind

No `tailwind.config.*`:

```js
const abracoPreset = require('./tailwind.abraco-digital.cjs')

module.exports = {
  presets: [abracoPreset],
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
}
```

## Direção visual

A identidade é sóbria, operacional e premium sem exagero:

- fundo claro e limpo
- alto contraste para leitura
- verde como acento de ação/clareza
- dourado discreto para destaque executivo
- cantos arredondados, mas sem visual infantil
- sombras suaves, sem brilho artificial
- copy direta: prova, clareza, execução

## Modelos incluídos

- `templates/CLAUDE.md` — instruções de projeto para Claude/Claude Code.
- `templates/AGENTS.md` — instruções compatíveis com Codex e agentes que leem `AGENTS.md`.
- `templates/CODEX.md` — modelo explícito para Codex quando o projeto preferir arquivo separado.
- `templates/project-identity.md` — documento humano da identidade visual.

## Atualizando um projeto existente

Rode novamente:

```bash
abraco-design install
```

Arquivos existentes são preservados. Use `--force` somente quando quiser aplicar a versão mais nova por cima.

## Desenvolvimento local

```bash
npm run check
npm run pack:dry
```
