---
marp: true
theme: trilha
paginate: true
lang: pt-BR
footer: '🟨 Curso de JavaScript · Aula 15'
---

<!-- _class: capa -->

<div class="emoji">🚀</div>

# Projeto Final

## Aula 15 · Bloco 4 — Assincronismo

<div class="meta">Aula-laboratório: tempo protegido para construir</div>

---

## 🎯 Hoje é mão na massa

Sem conteúdo novo. Esta aula é o seu **tempo protegido de desenvolvimento**.

A especificação completa está em `projetos/projeto-final.md`.

O que vamos combinar aqui é o **método** — a ordem que faz o projeto sair do papel sem travar.

---

<!-- _class: lista-limpa -->

## Antes de escrever a primeira linha — 15 min

- 🔍 **Escolha a API e abra as URLs no navegador.** Entenda o JSON **antes** de programar;
- ✏️ **Rabisque no papel** os estados do app: inicial, carregando, sucesso, erro;
- 📦 **Crie o repositório**, o `index.html` esqueleto, e o primeiro commit.

> 💡 Quinze minutos de papel economizam duas horas de código jogado fora.

---

<!-- _class: lead -->

## 🍰 Construa em fatias finas

Não escreva o app inteiro e só então teste.

Cada fatia é uma coisa que **funciona**
e termina com um **commit**.

Sete fatias, na ordem que dá certo.

---

## As sete fatias

1. **HTML estático** — campos, botão, áreas de status e resultado;
2. **Fetch no console** — busca funcionando com `console.log`, sem DOM ainda;
3. **Renderização** — o resultado aparecendo na página;
4. **Validação e erros** — entrada validada, termo inexistente tratado;
5. **Carregando** — o feedback `🔄 buscando...`;
6. **CSS e capricho** — aparência, responsividade básica;
7. **Pages e README** — publica e documenta.

Cada uma → **commit**.

---

<!-- _class: lead -->

## 📏 Se travar mais de 15 minutos

**1.** Leia a mensagem no Console **com calma**.

**2.** Isole o problema num arquivo mínimo.

**3.** Consulte o guia de erros comuns.

Aprender a **destravar** é parte do ofício —
não é sinal de que você não sabe.

---

<!-- _class: tabela-densa -->

## Os erros que vão aparecer (aposto)

| Sintoma | Provável causa |
|---|---|
| `Cannot read properties of null` | seletor errado, ou `<script>` antes do HTML |
| `Cannot read properties of undefined` | o caminho no JSON não é o que você acha — dê `console.log(dados)` |
| Resultado não aparece, **sem erro** | esqueceu de atualizar o DOM depois do fetch |
| `Failed to fetch` | URL errada, sem internet, ou API fora do ar |
| Pages desatualizado | esqueceu o push, ou é cache — force com `Ctrl+Shift+R` |

---

<!-- _class: checkpoint lista-limpa -->

## ✅ Checklist de fim de aula

- ☐ Pelo menos as fatias **1 a 3** concluídas e **commitadas**;
- ☐ `git push` dado — confira **no navegador**;
- ☐ O que falta anotado numa **issue do seu próprio repositório**.

> 💡 Abrir issue no próprio repo parece exagero, mas é exatamente assim que equipes registram pendência. E fica bonito no seu perfil.

---

<!-- _class: lead -->

## ➡️ Próxima aula

**Aula 16 — Revisão e Próximos Passos**

O mapa do que você aprendeu,
classes em JS — e o que estudar depois.
