# Aula 02 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 02 — Variáveis e Tipos](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A02-01

O que acontece ao executar este trecho?

```javascript
const nome = "Maria";
nome = "João";
console.log(nome);
```

- **a)** Imprime `João`;
- **b)** falha com `TypeError: Assignment to constant variable`;
- **c)** executa sem erro e imprime `Maria`;
- **d)** falha com `ReferenceError: nome is not defined`.

↩︎ *Aula 02, seção 1 — Variáveis: `let` e `const`*

---

### Q-A02-02

Qual é a regra adotada pelo curso para declarar variáveis?

- **a)** Usar `var` por padrão, porque funciona em qualquer navegador;
- **b)** usar `let` por padrão, porque `const` impede alterar o conteúdo de arrays e objetos;
- **c)** usar `const` por padrão e `let` apenas quando o valor precisar mudar, considerando o `var` aposentado;
- **d)** tanto faz: `var`, `let` e `const` seguem exatamente as mesmas regras de escopo.

↩︎ *Aula 02, seção 1 — Variáveis: `let` e `const`*

---

### Q-A02-03

O que este trecho imprime?

```javascript
let resposta;
console.log(typeof resposta);
```

- **a)** `null`
- **b)** `vazio`
- **c)** Nada: falha com erro, porque a variável não tem valor;
- **d)** `undefined`

↩︎ *Aula 02, seção 2 — Tipos primitivos*

---

### Q-A02-04

A diferença entre `null` e `undefined` é que:

- **a)** `null` representa a ausência **intencional** de valor, enquanto `undefined` é o estado de uma variável declarada sem valor atribuído;
- **b)** são sinônimos, apenas escritos de formas diferentes;
- **c)** `null` equivale ao número 0 e `undefined` equivale à string vazia;
- **d)** `undefined` só aparece dentro de funções e `null` só em variáveis globais.

↩︎ *Aula 02, seção 2 — Tipos primitivos*

---

### Q-A02-05

Qual é a saída deste trecho?

```javascript
console.log("5" + 5);
console.log("5" - 5);
```

- **a)** `10` e `0`
- **b)** `NaN` e `NaN`
- **c)** `55` e `0`
- **d)** `55` e `55`

↩︎ *Aula 02, seção 4 — A pegadinha da coerção de tipos*

---

### Q-A02-06

O que `console.log(5 + 5 + "5");` imprime?

- **a)** `555`
- **b)** `105`
- **c)** `15`
- **d)** `NaN`

↩︎ *Aula 02, seção 4 — A pegadinha da coerção de tipos*

---

### Q-A02-07

Dadas as constantes abaixo, qual linha imprime exatamente `Ana tem 19 anos`?

```javascript
const nome = "Ana";
const idade = 19;
```

- **a)** `` console.log(`${nome} tem ${idade} anos`); ``
- **b)** `console.log("${nome} tem ${idade} anos");`
- **c)** `console.log('${nome} tem ${idade} anos');`
- **d)** `` console.log(`nome tem idade anos`); ``

↩︎ *Aula 02, seção 3 — Trabalhando com strings*

---

### Q-A02-08

Qual é a saída deste trecho?

```javascript
console.log(Number("abc"));
console.log(parseInt("42.9"));
```

- **a)** `0` e `42`
- **b)** `NaN` e `42.9`
- **c)** `NaN` e `43`
- **d)** `NaN` e `42`

↩︎ *Aula 02, seção 4 — A pegadinha da coerção de tipos*

---

⬅️ [Voltar à Aula 02](../README.md) | ➡️ [Revisão da Aula 03](../../aula-03-operadores-condicionais/revisao/README.md)
