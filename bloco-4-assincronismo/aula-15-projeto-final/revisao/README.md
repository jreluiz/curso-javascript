# Aula 15 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 15 — Desenvolvimento do Projeto Final](../README.md). Só uma alternativa está correta em cada uma.

Esta aula não traz conteúdo novo: traz **método de trabalho e diagnóstico de erros** — exatamente o que separa quem destrava sozinho de quem empaca. As questões cobrem isso.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A15-01

O Console mostra `Cannot read properties of null`. A causa mais provável é:

- **a)** seletor errado no `querySelector`, ou a tag `<script>` posicionada antes do HTML que ela tenta acessar;
- **b)** a API devolveu um array quando o código esperava um objeto;
- **c)** faltou o `await` antes do `fetch`;
- **d)** o repositório ainda não foi publicado no GitHub Pages.

↩︎ *Aula 15 — Erros que vão aparecer (aposto)*

---

### Q-A15-02

O Console mostra `Cannot read properties of undefined`, e a API está respondendo normalmente. A causa mais provável é:

- **a)** o elemento HTML procurado não existe na página;
- **b)** o navegador está exibindo uma versão em cache;
- **c)** o caminho percorrido dentro do JSON não corresponde à estrutura real dos dados;
- **d)** faltou dar `git push`.

↩︎ *Aula 15 — Erros que vão aparecer (aposto)*

---

### Q-A15-03

O `fetch` funciona (os dados aparecem no `console.log`), mas nada é exibido na página — e o Console não mostra nenhum erro. A causa mais provável é:

- **a)** a API está fora do ar;
- **b)** o código não atualiza o DOM depois do fetch: falta chamar a função de renderização;
- **c)** o JSON recebido está malformado;
- **d)** o `await` foi usado fora de uma função `async`.

↩︎ *Aula 15 — Erros que vão aparecer (aposto)*

---

### Q-A15-04

A página publicada no GitHub Pages continua mostrando a versão antiga. O primeiro a verificar é:

- **a)** se o arquivo principal foi renomeado para `home.html`;
- **b)** se é preciso excluir e recriar o repositório;
- **c)** se a API mudou de endereço;
- **d)** se o `git push` foi realmente dado, e recarregar a página ignorando o cache (`Ctrl+Shift+R`).

↩︎ *Aula 15 — Erros que vão aparecer (aposto)*

---

### Q-A15-05

Antes de escrever qualquer linha de código do projeto, o roteiro da aula manda:

- **a)** abrir as URLs da API no navegador e entender o JSON que ela devolve;
- **b)** escrever todo o CSS da aplicação;
- **c)** publicar o repositório vazio no GitHub Pages;
- **d)** escolher qual framework será usado.

↩︎ *Aula 15, seção 1 — Antes de escrever código*

---

### Q-A15-06

A estratégia de construção recomendada para o projeto é:

- **a)** escrever a aplicação inteira e fazer um único commit ao final;
- **b)** construir em fatias finas, terminando cada etapa com um commit;
- **c)** começar pelo CSS e só depois pensar na lógica;
- **d)** desenvolver tudo direto pela interface web do GitHub.

↩︎ *Aula 15, seção 2 — Construa em fatias finas*

---

### Q-A15-07

Segundo o roteiro, a ordem correta das primeiras fatias é:

- **a)** renderização → HTML estático → fetch;
- **b)** fetch → CSS → HTML estático;
- **c)** CSS → publicação no Pages → HTML estático;
- **d)** HTML estático → fetch funcionando com `console.log` → renderização na página.

↩︎ *Aula 15, seção 2 — Construa em fatias finas*

---

### Q-A15-08

Você travou por mais de 15 minutos no mesmo erro. A orientação da aula é:

- **a)** recomeçar o projeto do zero;
- **b)** trocar a API escolhida por outra mais simples;
- **c)** ler a mensagem no Console com calma, isolar o problema no menor código possível e consultar o guia de erros comuns;
- **d)** remover o `try/catch` e seguir em frente.

↩︎ *Aula 15, seção 2 — Construa em fatias finas*

---

⬅️ [Voltar à Aula 15](../README.md) | ➡️ [Revisão da Aula 16](../../aula-16-revisao-proximos-passos/revisao/README.md)
