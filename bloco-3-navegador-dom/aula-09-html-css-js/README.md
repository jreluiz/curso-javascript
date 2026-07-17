# Aula 09 — HTML + CSS + JavaScript no Navegador

> 🎯 Objetivos: entender o trio da web, escrever o HTML/CSS mínimo necessário e rodar JavaScript no navegador.

## 1. O trio da web

Toda página é feita de três linguagens com papéis distintos:

| Linguagem | Papel | Analogia (casa) |
|-----------|-------|------------------|
| **HTML** | Estrutura e conteúdo | Paredes, portas, cômodos |
| **CSS** | Aparência | Pintura e decoração |
| **JavaScript** | Comportamento | Eletricidade: interruptores, campainha |

Nesta disciplina o foco é o **JavaScript** — usaremos o HTML/CSS mínimo para ter onde aplicá-lo. (Vocês não precisam ser experts em CSS para passar; precisam entender a estrutura do HTML.)

## 2. HTML essencial em 10 minutos

Crie `aula-09/index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Minha primeira página</title>
</head>
<body>
  <h1>Olá, web!</h1>
  <p>Este é um parágrafo. HTML é feito de <strong>tags</strong>.</p>

  <h2>Tags que usaremos o tempo todo</h2>
  <ul>
    <li>Títulos: h1 até h6</li>
    <li>Parágrafo: p</li>
    <li>Lista: ul + li</li>
  </ul>

  <button>Um botão (ainda sem vida)</button>
  <input type="text" placeholder="Um campo de texto" />

  <div id="area-especial">
    Uma div é uma "caixa" genérica. O id a identifica unicamente.
  </div>
</body>
</html>
```

Abra o arquivo no navegador (duplo clique, ou botão direito → *Open with Live Server* no VS Code).

Conceitos-chave:

- **Tags** demarcam elementos: `<p>abre</p>` fecha. Algumas não têm fechamento (`<input />`);
- **Atributos** dão informações extras: `id="area-especial"`, `type="text"`;
- **`id`**: identificador **único** de um elemento — é como o JS vai encontrá-lo (aula 10);
- **`class`**: rótulo **reutilizável** para vários elementos (usado por CSS e JS).

## 3. CSS mínimo

O CSS pode ficar num bloco `<style>` dentro do `<head>`:

```html
<style>
  body {
    font-family: sans-serif;      /* seletor "body": estiliza a página toda */
    max-width: 600px;
    margin: 0 auto;               /* centraliza */
  }
  h1 {
    color: darkblue;
  }
  .destaque {                     /* .nome = seletor de CLASSE */
    background-color: yellow;
  }
  #area-especial {                /* #nome = seletor de ID */
    border: 2px solid red;
    padding: 10px;
  }
</style>
```

E no HTML: `<p class="destaque">Este parágrafo fica marcado.</p>`.

É o suficiente por enquanto — receitas prontas de CSS serão fornecidas nos projetos.

## 4. JavaScript entra em cena

O JS entra na página com a tag `<script>`, **por convenção no final do `<body>`** (assim o HTML já existe quando o script roda):

```html
<body>
  <h1>Página com JS</h1>

  <script src="script.js"></script>
</body>
```

Crie `aula-09/script.js` na mesma pasta:

```javascript
console.log("O JavaScript está rodando no navegador!");
alert("Olá! Eu vim do script.js 👋");
```

Recarregue a página: o `alert` aparece. E o `console.log`? Foi para o **console do navegador**...

## 5. DevTools — sua nova casa

Aperte **F12** (ou botão direito → Inspecionar). Conheça as abas:

- **Console:** onde caem os `console.log` e os **erros** — deixe sempre aberto ao desenvolver! Você também pode digitar JS ali e executar na hora (teste: `2 + 2`, `document.title`);
- **Elements:** o HTML "vivo" da página — dá para inspecionar e editar ao vivo;

> 📏 **Regra do Bloco 3:** deu problema? **Primeiro passo: abrir o Console.** O erro estará lá, com arquivo e linha, exatamente como no Node.

Importante: **todo o JavaScript que você aprendeu continua valendo.** Variáveis, funções, arrays, objetos, map/filter — tudo igual. O que muda é que agora, além do `console.log`, o JS pode mexer **na página** (aula 10).

## 🏋️ Exercícios da aula

Na pasta `aula-09/`:

1. **`sobre-mim/`** — Crie `index.html` com uma mini página pessoal: um `h1` com seu nome, um parágrafo de apresentação, uma lista (`ul`) de 3 hobbies e uma foto ou emoji gigante. Capriche um pouco no `<style>`;
2. Adicione um `script.js` ligado à página que: dê `console.log` de boas-vindas, declare um array com seus hobbies e o imprima no console com `forEach`;
3. No **console do DevTools** (sem editar arquivos), execute: `document.title`, `document.title = "Novo título"` e observe a aba do navegador mudar. Anote num comentário do `script.js` o que aconteceu;
4. Provoque um erro de propósito no `script.js` (chame uma função que não existe), veja como ele aparece no Console e anote num comentário a mensagem e a linha indicada;
5. **Desafio 🌶️** — Pesquise a função `prompt()` (prima do `alert`). Peça o nome do visitante e dê `console.log` de uma saudação personalizada. Spoiler: na aula 11 faremos isso do jeito profissional, com `input` e botão.

## ✅ Entrega

```bash
git add aula-09/
git commit -m "Cria primeira página web com JS (aula 09)"
git push
```

---

⬅️ [Aula 08](../../bloco-2-estruturas/aula-08-metodos-funcionais/README.md) | ➡️ [Aula 10 — DOM](../aula-10-dom/README.md)
