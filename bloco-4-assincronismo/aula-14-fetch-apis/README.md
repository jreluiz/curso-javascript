# Aula 14 — Fetch: Consumindo APIs Reais

> 🎯 Objetivos: buscar dados reais da internet com `fetch`, tratar erros e exibir o resultado na página.

## 1. O que é uma API?

Uma **API** (interface de programação) é, para nossos fins, **um endereço na internet que devolve dados em vez de páginas**. Você acessa uma URL e recebe **JSON** (aula 06!):

Abra no navegador: <https://viacep.com.br/ws/01310100/json/>

```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

Isso é a API **ViaCEP**: consulta gratuita de CEPs brasileiros, sem cadastro. Praticamente todo app que você usa funciona assim por dentro: o front-end (JS no navegador) pede dados a APIs e desenha a tela.

## 2. `fetch` — o carteiro do JavaScript

O `fetch(url)` faz uma requisição e retorna... uma **Promise** (por isso a aula 13 veio antes!):

```javascript
const buscarCep = async (cep) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = await resposta.json();     // extrai o JSON (também é assíncrono!)
  console.log(dados);
};

buscarCep("01310100");
```

Os **dois awaits** são o padrão fixo do `fetch`:

1. `await fetch(url)` → espera a **resposta** do servidor chegar;
2. `await resposta.json()` → espera o **corpo** ser lido e convertido de JSON para objeto.

A partir daí, `dados` é um objeto JS comum: `dados.logradouro`, `dados.localidade`...

## 3. Tratando os DOIS tipos de erro

```javascript
const buscarCep = async (cep) => {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // Tipo 1: o servidor respondeu com erro (404, 500...)
    // O fetch NÃO rejeita nesses casos — é preciso conferir:
    if (!resposta.ok) {
      throw new Error(`Servidor respondeu com erro ${resposta.status}`);
    }

    const dados = await resposta.json();

    // Particularidade do ViaCEP: CEP inexistente devolve { erro: true }
    if (dados.erro) {
      throw new Error("CEP não encontrado");
    }

    return dados;
  } catch (erro) {
    // Tipo 2: a requisição nem completou (sem internet, URL errada) — cai direto aqui
    console.log(`Falha na busca: ${erro.message}`);
    return null;
  }
};
```

> 💡 `throw new Error("...")` "lança" um erro de propósito, que é capturado pelo `catch` mais próximo — centralizando todo o tratamento num lugar só. Vocês reencontrarão exatamente essa mecânica em Java (`throw` / `try` / `catch`).

## 4. Fetch + DOM: o app completo

Buscador de CEP com tudo que o curso ensinou:

```html
<input type="text" id="campo-cep" placeholder="Digite o CEP (só números)" maxlength="8" />
<button id="btn-buscar">Buscar</button>
<p id="status"></p>
<div id="resultado"></div>
```

```javascript
const campo = document.querySelector("#campo-cep");
const botao = document.querySelector("#btn-buscar");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado");

const buscar = async () => {
  const cep = campo.value.trim();

  if (cep.length !== 8 || Number.isNaN(Number(cep))) {     // validação (aula 11)
    status.textContent = "⚠️ CEP deve ter 8 números.";
    return;
  }

  status.textContent = "🔄 Buscando...";                    // feedback de carregamento
  resultado.innerHTML = "";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resposta.ok) throw new Error(`Erro ${resposta.status}`);
    const dados = await resposta.json();
    if (dados.erro) throw new Error("CEP não encontrado");

    status.textContent = "✅ Encontrado!";
    resultado.innerHTML = `
      <p><strong>Endereço:</strong> ${dados.logradouro || "(não informado)"}</p>
      <p><strong>Bairro:</strong> ${dados.bairro || "(não informado)"}</p>
      <p><strong>Cidade/UF:</strong> ${dados.localidade}/${dados.uf}</p>
    `;
  } catch (erro) {
    status.textContent = `❌ ${erro.message}`;
  }
};

botao.addEventListener("click", buscar);
campo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscar();
});
```

Repare no ciclo de **feedback ao usuário**: carregando → sucesso ou erro. Todo app decente faz isso — e é critério do projeto final.

## 5. APIs abertas para explorar

Todas gratuitas e sem chave de acesso — candidatas para o projeto final:

| API | O que faz | Exemplo |
|-----|-----------|---------|
| ViaCEP | CEPs brasileiros | `viacep.com.br/ws/01310100/json/` |
| BrasilAPI | CEPs, feriados, bancos, DDDs | `brasilapi.com.br/api/feriados/v1/2026` |
| PokéAPI | Dados de Pokémon | `pokeapi.co/api/v2/pokemon/pikachu` |
| REST Countries | Dados de países | `restcountries.com/v3.1/name/brazil` |
| Advice Slip | Conselhos aleatórios (inglês) | `api.adviceslip.com/advice` |
| Open-Meteo | Previsão do tempo | `open-meteo.com` (ver docs) |

> 💡 Antes de programar, **abra a URL no navegador** e estude o formato do JSON que ela devolve. Atenção: algumas devolvem um **array** de objetos (`dados[0].nome`), outras um objeto com listas dentro.

## 🏋️ Exercícios da aula

Na pasta `aula-14/`:

1. **Buscador de CEP** — Reproduza o app da seção 4 e teste os três cenários: CEP válido, CEP inexistente (ex.: 99999999) e CEP mal formatado;
2. **Pokédex mínima** — Campo para o nome do Pokémon; ao buscar, mostre nome, número (`id`) e a imagem (`sprites.front_default` numa tag `<img>` criada via DOM). Trate o 404 de Pokémon inexistente (a PokéAPI responde `404` — seu `resposta.ok` vai pegar!);
3. **Feriados do ano** — Com a BrasilAPI, busque os feriados de 2026 e renderize uma lista `data — nome`. Repare: a resposta é um **array** — use seu `forEach`/`map`;
4. **Desafio 🌶️** — No exercício 3, adicione um `<select>` com os meses; ao escolher, mostre apenas os feriados daquele mês (`filter` sobre os dados já baixados — sem buscar de novo!).

## ✅ Entrega

```bash
git add aula-14/
git commit -m "Resolve exercícios da aula 14 (fetch e APIs)"
git push
```

---

⬅️ [Aula 13](../aula-13-promises-async/README.md) | ➡️ [Aula 15 — Projeto Final](../aula-15-projeto-final/README.md)
