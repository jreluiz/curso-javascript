# Aula 07 — Funções Avançadas

> 🎯 Objetivos: entender que funções são valores, dominar arrow functions e callbacks — a chave para o resto do curso.

## 1. A grande ideia: funções são valores

Em JavaScript, uma função é um valor como qualquer outro: pode ser guardada em variável, colocada em array, e — o mais importante — **passada como argumento para outra função**.

```javascript
// Function expression: guardando uma função numa variável
const dobrar = function (n) {
  return n * 2;
};

console.log(dobrar(5));       // 10
console.log(typeof dobrar);   // "function"

const operacoes = [dobrar, function (n) { return n + 1; }];
console.log(operacoes[0](10));   // 20 — chamando a função que está no array!
```

## 2. Arrow functions — a sintaxe moderna

A mesma função, em três "tamanhos":

```javascript
// 1. function tradicional
const dobrar1 = function (n) {
  return n * 2;
};

// 2. arrow function
const dobrar2 = (n) => {
  return n * 2;
};

// 3. arrow "enxuta": corpo de UMA expressão dispensa {} e return
const dobrar3 = (n) => n * 2;

console.log(dobrar1(5), dobrar2(5), dobrar3(5));   // 10 10 10
```

Regras da forma enxuta:

```javascript
const semParametro = () => "olá";           // sem parâmetro: () obrigatório
const umParametro = n => n * 2;             // um parâmetro: parênteses opcionais
const doisParametros = (a, b) => a + b;     // dois ou mais: () obrigatório
const corpoGrande = (a, b) => {             // mais de uma linha: { } e return
  const soma = a + b;
  return soma / 2;
};
```

> 📏 **Na disciplina:** usaremos arrow functions como padrão para funções guardadas em variáveis e callbacks. `function` declarada continua ótima para funções "principais" com nome.

## 3. Callbacks — passando comportamento

Um **callback** é uma função passada como argumento para outra função executar. É o conceito que destrava DOM (aula 11), métodos funcionais (aula 08) e assincronismo (aula 13):

```javascript
function processar(lista, acao) {          // "acao" será uma função!
  for (const item of lista) {
    acao(item);                            // executa o callback para cada item
  }
}

const nomes = ["Ana", "Bruno", "Carla"];

processar(nomes, (nome) => console.log(`Olá, ${nome}!`));
processar(nomes, (nome) => console.log(nome.toUpperCase()));
```

Repare: `processar` define **o esqueleto** (percorrer a lista); quem chama define **o que fazer** com cada item. Essa separação é poderosíssima.

Você já usou callbacks sem saber:

```javascript
nums.sort((a, b) => a - b);        // o critério de ordenação é um callback!
notas.forEach((n) => console.log(n));
```

E o clássico do assincronismo (spoiler da aula 13):

```javascript
console.log("Início");
setTimeout(() => console.log("...3 segundos depois!"), 3000);
console.log("Fim");   // repare na ordem da saída: Início, Fim, e SÓ DEPOIS o timeout
```

## 4. Parâmetros com valor padrão

```javascript
const saudacao = (nome = "visitante") => `Olá, ${nome}!`;

console.log(saudacao("Maria"));   // Olá, Maria!
console.log(saudacao());          // Olá, visitante!
```

## 5. Rest e spread — os três pontinhos `...`

O mesmo símbolo, dois papéis opostos:

```javascript
// REST (na definição): junta vários argumentos num array
const somarTudo = (...numeros) => {
  let total = 0;
  for (const n of numeros) total += n;
  return total;
};
console.log(somarTudo(1, 2, 3, 4, 5));   // 15

// SPREAD (no uso): espalha um array em elementos soltos
const nums = [10, 5, 8];
console.log(Math.max(...nums));           // 10 (Math.max(10, 5, 8))

const a = [1, 2];
const b = [3, 4];
const juntos = [...a, ...b, 5];           // [1, 2, 3, 4, 5]

const original = { nome: "Ana", idade: 20 };
const copia = { ...original, idade: 21 }; // copia o objeto trocando uma propriedade
```

> 💡 O spread para **copiar** arrays/objetos é padrão profissional: `const copia = [...original]` cria uma cópia de verdade, enquanto `const copia = original` só cria um segundo nome para a **mesma** estrutura (mudou numa, mudou na "outra" — teste!).

## 🏋️ Exercícios da aula

Na pasta `aula-07/`:

1. **`ex01.js`** — Reescreva como arrow functions (na forma mais enxuta possível): `quadrado(n)`, `ehMaiorDeIdade(idade)`, `maiorDeDois(a, b)` e `apresentar(nome, curso)` (retorna uma frase);
2. **`ex02.js`** — Escreva `aplicar(lista, fn)` que retorna um **novo array** com `fn` aplicada a cada elemento. Teste com `aplicar([1,2,3], n => n * 10)` → `[10, 20, 30]` e com um callback que transforma nomes em maiúsculas. *(Você acabou de reinventar o `map` da próxima aula!)*;
3. **`ex03.js`** — Escreva `filtrar(lista, teste)` que retorna um novo array só com os elementos em que o callback `teste` retornou `true`. Teste filtrando pares e filtrando nomes com mais de 4 letras. *(Reinventou o `filter`!)*;
4. **`ex04.js`** — Crie `calculadora(a, b, operacao)` em que `operacao` é um callback. Demonstre soma, subtração, multiplicação e divisão passando arrow functions;
5. **`ex05.js`** — Use **rest** para criar `media(...notas)` que aceita qualquer quantidade de notas. Depois use **spread** para chamá-la com um array existente: `media(...minhasNotas)`;
6. **Desafio 🌶️ `ex06.js`** — Prove a diferença entre `const b = a` e `const b = [...a]` para arrays: altere `b` nos dois cenários e mostre com `console.log` o que acontece com `a` em cada caso. Explique num comentário.

## ✅ Entrega

```bash
git add aula-07/
git commit -m "Resolve exercícios da aula 07 (funções avançadas)"
git push
```

---

⬅️ [Aula 06](../aula-06-objetos/README.md) | ➡️ [Aula 08 — Métodos Funcionais](../aula-08-metodos-funcionais/README.md)
