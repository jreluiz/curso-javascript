# Aula 05 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 05 — Arrays](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A05-01

O que este trecho imprime?

```javascript
const frutas = ["maçã", "banana", "uva", "manga"];
console.log(frutas[10]);
```

- **a)** `manga`
- **b)** `null`
- **c)** `undefined`
- **d)** Nada: falha com erro de índice fora do array.

↩︎ *Aula 05, seção 2 — Acessando elementos: o índice*

---

### Q-A05-02

Como imprimir o **último** elemento de um array `itens` de tamanho desconhecido?

- **a)** `console.log(itens[itens.length]);`
- **b)** `console.log(itens[itens.length - 1]);`
- **c)** `console.log(itens[-1]);`
- **d)** `console.log(itens.last());`

↩︎ *Aula 05, seção 2 — Acessando elementos: o índice*

---

### Q-A05-03

O que este trecho imprime?

```javascript
const frutas = ["maçã", "banana"];
frutas[0] = "morango";
frutas.push("uva");
console.log(frutas);
```

- **a)** `["maçã", "banana"]`
- **b)** `["maçã", "banana", "uva"]`
- **c)** Nada: falha com `TypeError: Assignment to constant variable`;
- **d)** `["morango", "banana", "uva"]`

↩︎ *Aula 05, seção 2 — Acessando elementos: o índice*

---

### Q-A05-04

O que este trecho imprime?

```javascript
const fila = ["Ana", "Bruno"];
fila.push("Carla");
fila.shift();
console.log(fila);
```

- **a)** `["Bruno", "Carla"]`
- **b)** `["Ana", "Bruno"]`
- **c)** `["Ana", "Bruno", "Carla"]`
- **d)** `["Carla", "Ana"]`

↩︎ *Aula 05, seção 3 — Adicionar e remover*

---

### Q-A05-05

O que este trecho imprime?

```javascript
const letras = ["a", "b", "c", "d", "e"];
const parte = letras.slice(1, 3);
console.log(parte, letras.length);
```

- **a)** `["b", "c", "d"]` e `5`
- **b)** `["b", "c"]` e `3`
- **c)** `["b", "c"]` e `5`
- **d)** `["a", "b", "c"]` e `5`

↩︎ *Aula 05, seção 3 — Fatiar e juntar*

---

### Q-A05-06

O que `console.log([10, 20, 30].indexOf(99));` imprime?

- **a)** `0`
- **b)** `undefined`
- **c)** `false`
- **d)** `-1`

↩︎ *Aula 05, seção 3 — Procurar*

---

### Q-A05-07

O que este trecho imprime?

```javascript
const nums = [10, 9, 100, 2];
nums.sort();
console.log(nums);
```

- **a)** `[10, 100, 2, 9]`
- **b)** `[2, 9, 10, 100]`
- **c)** `[100, 10, 9, 2]`
- **d)** `[10, 9, 100, 2]`

↩︎ *Aula 05, seção 3 — Ordenar (com pegadinha!)*

---

### Q-A05-08

Você precisa percorrer um array de notas imprimindo `Aluno 1: nota 8.5`, `Aluno 2: nota 7.0`... ou seja, precisa da **posição** de cada nota. A forma mais adequada é:

- **a)** `for...of`, porque a variável do laço recebe o índice de cada elemento;
- **b)** `for` clássico com a variável `i`, porque só ele dá acesso direto ao índice entre as três formas vistas na aula;
- **c)** `while` sem contador, porque percorre o array até o fim automaticamente;
- **d)** qualquer uma das três: todas expõem o índice do mesmo jeito.

↩︎ *Aula 05, seção 4 — Percorrendo arrays*

---

⬅️ [Voltar à Aula 05](../README.md) | ➡️ [Revisão da Aula 06](../../aula-06-objetos/revisao/README.md)
