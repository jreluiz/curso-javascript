# Aula 05 — Arrays

> 🎯 Objetivos: guardar coleções de valores, acessar e modificar elementos, e percorrer arrays de três formas.

## 1. O problema que o array resolve

Como guardar as notas de 40 alunos? Com `const nota1`, `nota2`... `nota40`? Não. Para coleções, usamos **arrays** — listas ordenadas de valores:

```javascript
const notas = [8.5, 7.0, 9.2, 6.8, 10.0];
const nomes = ["Ana", "Bruno", "Carla"];
const mistura = [42, "texto", true];        // pode misturar tipos (≠ Java!)
const vazio = [];
```

## 2. Acessando elementos: o índice

Os elementos são numerados **a partir do 0**:

```javascript
const frutas = ["maçã", "banana", "uva", "manga"];
//   índices:      0         1       2       3

console.log(frutas[0]);              // maçã
console.log(frutas[3]);              // manga
console.log(frutas[10]);             // undefined (não explode, cuidado!)
console.log(frutas.length);          // 4
console.log(frutas[frutas.length - 1]);  // manga (último elemento — decore este padrão)
```

Modificando:

```javascript
frutas[1] = "morango";
console.log(frutas);   // ["maçã", "morango", "uva", "manga"]
```

> 🤔 **Espera, `frutas` não é `const`?** Sim — e mesmo assim dá para alterar o **conteúdo**. O `const` impede trocar a caixa (`frutas = outroArray` ❌), mas não mexer dentro dela. Guarde essa distinção.

## 3. Métodos essenciais

### Adicionar e remover

```javascript
const fila = ["Ana", "Bruno"];

fila.push("Carla");        // adiciona no FIM        → ["Ana","Bruno","Carla"]
fila.pop();                // remove do FIM          → ["Ana","Bruno"]
fila.unshift("Zeca");      // adiciona no INÍCIO     → ["Zeca","Ana","Bruno"]
fila.shift();              // remove do INÍCIO       → ["Ana","Bruno"]
```

### Procurar

```javascript
const nums = [10, 20, 30, 20];

console.log(nums.includes(30));   // true  (existe?)
console.log(nums.indexOf(20));    // 1     (posição da 1ª ocorrência)
console.log(nums.indexOf(99));    // -1    (não existe)
```

### Fatiar e juntar

```javascript
const letras = ["a", "b", "c", "d", "e"];

console.log(letras.slice(1, 3));   // ["b","c"] — do índice 1 ATÉ o 3 (exclusivo); não altera o original
console.log(letras.join(" - "));   // "a - b - c - d - e" — vira string
console.log("1,2,3".split(","));   // ["1","2","3"] — o caminho inverso
```

### Ordenar (com pegadinha!)

```javascript
const nomes = ["Carla", "Ana", "Bruno"];
nomes.sort();
console.log(nomes);                // ["Ana","Bruno","Carla"] ✅

const nums = [10, 9, 100, 2];
nums.sort();
console.log(nums);                 // [10, 100, 2, 9] 😱 ordenou como TEXTO!

nums.sort((a, b) => a - b);        // ✅ ordem numérica crescente
console.log(nums);                 // [2, 9, 10, 100]
```

(Essa sintaxe `(a, b) => ...` é uma *arrow function* — tema da aula 07. Por ora, use a receita.)

## 4. Percorrendo arrays

```javascript
const notas = [8.5, 7.0, 9.2, 6.8];

// Forma 1: for clássico (quando você PRECISA do índice)
for (let i = 0; i < notas.length; i++) {
  console.log(`Aluno ${i + 1}: nota ${notas[i]}`);
}

// Forma 2: for...of (quando só importa o VALOR — mais limpo)
for (const nota of notas) {
  console.log(nota);
}

// Forma 3: forEach (estilo funcional — aprofundamos na aula 08)
notas.forEach((nota) => console.log(nota));
```

## 5. Padrões clássicos com arrays

Decore estes três esqueletos — eles resolvem metade dos problemas com listas:

```javascript
const notas = [8.5, 7.0, 9.2, 6.8, 10.0];

// SOMAR / MÉDIA
let soma = 0;
for (const n of notas) soma += n;
console.log(`Média: ${(soma / notas.length).toFixed(2)}`);

// MAIOR VALOR
let maior = notas[0];
for (const n of notas) {
  if (n > maior) maior = n;
}
console.log(`Maior nota: ${maior}`);

// CONTAR COM CONDIÇÃO
let aprovados = 0;
for (const n of notas) {
  if (n >= 7) aprovados++;
}
console.log(`Aprovados: ${aprovados}`);
```

## 🏋️ Exercícios da aula

Na pasta `aula-05/`:

1. **`ex01.js`** — Crie um array com 5 filmes/jogos favoritos. Imprima: o primeiro, o último (usando `length`), o total de itens e a lista completa numerada (`1. Nome...`);
2. **`ex02.js`** — Dado `const temperaturas = [22, 25, 19, 30, 28, 21, 24];` (uma semana), calcule e imprima: a média, a maior, a menor e quantos dias ficaram acima da média;
3. **`ex03.js`** — Simule uma fila de atendimento: comece com 3 nomes, chegue 2 clientes (`push`), atenda 2 (`shift` — imprima "Atendendo: fulano") e mostre a fila restante;
4. **`ex04.js`** — Escreva a função `inverter(array)` que retorna um **novo** array na ordem inversa **sem usar** `.reverse()` (use um `for` de trás para frente). Prove que o original não mudou;
5. **`ex05.js`** — Dado um array de nomes com repetições, escreva `contarOcorrencias(array, valor)` que retorna quantas vezes `valor` aparece;
6. **Desafio 🌶️ `ex06.js`** — Dado um array de números, retorne um novo array **sem duplicatas**, usando apenas `for`, `if` e `includes`/`push`.

## ✅ Entrega

```bash
git add aula-05/
git commit -m "Resolve exercícios da aula 05 (arrays)"
git push
```

---

⬅️ [Aula 04](../../bloco-1-fundamentos/aula-04-lacos-funcoes/README.md) | ➡️ [Aula 06 — Objetos](../aula-06-objetos/README.md)
