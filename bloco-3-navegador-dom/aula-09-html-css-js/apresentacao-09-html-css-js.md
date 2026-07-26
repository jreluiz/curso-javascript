---
marp: true
theme: trilha
paginate: true
lang: pt-BR
footer: '🟨 Curso de JavaScript · Aula 09'
---

<!-- _class: capa -->

<div class="emoji">🌐</div>

# HTML + CSS + JavaScript

## Aula 09 · Bloco 3 — O Navegador e o DOM

<div class="meta">Seu código ganha uma tela</div>

---

## 🎯 Nesta aula

1. O **trio da web** e o papel de cada um
2. HTML essencial — o mínimo para ter onde trabalhar
3. CSS mínimo
4. Ligando o JavaScript à página
5. **DevTools** — sua nova casa

---

## O trio da web

| Linguagem | Papel | Se fosse uma casa |
|---|---|---|
| **HTML** | estrutura e conteúdo | paredes, portas, cômodos |
| **CSS** | aparência | pintura e decoração |
| **JavaScript** | comportamento | eletricidade: interruptor, campainha |

Neste curso o foco é o **JavaScript**. O HTML e o CSS entram no mínimo necessário para ter onde aplicá-lo.

---

## HTML: tags, atributos, `id` e `class`

```html
<h1>Olá, web!</h1>
<p>HTML é feito de <strong>tags</strong>.</p>

<ul>
  <li>Um item de lista</li>
</ul>

<button>Um botão (ainda sem vida)</button>
<input type="text" placeholder="Um campo" />

<div id="area-especial">Uma caixa genérica.</div>
```

---

<!-- _class: lista-limpa -->

## Quatro conceitos que bastam

- 🏷️ **Tags** demarcam elementos: `<p>abre</p>` fecha. Algumas não fecham: `<input />`;
- ⚙️ **Atributos** dão informação extra: `type="text"`;
- 🔑 **`id`** — identificador **único**. É por ele que o JS acha o elemento;
- 🏷️ **`class`** — rótulo **reutilizável**, para vários elementos.

> 💡 Guarde essa dupla: `id` para um; `class` para muitos. Volta na próxima aula.

---

## CSS mínimo

```html
<style>
  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; }
  h1   { color: darkblue; }
  .destaque   { background-color: yellow; }   /* .nome = CLASSE */
  #area-especial { border: 2px solid red; }   /* #nome = ID */
</style>
```

E no HTML: `<p class="destaque">Este fica marcado.</p>`

Suficiente por enquanto — receitas prontas de CSS vêm nos projetos.

---

## O JavaScript entra em cena

```html
<body>
  <h1>Página com JS</h1>

  <script src="script.js"></script>
</body>
```

> ⚠️ **Por convenção, o `<script>` vai no FINAL do `<body>`.** Assim o HTML já existe quando o script roda. Colocar antes é a causa nº 1 de "meu JS não acha o elemento".

---

## O primeiro script na página

`script.js`, na mesma pasta:

```javascript
console.log("O JavaScript está rodando no navegador!");
alert("Olá! Eu vim do script.js 👋");
```

Recarregue: o `alert` aparece.

E o `console.log`? Foi para o **console do navegador** — que é onde você vai morar a partir de agora.

---

<!-- _class: lead -->

## 🔧 DevTools — aperte **F12**

**Console** — onde caem os `console.log` e os **erros**.
Deixe **sempre aberto**.

Você também pode digitar JS ali: teste `2 + 2` e `document.title`.

**Elements** — o HTML vivo, inspecionável e editável.

---

<!-- _class: lead -->

## 📏 A regra do Bloco 3

Deu problema?

# Primeiro passo: abrir o Console.

O erro está lá, com arquivo e linha — exatamente como no Node.

---

## O que muda e o que não muda

**Não muda nada** do que você já sabe.

Variáveis, funções, arrays, objetos, `map`/`filter` — tudo igual.

O que muda: além do `console.log`, o JavaScript agora pode mexer **na página**.

E é exatamente esse o assunto da próxima aula.

---

<!-- _class: checkpoint -->

## 🏋️ Exercícios da aula

Na pasta `aula-09/`:

1. **`sobre-mim/`** — mini página pessoal: `h1`, apresentação, `ul` com 3 hobbies;
2. Um `script.js` ligado a ela, com `forEach` sobre um array de hobbies;
3. No Console: execute `document.title = "Novo título"` e veja a aba mudar;
4. Provoque um erro de propósito e anote a mensagem num comentário;
5. **Desafio 🌶️** — pesquise `prompt()` e faça uma saudação personalizada.

---

<!-- _class: lead -->

## ➡️ Próxima aula

**Aula 10 — DOM**

O JavaScript deixa de só *observar* a página
e passa a **controlá-la**.
