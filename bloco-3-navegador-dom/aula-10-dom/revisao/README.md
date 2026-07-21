# Aula 10 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 10 — DOM](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A10-01

O DOM é:

- **a)** o arquivo HTML como está salvo no disco;
- **b)** uma biblioteca que precisa ser instalada para manipular páginas;
- **c)** outro nome para o Console do navegador;
- **d)** a representação da página como uma estrutura de objetos na memória, que o JavaScript pode ler e modificar.

↩︎ *Aula 10, seção 1 — O que é o DOM?*

---

### Q-A10-02

Dado o HTML abaixo, o que o script imprime?

```html
<p class="aviso">Primeiro aviso</p>
<p class="aviso">Segundo aviso</p>
```

```javascript
const el = document.querySelector(".aviso");
console.log(el.textContent);
```

- **a)** `Segundo aviso`
- **b)** `Primeiro aviso`
- **c)** `Primeiro aviso Segundo aviso`
- **d)** Uma lista com os dois parágrafos.

↩︎ *Aula 10, seção 2 — Selecionando elementos*

---

### Q-A10-03

A página tem `<h1 id="titulo">Painel</h1>`. O que acontece ao executar este script?

```javascript
const titulo = document.querySelector("titulo");
console.log(titulo.textContent);
```

- **a)** Imprime `Painel` normalmente;
- **b)** imprime `null`;
- **c)** falha com `TypeError: Cannot read properties of null`, porque falta o `#` no seletor;
- **d)** falha com `ReferenceError: titulo is not defined`.

↩︎ *Aula 10, seção 2 — Selecionando elementos*

---

### Q-A10-04

O que aparece **na tela** depois deste trecho?

```javascript
const p = document.querySelector("#alvo");
p.textContent = "Olá <em>mundo</em>";
```

- **a)** `Olá <em>mundo</em>`, com as tags visíveis como texto comum;
- **b)** `Olá mundo`, com a palavra "mundo" em itálico;
- **c)** apenas `Olá`;
- **d)** nada: `textContent` não aceita tags.

↩︎ *Aula 10, seção 3 — Alterando conteúdo*

---

### Q-A10-05

Para mudar a cor de fundo de um elemento pelo JavaScript, a forma correta é:

- **a)** `el.style.background-color = "blue";`
- **b)** `el.css("background-color", "blue");`
- **c)** `el.backgroundColor = "blue";`
- **d)** `el.style.backgroundColor = "blue";`

↩︎ *Aula 10, seção 4 — Alterando estilos e classes*

---

### Q-A10-06

O que `el.classList.toggle("destaque")` faz?

- **a)** Adiciona a classe sempre, mesmo que já esteja presente;
- **b)** apenas verifica se a classe existe, devolvendo `true` ou `false`, sem alterar nada;
- **c)** adiciona a classe se ela não estiver presente e remove se estiver;
- **d)** remove todas as classes do elemento.

↩︎ *Aula 10, seção 4 — Alterando estilos e classes*

---

### Q-A10-07

Depois deste trecho, o item **ainda não aparece** na página. Por quê?

```javascript
const lista = document.querySelector("#lista");
const item = document.createElement("li");
item.textContent = "Uva";
```

- **a)** `createElement` só funciona com `div`;
- **b)** falta inserir o elemento no documento com `lista.appendChild(item)`;
- **c)** falta salvar o arquivo HTML;
- **d)** `textContent` não funciona em elementos criados pelo JavaScript.

↩︎ *Aula 10, seção 5 — Criando e removendo elementos*

---

### Q-A10-08

O que aparece na página após este trecho, sendo `#lista` uma `<ul>` vazia?

```javascript
const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
];

const lista = document.querySelector("#lista");

produtos.forEach((p) => {
  const li = document.createElement("li");
  li.textContent = `${p.nome} — R$ ${p.preco.toFixed(2)}`;
  lista.appendChild(li);
});
```

- **a)** Dois itens: `Mouse — R$ 80.00` e `Teclado — R$ 150.00`;
- **b)** dois itens: `Mouse — R$ 80` e `Teclado — R$ 150`;
- **c)** um único item com os dois produtos juntos;
- **d)** nada, porque falta usar `innerHTML`.

↩︎ *Aula 10, seção 6 — Renderizando um array na tela*

---

⬅️ [Voltar à Aula 10](../README.md) | ➡️ [Revisão da Aula 11](../../aula-11-eventos/revisao/README.md)
