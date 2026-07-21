# Aula 13 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 13 — Promises e async/await](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A13-01

Em que ordem as mensagens aparecem?

```javascript
console.log("1 — Pedido feito");

setTimeout(() => {
  console.log("3 — Pizza chegou!");
}, 2000);

console.log("2 — Vou assistindo TV");
```

- **a)** `1 — Pedido feito`, `3 — Pizza chegou!`, `2 — Vou assistindo TV`
- **b)** `1 — Pedido feito`, `2 — Vou assistindo TV`, `3 — Pizza chegou!`
- **c)** `3 — Pizza chegou!`, `1 — Pedido feito`, `2 — Vou assistindo TV`
- **d)** Apenas `1 — Pedido feito` e `2 — Vou assistindo TV`.

↩︎ *Aula 13, seção 1 — O problema: coisas que demoram*

---

### Q-A13-02

O JavaScript trata operações demoradas de forma assíncrona porque:

- **a)** se ele parasse para esperar, a página inteira congelaria e nenhum clique funcionaria;
- **b)** o JavaScript não é capaz de executar operações demoradas;
- **c)** é uma exigência do protocolo HTTP;
- **d)** assim o código executa mais rápido no processador.

↩︎ *Aula 13, seção 1 — O problema: coisas que demoram*

---

### Q-A13-03

Os três estados possíveis de uma Promise são:

- **a)** `started`, `running` e `finished`
- **b)** `open`, `closed` e `error`
- **c)** `pending`, `fulfilled` e `rejected`
- **d)** `async`, `await` e `catch`

↩︎ *Aula 13, seção 2 — Promises*

---

### Q-A13-04

Qual mensagem é impressa **primeiro**?

```javascript
buscarUsuario(1)
  .then((usuario) => console.log(`Chegou: ${usuario.nome}`))
  .catch((erro) => console.log(`Falhou: ${erro.message}`));

console.log("Última linha");
```

- **a)** `Chegou: Maria`
- **b)** `Falhou: ...`
- **c)** Depende da velocidade do computador;
- **d)** `Última linha`

↩︎ *Aula 13, seção 2 — Promises*

---

### Q-A13-05

Escrito assim, **fora de qualquer função**, o código abaixo:

```javascript
const usuario = await buscarUsuario(1);
console.log(usuario.nome);
```

- **a)** funciona normalmente;
- **b)** falha, porque `await` só funciona dentro de uma função `async`;
- **c)** funciona, mas `usuario` recebe a Promise em vez do valor;
- **d)** falha, porque `buscarUsuario` exige `.then()`.

↩︎ *Aula 13, seção 3 — `async/await`*

---

### Q-A13-06

Dentro de uma função `async`, a linha `const dados = await minhaPromise;` faz `dados` receber:

- **a)** a própria Promise, ainda pendente;
- **b)** `true` ou `false`, indicando se deu certo;
- **c)** o valor com que a Promise foi resolvida;
- **d)** `undefined`, até que a Promise termine.

↩︎ *Aula 13, seção 3 — `async/await`*

---

### Q-A13-07

No bloco `try/catch/finally`, o `finally`:

- **a)** executa sempre, com ou sem erro — útil, por exemplo, para esconder um "carregando...";
- **b)** executa somente quando ocorre um erro;
- **c)** executa somente quando **não** ocorre erro;
- **d)** é obrigatório sempre que se usa `try`.

↩︎ *Aula 13, seção 4 — `try/catch`*

---

### Q-A13-08

No padrão adotado pelo curso, erros de uma Promise rejeitada são tratados com:

- **a)** um `if (erro)` logo após o `await`;
- **b)** um `console.log` do erro, que já interrompe a função;
- **c)** nada: não é possível tratar erros com `async/await`;
- **d)** `try/catch` em volta do `await`.

↩︎ *Aula 13, seção 3 — `async/await`*

---

⬅️ [Voltar à Aula 13](../README.md) | ➡️ [Revisão da Aula 14](../../aula-14-fetch-apis/revisao/README.md)
