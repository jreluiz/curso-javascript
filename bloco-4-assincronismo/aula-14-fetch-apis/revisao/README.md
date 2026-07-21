# Aula 14 — Revisão: Múltipla Escolha

> 🎯 8 questões sobre a [Aula 14 — Fetch: Consumindo APIs Reais](../README.md). Só uma alternativa está correta em cada uma.

**Sem gabarito, de propósito.** Cada questão termina com a seção da aula onde a resposta está. Responda **tudo primeiro**, sem consultar — só depois volte às seções indicadas e corrija.

---

### Q-A14-01

Para os fins do curso, uma API é:

- **a)** um programa que precisa ser instalado no computador do usuário;
- **b)** uma biblioteca JavaScript usada para criar páginas;
- **c)** o banco de dados de um site;
- **d)** um endereço na internet que devolve **dados** (geralmente em JSON) em vez de páginas.

↩︎ *Aula 14, seção 1 — O que é uma API?*

---

### Q-A14-02

Por que são necessários **dois** `await` no padrão do `fetch`?

```javascript
const resposta = await fetch(url);
const dados = await resposta.json();
```

- **a)** Por segurança: o segundo `await` confirma o resultado do primeiro;
- **b)** o primeiro espera a resposta do servidor chegar; o segundo espera o corpo ser lido e convertido de JSON para objeto;
- **c)** o primeiro busca o endereço e o segundo busca os dados em um servidor diferente;
- **d)** é apenas convenção de estilo: um `await` bastaria.

↩︎ *Aula 14, seção 2 — `fetch`*

---

### Q-A14-03

Quando o servidor responde com erro **404**, o `fetch`:

- **a)** **não** rejeita a Promise — é preciso checar `resposta.ok` e lançar o erro manualmente;
- **b)** rejeita a Promise, e o `catch` captura o erro automaticamente;
- **c)** devolve `null` em vez do objeto de resposta;
- **d)** repete a requisição sozinho até obter sucesso.

↩︎ *Aula 14, seção 3 — Tratando os DOIS tipos de erro*

---

### Q-A14-04

Por que este `if` existe no buscador de CEP?

```javascript
const dados = await resposta.json();

if (dados.erro) {
  throw new Error("CEP não encontrado");
}
```

- **a)** Porque todo JSON tem uma propriedade `erro`;
- **b)** porque `resposta.ok` não funciona com o ViaCEP;
- **c)** porque o ViaCEP responde com **sucesso** mesmo para um CEP inexistente, sinalizando o problema dentro do próprio JSON;
- **d)** porque é assim que se verifica se a internet caiu.

↩︎ *Aula 14, seção 3 — Tratando os DOIS tipos de erro*

---

### Q-A14-05

O que `throw new Error("CEP não encontrado")` faz?

- **a)** Imprime a mensagem no console e segue a execução normalmente;
- **b)** encerra o programa imediatamente, sem possibilidade de tratamento;
- **c)** devolve a string como valor de retorno da função;
- **d)** lança um erro que será capturado pelo `catch` mais próximo, centralizando o tratamento em um lugar só.

↩︎ *Aula 14, seção 3 — Tratando os DOIS tipos de erro*

---

### Q-A14-06

O ciclo de feedback ao usuário exigido nos apps do curso é:

- **a)** carregando → sucesso ou erro;
- **b)** erro → carregando → sucesso;
- **c)** sucesso → carregando;
- **d)** nenhum: se a API é rápida, não é necessário dar feedback.

↩︎ *Aula 14, seção 4 — Fetch + DOM*

---

### Q-A14-07

O Console mostra `Failed to fetch`. As causas prováveis são:

- **a)** um campo do JSON tem nome diferente do esperado;
- **b)** o `<script>` está posicionado antes do HTML;
- **c)** URL errada, falta de internet ou API fora do ar;
- **d)** faltou o `await` no `resposta.json()`.

↩︎ *Aula 14, seção 3 — Tratando os DOIS tipos de erro*

---

### Q-A14-08

A API respondeu normalmente, mas o código quebra com `Cannot read properties of undefined`. O procedimento recomendado é:

- **a)** trocar a API por outra que devolva menos campos;
- **b)** dar `console.log(dados)` logo após o `resposta.json()` e conferir a estrutura real do JSON;
- **c)** remover o `try/catch` para o erro aparecer por inteiro;
- **d)** recarregar a página ignorando o cache.

↩︎ *Aula 14, seção 5 — APIs abertas para explorar* (e o [guia de erros comuns](../../../recursos/erros-comuns.md))

---

⬅️ [Voltar à Aula 14](../README.md) | ➡️ [Revisão da Aula 15](../../aula-15-projeto-final/revisao/README.md)
