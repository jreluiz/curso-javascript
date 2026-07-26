---
marp: true
theme: trilha
paginate: true
lang: pt-BR
footer: '🟨 Curso de JavaScript · Aula 11'
---

<!-- _class: capa -->

<div class="emoji">👆</div>

# Eventos

## Aula 11 · Bloco 3 — O Navegador e o DOM

<div class="meta">A página reage ao que a pessoa faz</div>

---

## 🎯 Nesta aula

1. O que é um **evento**
2. `addEventListener` — o padrão
3. Ler o que o usuário **digitou**
4. **Validar** a entrada
5. Outros eventos úteis

---

## O que é um evento

Tudo que acontece na página é um evento: clique, tecla, texto digitado, mouse passando.

O JavaScript **escuta** eventos e reage a eles com — adivinhe — **callbacks**.

> 💡 A aula 07 pagando dividendos. Todo `addEventListener` recebe uma função como argumento. Se aquilo ficou confortável, isto aqui é só uma aplicação.

---

## `addEventListener` — o padrão

```javascript
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
  resultado.textContent = "Você clicou! 🎉";
});
```

**Anatomia:** `elemento.addEventListener("evento", callback)`

O callback roda **toda vez** que o evento acontece naquele elemento.

---

## Um contador para fixar

```javascript
let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;                                    // muda o ESTADO
  resultado.textContent = `Cliques: ${cliques}`; // RENDERIZA
});
```

---

<!-- _class: lead -->

## 🔺 A tríade

**estado** — a variável `cliques`

**evento** — o clique altera o estado

**renderização** — o DOM mostra o estado

Guarde: é a essência de **qualquer** aplicação.
Do contador ao Instagram.

---

## Lendo o que foi digitado

```javascript
const campo = document.querySelector("#campo-nome");

btn.addEventListener("click", () => {
  const nome = campo.value;        // .value = o que está digitado AGORA
  saida.textContent = `Olá, ${nome}!`;
});
```

> ⚠️ **`.value` sempre devolve string.** Campo numérico com 25 digitado → você recebe `"25"`. Converta com `Number()` antes de qualquer conta. A coerção da aula 02 ataca exatamente aqui.

---

## Validando: a *guard clause*

```javascript
btn.addEventListener("click", () => {
  const nome = campo.value.trim();   // .trim() tira espaços das pontas

  if (nome === "") {                 // valida no TOPO
    saida.textContent = "⚠️ Digite um nome!";
    return;                          // e sai
  }

  saida.textContent = `Olá, ${nome}!`;   // caminho feliz, embaixo
  campo.value = "";
});
```

---

## Outros eventos úteis

```javascript
campo.addEventListener("input", () => {        // A CADA tecla
  console.log(`Digitado: ${campo.value}`);     // busca ao vivo, contador
});

campo.addEventListener("keydown", (evento) => { // tecla específica
  if (evento.key === "Enter") {
    console.log("Enter — mesmo efeito do botão");
  }
});
```

Repare no parâmetro **`evento`**: o navegador entrega um objeto cheio de informação — qual tecla, qual elemento, posição do mouse.

---

## Juntando tudo: mini conversor

```javascript
const converter = () => {
  const c = Number(input.value);
  if (input.value.trim() === "" || Number.isNaN(c)) {
    saida.textContent = "⚠️ Digite um número válido.";
    return;
  }
  saida.textContent = `${c}°C = ${(c * 9/5 + 32).toFixed(1)}°F`;
};

botao.addEventListener("click", converter);
input.addEventListener("keydown", (e) => e.key === "Enter" && converter());
```

---

<!-- _class: checkpoint -->

## 🏋️ Exercícios da aula

Na pasta `aula-11/`, cada um é uma mini página:

1. **Contador completo** — `+`, `−`, `zerar`, vermelho quando negativo;
2. **Saudação validada** — erro se vazio; Enter também funciona;
3. **Calculadora de média** — três campos validados, classe por situação;
4. **Contador de caracteres** — `<textarea>` e `X/140` a cada tecla;
5. **Desafio 🌶️ Lista dinâmica** — cada item digitado vira um `<li>`.

> 💡 O desafio 5 é o aquecimento direto do projeto da próxima aula.

---

<!-- _class: lead -->

## ➡️ Próxima aula

**Aula 12 — Projeto: Lista de Tarefas**

Sem conteúdo novo. Só **integração** —
e o projeto vai para o ar, na internet.
