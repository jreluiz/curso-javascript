# Aula 08 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 08 — Métodos Funcionais de Arrays](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A08-01

O que este trecho imprime?

```javascript
const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
];

console.log(turma.map((a) => a.nome));
```

- **a)** `[8.5, 6.2]`
- **b)** `["Ana"]`
- **c)** `["Ana", "Bruno"]`
- **d)** `[{ nome: "Ana" }, { nome: "Bruno" }]`

↩︎ *Aula 08, seção 2 — `map`*

---

### Q-A08-02

O que este trecho imprime?

```javascript
const notas = [8.5, 6.2, 9.1, 4.0, 7.7];
console.log(notas.filter((n) => n >= 7));
```

- **a)** `[8.5, 9.1, 7.7]`
- **b)** `[true, false, true, false, true]`
- **c)** `3`
- **d)** `[6.2, 4.0]`

↩︎ *Aula 08, seção 3 — `filter`*

---

### Q-A08-03

O que este trecho imprime?

```javascript
const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
];

console.log(turma.find((a) => a.nome === "Bruno"));
```

- **a)** `true`
- **b)** `[ { nome: "Bruno", media: 6.2 } ]`
- **c)** `1`
- **d)** `{ nome: "Bruno", media: 6.2 }`

↩︎ *Aula 08, seção 4 — `find`, `some`, `every`*

---

### Q-A08-04

Qual é a saída deste trecho?

```javascript
const medias = [8.5, 6.2, 9.1];

console.log(medias.some((m) => m < 7));
console.log(medias.every((m) => m < 7));
```

- **a)** `true` e `true`
- **b)** `true` e `false`
- **c)** `false` e `true`
- **d)** `false` e `false`

↩︎ *Aula 08, seção 4 — `find`, `some`, `every`*

---

### Q-A08-05

O que este trecho imprime?

```javascript
const notas = [8, 6, 9, 7];
const soma = notas.reduce((acc, nota) => acc + nota, 0);
console.log(soma);
```

- **a)** `7.5`
- **b)** `[8, 6, 9, 7]`
- **c)** `30`
- **d)** `0`

↩︎ *Aula 08, seção 5 — `reduce`*

---

### Q-A08-06

O que este trecho imprime?

```javascript
const nums = [1, 2, 3];
const resultado = nums.forEach((n) => n * 2);
console.log(resultado);
```

- **a)** `[2, 4, 6]`
- **b)** `undefined`
- **c)** `6`
- **d)** `[1, 2, 3]`

↩︎ *Aula 08, seção 1 — `forEach`*

---

### Q-A08-07

O que este trecho imprime?

```javascript
const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
  { nome: "Carla", media: 9.1 },
];

const resultado = turma
  .filter((a) => a.media >= 7)
  .map((a) => a.nome.toUpperCase());

console.log(resultado);
```

- **a)** `["ANA", "CARLA"]`
- **b)** `["ANA", "BRUNO", "CARLA"]`
- **c)** `["Ana", "Carla"]`
- **d)** `[8.5, 9.1]`

↩︎ *Aula 08, seção 6 — Encadeamento*

---

### Q-A08-08

Você tem um array de produtos e precisa calcular o **valor total** do estoque, ou seja, transformar a lista inteira em um único número. O método mais adequado é:

- **a)** `map`
- **b)** `filter`
- **c)** `find`
- **d)** `reduce`

↩︎ *Aula 08, seção 5 — `reduce`*

---

⬅️ [Voltar à Aula 08](../README.md) | ➡️ [Revisão da Aula 09](../../../bloco-3-navegador-dom/aula-09-html-css-js/revisao/README.md)
