# 🚀 Projeto Final — Aplicação com API

> 📅 Lançado no Bloco 4 (após a aula 14) · Individual

## Objetivo

Construir e publicar uma aplicação web **que consome uma API real**, integrando tudo o que foi visto no semestre: DOM, eventos, validação, `fetch`, `async/await`, tratamento de erros e fluxo Git.

## Ideias de projeto (escolha uma ou proponha a sua)

| Projeto | API sugerida | Núcleo |
|---------|--------------|--------|
| Consulta de endereços | ViaCEP | Busca por CEP + histórico de consultas |
| Pokédex | PokéAPI | Busca + card com imagem e atributos |
| Guia de países | REST Countries | Busca por nome + bandeira, capital, população |
| Calendário de feriados | BrasilAPI | Feriados do ano com filtro por mês |
| Previsão do tempo | Open-Meteo | Clima atual + próximos dias por cidade |
| Tema livre | Qualquer API aberta | **Combine com o professor antes!** |

## Requisitos obrigatórios

### Funcionais

- [ ] Buscar dados de uma **API real** com `fetch` + `async/await`;
- [ ] Entrada do usuário (campo + botão, com **Enter** funcionando) **validada** antes da busca;
- [ ] Estado de **carregamento** visível durante a busca;
- [ ] **Tratamento de erros** com mensagens amigáveis nos dois cenários: resposta de erro do servidor (`!resposta.ok` / "não encontrado") e falha de rede (`catch`);
- [ ] Resultados renderizados via **DOM** (`createElement`/template literals — proibido recarregar a página);
- [ ] Pelo menos **um uso significativo** de `map`, `filter` ou `reduce` sobre os dados;

### Técnicos

- [ ] Repositório próprio com **mínimo de 10 commits** distribuídos (não tudo na véspera — o `git log` conta a história do projeto);
- [ ] **Publicado no GitHub Pages**;
- [ ] `README.md` com: descrição, **link do site no ar**, API utilizada, prints, e o que você faria com mais tempo;
- [ ] Código organizado: funções pequenas com nomes claros, `const` por padrão, sem código morto.

## Extras para ir além 🌶️

- Histórico de buscas (com `localStorage` para persistir);
- Filtros/ordenação sobre os resultados;
- Layout responsivo (bonito também no celular);
- Duas APIs combinadas (ex.: CEP → clima da cidade encontrada).

## Entrega e apresentação

- Links do **repositório** e do **Pages** pelo canal combinado, até a data definida em aula;
- **Demonstração de 5 minutos** na última semana: mostre o app funcionando (inclusive um caso de erro!) e o trecho de código de que você mais se orgulha.

> 💡 Comece simples e **termine** o básico antes de partir para extras. Um app pequeno funcionando, publicado e bem commitado vale mais que um app ambicioso pela metade.
