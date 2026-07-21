# Aula 07 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 07 — Funções Avançadas](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A07-01

O que este trecho imprime?

```javascript
const dobrar = function (n) {
  return n * 2;
};

console.log(typeof dobrar);
```

- **a)** `object`
- **b)** `function`
- **c)** `number`
- **d)** `undefined`

↩︎ *Aula 07, seção 1 — A grande ideia: funções são valores*

---

### Q-A07-02

Qual arrow function é equivalente a `function dobrar(n) { return n * 2; }`?

- **a)** `const dobrar = (n) => { n * 2 };`
- **b)** `const dobrar = (n) => return n * 2;`
- **c)** `const dobrar => (n) { return n * 2; };`
- **d)** `const dobrar = (n) => n * 2;`

↩︎ *Aula 07, seção 2 — Arrow functions*

---

### Q-A07-03

O que este trecho imprime?

```javascript
const media = (a, b) => {
  const soma = a + b;
  soma / 2;
};

console.log(media(6, 10));
```

- **a)** `undefined`
- **b)** `8`
- **c)** `16`
- **d)** Nada: falha com erro de sintaxe.

↩︎ *Aula 07, seção 2 — Arrow functions*

---

### Q-A07-04

Um **callback** é:

- **a)** uma função que chama a si mesma até uma condição de parada;
- **b)** o valor devolvido por uma arrow function de corpo enxuto;
- **c)** uma função passada como argumento para que outra função a execute;
- **d)** um comando que interrompe a execução de um laço.

↩︎ *Aula 07, seção 3 — Callbacks*

---

### Q-A07-05

Em que ordem as mensagens aparecem no terminal?

```javascript
console.log("Início");
setTimeout(() => console.log("Depois"), 3000);
console.log("Fim");
```

- **a)** `Início`, `Depois`, `Fim`
- **b)** `Início`, `Fim`, `Depois`
- **c)** `Depois`, `Início`, `Fim`
- **d)** `Início` e `Fim` apenas: `Depois` nunca é impresso.

↩︎ *Aula 07, seção 3 — Callbacks*

---

### Q-A07-06

O que este trecho imprime?

```javascript
const saudacao = (nome = "visitante") => `Olá, ${nome}!`;
console.log(saudacao());
```

- **a)** `Olá, visitante!`
- **b)** `Olá, !`
- **c)** `Olá, undefined!`
- **d)** Nada: falha, porque o argumento não foi informado.

↩︎ *Aula 07, seção 4 — Parâmetros com valor padrão*

---

### Q-A07-07

O que este trecho imprime?

```javascript
const somarTudo = (...numeros) => {
  let total = 0;
  for (const n of numeros) total += n;
  return total;
};

console.log(somarTudo(1, 2, 3, 4));
```

- **a)** `1`
- **b)** `[1, 2, 3, 4]`
- **c)** Nada: falha, porque a função só aceita um argumento;
- **d)** `10`

↩︎ *Aula 07, seção 5 — Rest e spread*

---

### Q-A07-08

O que este trecho imprime?

```javascript
const a = [1, 2, 3];
const b = a;
const c = [...a];

b.push(4);
c.push(5);

console.log(a);
```

- **a)** `[1, 2, 3]`
- **b)** `[1, 2, 3, 5]`
- **c)** `[1, 2, 3, 4]`
- **d)** `[1, 2, 3, 4, 5]`

↩︎ *Aula 07, seção 5 — Rest e spread*

---

⬅️ [Voltar à Aula 07](../README.md) | ➡️ [Revisão da Aula 08](../../aula-08-metodos-funcionais/revisao/README.md)
