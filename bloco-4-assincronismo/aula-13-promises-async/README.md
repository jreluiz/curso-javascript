# Aula 13 — Assincronismo: Promises e async/await

> 🎯 Objetivos: entender por que existe código assíncrono, ler Promises e escrever `async/await` — a preparação direta para consumir APIs.

## 1. O problema: coisas que demoram

Buscar dados na internet demora (milissegundos ou segundos). Se o JavaScript **parasse** para esperar, a página inteira congelaria — nenhum clique funcionaria. Por isso o JS é **assíncrono**: dispara a tarefa demorada, **continua executando o resto**, e trata o resultado quando ele chegar.

Prova com `setTimeout` (agenda um callback para o futuro):

```javascript
console.log("1 — Pedido feito");

setTimeout(() => {
  console.log("3 — Pizza chegou! 🍕 (2s depois)");
}, 2000);

console.log("2 — Vou assistindo TV enquanto espero");
```

Saída — repare que a ordem **não** é a ordem das linhas:

```
1 — Pedido feito
2 — Vou assistindo TV enquanto espero
3 — Pizza chegou! 🍕 (2s depois)
```

> 💡 **Analogia:** você não fica parado na porta olhando para a rua depois de pedir pizza. Faz outras coisas, e a campainha (o callback) avisa quando chegar.

## 2. Promises — o "comprovante" de uma tarefa futura

Uma **Promise** é um objeto que representa um valor que **ainda não existe, mas vai existir** (ou falhar). É o comprovante do pedido: não é a pizza, mas dá direito a ela.

Estados de uma Promise:

- ⏳ **pending** — em andamento;
- ✅ **fulfilled** — deu certo, o valor chegou;
- ❌ **rejected** — deu errado (rede caiu, servidor fora...).

Consumindo uma Promise com `.then()` e `.catch()`:

```javascript
// buscarUsuario() retorna uma Promise (função fictícia, definida logo abaixo)
buscarUsuario(1)
  .then((usuario) => {
    console.log(`Chegou: ${usuario.nome}`);   // roda QUANDO der certo
  })
  .catch((erro) => {
    console.log(`Falhou: ${erro.message}`);   // roda SE der errado
  });

console.log("Esta linha roda ANTES do resultado chegar!");
```

Para os curiosos, criar uma Promise (você raramente precisará escrever uma — mas desmistifica):

```javascript
const buscarUsuario = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {                        // simula a demora da rede
      if (id === 1) resolve({ id: 1, nome: "Maria" });
      else reject(new Error("Usuário não encontrado"));
    }, 1500);
  });
```

## 3. `async/await` — Promises com cara de código normal

O `.then()` encadeado fica confuso rapidamente. O `async/await` permite **escrever código assíncrono que se lê como síncrono**:

```javascript
const principal = async () => {              // async: esta função lida com Promises
  try {
    console.log("Buscando usuário...");
    const usuario = await buscarUsuario(1);  // await: "espere" a Promise resolver
    console.log(`Chegou: ${usuario.nome}`);

    const pedidos = await buscarPedidos(usuario.id);   // sequência natural!
    console.log(`Pedidos: ${pedidos.length}`);
  } catch (erro) {
    console.log(`Algo falhou: ${erro.message}`);       // qualquer reject cai aqui
  }
};

principal();
console.log("O programa continua — o await só pausa a função async!");
```

As três regras:

1. **`await` só funciona dentro de função `async`**;
2. `await promessa` "pausa" a função até a Promise resolver, e devolve o **valor** (não a Promise);
3. Erros de Promises rejeitadas são capturados com **`try/catch`** (o mesmo `try/catch` que existe em Java!).

> 📏 **Neste curso, usaremos `async/await` + `try/catch` como padrão.** Você precisa *ler* `.then/.catch` (a internet está cheia deles), mas *escreverá* com await.

## 4. `try/catch` — conhecendo melhor

```javascript
try {
  // código que PODE falhar
  const dados = await operacaoArriscada();
  console.log(dados);
} catch (erro) {
  // só executa SE algo no try falhar
  console.log(`Deu ruim: ${erro.message}`);
} finally {
  // opcional: executa SEMPRE (com ou sem erro) — ex.: esconder um "carregando..."
  console.log("Fim da operação.");
}
```

## 🏋️ Exercícios da aula

Na pasta `aula-13/` (rodando no Node):

1. **`ex01.js`** — Escreva `console.log`s e `setTimeout`s de forma que a saída seja, nesta ordem: "A" (imediato), "C" (imediato), "B" (após 1s), "D" (após 2s). Preveja num comentário antes de rodar;
2. **`ex02.js`** — Copie a função `buscarUsuario` de exemplo. Consuma-a com `.then/.catch`: uma chamada com `id = 1` (sucesso) e outra com `id = 99` (erro tratado);
3. **`ex03.js`** — Refaça o ex02 com `async/await` + `try/catch`. Compare a legibilidade num comentário;
4. **`ex04.js`** — Crie `esperar(ms)` que retorna uma Promise que resolve após `ms` milissegundos (dica: `new Promise` + `setTimeout` + `resolve`). Use-a numa função async para imprimir uma contagem regressiva 3, 2, 1, 🚀 com 1 segundo entre cada;
5. **Desafio 🌶️ `ex05.js`** — Crie `sortearComDemora()` : uma Promise que após 1s resolve com um número de 1 a 10, mas **rejeita** se o número sorteado for maior que 7 ("Número alto demais!"). Chame-a 5 vezes numa função async com try/catch dentro de um laço, mostrando sucesso ou erro de cada tentativa.

## ✅ Entrega

```bash
git add aula-13/
git commit -m "Resolve exercícios da aula 13 (promises e async/await)"
git push
```

---

⬅️ [Aula 12](../../bloco-3-navegador-dom/aula-12-projeto-lista-tarefas/README.md) | ➡️ [Aula 14 — Fetch e APIs](../aula-14-fetch-apis/README.md)
