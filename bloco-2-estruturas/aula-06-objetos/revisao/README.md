# Aula 06 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 06 — Objetos](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A06-01

O que este trecho imprime?

```javascript
const aluno = { nome: "Maria", idade: 19 };
console.log(aluno.telefone);
```

- **a)** `null`
- **b)** Uma string vazia;
- **c)** Nada: falha com `TypeError`, porque a propriedade não existe;
- **d)** `undefined`

↩︎ *Aula 06, seção 2 — Acessando e modificando propriedades*

---

### Q-A06-02

O que este trecho imprime?

```javascript
const aluno = { nome: "Maria", curso: "SI" };
const campo = "curso";

console.log(aluno[campo]);
console.log(aluno.campo);
```

- **a)** `SI` e `undefined`
- **b)** `SI` e `SI`
- **c)** `curso` e `SI`
- **d)** `undefined` e `SI`

↩︎ *Aula 06, seção 2 — Acessando e modificando propriedades*

---

### Q-A06-03

O que este trecho imprime?

```javascript
const aluno = {
  nome: "Maria",
  apresentar() {
    console.log(`Oi, eu sou ${this.nome}!`);
  },
};

aluno.apresentar();
```

- **a)** `Oi, eu sou undefined!`
- **b)** `Oi, eu sou Maria!`
- **c)** `Oi, eu sou this.nome!`
- **d)** Nada: falha, porque `this` não foi declarado.

↩︎ *Aula 06, seção 3 — Métodos e aninhamento*

---

### Q-A06-04

O que este trecho imprime?

```javascript
const aluno = {
  nome: "Maria",
  notas: [8.5, 7.0, 9.5],
  endereco: { cidade: "Campinas", uf: "SP" },
};

console.log(aluno.notas[1], aluno.endereco.cidade);
```

- **a)** `8.5` e `SP`
- **b)** `8.5` e `Campinas`
- **c)** `7` e `Campinas`
- **d)** `7` e `SP`

↩︎ *Aula 06, seção 3 — Métodos e aninhamento*

---

### Q-A06-05

O que este trecho imprime?

```javascript
const aluno = { nome: "Maria", idade: 19 };
const texto = JSON.stringify(aluno);
console.log(typeof texto);
```

- **a)** `object`
- **b)** `json`
- **c)** `undefined`
- **d)** `string`

↩︎ *Aula 06, seção 5 — JSON*

---

### Q-A06-06

Sobre o formato JSON, é correto afirmar que:

- **a)** é o objeto JavaScript em memória, idêntico em tudo ao objeto literal;
- **b)** é um formato de **texto** para representar dados, no qual chaves e strings usam sempre aspas duplas;
- **c)** aceita apenas números e booleanos, nunca texto;
- **d)** só existe no navegador; no Node é preciso usar outro formato.

↩︎ *Aula 06, seção 5 — JSON*

---

### Q-A06-07

O que este trecho imprime?

```javascript
const aluno = { nome: "Maria", idade: 19, curso: "SI" };
const { nome, curso } = aluno;
console.log(nome, curso);
```

- **a)** `Maria 19`
- **b)** `nome curso`
- **c)** `Maria SI`
- **d)** `undefined undefined`

↩︎ *Aula 06, seção 6 — Desestruturação*

---

### Q-A06-08

O que este trecho imprime?

```javascript
const [primeiro, segundo] = [10, 20, 30];
console.log(primeiro, segundo);
```

- **a)** `10 20`
- **b)** `20 30`
- **c)** `10 30`
- **d)** `[10, 20] 30`

↩︎ *Aula 06, seção 6 — Desestruturação*

---

⬅️ [Voltar à Aula 06](../README.md) | ➡️ [Revisão da Aula 07](../../aula-07-funcoes-avancadas/revisao/README.md)
