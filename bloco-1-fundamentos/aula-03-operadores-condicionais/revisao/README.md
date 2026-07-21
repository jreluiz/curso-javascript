# Aula 03 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 03 — Operadores e Condicionais](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A03-01

O que `console.log(10 % 3);` imprime?

- **a)** `3.3333333333333335`
- **b)** `3`
- **c)** `1000`
- **d)** `1`

↩︎ *Aula 03, seção 1 — Operadores aritméticos e de atribuição*

---

### Q-A03-02

Qual expressão verifica corretamente se o número `n` é **par**?

- **a)** `n / 2 === 0`
- **b)** `n % 2 === 1`
- **c)** `n % 2 === 0`
- **d)** `n ** 2 === 0`

↩︎ *Aula 03, seção 1 — Operadores aritméticos e de atribuição*

---

### Q-A03-03

Qual é a saída deste trecho?

```javascript
console.log(0 == false);
console.log(0 === false);
```

- **a)** `true` e `true`
- **b)** `true` e `false`
- **c)** `false` e `false`
- **d)** `false` e `true`

↩︎ *Aula 03, seção 2 — Comparação: a regra do `===`*

---

### Q-A03-04

Qual dos valores abaixo é **truthy**, ou seja, faz o bloco do `if` executar?

- **a)** `"0"`
- **b)** `0`
- **c)** `""`
- **d)** `NaN`

↩︎ *Aula 03, seção 5 — Truthy e falsy*

---

### Q-A03-05

O que este trecho imprime?

```javascript
const media = 4;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 4) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

- **a)** `Aprovado`
- **b)** `Reprovado`
- **c)** `Recuperação`
- **d)** `Recuperação` e `Reprovado`, em duas linhas.

↩︎ *Aula 03, seção 4 — Tomando decisões*

---

### Q-A03-06

Considerando `const idade = 18;`, qual será o valor de `status`?

```javascript
const status = idade >= 18 ? "maior de idade" : "menor de idade";
```

- **a)** `"menor de idade"`
- **b)** `true`
- **c)** `undefined`
- **d)** `"maior de idade"`

↩︎ *Aula 03, seção 6 — Operador ternário*

---

### Q-A03-07

O que este `switch` imprime? (Repare nos `break`.)

```javascript
const dia = 2;

switch (dia) {
  case 1:
    console.log("Domingo");
  case 2:
    console.log("Segunda");
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Dia inválido");
}
```

- **a)** `Segunda` e `Terça`
- **b)** `Segunda`
- **c)** `Domingo`, `Segunda` e `Terça`
- **d)** `Segunda`, `Terça` e `Dia inválido`

↩︎ *Aula 03, seção 7 — `switch`*

---

### Q-A03-08

Qual é a saída deste trecho?

```javascript
const idade = 20;
const temIngresso = false;

console.log(idade >= 18 && temIngresso);
console.log(idade >= 18 || temIngresso);
```

- **a)** `true` e `true`
- **b)** `false` e `true`
- **c)** `false` e `false`
- **d)** `true` e `false`

↩︎ *Aula 03, seção 3 — Operadores lógicos*

---

⬅️ [Voltar à Aula 03](../README.md) | ➡️ [Revisão da Aula 04](../../aula-04-lacos-funcoes/revisao/README.md)
