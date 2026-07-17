# Aula 10 — DOM: JavaScript Controlando a Página

> 🎯 Objetivos: selecionar elementos da página, alterar conteúdo/estilo/classes, e criar e remover elementos.

## 1. O que é o DOM?

Quando o navegador carrega um HTML, ele o transforma numa estrutura de objetos na memória: o **DOM** (*Document Object Model*). Cada tag vira um objeto que o JavaScript pode ler e **modificar** — e a página se atualiza na hora.

A porta de entrada é o objeto global **`document`**.

## 2. Selecionando elementos

Página de laboratório desta aula (`aula-10/index.html`):

```html
<body>
  <h1 id="titulo">Painel de Testes</h1>
  <p class="aviso">Primeiro aviso</p>
  <p class="aviso">Segundo aviso</p>
  <ul id="lista-frutas">
    <li>Maçã</li>
    <li>Banana</li>
  </ul>
  <script src="script.js"></script>
</body>
```

Os dois métodos que resolvem tudo (usam a **sintaxe de seletores do CSS**):

```javascript
// querySelector: retorna O PRIMEIRO elemento que casa com o seletor
const titulo = document.querySelector("#titulo");     // por id
const aviso = document.querySelector(".aviso");       // por classe (só o 1º!)
const lista = document.querySelector("ul");           // por tag

// querySelectorAll: retorna TODOS (uma NodeList, que aceita forEach)
const avisos = document.querySelectorAll(".aviso");
avisos.forEach((el) => console.log(el.textContent));
```

> ⚠️ Se o seletor não encontra nada, `querySelector` retorna `null` — e a próxima linha explode com `Cannot read properties of null`. Esse será o erro nº 1 do bloco: confira o seletor e se o `<script>` está no final do body.

## 3. Alterando conteúdo

```javascript
const titulo = document.querySelector("#titulo");

titulo.textContent = "Painel Hackeado 😎";        // troca o TEXTO
titulo.innerHTML = "Painel <em>Hackeado</em>";    // interpreta HTML
```

> 📏 Prefira `textContent` para texto puro. `innerHTML` só quando precisar inserir tags — e **nunca** com conteúdo digitado pelo usuário (risco de segurança: injeção de código).

## 4. Alterando estilos e classes

```javascript
const titulo = document.querySelector("#titulo");

// Estilo direto (propriedades CSS em camelCase)
titulo.style.color = "white";
titulo.style.backgroundColor = "darkblue";   // background-color → backgroundColor

// Jeito profissional: classes prontas no CSS, ligadas/desligadas pelo JS
titulo.classList.add("destaque");
titulo.classList.remove("destaque");
titulo.classList.toggle("destaque");   // liga se desligado, desliga se ligado
titulo.classList.contains("destaque"); // true/false
```

> 💡 **Padrão do mercado:** o CSS define as aparências possíveis (`.destaque`, `.erro`, `.concluida`); o JS só decide **quando** aplicá-las com `classList`. Separação de responsabilidades.

## 5. Criando e removendo elementos

O padrão **criar → configurar → inserir**:

```javascript
const lista = document.querySelector("#lista-frutas");

// criar
const novoItem = document.createElement("li");
// configurar
novoItem.textContent = "Uva";
novoItem.classList.add("fruta-nova");
// inserir
lista.appendChild(novoItem);

// remover
const primeiro = document.querySelector("#lista-frutas li");
primeiro.remove();
```

## 6. Renderizando um array na tela

O padrão mais importante do bloco — seus dados (array de objetos) virando página:

```javascript
const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
];

const lista = document.querySelector("#lista-produtos");   // um <ul> no HTML

produtos.forEach((p) => {
  const li = document.createElement("li");
  li.textContent = `${p.nome} — R$ ${p.preco.toFixed(2)}`;
  lista.appendChild(li);
});
```

Tudo do Bloco 2 se conecta aqui: quer mostrar só os baratos? `produtos.filter(...)` antes do `forEach`. Ordenados? `.sort(...)`. **DOM = dados + os métodos que você já domina.**

## 🏋️ Exercícios da aula

Na pasta `aula-10/` (um subprojeto `index.html` + `script.js` por exercício, ou um só com seções):

1. **Cartão de perfil** — HTML com `h2` (nome), `p` (bio) e uma `div` vazia. Pelo JS: troque o nome, escreva uma bio, e pinte o fundo da div com `style`;
2. **Semáforo de classes** — Crie no CSS as classes `.ok` (verde), `.atencao` (amarelo) e `.erro` (vermelho). Pelo JS, aplique cada uma a um parágrafo diferente usando `classList.add`;
3. **Lista gerada** — Dado `const linguagens = ["JavaScript", "Java", "Python", "C"];`, gere os `<li>` de uma `<ul>` vazia via `createElement` + `appendChild`;
4. **Tabela de alunos** — Reaproveite o array de alunos da aula 08 e renderize `Nome — média — situação` como itens de lista, adicionando a classe `aprovado` ou `reprovado` (defina as cores no CSS);
5. **Desafio 🌶️ Filtro renderizado** — No exercício 4, renderize **duas** listas: uma com todos e outra apenas com os aprovados (use `filter` antes de renderizar). Extraia uma função `renderizarLista(alunos, elementoUl)` para não duplicar código.

## ✅ Entrega

```bash
git add aula-10/
git commit -m "Resolve exercícios da aula 10 (DOM)"
git push
```

---

⬅️ [Aula 09](../aula-09-html-css-js/README.md) | ➡️ [Aula 11 — Eventos](../aula-11-eventos/README.md)
