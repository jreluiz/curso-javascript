# Revisão geral — Aulas 02 a 06

### R-01

Qual é a saída deste trecho?

```javascript
const digitado = "8.5";
console.log(digitado + 2);
console.log(`Total: ${parseInt(digitado) + 2}`);
```

- **a)** `10.5` e `Total: 10.5`
- **b)** `8.52` e `Total: 10.5`
- **c)** `8.52` e `Total: 10`
- **d)** `10.5` e `Total: 10`

↩︎ *Aula 02, seções 3 e 4 — Trabalhando com strings; A pegadinha da coerção de tipos*

---

### R-02

O que este `switch` imprime?

```javascript
const numero = 7;

switch (numero % 3) {
  case 0:
    console.log("zero");
  case 1:
    console.log("um");
  case 2:
    console.log("dois");
    break;
  default:
    console.log("outro");
}
```

- **a)** `um` e `dois`
- **b)** `um`
- **c)** `zero`, `um` e `dois`
- **d)** `outro`

↩︎ *Aula 03, seções 1 e 7 — Operadores aritméticos; `switch`*

---

### R-03

O que este trecho imprime?

```javascript
const senha = "1234";
const tentativas = 2;

if (senha === 1234 && tentativas < 3) {
  console.log("Acesso liberado");
} else if (tentativas < 3) {
  console.log("Senha incorreta");
} else {
  console.log("Conta bloqueada");
}
```

- **a)** `Acesso liberado`
- **b)** `Conta bloqueada`
- **c)** `Acesso liberado` e `Senha incorreta`, em duas linhas;
- **d)** `Senha incorreta`

↩︎ *Aula 03, seções 2, 3 e 4 — A regra do `===`; Operadores lógicos; `if` / `else if` / `else`*

---

### R-04

O que este laço imprime?

```javascript
for (let i = 1; i <= 6; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
```

- **a)** `1 2 3`
- **b)** `1 3`
- **c)** `1 3 5 6`
- **d)** `1 3 4`

↩︎ *Aula 04, seção 3 — `break` e `continue`*

---

### R-05

Numa loja, a função `precoComDesconto(preco)` calcula o valor com 10% de desconto e termina com `console.log(final)`. Agora o caixa precisa somar o preço com desconto de dois produtos: `precoComDesconto(50) + precoComDesconto(30)`. Os dois valores aparecem na tela, mas a soma sai `NaN`. Por quê?

- **a)** porque o desconto gera números com casas decimais, e o JavaScript não soma números quebrados;
- **b)** porque as duas chamadas usam a mesma variável `final`, e a segunda apaga a primeira antes da soma;
- **c)** porque a função mostra o valor, mas não o devolve: sem `return`, cada chamada vale `undefined`;
- **d)** porque o `+` entre duas chamadas de função junta os resultados como texto, e texto não vira número.

↩︎ *Aula 04, seção 4 — `return`: devolvendo um resultado*

---

### R-06

O que acontece ao executar este programa?

```javascript
function situacao(media) {
  if (media >= 7) return "Aprovado";
  return "Reprovado";
}

console.log(situacao(6));
console.log(media);
```

- **a)** imprime `Reprovado` e, em seguida, falha com `ReferenceError: media is not defined`;
- **b)** imprime `Reprovado` e `6`, em duas linhas;
- **c)** imprime `Reprovado` e `undefined`, em duas linhas;
- **d)** não imprime nada: o erro na última linha impede até a primeira linha de executar.

↩︎ *Aula 04, seções 4 e 5 — `return`; Escopo*

---

### R-07

O que este trecho imprime?

```javascript
const notas = [6, 9, 4, 8];
let aprovados = 0;

for (const n of notas) {
  if (n >= 7) aprovados++;
}

notas.shift();
console.log(aprovados, notas.length, notas.indexOf(9));
```

- **a)** `2 4 1`
- **b)** `17 3 0`
- **c)** `2 3 1`
- **d)** `2 3 0`

↩︎ *Aula 05, seções 3 e 5 — Métodos essenciais; Padrões clássicos com arrays*

---

### R-08

Dois colegas discordam sobre o que acontece nestes dois trechos, executados separadamente:

```javascript
// Trecho 1
const notas = [7, 8];
notas.push(9);

// Trecho 2
const notas = [7, 8];
notas = [7, 8, 9];
```

Quem tem razão é quem diz que:

- **a)** os dois falham com `TypeError`, porque um array declarado com `const` não pode mudar de jeito nenhum depois de criado;
- **b)** o trecho 1 funciona e o 2 falha com `TypeError`: o `const` impede trocar o array, não mudar o conteúdo;
- **c)** os dois funcionam, porque o `const` só protege números e textos, e arrays ficam livres;
- **d)** o trecho 1 falha e o trecho 2 funciona, porque o `push` mexe no array protegido e a atribuição cria outro.

↩︎ *Aula 05, seção 2 — Acessando elementos (o quadro "Espera, `frutas` não é `const`?")*

---

### R-09

O que este trecho imprime?

```javascript
const livros = [
  { titulo: "Duna", ano: 1965 },
  { titulo: "Neuromancer", ano: 1984 },
];

const { ano, titulo } = livros[1];
console.log(titulo, ano, livros.length);
```

- **a)** `Duna 1965 2`
- **b)** `1984 Neuromancer 2`
- **c)** `Neuromancer 1984 2`
- **d)** `Neuromancer 1984 1`

↩︎ *Aula 06, seções 4 e 6 — Array de objetos; Desestruturação*

---

### R-10

A lista de tarefas de um app precisa ser guardada num arquivo de texto e, depois, lida de volta para o programa continuar usando `tarefas[0].titulo`. Quais métodos fazem essas duas conversões, nessa ordem?

- **a)** `JSON.stringify` para guardar (objeto → texto) e `JSON.parse` para ler de volta (texto → objeto);
- **b)** `JSON.parse` para guardar (objeto → texto) e `JSON.stringify` para ler de volta (texto → objeto);
- **c)** `join` para guardar (array → texto) e `split` para ler de volta (texto → array), como na Aula 05;
- **d)** `String` para guardar (objeto → texto) e `Number` para ler de volta (texto → objeto).

↩︎ *Aula 06, seção 5 — JSON*

---

⬅️ [Voltar ao plano de aulas](../README.md)
