# CODEX.md

Este projeto usa **Abraço Digital**.

## Missão do Codex

Ao gerar ou alterar código, mantenha a mesma identidade visual em todos os projetos derivados deste repositório.

## Instalação recomendada

O pacote deve ser instalado globalmente para uso recorrente:

```bash
npm install -g github:paulohmbrn/design
```

Dentro do projeto:

```bash
abraco-design install
```

## Contrato visual

Use os tokens e arquivos locais:

- `docs/identity.md`
- `tokens/abraco-digital.tokens.json`
- `src/styles/abraco-digital.css`
- `tailwind.abraco-digital.cjs`

Não invente paleta alternativa sem instrução explícita.

### Paleta base

```txt
background: #F7F5EF
surface:    #FFFFFF
text:       #171A1C
muted:      #5D646B
border:     #DDD5C8
primary:    #123A2F
accent:     #B28A3C
```

## Como agir em projetos web

1. Detecte o stack: Next, Vite, Remix, Astro, app simples, etc.
2. Encontre o CSS global real.
3. Importe `src/styles/abraco-digital.css` no ponto certo.
4. Se Tailwind existir, conecte `tailwind.abraco-digital.cjs` como preset.
5. Aplique tokens aos componentes principais.
6. Valide responsividade e estados críticos.

## Padrão de UI

- Header limpo com proposta clara.
- CTA primário verde escuro.
- Cards brancos com borda quente e sombra leve.
- Métricas/provas visíveis quando fizer sentido.
- Erros e vazios com próxima ação clara.
- Copy objetiva, sem frases genéricas de IA.

## Padrão de resposta final

Ao terminar, responda curto:

- arquivos alterados;
- comportamento visual/funcional entregue;
- comando real de validação;
- qualquer pendência ou bloqueio real.

Não diga que “deveria funcionar” se não validou.
