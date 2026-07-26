---
marp: true
theme: trilha
paginate: true
lang: pt-BR
footer: '🟨 Curso de JavaScript · Aula 01'
---

<!-- _class: capa -->

<div class="emoji">🟨</div>

# Introdução ao JavaScript

## Aula 01 · Bloco 1 — Fundamentos

<div class="meta">O que é, onde roda, e o seu primeiro programa</div>

---

## 🎯 Nesta aula

1. O que é JavaScript — e onde ele roda
2. Por que **não** vamos começar pelo navegador
3. O primeiro programa com Node.js
4. Comentários, `console.log` e os primeiros erros

---

## O que é JavaScript

A linguagem **da web**: a única que todo navegador entende nativamente.

Criada em **1995** por **Brendan Eich**, em **10 dias**.

Hoje é uma das linguagens mais usadas do mundo.

> 💡 Dez dias explicam algumas das esquisitices que você vai encontrar. Elas têm nome, têm motivo — e a gente vai passar por várias.

---

<!-- _class: lista-limpa -->

## Onde o JavaScript roda

- 🌐 **No navegador** — anima páginas, valida formulários, move o Gmail e o WhatsApp Web;
- 🖥️ **No servidor e no terminal** — com o **Node.js**, desde 2009: APIs, ferramentas, automação;
- 📱 E ainda em apps mobile, desktop e até IoT.

---

## ⚠️ JavaScript **não** é Java

| | JavaScript | Java |
|---|---|---|
| **Tipagem** | dinâmica — `let x = 5; x = "oi"` ✅ | estática — `int x = 5;` e ponto final |
| **Execução** | interpretada, no Node ou no navegador | compilada para a JVM |
| **Uso típico** | web, front-end, APIs | back-end corporativo, Android |

O nome parecido foi jogada de marketing dos anos 90. São linguagens **completamente diferentes**.

---

## Por que começar no Node, e não no navegador

1. **Foco na lógica** — sem a distração de HTML e CSS, que vêm no Bloco 3;
2. **O fluxo é o mesmo** de linguagens como Java: escrever arquivo → executar → ver a saída;
3. **Menos coisa para dar errado.**

---

## O primeiro programa

```bash
cd exercicios-javascript
mkdir aula-01 && cd aula-01
```

Crie `ola.js`:

```javascript
console.log("Olá, mundo!");
```

```bash
node ola.js
```

🎉 Pronto: você é oficialmente uma pessoa que programa em JavaScript.

---

<!-- _class: lista-limpa -->

## Entendendo a linha

```javascript
console.log("Olá, mundo!");
```

- 📢 `console.log(...)` — **imprime** no terminal. Vai ser sua melhor amiga para enxergar o que o programa faz;
- 🔤 `"Olá, mundo!"` — um texto, uma *string*, sempre entre aspas;
- ⏹️ `;` — fim da instrução. Em JS é **tecnicamente opcional**, mas neste curso usamos sempre.

---

## Comentários e várias saídas

```javascript
// comentário de uma linha: o Node ignora

/* comentário
   de várias linhas */

console.log("Linha 1");
console.log(2 + 3);          // 5 — dá para fazer contas
console.log("2" + "3");      // 23 — opa!
```

> 💡 **Use comentários para anotar o que aprendeu.** Seus arquivos de aula são o seu caderno; um `// aprendi que...` vale ouro na revisão.

---

<!-- _class: lead -->

## 🤔 Espera aí

```
console.log(2 + 3);          // 5
console.log("2" + "3");      // 23
```

Números somam. **Textos se grudam.**

Guarde essa estranheza — ela tem nome, e é o assunto da **Aula 02**.

---

## Erros são normais — e informativos

Erre de propósito:

```javascript
console.log("teste"
```

```
SyntaxError: missing ) after argument list
```

O Node aponta o **arquivo**, a **linha** e o **tipo** do erro.

> 💡 Ler mensagem de erro com calma é uma habilidade. Na maioria das vezes, a resposta está ali dentro.

---

<!-- _class: checkpoint -->

## 🏋️ Exercícios da aula

Um arquivo por exercício, dentro de `aula-01/`:

1. **`ex01.js`** — nome, cidade e o que você quer construir com JS;
2. **`ex02.js`** — imprima `7 * 8`, `100 / 3` e `2 ** 10` (descubra o que `**` faz);
3. **`ex03.js`** — um quadrado 5×5 de asteriscos, com 5 `console.log`;
4. **`ex04.js`** — provoque um erro, copie a mensagem num comentário e explique.

---

<!-- _class: lead -->

## ➡️ Próxima aula

**Aula 02 — Variáveis e Tipos**

`let`, `const`, os tipos primitivos —
e a explicação daquele `"2" + "3" = 23`.
