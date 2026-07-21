# Aula 16 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 16 — Revisão e Próximos Passos](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A16-01

O que este trecho imprime?

```javascript
class Aluno {
  constructor(nome, curso) {
    this.nome = nome;
    this.curso = curso;
    this.notas = [];
  }
}

const maria = new Aluno("Maria", "SI");
console.log(maria.nome, maria.notas.length);
```

- **a)** `Maria undefined`
- **b)** `undefined 0`
- **c)** `Maria 0`
- **d)** Nada: falha, porque as propriedades não foram declaradas antes.

↩︎ *Aula 16, seção 2 — Classes em JavaScript*

---

### Q-A16-02

O papel do `constructor` em uma classe é:

- **a)** destruir o objeto ao final do programa;
- **b)** declarar os tipos das propriedades da classe;
- **c)** definir quais métodos serão públicos;
- **d)** executar no momento em que um objeto é criado com `new`, inicializando as propriedades.

↩︎ *Aula 16, seção 2 — Classes em JavaScript*

---

### Q-A16-03

O que este trecho imprime?

```javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  precoComDesconto(percentual) {
    return this.preco * (1 - percentual / 100);
  }
}

const p = new Produto("Mouse", 200);
console.log(p.precoComDesconto(10));
```

- **a)** `180`
- **b)** `190`
- **c)** `20`
- **d)** `200`

↩︎ *Aula 16, seção 2 — Classes em JavaScript*

---

### Q-A16-04

Comparando classes em JavaScript e em Java, o que **muda**?

- **a)** Apenas o Java tem construtor;
- **b)** Java declara tipos em tudo e tem modificadores de acesso (`private`/`public`); o JavaScript não exige nem um nem outro;
- **c)** apenas o JavaScript usa a palavra-chave `new`;
- **d)** em Java não existe `this`.

↩︎ *Aula 16, seção 2 — Classes em JavaScript*

---

### Q-A16-05

Sobre a necessidade de usar classes:

- **a)** em JavaScript a classe é obrigatória para criar qualquer objeto;
- **b)** JavaScript não possui classes: é preciso simular com funções;
- **c)** em JavaScript a classe é opcional (objetos literais resolvem a maioria dos casos simples), enquanto em Java ela é obrigatória;
- **d)** classes em JavaScript só podem ser declaradas dentro de funções `async`.

↩︎ *Aula 16, seção 2 — Classes em JavaScript*

---

### Q-A16-06

Segundo o mapa do curso, o conceito do Bloco 2 que reapareceu no Bloco 3 na forma de *event listeners* foi:

- **a)** o array;
- **b)** a desestruturação;
- **c)** o template literal;
- **d)** o callback.

↩︎ *Aula 16, seção 1 — O mapa do curso em uma tela*

---

### Q-A16-07

E o conteúdo do Bloco 2 que reapareceu no Bloco 4 como resposta de API foi:

- **a)** o laço `for`;
- **b)** objetos e JSON;
- **c)** o operador ternário;
- **d)** o escopo de função.

↩︎ *Aula 16, seção 1 — O mapa do curso em uma tela*

---

### Q-A16-08

No roteiro de estudos pós-curso, o recurso indicado para **persistir dados no navegador** é:

- **a)** `localStorage`
- **b)** TypeScript
- **c)** npm
- **d)** Flexbox

↩︎ *Aula 16, seção 3 — O que deixamos de fora*

---

⬅️ [Voltar à Aula 16](../README.md) | 🏠 [Plano de aulas](../../../README.md)
