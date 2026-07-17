# Aula 04 — Laços e Funções

> 🎯 Objetivos: repetir tarefas com `while` e `for`, e organizar o código em funções reutilizáveis.

## 1. `while` — repita enquanto for verdade

```javascript
let contador = 1;

while (contador <= 5) {
  console.log(`Volta número ${contador}`);
  contador++;          // ⚠️ sem isso: loop infinito! (Ctrl+C para escapar)
}
```

## 2. `for` — o laço com contador embutido

```javascript
//   inicialização; condição; incremento
for (let i = 1; i <= 5; i++) {
  console.log(`Volta número ${i}`);
}
```

Os três "slots" do `for` organizam o que no `while` ficava espalhado. Exemplos clássicos:

```javascript
// Contagem regressiva
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("🚀 Lançar!");

// Somando de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);   // 5050

// Tabuada do 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
```

## 3. `break` e `continue`

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;       // encerra o laço na hora
  console.log(i);           // imprime 1, 2, 3, 4
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;    // pula SÓ esta volta
  console.log(i);           // imprime 1, 2, 4, 5
}
```

## 4. Funções — o conceito mais importante da disciplina

Uma função é um **bloco de código com nome**, que você define uma vez e executa quantas vezes quiser:

```javascript
// Definição
function saudacao() {
  console.log("Olá! Bem-vindo(a).");
}

// Chamada (execução)
saudacao();
saudacao();   // reutilização!
```

### Parâmetros: dando entradas à função

```javascript
function saudacao(nome) {              // nome é um PARÂMETRO
  console.log(`Olá, ${nome}!`);
}

saudacao("Maria");                     // "Maria" é o ARGUMENTO
saudacao("João");
```

### `return`: devolvendo um resultado

```javascript
function somar(a, b) {
  return a + b;          // devolve o resultado para quem chamou
}

const resultado = somar(3, 4);
console.log(resultado);            // 7
console.log(somar(10, somar(1, 2)));  // 13 — funções compõem!
```

Diferença crucial:

- `console.log` **mostra** um valor na tela (efeito para o humano ver);
- `return` **devolve** um valor para o programa usar (dá para guardar em variável, passar para outra função...).

```javascript
function dobro(n) {
  return n * 2;
}

const x = dobro(5);       // x vale 10
console.log(dobro(x));    // 20 — só funciona porque a função RETORNA
```

> ⚠️ O `return` **encerra a função** imediatamente. Código depois dele nunca executa. E uma função sem `return` devolve `undefined`.

### Combinando tudo

```javascript
function ehPar(n) {
  return n % 2 === 0;
}

function classificarMedia(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 4) return "Recuperação";
  return "Reprovado";
}

for (let nota = 0; nota <= 10; nota += 2) {
  console.log(`Nota ${nota} (par? ${ehPar(nota)}): ${classificarMedia(nota)}`);
}
```

## 5. Escopo: onde as variáveis "existem"

```javascript
const global = "existo em todo lugar";

function teste() {
  const local = "só existo dentro da função";
  console.log(global);   // ✅ funciona
  console.log(local);    // ✅ funciona
}

teste();
console.log(local);      // ❌ ReferenceError: local is not defined
```

Variáveis declaradas dentro de uma função (ou de um bloco `{ }`) só existem ali dentro. Isso é bom: evita que pedaços do programa interfiram uns nos outros.

> 💡 **Ponte com o Java:** funções em JS ≈ métodos `static` que vocês verão em Java. `function somar(a, b)` em JS é `static int somar(int a, int b)` em Java — mesma ideia, com tipos explícitos.

## 🏋️ Exercícios da aula

Na pasta `aula-04/`:

1. **`ex01.js`** — Imprima a tabuada completa (do 1 ao 10) de um número guardado em `const n`;
2. **`ex02.js`** — Some todos os números **pares** de 1 a 1000 usando `for` + `if` (ou `%`). Resultado esperado: 250500;
3. **`ex03.js`** — Escreva a função `celsiusParaFahrenheit(c)` que **retorna** a conversão (`F = C * 9/5 + 32`). Use-a num laço para imprimir uma tabela de 0°C a 40°C, de 5 em 5;
4. **`ex04.js`** — Escreva `ehPrimo(n)` que retorna `true`/`false`. Use-a para imprimir todos os primos entre 1 e 50;
5. **`ex05.js`** — Escreva `fatorial(n)` usando um laço (5! = 5×4×3×2×1 = 120). O que acontece com `fatorial(0)`? (Matematicamente, deve dar 1);
6. **Desafio 🌶️ `ex06.js`** — FizzBuzz, o clássico de entrevistas de emprego: para os números de 1 a 100, imprima "Fizz" se divisível por 3, "Buzz" se divisível por 5, "FizzBuzz" se divisível por ambos, e o próprio número caso contrário.

## ✅ Entrega

```bash
git add aula-04/
git commit -m "Resolve exercícios da aula 04 (laços e funções)"
git push
```

🏁 **Fim do Bloco 1!** Você já sabe o essencial de lógica em JavaScript.

---

⬅️ [Aula 03](../aula-03-operadores-condicionais/README.md) | ➡️ [Aula 05 — Arrays](../../bloco-2-estruturas/aula-05-arrays/README.md)
