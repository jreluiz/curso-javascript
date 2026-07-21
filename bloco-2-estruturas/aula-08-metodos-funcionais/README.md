# Aula 08 — Métodos Funcionais de Arrays

> 🎯 Objetivos: dominar `map`, `filter`, `reduce` e companhia — o jeito profissional de trabalhar com listas.

Na aula passada você **reinventou** `map` e `filter` nos exercícios. Agora vamos usar os oficiais: métodos que todo array já tem e que recebem **callbacks**.

## 1. `forEach` — percorrer

```javascript
const nomes = ["Ana", "Bruno", "Carla"];
nomes.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`));
```

Como o `for...of`, mas em estilo funcional. Não retorna nada — é só para "fazer algo com cada item".

## 2. `map` — transformar

Retorna um **novo array** com o resultado do callback para cada elemento (mesmo tamanho do original):

```javascript
const precos = [100, 250, 80];

const comDesconto = precos.map((p) => p * 0.9);
console.log(comDesconto);              // [90, 225, 72]

const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
];
const soNomes = turma.map((aluno) => aluno.nome);
console.log(soNomes);                  // ["Ana", "Bruno"]
```

## 3. `filter` — selecionar

Retorna um novo array só com os elementos em que o callback deu `true`:

```javascript
const notas = [8.5, 6.2, 9.1, 4.0, 7.7];

const aprovadas = notas.filter((n) => n >= 7);
console.log(aprovadas);                // [8.5, 9.1, 7.7]

const alunosAprovados = turma.filter((a) => a.media >= 7);
```

## 4. `find`, `some`, `every` — perguntar

```javascript
const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
  { nome: "Carla", media: 9.1 },
];

turma.find((a) => a.nome === "Bruno");   // o OBJETO do Bruno (1º que satisfaz) ou undefined
turma.some((a) => a.media < 7);          // true  — EXISTE alguém abaixo de 7?
turma.every((a) => a.media >= 4);        // true  — TODOS acima de 4?
```

## 5. `reduce` — resumir tudo em um valor

O mais poderoso (e o que exige mais prática). Ele "acumula" a lista em um único resultado:

```javascript
const notas = [8, 6, 9, 7];

//                     acumulador ↓   ↓ item atual        ↓ valor inicial do acumulador
const soma = notas.reduce((acc, nota) => acc + nota, 0);
console.log(soma);                       // 30
console.log(soma / notas.length);        // 7.5 — média!

// Passo a passo: acc=0,nota=8 → 8 | acc=8,nota=6 → 14 | acc=14,nota=9 → 23 | acc=23,nota=7 → 30
```

Somando propriedades de objetos:

```javascript
const carrinho = [
  { produto: "Mouse", preco: 80, qtd: 2 },
  { produto: "Teclado", preco: 150, qtd: 1 },
];
const total = carrinho.reduce((acc, item) => acc + item.preco * item.qtd, 0);
console.log(total);                      // 310
```

## 6. Encadeamento — o superpoder

Como `map` e `filter` retornam arrays, dá para **emendar** operações e ler o código como uma frase:

```javascript
const turma = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6.2 },
  { nome: "Carla", media: 9.1 },
  { nome: "Davi", media: 5.0 },
];

// "Dos aprovados, pegue os nomes em maiúsculas"
const resultado = turma
  .filter((a) => a.media >= 7)
  .map((a) => a.nome.toUpperCase());

console.log(resultado);   // ["ANA", "CARLA"]

// "Média geral da turma"
const mediaGeral = turma.reduce((acc, a) => acc + a.media, 0) / turma.length;
```

> 💡 **Quando usar `for` e quando usar métodos funcionais?** Os dois funcionam. Os métodos funcionais dizem **o quê** você quer (filtrar, transformar) em vez de **como** (índices, contadores) — em geral ficam mais legíveis e são o padrão do mercado. Mas se a lógica ficar confusa num `reduce`, um `for` honesto é melhor que um funcional ilegível.

## 🏋️ Exercícios da aula

Na pasta `aula-08/`, usando este dataset em todos:

```javascript
const alunos = [
  { nome: "Ana",   curso: "SI",  media: 8.5, faltas: 2 },
  { nome: "Bruno", curso: "ADS", media: 6.2, faltas: 10 },
  { nome: "Carla", curso: "SI",  media: 9.1, faltas: 0 },
  { nome: "Davi",  curso: "ADS", media: 4.8, faltas: 6 },
  { nome: "Elisa", curso: "SI",  media: 7.3, faltas: 4 },
];
```

1. **`ex01.js`** — Com `map`: um array de strings `"Ana (SI)"`, e um array de objetos `{ nome, situacao }` onde situação é "Aprovado"/"Reprovado" (média ≥ 7);
2. **`ex02.js`** — Com `filter`: alunos de SI; alunos aprovados **e** com menos de 5 faltas; alunos reprovados (para a lista de recuperação);
3. **`ex03.js`** — Com `find`/`some`/`every`: encontre a Carla; verifique se existe alguém com zero faltas; verifique se todos têm média ≥ 4;
4. **`ex04.js`** — Com `reduce`: média geral da turma; total de faltas; e o aluno com a **maior média** (desafio: dá para fazer com reduce comparando `acc` e o atual!);
5. **`ex05.js`** — **Encadeando:** média geral **apenas dos alunos de SI** (filter → reduce); lista dos nomes dos aprovados em ordem alfabética (filter → map → sort);
6. **Desafio 🌶️ `ex06.js`** — Gere um "boletim" em texto: uma única string com uma linha por aluno (`Nome — média X — situação`), construída com map + join. Imprima com um único `console.log`.

## 🧠 Revisão

[8 questões de múltipla escolha](revisao/README.md) para conferir se os conceitos ficaram sólidos. Responda sem consultar a aula — depois volte e corrija.

## ✅ Entrega

```bash
git add aula-08/
git commit -m "Resolve exercícios da aula 08 (métodos funcionais)"
git push
```

🏁 **Fim do Bloco 2!** Na próxima aula, seu código ganha uma tela: vamos para o navegador.

---

⬅️ [Aula 07](../aula-07-funcoes-avancadas/README.md) | ➡️ [Aula 09 — HTML + CSS + JS](../../bloco-3-navegador-dom/aula-09-html-css-js/README.md)
