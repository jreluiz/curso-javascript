---
marp: true
theme: trilha
paginate: true
lang: pt-BR
footer: '🟨 Curso de JavaScript · Aula 06'
---

<!-- _class: capa -->

<div class="emoji">🧱</div>

# Objetos

## Aula 06 · Bloco 2 — Estruturas de Dados

<div class="meta">Representar coisas do mundo real — e a estrutura mais comum que existe</div>

---

## 🎯 Nesta aula

1. O problema que o objeto resolve
2. Propriedades, métodos e **aninhamento**
3. **Array de objetos** — a estrutura mais comum do mundo real
4. **JSON** — objetos viajando como texto
5. **Desestruturação**

---

## O problema

O array guarda uma **lista de valores**. Mas como representar **um aluno**, que tem nome, idade e curso?

Com um **objeto**: uma coleção de pares **chave: valor**.

```javascript
const aluno = {
  nome: "Maria Silva",
  idade: 19,
  curso: "Sistemas de Informação",
  matriculado: true,
};
```

---

## Acessando e modificando

```javascript
console.log(aluno.nome);          // notação de ponto — a usual
console.log(aluno["idade"]);      // notação de colchetes

aluno.idade = 20;                 // modifica
aluno.email = "maria@email.com";  // CRIA uma propriedade nova!
delete aluno.matriculado;         // remove

console.log(aluno.telefone);      // undefined — não dá erro
```

> 💡 Use colchetes quando a **chave está numa variável**: `aluno[campo]`. Fora isso, ponto.

---

## Métodos e aninhamento

```javascript
const aluno = {
  nome: "Maria",
  notas: [8.5, 7.0, 9.5],
  endereco: { cidade: "Campinas", uf: "SP" },
  apresentar() {
    console.log(`Oi, eu sou ${this.nome}!`);   // this = este objeto
  },
};

console.log(aluno.notas[0]);          // 8.5
console.log(aluno.endereco.cidade);   // Campinas
aluno.apresentar();
```

---

<!-- _class: lead -->

## 💡 Ponte com o Java

O objeto literal do JS é primo do objeto criado com classes em Java.

Em **Java**, primeiro a planta (a classe `Aluno`), depois o objeto.

Em **JS**, dá para criar o objeto direto — **sem planta**.

*(Classes existem em JS também. Aula 16.)*

---

<!-- _class: lead -->

## A estrutura mais comum do mundo real

```
const turma = [
  { nome: "Ana",   media: 8.5 },
  { nome: "Bruno", media: 6.2 },
  { nome: "Carla", media: 9.1 },
];
```

**Array de objetos.**

Praticamente todo sistema manipula listas de coisas com atributos.

---

## Percorrendo um array de objetos

```javascript
for (const aluno of turma) {
  const status = aluno.media >= 7 ? "✅" : "❌";
  console.log(`${aluno.nome}: ${aluno.media} ${status}`);
}

turma.push({ nome: "Davi", media: 7.7 });
```

Domine esse padrão: ele volta na **aula 08** (métodos funcionais), no **Bloco 3** (listas na tela) e no **Bloco 4** (respostas de API).

---

## JSON — objetos viajando como texto

Formato de **texto** para representar objetos. É o que as APIs falam.

```javascript
const aluno = { nome: "Maria", idade: 19 };

const texto = JSON.stringify(aluno);   // objeto → texto
console.log(texto);        // {"nome":"Maria","idade":19}
console.log(typeof texto); // string

const recebido = '{"nome":"João","idade":21}';
const obj = JSON.parse(recebido);      // texto → objeto
console.log(obj.nome);     // João
```

---

<!-- _class: lead -->

## ⚠️ JSON não é objeto JS

Parece igual, mas as regras são **mais rígidas**:

chaves **e** strings sempre entre **aspas duplas**.

```
{ nome: "Maria" }       ← objeto JS ✅
{"nome": "Maria"}       ← JSON ✅
```

Na **aula 14** os dados de API chegam exatamente assim.

---

## Desestruturação

```javascript
const aluno = { nome: "Maria", idade: 19, curso: "SI" };

const { nome, idade } = aluno;        // uma linha, dois valores
console.log(nome, idade);             // Maria 19

const [primeiro, segundo] = [10, 20, 30];   // array: pela POSIÇÃO
console.log(primeiro, segundo);             // 10 20

function apresentar({ nome, curso }) {      // em parâmetro!
  console.log(`${nome} estuda ${curso}`);
}
```

---

<!-- _class: checkpoint -->

## 🏋️ Exercícios da aula

Na pasta `aula-06/`:

1. **`ex01.js`** — um objeto que representa **você**, com array e objeto aninhado;
2. **`ex02.js`** — acrescente o método `resumo()` usando `this`;
3. **`ex03.js`** — array `produtos` + valor total do estoque;
4. **`ex04.js`** — o produto mais caro e quantos estão zerados;
5. **`ex05.js`** — `JSON.stringify(produtos, null, 2)`: o que os argumentos extras fazem?
6. **Desafio 🌶️ `ex06.js`** — `buscarPorNome(lista, nome)` com desestruturação.

---

<!-- _class: lead -->

## ➡️ Próxima aula

**Aula 07 — Funções Avançadas**

Arrow functions, funções que recebem funções —
e por que isso muda tudo.
