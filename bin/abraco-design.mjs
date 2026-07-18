#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const FILES = [
  {
    group: 'design',
    from: 'templates/project-identity.md',
    to: 'docs/identity.md',
    label: 'documento de identidade visual',
  },
  {
    group: 'design',
    from: 'tokens/abraco-digital.tokens.json',
    to: 'tokens/abraco-digital.tokens.json',
    label: 'tokens de design',
  },
  {
    group: 'design',
    from: 'css/abraco-digital.css',
    to: 'src/styles/abraco-digital.css',
    label: 'CSS variables/classes base',
  },
  {
    group: 'design',
    from: 'tailwind.abraco-digital.cjs',
    to: 'tailwind.abraco-digital.cjs',
    label: 'preset Tailwind',
  },
  {
    group: 'agents',
    from: 'templates/CLAUDE.md',
    to: 'CLAUDE.md',
    label: 'modelo Claude',
  },
  {
    group: 'agents',
    from: 'templates/AGENTS.md',
    to: 'AGENTS.md',
    label: 'modelo Codex/agents',
  },
  {
    group: 'agents',
    from: 'templates/CODEX.md',
    to: 'CODEX.md',
    label: 'modelo Codex explícito',
  },
]

function printHelp() {
  console.log(`Abraço Digital

Uso:
  abraco-design install [opções]
  abraco-design list
  abraco-design --help

Instalação recomendada:
  npm install -g github:paulohmbrn/design

Opções do install:
  --cwd <path>       Projeto de destino. Padrão: diretório atual.
  --force           Sobrescreve arquivos existentes.
  --agents-only     Instala apenas CLAUDE.md, AGENTS.md e CODEX.md.
  --design-only     Instala apenas tokens, CSS, Tailwind e docs/identity.md.
`)
}

function parseArgs(argv) {
  const args = { command: argv[0] || '--help', cwd: process.cwd(), force: false, groups: new Set(['design', 'agents']) }

  for (let index = 1; index < argv.length; index += 1) {
    const arg = argv[index]

    if (arg === '--force') {
      args.force = true
      continue
    }

    if (arg === '--agents-only') {
      args.groups = new Set(['agents'])
      continue
    }

    if (arg === '--design-only') {
      args.groups = new Set(['design'])
      continue
    }

    if (arg === '--cwd') {
      const value = argv[index + 1]
      if (!value) throw new Error('Faltou informar o caminho depois de --cwd.')
      args.cwd = resolve(value)
      index += 1
      continue
    }

    throw new Error(`Opção desconhecida: ${arg}`)
  }

  return args
}

function copyManagedFile(file, cwd, force) {
  const source = join(repoRoot, file.from)
  const target = join(cwd, file.to)

  if (!existsSync(source)) {
    throw new Error(`Arquivo de origem não encontrado: ${file.from}`)
  }

  if (existsSync(target) && !force) {
    return { status: 'skipped', file }
  }

  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(source, target)
  return { status: existsSync(target) ? 'written' : 'created', file }
}

function install(args) {
  mkdirSync(args.cwd, { recursive: true })

  const selectedFiles = FILES.filter((file) => args.groups.has(file.group))
  const results = selectedFiles.map((file) => copyManagedFile(file, args.cwd, args.force))

  const written = results.filter((result) => result.status === 'written')
  const skipped = results.filter((result) => result.status === 'skipped')

  console.log('Abraço Digital aplicado.')
  console.log(`Destino: ${args.cwd}`)
  console.log(`Arquivos escritos: ${written.length}`)

  for (const result of written) {
    console.log(`  + ${result.file.to} (${result.file.label})`)
  }

  if (skipped.length > 0) {
    console.log(`Arquivos preservados: ${skipped.length}`)
    for (const result of skipped) {
      console.log(`  = ${result.file.to} já existe; use --force para sobrescrever`)
    }
  }

  console.log('\nRecomendação: mantenha este pacote instalado globalmente para aplicar a mesma identidade em novos projetos:')
  console.log('  npm install -g github:paulohmbrn/design')
}

function listFiles() {
  console.log('Arquivos disponíveis:')
  for (const file of FILES) {
    console.log(`  ${file.group.padEnd(6)} ${file.from} -> ${file.to}`)
  }
}

function main() {
  const argv = process.argv.slice(2)

  if (argv.length === 0 || argv[0] === '--help' || argv[0] === '-h') {
    printHelp()
    return
  }

  const args = parseArgs(argv)

  if (args.command === 'install') {
    install(args)
    return
  }

  if (args.command === 'list') {
    listFiles()
    return
  }

  throw new Error(`Comando desconhecido: ${args.command}`)
}

try {
  main()
} catch (error) {
  console.error(`Erro: ${error.message}`)
  process.exitCode = 1
}
