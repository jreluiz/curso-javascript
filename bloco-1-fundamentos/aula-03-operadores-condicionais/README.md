# Aula 03 — Operadores e Condicionais

> 🎯 Objetivos: comparar valores do jeito certo (`===`), tomar decisões com `if`/`else` e `switch`, e entender truthy/falsy.

## 1. Operadores aritméticos e de atribuição

```javascript
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.3333...
console.log(10 % 3);   // 1  ← RESTO da divisão (muito útil!)
console.log(10 ** 3);  // 1000 (potência)

let pontos = 10;
pontos += 5;    // mesmo que: pontos = pontos + 5  → 15
pontos -= 3;    // 12
pontos *= 2;    // 24
pontos++;       // 25 (incrementa 1)
pontos--;       // 24 (decrementa 1)
```

> 💡 O `%` (módulo) responde perguntas como "é par?" (`n % 2 === 0`) e "é múltiplo de 5?" (`n % 5 === 0`).

## 2. Comparação: a regra do `===`

JS tem **dois** operadores de igualdade — e essa é uma das pegadinhas mais famosas da linguagem:

```javascript
// == (frouxo): converte os tipos antes de comparar 😬
console.log(5 == "5");     // true  (converteu a string!)
console.log(0 == false);   // true  (?!)
console.log("" == false);  // true  (?!?!)

// === (estrito): compara valor E tipo ✅
console.log(5 === "5");    // false (number ≠ string)
console.log(5 === 5);      // true
console.log(0 === false);  // false
```

> 📏 **Regra do curso (e do mercado):** use **sempre `===` e `!==`**. Esqueça que `==` existe. As conversões automáticas do `==` são fonte clássica de bugs.

Demais comparações (retornam sempre `true` ou `false`):

```javascript
console.log(7 > 5);     // true
console.log(7 <= 7);    // true
console.log(7 !== 8);   // true (diferente, estrito)
```

## 3. Operadores lógicos

```javascript
const idade = 20;
const temIngresso = true;

console.log(idade >= 18 && temIngresso);   // E:  true só se AMBOS forem true
console.log(idade >= 18 || temIngresso);   // OU: true se PELO MENOS UM for true
console.log(!temIngresso);                 // NÃO: inverte → false
```

## 4. Tomando decisões: `if` / `else if` / `else`

```javascript
const media = 6.8;

if (media >= 7) {
  console.log("Aprovado! 🎉");
} else if (media >= 4) {
  console.log("Recuperação. 📚");
} else {
  console.log("Reprovado. 😢");
}
```

Condições compostas:

```javascript
const media = 8;
const frequencia = 80;   // em %

if (media >= 7 && frequencia >= 75) {
  console.log("Aprovado por nota e frequência!");
} else {
  console.log("Verifique nota ou frequência.");
}
```

## 5. Truthy e falsy

Dentro de um `if`, o JS aceita **qualquer valor**, não só booleanos. Valores são convertidos para `true` (*truthy*) ou `false` (*falsy*):

**Os 6 valores falsy** (decore — todo o resto é truthy):

```javascript
false, 0, "" (string vazia), null, undefined, NaN
```

```javascript
const nome = "";

if (nome) {
  console.log(`Olá, ${nome}`);
} else {
  console.log("Você não informou o nome!");   // cai aqui: "" é falsy
}
```

## 6. Operador ternário — o `if` de uma linha

```javascript
const idade = 17;
const status = idade >= 18 ? "maior de idade" : "menor de idade";
//             ─condição──   ─se true───────    ─se false──────
console.log(status);   // menor de idade
```

Use para escolhas **simples** de valor. Se precisar de mais de uma ação, prefira `if`.

## 7. `switch` — quando há muitos casos exatos

```javascript
const diaDaSemana = 3;

switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;                    // sem o break, ele "vaza" para o próximo caso!
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:                    // o "else" do switch
    console.log("Dia inválido");
}
```

> 💡 `switch` compara com `===` (estrito). E não esqueça os `break` — esquecer é um bug clássico. O `switch` do Java é praticamente idêntico.

## 🏋️ Exercícios da aula

Na pasta `aula-03/`:

1. **`ex01.js`** — Dado `const numero = 17;`, imprima se ele é **par ou ímpar** e se é **positivo, negativo ou zero**. Teste com vários valores;
2. **`ex02.js`** — Calculadora de IMC: dadas constantes `peso` e `altura`, calcule `imc = peso / (altura ** 2)` e classifique: abaixo de 18.5 → "Abaixo do peso"; até 24.9 → "Peso normal"; até 29.9 → "Sobrepeso"; 30 ou mais → "Obesidade";
3. **`ex03.js`** — Dadas três notas, calcule a média e imprima "Aprovado" (média ≥ 7), "Recuperação" (≥ 4) ou "Reprovado". Adicione a regra: com média ≥ 7 **mas** `frequencia < 75`, o resultado é "Reprovado por falta";
4. **`ex04.js`** — Usando `switch`, converta um número de 1 a 12 no nome do mês. Depois, escreva num comentário: o que acontece se você remover todos os `break`? Teste!;
5. **`ex05.js`** — Preveja num comentário e depois confira:
   ```javascript
   console.log(5 == "5", 5 === "5");
   console.log(Boolean(""), Boolean("0"), Boolean(0));
   if ("false") console.log("surpresa!");
   ```
6. **Desafio 🌶️ `ex06.js`** — Um ano é bissexto se for divisível por 4, **exceto** os divisíveis por 100 que não sejam divisíveis por 400. Verifique com 2024 (✅), 1900 (❌) e 2000 (✅).

## ✅ Entrega

```bash
git add aula-03/
git commit -m "Resolve exercícios da aula 03 (operadores e condicionais)"
git push
```

---

⬅️ [Aula 02](../aula-02-variaveis-tipos/README.md) | ➡️ [Aula 04 — Laços e Funções](../aula-04-lacos-funcoes/README.md)
