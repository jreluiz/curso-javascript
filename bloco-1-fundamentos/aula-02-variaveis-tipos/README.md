# Aula 02 — Variáveis e Tipos

> 🎯 Objetivos: declarar variáveis com `let` e `const`, conhecer os tipos primitivos e entender as famosas "pegadinhas" de tipos do JS.

## 1. Variáveis: `let` e `const`

Uma variável é uma "caixa com etiqueta" que guarda um valor:

```javascript
let idade = 19;            // let: valor PODE mudar depois
const nome = "Maria";      // const: valor NÃO pode mudar (constante)

idade = 20;                // ✅ ok
nome = "João";             // ❌ TypeError: Assignment to constant variable
```

**Regra do curso:** use **`const` por padrão**; só use `let` quando o valor realmente precisar mudar. Isso torna o código mais previsível.

> ⚠️ **E o `var`?** Em códigos antigos (e em tutoriais na internet) você verá `var`. Ele funciona, mas tem regras de escopo confusas que causam bugs. Considere o `var` **aposentado**: neste curso, é `let` e `const`.

### Nomes de variáveis

```javascript
const nomeCompleto = "Ana Souza";   // ✅ camelCase: padrão do JS (e do Java!)
const nota_final = 8.5;             // ⚠️ funciona, mas não é o padrão JS
const 2nota = 7;                    // ❌ não pode começar com número
const const = 1;                    // ❌ palavras reservadas não podem ser nomes
```

Use nomes **descritivos**: `mediaDoAluno` conta uma história; `x` não conta nada.

## 2. Tipos primitivos

```javascript
const texto = "qualquer coisa entre aspas";   // string
const numero = 42;                            // number (inteiro)
const preco = 19.90;                          // number (JS não separa int de float!)
const ligado = true;                          // boolean (true ou false)
const nada = null;                            // null: ausência INTENCIONAL de valor
let aindaNaoSei;                              // undefined: declarada, mas sem valor
```

Descubra o tipo de qualquer coisa com `typeof`:

```javascript
console.log(typeof "oi");     // string
console.log(typeof 3.14);     // number
console.log(typeof true);     // boolean
console.log(typeof abc);      // undefined
```

> 💡 **Diferente do Java:** lá você declara `int idade`, `String nome`, `double preco` — o tipo é fixo. Em JS, a variável assume o tipo do valor que recebe, e pode até trocar de tipo (por isso dizemos que JS tem **tipagem dinâmica**). Liberdade que exige responsabilidade.

## 3. Trabalhando com strings

```javascript
const nome = "Maria";
const sobrenome = "Silva";

// Concatenação com + (jeito antigo)
console.log("Olá, " + nome + " " + sobrenome + "!");

// Template literals com crase ` (jeito moderno — USE ESTE)
console.log(`Olá, ${nome} ${sobrenome}!`);
console.log(`Daqui a 5 anos você terá ${19 + 5} anos.`);   // aceita expressões!
```

Propriedades e métodos úteis:

```javascript
const frase = "JavaScript é divertido";
console.log(frase.length);           // 22 (quantidade de caracteres)
console.log(frase.toUpperCase());    // JAVASCRIPT É DIVERTIDO
console.log(frase.includes("Java")); // true
console.log(frase[0]);               // J (primeiro caractere, começa do 0!)
```

## 4. A pegadinha da coerção de tipos

O JS tenta **converter tipos automaticamente** quando você mistura coisas. Às vezes ajuda, às vezes surpreende:

```javascript
console.log(2 + 3);        // 5        (number + number = soma)
console.log("2" + 3);      // "23"     (string + number = GRUDA! 😱)
console.log("2" * 3);      // 6        (com *, converte para número)
console.log("abc" * 3);    // NaN      (Not a Number: conta impossível)
```

Isso importa muito porque **tudo que o usuário digita chega como string**. Para converter de propósito:

```javascript
const digitado = "25";                    // veio como string
const idade = Number(digitado);           // agora é number: 25
console.log(idade + 5);                   // 30 ✅

console.log(Number("abc"));               // NaN
console.log(String(42));                  // "42"
console.log(parseInt("42.9"));            // 42  (só a parte inteira)
console.log(parseFloat("42.9"));          // 42.9
```

## 5. Lendo dados do usuário no Node

Nas primeiras aulas, a abordagem será a mais simples possível: **valores fixos no código**, que você troca para testar diferentes cenários:

```javascript
// Simule a entrada trocando este valor:
const nomeDoUsuario = "Maria";
console.log(`Bem-vinda, ${nomeDoUsuario}!`);
```

> 💡 No Bloco 3, quando formos para o navegador, a entrada do usuário virá de formulários — bem mais interessante.

## 🏋️ Exercícios da aula

Na pasta `aula-02/` do seu repositório:

1. **`ex01.js`** — Crie constantes com seu nome, idade e curso, e imprima uma apresentação usando **template literals** (uma única frase com as três informações);
2. **`ex02.js`** — Dado `const anoNascimento = 2007;` (troque pelo seu), calcule e imprima sua idade em 2026 e quantos anos você terá em 2050;
3. **`ex03.js`** — Preveja **num comentário** o resultado de cada linha ANTES de rodar, depois execute e confira:
   ```javascript
   console.log("5" + 5);
   console.log("5" - 5);
   console.log(5 + 5 + "5");
   console.log("5" + 5 + 5);
   console.log(typeof (5 + "5"));
   ```
4. **`ex04.js`** — Dada uma string com seu nome completo, imprima: o total de caracteres, tudo em maiúsculas, e se contém a letra "a" (use `.includes`);
5. **Desafio 🌶️ `ex05.js`** — `const preco = "1250.50"` chegou como string. Converta e imprima o valor com 10% de desconto, formatado: `O preço com desconto é R$ 1125.45` (pesquise o método `.toFixed(2)`).

## 🧠 Revisão

[8 questões de múltipla escolha](revisao/README.md) para conferir se os conceitos ficaram sólidos. Responda sem consultar a aula — depois volte e corrija.

## ✅ Entrega

```bash
git add aula-02/
git commit -m "Resolve exercícios da aula 02 (variáveis e tipos)"
git push
```

---

⬅️ [Aula 01](../aula-01-introducao/README.md) | ➡️ [Aula 03 — Operadores e Condicionais](../aula-03-operadores-condicionais/README.md)
