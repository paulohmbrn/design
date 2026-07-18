# CLAUDE.md

Este projeto usa **Paulo Design** como base visual e operacional.

## Objetivo

Qualquer interface, landing page, dashboard, automação visual ou documentação criada aqui deve parecer parte da mesma família: clara, confiável, sóbria e orientada a execução real.

## Identidade visual obrigatória

Use os arquivos instalados pelo pacote `@paulohmbrn/design`:

- `docs/identity.md` — direção visual e critérios humanos.
- `tokens/paulo-design.tokens.json` — tokens canônicos.
- `src/styles/paulo-design.css` — CSS variables e classes base.
- `tailwind.paulo-design.cjs` — preset Tailwind, quando o projeto usa Tailwind.

Se algum arquivo estiver ausente, pare e instale:

```bash
paulo-design install
```

A instalação recomendada do pacote é global:

```bash
npm install -g github:paulohmbrn/design
```

## Direção de design

- Fundo claro e quente, não branco genérico.
- Verde escuro como cor primária.
- Dourado apenas como acento executivo.
- Tipografia legível e hierarquia forte.
- Cards com borda real, sombra leve e densidade útil.
- Estados explícitos: carregando, vazio, erro, sucesso.
- Nada de gradiente exagerado, neon gratuito ou estética genérica de SaaS.

## Tom de produto

Escreva como operador, não como marqueteiro.

Prefira:

- “Última validação: hoje, 08:12”
- “3 pendências sem documento”
- “Pronto para enviar ao banco”
- “Resultado consolidado”

Evite:

- “Revolucione sua gestão”
- “Potencialize seus resultados”
- “Solução inovadora com IA”
- “Jornada transformadora”

## Padrão de execução para Claude

Ao modificar este projeto:

1. Leia os arquivos relevantes antes de editar.
2. Preserve a identidade Paulo Design.
3. Reutilize tokens/classes existentes antes de criar novos estilos.
4. Não entregue mock bonito sem fluxo funcional.
5. Valide build/test/lint quando existirem.
6. Ao final, diga exatamente o que foi alterado e como foi validado.

## Critério de aceite

Uma entrega só está pronta quando:

- a tela funciona;
- o visual segue `docs/identity.md`;
- componentes principais usam tokens do design system;
- estados críticos foram tratados;
- o resultado foi validado com comando real.
