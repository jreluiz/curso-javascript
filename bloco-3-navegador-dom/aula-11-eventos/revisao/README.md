# Aula 11 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 11 — Eventos](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A11-01

A forma correta de registrar um listener de clique é:

- **a)** `elemento.addEventListener("click", callback);`
- **b)** `elemento.addEventListener(callback, "click");`
- **c)** `addEventListener(elemento, "onclick");`
- **d)** `elemento.onEvent("click", callback);`

↩︎ *Aula 11, seção 2 — `addEventListener`*

---

### Q-A11-02

O usuário digitou `25` no campo abaixo. O que o `console.log` imprime?

```html
<input type="number" id="campo" />
```

```javascript
const campo = document.querySelector("#campo");
console.log(campo.value + 5);
```

- **a)** `30`
- **b)** `25`
- **c)** `255`
- **d)** `NaN`

↩︎ *Aula 11, seção 3 — Lendo o que o usuário digitou*

---

### Q-A11-03

O campo contém **apenas espaços em branco** e o usuário clica no botão. O que aparece em `saida`?

```javascript
btn.addEventListener("click", () => {
  const nome = campo.value.trim();

  if (nome === "") {
    saida.textContent = "⚠️ Digite um nome!";
    return;
  }

  saida.textContent = `Olá, ${nome}!`;
});
```

- **a)** `Olá, !`
- **b)** `Olá, undefined!`
- **c)** As duas mensagens, uma após a outra;
- **d)** `⚠️ Digite um nome!`

↩︎ *Aula 11, seção 4 — Validando a entrada*

---

### Q-A11-04

O evento que dispara **a cada tecla digitada** em um campo de texto é:

- **a)** `click`
- **b)** `input`
- **c)** `change`
- **d)** `submit`

↩︎ *Aula 11, seção 5 — Outros eventos úteis*

---

### Q-A11-05

No trecho abaixo, o parâmetro `evento` recebido pelo callback é:

```javascript
campo.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    console.log("confirmou");
  }
});
```

- **a)** Um objeto com informações sobre o que aconteceu, como qual tecla foi pressionada;
- **b)** o texto digitado no campo, como string;
- **c)** o próprio elemento `campo`;
- **d)** o nome do evento (`"keydown"`), como string.

↩︎ *Aula 11, seção 5 — Outros eventos úteis*

---

### Q-A11-06

Segundo a tríade apresentada na aula, um app se organiza como:

- **a)** evento → CSS → HTML;
- **b)** renderização → estado → evento;
- **c)** o evento altera o HTML diretamente, sem estado intermediário;
- **d)** estado (as variáveis) → o evento altera o estado → a renderização mostra o estado na tela.

↩︎ *Aula 11, seção 2 — `addEventListener`*

---

### Q-A11-07

`campo.value.trim()` serve para:

- **a)** converter o valor digitado em número;
- **b)** remover os espaços em branco do início e do fim do que foi digitado;
- **c)** limpar o campo depois de usar o valor;
- **d)** limitar o campo a um número máximo de caracteres.

↩︎ *Aula 11, seção 4 — Validando a entrada*

---

### Q-A11-08

Depois de o usuário clicar **três vezes** no botão, o que `resultado` mostra?

```javascript
let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;
  resultado.textContent = `Cliques: ${cliques}`;
});
```

- **a)** `Cliques: 1`
- **b)** `Cliques: 0`
- **c)** `Cliques: 3`
- **d)** `Cliques: 1`, `Cliques: 2` e `Cliques: 3`, um abaixo do outro.

↩︎ *Aula 11, seção 2 — `addEventListener`*

---

⬅️ [Voltar à Aula 11](../README.md) | ➡️ [Revisão da Aula 12](../../aula-12-projeto-lista-tarefas/revisao/README.md)
