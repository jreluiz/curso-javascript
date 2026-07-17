# Aula 12 — Projeto Guiado: Lista de Tarefas + GitHub Pages

> 🎯 Objetivos: construir uma aplicação completa integrando todo o Bloco 3 e **publicá-la na internet**.

Hoje não há conteúdo novo — há **integração**. Vamos construir juntos, passo a passo, uma lista de tarefas com adicionar, concluir e remover. É o "olá mundo" das aplicações de verdade.

## 1. A arquitetura: estado → eventos → renderização

```
        ┌─────────────────────┐
        │       ESTADO         │   const tarefas = [ {texto, concluida}, ... ]
        │  (array de objetos)  │
        └─────────┬───────────┘
        eventos   │   renderizar()
        alteram ▲ │ ▼ redesenha a tela
        ┌─────────┴───────────┐
        │        TELA          │   <ul> com os <li> das tarefas
        └─────────────────────┘
```

Regra de ouro do projeto: **os eventos nunca mexem na tela diretamente — eles mexem no array e chamam `renderizar()`**, que redesenha tudo a partir do estado. Uma única fonte de verdade.

## 2. Estrutura

```
aula-12-lista-tarefas/
├── index.html
├── style.css      (fornecido pronto — foco no JS!)
└── script.js
```

`index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Minhas Tarefas</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main>
    <h1>📝 Minhas Tarefas</h1>
    <div class="entrada">
      <input type="text" id="campo-tarefa" placeholder="O que precisa ser feito?" />
      <button id="btn-adicionar">Adicionar</button>
    </div>
    <p id="contador"></p>
    <ul id="lista-tarefas"></ul>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

## 3. Construindo o `script.js` em etapas

### Etapa 1 — Estado e renderização

```javascript
const tarefas = [];   // cada item: { texto: "...", concluida: false }

const lista = document.querySelector("#lista-tarefas");
const contador = document.querySelector("#contador");

const renderizar = () => {
  lista.innerHTML = "";                      // limpa e redesenha do zero

  tarefas.forEach((tarefa, indice) => {
    const li = document.createElement("li");
    li.textContent = tarefa.texto;
    if (tarefa.concluida) li.classList.add("concluida");
    lista.appendChild(li);
  });

  const pendentes = tarefas.filter((t) => !t.concluida).length;
  contador.textContent = `${pendentes} pendente(s) de ${tarefas.length}`;
};
```

### Etapa 2 — Adicionar (com validação)

```javascript
const campo = document.querySelector("#campo-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");

const adicionar = () => {
  const texto = campo.value.trim();
  if (texto === "") return;                          // guard clause

  tarefas.push({ texto, concluida: false });         // altera o ESTADO
  campo.value = "";
  campo.focus();
  renderizar();                                      // redesenha
};

btnAdicionar.addEventListener("click", adicionar);
campo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") adicionar();
});

renderizar();   // primeira renderização (lista vazia + contador)
```

### Etapa 3 — Concluir (clique na tarefa)

Dentro do `forEach` do `renderizar()`, antes do `appendChild`:

```javascript
li.addEventListener("click", () => {
  tarefa.concluida = !tarefa.concluida;   // inverte
  renderizar();
});
```

### Etapa 4 — Remover (botão ✕ em cada item)

Ainda no `forEach`:

```javascript
const btnRemover = document.createElement("button");
btnRemover.textContent = "✕";
btnRemover.classList.add("btn-remover");
btnRemover.addEventListener("click", (e) => {
  e.stopPropagation();          // impede que o clique também "conclua" a tarefa
  tarefas.splice(indice, 1);    // remove 1 item na posição indice
  renderizar();
});
li.appendChild(btnRemover);
```

O `style.css` pronto (com `.concluida` riscando o texto) está em [`style.css`](style.css) neste repositório — copie para o seu projeto.

## 4. 🚀 Publicando no GitHub Pages

Hora do momento mais legal do semestre: colocar seu projeto **na internet, de graça**.

O GitHub Pages serve páginas estáticas direto de um repositório:

1. Crie um repositório **novo e público** chamado `lista-de-tarefas` (projeto publicado merece repo próprio, separado do repo de exercícios);
2. Coloque `index.html`, `style.css` e `script.js` **na raiz** do repositório, commite e dê push;
3. No GitHub: **Settings → Pages**;
4. Em *Source*, selecione **Deploy from a branch**; em *Branch*, escolha **main** e pasta **/ (root)** → **Save**;
5. Aguarde ~1 minuto e recarregue a página de settings: o endereço aparece no topo:

```
https://SEU-USUARIO.github.io/lista-de-tarefas/
```

6. Abra o link, teste **no celular**, mande para a família. 🎉

> 💡 Todo push futuro no `main` **atualiza o site automaticamente** em ~1 minuto. Seu fluxo Git agora publica software na internet — igual a um deploy profissional.

## 🏋️ Melhorias para entregar (escolha ao menos 2)

1. Botão **"Limpar concluídas"** (dica: `filter` + reatribuir? Cuidado: `tarefas` é `const` — pesquise a diferença entre reatribuir e mutar, ou use um `let`);
2. **Filtros de visualização**: botões Todas / Pendentes / Concluídas (renderize a partir de um `filter` sem apagar o array original);
3. **Contagem regressiva de caracteres** no campo (reaproveite o ex. 4 da aula 11);
4. **Prioridade**: um `<select>` (alta/média/baixa) ao adicionar; tarefas de alta prioridade ganham uma classe de destaque;
5. 🌶️ **Persistência com `localStorage`**: pesquise `localStorage.setItem/getItem` + `JSON.stringify/parse` (aula 06!) para as tarefas sobreviverem ao recarregar a página.

## ✅ Entrega

- Projeto no repositório próprio, **publicado no Pages**;
- Link do site funcionando no topo do README do projeto;
- Histórico de commits mostrando as etapas (não um commit único!).

🏁 **Fim do Bloco 3!** Próxima parada: buscar dados do mundo real com APIs.

---

⬅️ [Aula 11](../aula-11-eventos/README.md) | ➡️ [Aula 13 — Promises e async/await](../../bloco-4-assincronismo/aula-13-promises-async/README.md)
