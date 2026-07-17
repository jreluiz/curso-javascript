# Aula 16 — Revisão e Próximos Passos

> 🎯 Objetivos: consolidar o mapa do que foi aprendido, conhecer classes em JS (a ponte com Java) e saber o que estudar depois.

## 1. O mapa do semestre em uma tela

```
BLOCO 1                BLOCO 2                 BLOCO 3               BLOCO 4
Fundamentos            Estruturas              Navegador             Assíncrono
─────────────          ─────────────           ─────────────         ─────────────
let / const            arrays                  HTML + CSS            setTimeout
tipos + coerção        objetos + JSON          querySelector         Promises
=== e truthy           arrow functions         textContent           async/await
if / switch            callbacks    ──────▶    classList     ──────▶ try/catch
while / for            map/filter/reduce       createElement         fetch
funções + return       rest/spread             addEventListener      APIs + JSON
                                               .value + validação
        └──────────────── tudo versionado com Git, entregue via GitHub ────────────────┘
```

Repare como cada bloco usou o anterior: os callbacks (B2) viraram event listeners (B3); os objetos e o JSON (B2) viraram respostas de API (B4); a validação (B3) protegeu o fetch (B4). Programação é acumulativa.

## 2. Classes em JavaScript — a ponte com Java

Vocês passaram o semestre criando objetos **literais**. Java exige o caminho da **classe**: primeiro a "planta", depois os objetos. JavaScript também tem classes — compare:

```javascript
// JavaScript
class Aluno {
  constructor(nome, curso) {
    this.nome = nome;
    this.curso = curso;
    this.notas = [];
  }

  adicionarNota(nota) {
    this.notas.push(nota);
  }

  calcularMedia() {
    if (this.notas.length === 0) return 0;
    const soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;
  }
}

const maria = new Aluno("Maria", "SI");
maria.adicionarNota(8.5);
maria.adicionarNota(7.0);
console.log(maria.calcularMedia());   // 7.75
```

```java
// Java — a mesma ideia
public class Aluno {
    private String nome;
    private String curso;
    private ArrayList<Double> notas = new ArrayList<>();

    public Aluno(String nome, String curso) {
        this.nome = nome;
        this.curso = curso;
    }

    public void adicionarNota(double nota) {
        notas.add(nota);
    }

    public double calcularMedia() {
        if (notas.isEmpty()) return 0;
        double soma = 0;
        for (double n : notas) soma += n;
        return soma / notas.size();
    }
}
```

O que é igual: `class`, construtor, `this`, métodos, `new`. O que muda: Java declara **tipos** em tudo e tem **modificadores de acesso** (`private`/`public`) — o *encapsulamento* que vocês estudaram em OO. Em JS, classes existem e são úteis, mas objetos literais resolvem a maioria dos casos simples; em Java, a classe é obrigatória.

> 💡 Exercício mental valioso: pegue qualquer exercício do Bloco 2 e pense em como ele ficaria em Java. Traduzir entre linguagens consolida os **conceitos**, que são o que realmente importa.

## 3. O que deixamos de fora (de propósito) — seu roteiro de férias

Em ordem sugerida de estudo:

1. **`localStorage`** — persistir dados no navegador (quem fez o desafio da aula 12 já viu);
2. **CSS de verdade** — Flexbox e Grid (o jogo [Flexbox Froggy](https://flexboxfroggy.com/#pt-br) é ótimo);
3. **npm** — instalar e usar pacotes de terceiros (aí o `.gitignore` com `node_modules/` fará todo sentido);
4. **`this`, protótipos e closures** — os mecanismos internos do JS (o livro gratuito [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) é a referência);
5. **TypeScript** — JS com tipos; depois de Java, vocês vão *entender por quê* ele existe;
6. **Um framework** — React ou Vue, só depois de estar confortável com DOM puro (vocês agora sabem o que os frameworks automatizam — essa base faltará a quem começou direto neles);
7. **Node como back-end** — Express, APIs próprias: vocês deixarão de só consumir APIs para criá-las.

## 4. Seu portfólio já começou

Faça um inventário do semestre no seu GitHub:

- 📁 Repositório da disciplina com **16 pastas de aulas** e dezenas de commits;
- 🌐 **Lista de tarefas publicada** no GitHub Pages;
- 🤝 Um **Pull Request aceito** no trabalho em dupla;
- 🚀 O **projeto final** no ar, com README.

Isso é um portfólio inicial real — recrutadores olham exatamente para isso em candidatos a estágio. Mantenha o ritmo: um commit por semana em projetos pessoais já o coloca à frente da maioria.

## 🏋️ Exercício final (revisão integradora)

**`aula-16/quiz-revisao/`** — Sem consultar as aulas (só depois, para conferir):

1. Crie a classe `Produto` com `nome`, `preco` e o método `precoComDesconto(percentual)`;
2. Crie um array com 5 instâncias (`new Produto(...)`);
3. Com métodos funcionais: os nomes dos produtos acima de R$ 100; o total do estoque; o produto mais barato;
4. Renderize a lista numa página HTML com um campo de busca que filtra por nome enquanto digita (evento `input`);
5. Commite com uma boa mensagem e dê push. 😉

## 🎓 Fim!

Parabéns por chegar aqui. Vocês começaram o semestre sem saber o que era uma variável em JS e terminaram publicando aplicações que consomem APIs reais, com fluxo de trabalho profissional. Sigam commitando.

---

⬅️ [Aula 15](../aula-15-projeto-final/README.md) | 🏠 [Voltar ao início](../../README.md)
