// ===== 1. O QUE VOCÊ JÁ SABE (Bloco 2) =====
//
// Funções que só usam o que você viu nas Aulas 05 a 08: arrays, objetos,
// arrow functions, filter e reduce. Elas não mexem na página — só calculam.
// Abra o Console (F12) e chame qualquer uma, por exemplo:
//   filmesDoGenero(filmes, "Drama")

// filter: só os filmes de um gênero. "Todos" devolve uma cópia da lista inteira.
const filmesDoGenero = (lista, genero) => {
  if (genero === "Todos") return [...lista];
  return lista.filter((filme) => filme.genero === genero);
};

// reduce: soma as notas; a média é a soma dividida pela quantidade.
const mediaDasNotas = (lista) => {
  if (lista.length === 0) return 0;
  const soma = lista.reduce((total, filme) => total + filme.nota, 0);
  return soma / lista.length;
};

// reduce: percorre a lista guardando o filme de maior nota até agora.
const melhorFilme = (lista) => {
  if (lista.length === 0) return null;
  return lista.reduce((melhor, filme) => (filme.nota > melhor.nota ? filme : melhor));
};

// Um objeto como "tabela de consulta": o gênero é a chave, a classe do CSS é o valor.
const classesDosGeneros = {
  "Ação": "genero-acao",
  "Animação": "genero-animacao",
  "Comédia": "genero-comedia",
  "Drama": "genero-drama",
  "Ficção": "genero-ficcao",
};

// Gênero que não está na tabela ganha a cor neutra.
const classeDoGenero = (genero) => classesDosGeneros[genero] || "genero-outro";

// filter + length: quantos filmes estão marcados como "quero ver".
const contarQueroVer = (lista) => lista.filter((filme) => filme.queroVer).length;


// ===== 2. 🔮 PRÉVIA DAS AULAS 10 E 11 — não precisa entender agora =====
//
// Daqui para baixo o JavaScript mexe na página. Na Aula 10 (DOM) você vai
// aprender a encontrar, mudar e criar elementos; na Aula 11 (eventos), a
// reagir a cliques e escolhas. Por enquanto, leia os comentários e repare
// na divisão de trabalho: as funções lá de cima fazem as contas, e este
// trecho só mostra o resultado na tela.

// Encontra na página os elementos que o JavaScript vai usar (Aula 10).
const listaFilmes = document.querySelector("#lista-filmes");
const estatisticas = document.querySelector("#estatisticas");
const filtroGenero = document.querySelector("#filtro-genero");
const contadorQueroVer = document.querySelector("#contador-quero-ver");

// O texto do botão depende de o filme estar marcado ou não.
const textoDoBotao = (filme) => (filme.queroVer ? "★ Quero ver" : "☆ Quero ver");

// Escreve no cabeçalho quantos filmes estão marcados.
const atualizarContador = () => {
  contadorQueroVer.textContent = contarQueroVer(filmes);
};

// Monta o card de um filme: criar → configurar → inserir (Aula 10).
const criarCard = (filme) => {
  const card = document.createElement("article");        // criar
  card.classList.add("card");                            // configurar
  card.classList.add(classeDoGenero(filme.genero));
  if (filme.queroVer) card.classList.add("marcado");

  const poster = document.createElement("div");
  poster.classList.add("poster");
  poster.textContent = filme.emoji;

  const titulo = document.createElement("h3");
  titulo.textContent = filme.titulo;

  const detalhes = document.createElement("p");
  detalhes.classList.add("detalhes");
  detalhes.textContent = `${filme.ano} · ${filme.genero}`;

  const nota = document.createElement("p");
  nota.classList.add("nota");
  nota.textContent = `⭐ ${filme.nota.toFixed(1)}`;

  const botao = document.createElement("button");
  botao.classList.add("botao-quero-ver");
  botao.textContent = textoDoBotao(filme);

  // Quando clicarem no botão: muda o dado, e a tela acompanha (Aula 11).
  botao.addEventListener("click", () => {
    filme.queroVer = !filme.queroVer;
    card.classList.toggle("marcado");
    botao.textContent = textoDoBotao(filme);
    atualizarContador();
  });

  card.appendChild(poster);                              // inserir
  card.appendChild(titulo);
  card.appendChild(detalhes);
  card.appendChild(nota);
  card.appendChild(botao);
  return card;
};

// Apaga os cards da tela e desenha os da lista; depois, as estatísticas.
const mostrarFilmes = (lista) => {
  listaFilmes.textContent = "";                          // esvazia a área dos cards

  if (lista.length === 0) {
    const aviso = document.createElement("p");
    aviso.classList.add("aviso-vazio");
    aviso.textContent = "Nenhum filme por aqui.";
    listaFilmes.appendChild(aviso);
  }

  lista.forEach((filme) => listaFilmes.appendChild(criarCard(filme)));

  const melhor = melhorFilme(lista);
  const quantos = lista.length === 1 ? "1 filme" : `${lista.length} filmes`;
  const media = lista.length === 0 ? "—" : mediaDasNotas(lista).toFixed(1);
  const destaque = melhor === null ? "—" : `${melhor.titulo} (${melhor.nota.toFixed(1)})`;
  estatisticas.textContent = `${quantos} · nota média ${media} · destaque: ${destaque}`;
};

// Quando escolherem outro gênero no menu: filtra e redesenha (Aula 11).
filtroGenero.addEventListener("change", () => {
  mostrarFilmes(filmesDoGenero(filmes, filtroGenero.value));
});

// Ao abrir a página: mostra todos os filmes e o contador zerado.
mostrarFilmes(filmes);
atualizarContador();
