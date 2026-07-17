# Aula 11 — Eventos: a Página Reage ao Usuário

> 🎯 Objetivos: reagir a cliques, teclado e digitação com `addEventListener`, e ler valores de inputs com validação.

## 1. O que é um evento?

Tudo que acontece na página é um **evento**: clique, tecla pressionada, texto digitado, mouse passando... O JS pode "escutar" eventos e reagir a eles com — adivinhe — **callbacks** (aula 07 pagando dividendos).

## 2. `addEventListener` — o padrão

```html
<button id="botao">Clique aqui</button>
<p id="resultado"></p>
```

```javascript
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  resultado.textContent = "Você clicou! 🎉";
});
```

Anatomia: `elemento.addEventListener("nome-do-evento", callback)`. O callback executa **toda vez** que o evento acontece naquele elemento.

Um contador para fixar o padrão:

```javascript
let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;
  resultado.textContent = `Cliques: ${cliques}`;
});
```

> 💡 Repare no padrão que se repetirá em tudo: **estado** (a variável `cliques`) + **evento** (o clique altera o estado) + **renderização** (o DOM mostra o estado). Guarde essa tríade — é a essência de qualquer app, do contador ao Instagram.

## 3. Lendo o que o usuário digitou

```html
<input type="text" id="campo-nome" placeholder="Seu nome" />
<button id="btn-saudar">Saudar</button>
<p id="saida"></p>
```

```javascript
const campo = document.querySelector("#campo-nome");
const btn = document.querySelector("#btn-saudar");
const saida = document.querySelector("#saida");

btn.addEventListener("click", () => {
  const nome = campo.value;          // .value = o que está digitado AGORA
  saida.textContent = `Olá, ${nome}!`;
});
```

> ⚠️ **`.value` sempre retorna string!** Campo numérico com "25" digitado → você recebe `"25"`. Converta com `Number()` antes de fazer contas (lembra da coerção da aula 02? Ela ataca aqui).

## 4. Validando a entrada

Nunca confie no que o usuário digitou:

```javascript
btn.addEventListener("click", () => {
  const nome = campo.value.trim();       // .trim() remove espaços das pontas

  if (nome === "") {
    saida.textContent = "⚠️ Digite um nome!";
    saida.classList.add("erro");
    return;                              // encerra o callback aqui
  }

  saida.classList.remove("erro");
  saida.textContent = `Olá, ${nome}!`;
  campo.value = "";                      // limpa o campo
  campo.focus();                         // devolve o cursor para ele
});
```

Padrão **guard clause**: valida no topo, `return` se inválido, caminho feliz embaixo. Deixa o código muito mais limpo que `if/else` aninhados.

## 5. Outros eventos úteis

```javascript
// input: dispara A CADA tecla (busca ao vivo, contador de caracteres)
campo.addEventListener("input", () => {
  console.log(`Digitado até agora: ${campo.value}`);
});

// keydown: detecta teclas específicas (Enter para confirmar!)
campo.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    console.log("Enter pressionado — mesmo efeito do botão");
  }
});

// change em <select>, mouseover/mouseout para hover...
```

Repare no parâmetro **`evento`**: o navegador passa ao callback um objeto cheio de informações (qual tecla, qual elemento, posição do mouse...). Use quando precisar.

## 6. Juntando tudo: mini conversor

```html
<input type="number" id="celsius" placeholder="°C" />
<button id="converter">Converter</button>
<p id="fahrenheit"></p>
```

```javascript
const input = document.querySelector("#celsius");
const botao = document.querySelector("#converter");
const saida = document.querySelector("#fahrenheit");

const converter = () => {
  const c = Number(input.value);
  if (input.value.trim() === "" || Number.isNaN(c)) {
    saida.textContent = "⚠️ Digite um número válido.";
    return;
  }
  saida.textContent = `${c}°C = ${(c * 9 / 5 + 32).toFixed(1)}°F`;
};

botao.addEventListener("click", converter);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") converter();       // mesma função, dois eventos!
});
```

## 🏋️ Exercícios da aula

Na pasta `aula-11/` (cada exercício é uma mini página):

1. **Contador completo** — Três botões (`+`, `−`, `zerar`) e um número na tela. Bônus: número fica vermelho quando negativo (classe via `classList`);
2. **Saudação validada** — Campo de nome + botão. Vazio → mensagem de erro em vermelho; preenchido → saudação, limpa o campo. Enter também deve funcionar;
3. **Calculadora de média** — Três campos numéricos + botão. Valide os três (não vazios e numéricos), calcule a média e exiba com a classe `aprovado` (verde, ≥ 7) ou `reprovado` (vermelho);
4. **Contador de caracteres** — Um `<textarea>` e um parágrafo `X/140 caracteres` atualizado a cada tecla (evento `input`). Passou de 140, o contador fica vermelho;
5. **Desafio 🌶️ Lista dinâmica** — Campo + botão "Adicionar": cada item digitado vira um `<li>` na lista (validado contra vazio). É o aquecimento direto para o projeto da próxima aula!

## ✅ Entrega

```bash
git add aula-11/
git commit -m "Resolve exercícios da aula 11 (eventos)"
git push
```

---

⬅️ [Aula 10](../aula-10-dom/README.md) | ➡️ [Aula 12 — Projeto: Lista de Tarefas](../aula-12-projeto-lista-tarefas/README.md)
