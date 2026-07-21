# Aula 04 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 04 — Laços e Funções](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A04-01

O que este laço imprime?

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- **a)** `0 1 2 3 4`
- **b)** `1 2 3 4 5`
- **c)** `0 1 2 3 4 5`
- **d)** `1 2 3 4`

↩︎ *Aula 04, seção 2 — `for`*

---

### Q-A04-02

O que acontece ao executar este trecho?

```javascript
let contador = 1;

while (contador <= 3) {
  console.log(contador);
}
```

- **a)** Imprime `1`, `2` e `3` e encerra;
- **b)** imprime `1` uma única vez e encerra;
- **c)** falha com `SyntaxError`;
- **d)** entra em laço infinito imprimindo `1`, porque `contador` nunca muda.

↩︎ *Aula 04, seção 1 — `while`*

---

### Q-A04-03

O que este laço imprime?

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- **a)** `1 2`
- **b)** `1 2 3`
- **c)** `1 2 4 5`
- **d)** `1 2 3 4 5`

↩︎ *Aula 04, seção 3 — `break` e `continue`*

---

### Q-A04-04

Qual é a saída deste programa?

```javascript
function dobro(n) {
  console.log(n * 2);
}

const x = dobro(5);
console.log(x);
```

- **a)** `10` e `10`
- **b)** `10` e `undefined`
- **c)** apenas `10`
- **d)** `undefined` e `10`

↩︎ *Aula 04, seção 4 — `return`*

---

### Q-A04-05

O que este programa imprime?

```javascript
function testar() {
  return "primeiro";
  return "segundo";
}

console.log(testar());
```

- **a)** `segundo`
- **b)** `primeiro` e `segundo`, em duas linhas;
- **c)** `undefined`
- **d)** `primeiro`

↩︎ *Aula 04, seção 4 — `return`*

---

### Q-A04-06

O que acontece ao executar este trecho?

```javascript
function teste() {
  const local = "só existo aqui dentro";
}

teste();
console.log(local);
```

- **a)** Falha com `ReferenceError: local is not defined`;
- **b)** imprime `só existo aqui dentro`;
- **c)** imprime `undefined`;
- **d)** falha com `TypeError: local is not a function`.

↩︎ *Aula 04, seção 5 — Escopo*

---

### Q-A04-07

Dada a função abaixo, o que `console.log(somar(10, somar(1, 2)));` imprime?

```javascript
function somar(a, b) {
  return a + b;
}
```

- **a)** `11`
- **b)** `13`
- **c)** `1012`
- **d)** `undefined`

↩︎ *Aula 04, seção 4 — `return`*

---

### Q-A04-08

Considere a função `function saudacao(nome) { ... }` sendo chamada com `saudacao("Maria")`. É correto afirmar que:

- **a)** `nome` é o argumento e `"Maria"` é o parâmetro;
- **b)** `nome` e `"Maria"` são ambos parâmetros;
- **c)** `nome` é o parâmetro e `"Maria"` é o argumento;
- **d)** `nome` e `"Maria"` são ambos argumentos.

↩︎ *Aula 04, seção 4 — Parâmetros*

---

⬅️ [Voltar à Aula 04](../README.md) | 🏠 [Plano de aulas](../../../README.md)
