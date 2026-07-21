# Aula 12 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 12 — Projeto Guiado: Lista de Tarefas + GitHub Pages](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A12-01

A regra de ouro da arquitetura do projeto é:

- **a)** os eventos alteram a tela diretamente, e o array é atualizado depois;
- **b)** a tela é a fonte de verdade, e o array serve apenas para contar os itens;
- **c)** os eventos alteram o array de tarefas e chamam `renderizar()`, que redesenha a tela a partir do estado;
- **d)** cada evento cria seu próprio array de tarefas.

↩︎ *Aula 12, seção 1 — A arquitetura*

---

### Q-A12-02

Por que a função `renderizar()` começa com `lista.innerHTML = "";`?

```javascript
const renderizar = () => {
  lista.innerHTML = "";
  tarefas.forEach((tarefa) => {
    // cria e insere os <li>
  });
};
```

- **a)** Para apagar o array de tarefas;
- **b)** para criar o elemento `<ul>` na página;
- **c)** para impedir que o usuário digite HTML no campo;
- **d)** para limpar a lista antes de redesenhar, evitando que os itens sejam duplicados a cada renderização.

↩︎ *Aula 12, seção 3 — Etapa 1*

---

### Q-A12-03

O que `tarefas.splice(indice, 1)` faz?

- **a)** Adiciona 1 elemento na posição `indice`;
- **b)** remove 1 elemento a partir da posição `indice`;
- **c)** devolve o elemento da posição `indice` sem alterar o array;
- **d)** substitui o elemento da posição `indice` pelo valor `1`.

↩︎ *Aula 12, seção 3 — Etapa 4*

---

### Q-A12-04

Por que `e.stopPropagation()` é necessário no botão de remover?

```javascript
btnRemover.addEventListener("click", (e) => {
  e.stopPropagation();
  tarefas.splice(indice, 1);
  renderizar();
});
```

- **a)** Sem ele, o clique no `✕` também acionaria o listener do `<li>`, marcando a tarefa como concluída;
- **b)** sem ele, o botão `✕` não chega a ser criado;
- **c)** sem ele, o `splice` removeria todos os itens da lista;
- **d)** sem ele, a página recarregaria a cada clique.

↩︎ *Aula 12, seção 3 — Etapa 4*

---

### Q-A12-05

O que esta linha calcula?

```javascript
const pendentes = tarefas.filter((t) => !t.concluida).length;
```

- **a)** Quantas tarefas já foram concluídas;
- **b)** o total de tarefas da lista;
- **c)** quantas tarefas ainda **não** foram concluídas;
- **d)** o índice da primeira tarefa pendente.

↩︎ *Aula 12, seção 3 — Etapa 1*

---

### Q-A12-06

O array é declarado como `const tarefas = [];` e mesmo assim `adicionar()` executa `tarefas.push(...)` sem erro. Isso funciona porque:

- **a)** `const` impede trocar o array por outro, mas não impede alterar o conteúdo dele;
- **b)** `push` é o único método permitido em arrays declarados com `const`;
- **c)** `const` só tem efeito sobre números e strings;
- **d)** na verdade não funciona: seria necessário declarar com `let`.

↩︎ *Aula 12, seção 3 — Etapa 2* (e Aula 05, seção 2)

---

### Q-A12-07

Para publicar o projeto no GitHub Pages, os arquivos `index.html`, `style.css` e `script.js` devem estar:

- **a)** numa pasta `pages/`, criada automaticamente pelo GitHub;
- **b)** compactados em um arquivo `.zip` enviado pelo *Settings*;
- **c)** em qualquer lugar: o GitHub localiza o `index.html` sozinho no repositório inteiro;
- **d)** na raiz do repositório, com o Pages configurado em *Settings → Pages*, branch `main` e pasta `/ (root)`.

↩︎ *Aula 12, seção 4 — Publicando no GitHub Pages*

---

### Q-A12-08

Com o site já publicado, um novo `git push` no `main`:

- **a)** não altera o site: é preciso reconfigurar o Pages a cada mudança;
- **b)** atualiza o site automaticamente em cerca de um minuto;
- **c)** derruba o site até uma nova publicação manual;
- **d)** cria um endereço novo para o site.

↩︎ *Aula 12, seção 4 — Publicando no GitHub Pages*

---

⬅️ [Voltar à Aula 12](../README.md) | ➡️ [Revisão da Aula 13](../../../bloco-4-assincronismo/aula-13-promises-async/revisao/README.md)
