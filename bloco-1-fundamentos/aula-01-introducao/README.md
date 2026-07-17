# Aula 01 — Introdução ao JavaScript

> 🎯 Objetivos: entender o que é JavaScript, onde ele roda, e escrever seus primeiros programas com Node.js.

## 1. O que é JavaScript?

JavaScript (JS) é a linguagem de programação **da web**: é a única linguagem que todo navegador entende nativamente. Criada em 1995 por Brendan Eich em apenas **10 dias**, hoje é uma das linguagens mais usadas do mundo.

Onde o JavaScript roda:

- 🌐 **No navegador:** dá vida às páginas — animações, validação de formulários, apps como Gmail e WhatsApp Web;
- 🖥️ **No servidor/terminal (Node.js):** desde 2009, o JS também roda fora do navegador — APIs, ferramentas, automação;
- 📱 E também em apps mobile, desktop e até em IoT.

> ⚠️ **JavaScript ≠ Java!** Apesar do nome parecido (uma jogada de marketing dos anos 90), são linguagens **completamente diferentes**. Vocês vão estudar as duas neste semestre — e comparar as diferenças vai ensinar muito sobre ambas.

| | JavaScript | Java |
|---|---|---|
| Tipagem | Dinâmica (`let x = 5; x = "oi"` ✅) | Estática (`int x = 5;` e ponto final) |
| Execução | Interpretada (Node/navegador) | Compilada para a JVM |
| Uso típico | Web, front-end, APIs | Back-end corporativo, Android |

## 2. Por que começamos no Node.js (e não no navegador)?

Nas primeiras semanas usaremos o **Node.js** para rodar JS direto no terminal. Motivos:

1. Foco total na **lógica**, sem distração de HTML/CSS (que virão no Bloco 3);
2. O fluxo é idêntico ao que vocês usarão em Java: escrever arquivo → executar → ver saída no terminal;
3. Menos coisas para dar errado.

## 3. Primeiro programa

Com o [ambiente preparado](../../recursos/ambiente.md), crie a pasta da aula **no seu repositório da disciplina**:

```bash
cd javascript-2026-2
mkdir aula-01
cd aula-01
```

Crie o arquivo `ola.js` no VS Code:

```javascript
console.log("Olá, mundo!");
```

Execute no terminal:

```bash
node ola.js
```

```
Olá, mundo!
```

🎉 Você é oficialmente uma pessoa que programa em JavaScript.

### Entendendo a linha

- `console.log(...)` — função que **imprime** algo no terminal. Será sua melhor amiga para ver o que o programa está fazendo;
- `"Olá, mundo!"` — um texto (*string*), sempre entre aspas;
- `;` — fim da instrução. Em JS o ponto e vírgula é tecnicamente opcional, **mas nesta disciplina vamos usá-lo sempre** (o Java exige, então já vira hábito).

## 4. Vários `console.log` e comentários

```javascript
// Isto é um comentário de uma linha: o Node ignora

/*
  Isto é um comentário
  de várias linhas
*/

console.log("Linha 1");
console.log("Linha 2");
console.log(2 + 3);          // imprime 5 — dá para fazer contas!
console.log("2" + "3");      // imprime 23 — opa! Texto se "gruda". Guarde essa estranheza para a aula 2...
```

> 💡 **Use comentários para anotar o que aprendeu.** Seus arquivos de aula são seu caderno — um `// aprendi que...` vale ouro na hora de revisar para a prova.

## 5. Erros são normais (e informativos)

Digite errado de propósito:

```javascript
console.log("teste"
```

```
SyntaxError: missing ) after argument list
```

O Node aponta o **arquivo**, a **linha** e o **tipo do erro**. Ler mensagens de erro com calma é uma habilidade — na maioria das vezes, a resposta está ali.

## 🏋️ Exercícios da aula

Crie um arquivo para cada exercício dentro de `aula-01/` (ex.: `ex01.js`, `ex02.js`):

1. **`ex01.js`** — Imprima seu nome completo, seu curso e seu semestre, cada um em uma linha;
2. **`ex02.js`** — Imprima o resultado de: `7 * 8`, `100 / 3` e `2 ** 10` (descubra o que `**` faz);
3. **`ex03.js`** — Desenhe um "quadrado" 5x5 com asteriscos usando 5 `console.log`;
4. **`ex04.js`** — Escreva um programa com um erro de propósito, execute, e **copie a mensagem de erro num comentário** no topo do arquivo, junto com a explicação do que ela significa.

## ✅ Entrega

```bash
cd ..                     # volta para a raiz do repositório
git add aula-01/
git commit -m "Resolve exercícios da aula 01 (introdução)"
git push
```

Confira **no navegador** que a pasta `aula-01/` apareceu no seu GitHub.

---

⬅️ [Voltar ao plano de aulas](../../README.md) | ➡️ [Aula 02 — Variáveis e Tipos](../aula-02-variaveis-tipos/README.md)
