# Aula 06 — Objetos

> 🎯 Objetivos: representar "coisas do mundo real" com objetos, combinar objetos e arrays, e conhecer JSON e desestruturação.

## 1. O problema que o objeto resolve

Um array guarda uma lista de valores **do mesmo tipo de coisa**. Mas como representar **um aluno**, que tem nome, idade e notas? Com um **objeto**: uma coleção de pares **chave: valor**:

```javascript
const aluno = {
  nome: "Maria Silva",
  idade: 19,
  curso: "Sistemas de Informação",
  matriculado: true,
};
```

> 💡 **Ponte com o Java:** o objeto literal do JS é primo do objeto criado em Java com classes. A diferença: em Java, primeiro se define a "planta" (a classe `Aluno`) e depois se constrói o objeto; em JS dá para criar o objeto diretamente, sem planta. (Classes existem em JS também — veremos na aula 16.)

## 2. Acessando e modificando propriedades

```javascript
console.log(aluno.nome);          // Maria Silva (notação de ponto — a usual)
console.log(aluno["idade"]);      // 19 (notação de colchetes)

aluno.idade = 20;                 // modifica
aluno.email = "maria@email.com";  // cria uma propriedade nova!
delete aluno.matriculado;         // remove uma propriedade

console.log(aluno.telefone);      // undefined (não existe — não dá erro)
```

A notação de colchetes é útil quando a chave está numa variável:

```javascript
const campo = "curso";
console.log(aluno[campo]);        // Sistemas de Informação
```

## 3. Métodos e aninhamento

Propriedades podem ser **funções** (aí as chamamos de métodos) e **outros objetos ou arrays**:

```javascript
const aluno = {
  nome: "Maria",
  notas: [8.5, 7.0, 9.5],
  endereco: {
    cidade: "Campinas",
    uf: "SP",
  },
  apresentar() {
    console.log(`Oi, eu sou ${this.nome}!`);   // this = "este próprio objeto"
  },
};

console.log(aluno.notas[0]);          // 8.5
console.log(aluno.endereco.cidade);   // Campinas
aluno.apresentar();                   // Oi, eu sou Maria!
```

> ⚠️ O `this` tem sutilezas em JS que **não** vamos aprofundar agora. Regra prática para o curso: dentro de um método escrito como acima, `this` é o objeto dono do método — igual ao `this` do Java.

## 4. A estrutura mais comum do mundo real: array de objetos

Praticamente todo sistema manipula **listas de coisas com atributos** — e isso é um array de objetos:

```javascript
const turma = [
  { nome: "Ana",   media: 8.5 },
  { nome: "Bruno", media: 6.2 },
  { nome: "Carla", media: 9.1 },
];

// Percorrendo
for (const aluno of turma) {
  const status = aluno.media >= 7 ? "✅" : "❌";
  console.log(`${aluno.nome}: ${aluno.media} ${status}`);
}

// Adicionando
turma.push({ nome: "Davi", media: 7.7 });
```

Domine esse padrão: ele volta na aula 08 (métodos funcionais), no Bloco 3 (listas na tela) e no Bloco 4 (respostas de APIs).

## 5. JSON — objetos viajando como texto

**JSON** (JavaScript Object Notation) é um formato de **texto** para representar objetos, usado para trocar dados entre sistemas (é o que as APIs falam!). Parece um objeto JS, com regras mais rígidas: chaves **e** strings sempre entre **aspas duplas**.

```javascript
const aluno = { nome: "Maria", idade: 19 };

// Objeto → texto JSON (para enviar/salvar)
const texto = JSON.stringify(aluno);
console.log(texto);                    // {"nome":"Maria","idade":19}
console.log(typeof texto);             // string

// Texto JSON → objeto (para usar)
const recebido = '{"nome":"João","idade":21}';
const obj = JSON.parse(recebido);
console.log(obj.nome);                 // João
```

> 💡 Na aula 14, quando consumirmos APIs, os dados chegarão exatamente assim: JSON. Esta aula é o alicerce daquela.

## 6. Desestruturação — extraindo valores com elegância

```javascript
const aluno = { nome: "Maria", idade: 19, curso: "SI" };

// Sem desestruturação:
const nome1 = aluno.nome;
const idade1 = aluno.idade;

// Com desestruturação (mesmo efeito, uma linha):
const { nome, idade } = aluno;
console.log(nome, idade);        // Maria 19

// Funciona com arrays também (pega pela POSIÇÃO):
const [primeiro, segundo] = [10, 20, 30];
console.log(primeiro, segundo);  // 10 20

// E em parâmetros de função — padrão muito comum:
function apresentar({ nome, curso }) {
  console.log(`${nome} estuda ${curso}`);
}
apresentar(aluno);               // Maria estuda SI
```

## 🏋️ Exercícios da aula

Na pasta `aula-06/`:

1. **`ex01.js`** — Crie um objeto que representa **você** (nome, idade, curso, array de hobbies e um objeto aninhado `contato` com email). Imprima uma apresentação completa usando template literals;
2. **`ex02.js`** — Ao objeto do ex01, adicione o método `resumo()` que **retorna** (não imprime) uma string com nome e curso usando `this`. Chame-o e imprima o resultado;
3. **`ex03.js`** — Crie o array `produtos` com 4 objetos (`nome`, `preco`, `estoque`). Percorra imprimindo `Nome — R$ preco (X em estoque)` e, ao final, o **valor total do estoque** (Σ preço × quantidade);
4. **`ex04.js`** — No array do ex03: encontre o produto mais caro (padrão "maior valor" da aula 05, adaptado para objetos) e conte quantos estão com `estoque === 0`;
5. **`ex05.js`** — Converta o array de produtos em JSON com `JSON.stringify(produtos, null, 2)` (descubra o que os argumentos extras fazem) e imprima. Depois faça o caminho inverso com `JSON.parse` e prove que voltou a ser objeto acessando uma propriedade;
6. **Desafio 🌶️ `ex06.js`** — Escreva `buscarPorNome(lista, nome)` que retorna o **objeto** do produto com aquele nome, ou `null` se não existir. Use desestruturação em algum ponto da solução.

## 🧠 Revisão

[8 questões de múltipla escolha](revisao/README.md) para conferir se os conceitos ficaram sólidos. Responda sem consultar a aula — depois volte e corrija.

## ✅ Entrega

```bash
git add aula-06/
git commit -m "Resolve exercícios da aula 06 (objetos)"
git push
```

---

⬅️ [Aula 05](../aula-05-arrays/README.md) | ➡️ [Aula 07 — Funções Avançadas](../aula-07-funcoes-avancadas/README.md)
