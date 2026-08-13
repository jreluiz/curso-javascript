# 🟨 Curso de JavaScript

> 📋 Pré-requisito: [Curso de Git e GitHub](https://github.com/jreluiz/curso-git-github) concluído.

## 🎯 Objetivos do curso

Ao final do curso, você será capaz de:

- Programar em JavaScript com domínio de variáveis, estruturas de controle e funções;
- Manipular arrays e objetos, incluindo os métodos funcionais (`map`, `filter`, `reduce`);
- Criar páginas web **interativas** manipulando o DOM e tratando eventos;
- Consumir **APIs reais** com `fetch` e `async/await`;
- Publicar seus projetos na internet com **GitHub Pages**;
- Trabalhar como um profissional: todo código versionado com Git e entregue via GitHub.

## 🗺️ Plano de aulas

### Bloco 1 — Fundamentos no Node.js

| Aula | Tema | Conteúdo |
|:---:|------|----------|
| 01 | [Introdução](bloco-1-fundamentos/aula-01-introducao/README.md) | O que é JS, Node.js, primeiro programa |
| 02 | [Variáveis e tipos](bloco-1-fundamentos/aula-02-variaveis-tipos/README.md) | `let`/`const`, tipos primitivos, coerção, template literals |
| 03 | [Operadores e condicionais](bloco-1-fundamentos/aula-03-operadores-condicionais/README.md) | `===` vs `==`, `if`/`else`, `switch`, truthy/falsy |
| 04 | [Laços e funções](bloco-1-fundamentos/aula-04-lacos-funcoes/README.md) | `while`, `for`, funções, parâmetros, retorno, escopo |

### Bloco 2 — Estruturas e funções de verdade

| Aula | Tema | Conteúdo |
|:---:|------|----------|
| 05 | [Arrays](bloco-2-estruturas/aula-05-arrays/README.md) | Criação, métodos básicos, percorrendo arrays |
| 06 | [Objetos](bloco-2-estruturas/aula-06-objetos/README.md) | Objetos literais, JSON, desestruturação |
| 07 | [Funções avançadas](bloco-2-estruturas/aula-07-funcoes-avancadas/README.md) | Arrow functions, callbacks, rest/spread |
| 08 | [Métodos funcionais](bloco-2-estruturas/aula-08-metodos-funcionais/README.md) | `map`, `filter`, `reduce`, `find` e encadeamento |

### Bloco 3 — Navegador e DOM

| Aula | Tema | Conteúdo |
|:---:|------|----------|
| 09 | [HTML + CSS + JS](bloco-3-navegador-dom/aula-09-html-css-js/README.md) | O trio da web, JS no navegador, DevTools |
| 10 | [DOM](bloco-3-navegador-dom/aula-10-dom/README.md) | Selecionar, alterar, criar e remover elementos |
| 11 | [Eventos](bloco-3-navegador-dom/aula-11-eventos/README.md) | `addEventListener`, formulários, validação |
| 12 | [Projeto guiado](bloco-3-navegador-dom/aula-12-projeto-lista-tarefas/README.md) | Lista de tarefas + publicação no GitHub Pages |

### Bloco 4 — Assincronismo e APIs

| Aula | Tema | Conteúdo |
|:---:|------|----------|
| 13 | [Promises e async/await](bloco-4-assincronismo/aula-13-promises-async/README.md) | Código assíncrono, `setTimeout`, Promises |
| 14 | [Fetch e APIs](bloco-4-assincronismo/aula-14-fetch-apis/README.md) | Consumindo APIs reais (ViaCEP), JSON, erros |
| 15 | [Projeto final](bloco-4-assincronismo/aula-15-projeto-final/README.md) | Desenvolvimento orientado do projeto |
| 16 | [Revisão e próximos passos](bloco-4-assincronismo/aula-16-revisao-proximos-passos/README.md) | Classes (ponte com Java), o que estudar depois |

## 📦 Projetos práticos

| Projeto | Quando | Modalidade |
|---------|:---:|------------|
| [Trabalho em dupla — Quiz via Pull Request](projetos/trabalho-em-dupla.md) | Bloco 3 | Dupla (fork + PR) |
| [Projeto final — App com API](projetos/projeto-final.md) | Bloco 4 | Individual |

## 🔁 O ritual Git de toda aula

**Todo laboratório começa e termina com Git.** Sem exceção:

```bash
# ── Início da aula ──
cd exercicios-javascript
git pull                                # atualiza (se você usa mais de um PC)

# ── Durante a aula ──
mkdir aula-XX-tema && cd aula-XX-tema   # uma pasta por aula
# ... programa, testa, erra, conserta ...
git add .
git commit -m "Resolve exercícios da aula XX"   # commit por exercício concluído

# ── Fim da aula (OBRIGATÓRIO) ──
git push                                # sem push = sem entrega!
```

## 🛠️ Ambiente

Consulte o [guia de preparação do ambiente](recursos/ambiente.md): Node.js, VS Code e extensões.

## ⚡ Links rápidos

- 🧯 [Erros comuns de JavaScript](recursos/erros-comuns.md)
- 🔗 [Links úteis](recursos/links-uteis.md)
- 📚 [Curso de Git e GitHub](https://github.com/jreluiz/curso-git-github) (pré-requisito)

## 📚 Bibliografia

**Livro-base:**

- FLANAGAN, David. **JavaScript: o guia definitivo**. 6. ed. Porto Alegre: Bookman, 2013.

**Bibliografia de apoio:**

| Obra | Onde ela ajuda mais |
|---|---|
| FREEMAN, Eric; ROBSON, Elisabeth. **Use a cabeça! Programação JavaScript**. Rio de Janeiro: Alta Books, 2016. | Blocos 1 e 2 — a linguagem explicada devagar e com muita figura; é o livro para **ler junto** com as aulas |
| SILVA, Maurício Samy. **JavaScript: guia do programador**. São Paulo: Novatec, 2010. | Bloco 3 — DOM, eventos e formulários em português, com exemplo de página em quase toda seção |
| HAVERBEKE, Marijn. **Eloquent JavaScript**. 3. ed. San Francisco: No Starch Press, 2018. | Blocos 2 e 4 — funções de ordem superior e assincronismo, com exercícios que rodam na própria página |
| CROCKFORD, Douglas. **JavaScript: the good parts**. Sebastopol: O'Reilly, 2008. | Bloco 2 — por que `===` e não `==`, e quais partes da linguagem é melhor não usar |
| SIMPSON, Kyle. **You Don't Know JS Yet**. 2. ed. Independente, 2020. | Depois do curso — `this`, protótipos e closures, os mecanismos que as aulas usam sem abrir |
| ECMA INTERNATIONAL. **ECMA-262: ECMAScript language specification**. Genebra, edição corrente. | a norma da linguagem: a resposta final quando duas fontes discordam |

**Três desses são gratuitos e legais de ler online:** o [Eloquent JavaScript](https://eloquentjavascript.net/) (há uma [tradução da comunidade](https://braziljs.github.io/eloquente-javascript/)), o [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS) e a [especificação ECMA-262](https://tc39.es/ecma262/).

**O curso é autocontido** — os livros são o passo seguinte, não um pré-requisito. Para consulta do dia a dia, a [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) resolve mais rápido que qualquer um deles; ela e as demais referências online estão em [Links úteis](recursos/links-uteis.md).

---

*Este repositório continua evoluindo — exemplos e materiais novos são commitados aqui. Primeiro passo de toda sessão de estudo: `git pull`.* 🙂
