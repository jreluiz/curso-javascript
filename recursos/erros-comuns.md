# 🧯 Erros Comuns de JavaScript

Os erros que **toda** turma comete, com diagnóstico e cura. Regra número 1: **leia a mensagem** — ela diz o tipo do erro, o arquivo e a linha.

## No Node e no navegador

### `ReferenceError: x is not defined`

**Causa:** variável/função usada antes de existir, ou nome digitado errado (`console.lgo`, `nomme`).
**Cura:** confira a grafia (maiúsculas contam! `nomeAluno` ≠ `nomealuno`) e se a declaração vem antes do uso.

### `TypeError: Assignment to constant variable`

**Causa:** tentou reatribuir uma `const`.
**Cura:** se o valor realmente precisa mudar, declare com `let`. (Lembre: alterar o **conteúdo** de um array/objeto `const` pode; trocar a **caixa** não.)

### `SyntaxError: Unexpected token / missing ) after...`

**Causa:** parêntese, chave ou aspas sem fechar.
**Cura:** o VS Code destaca pares — clique ao lado de cada `(`/`{` e olhe o par iluminado. O erro real costuma estar **antes** da linha apontada.

### Resultado `NaN`

**Causa:** conta com algo que não é número — quase sempre uma string que veio de `input.value` ou de coerção (`"abc" * 2`).
**Cura:** converta com `Number()` e valide com `Number.isNaN()` antes de calcular.

### Resultado `undefined`

**Causa clássica 1:** função sem `return` (só com `console.log` dentro).
**Causa clássica 2:** acessou propriedade que não existe (`aluno.idadee`).
**Cura:** confira o `return` e dê `console.log` no objeto inteiro para ver as chaves reais.

### `"15" + 5` deu `"155"`

**Causa:** coerção — string "gruda" com `+`.
**Cura:** `Number()` antes de somar. Todo valor vindo do usuário é string!

### Loop infinito (programa travado)

**Causa:** `while` cuja condição nunca vira falsa (esqueceu o `contador++`).
**Cura:** `Ctrl+C` no terminal (ou fechar a aba no navegador) e conferir o incremento.

### Comparação estranha com `==`

**Causa:** `0 == false`, `"5" == 5`... o `==` converte tipos.
**Cura:** use **sempre** `===` / `!==`. Sem exceção.

## Só no navegador (Bloco 3+)

### `TypeError: Cannot read properties of null (reading 'textContent')`

**O erro nº 1 do semestre.** O `querySelector` não encontrou o elemento e devolveu `null`.
**Cura, nesta ordem:**
1. O seletor bate com o HTML? (`#id` para id, `.classe` para classe — o `#`/`.` esquecido é clássico);
2. O `<script>` está **no final do `<body>`**? Se roda antes de o HTML existir, tudo é `null`;
3. Salvou o arquivo HTML? 🙂

### `Cannot read properties of undefined (reading 'x')`

**Causa:** navegou fundo demais num objeto (`dados.endereco.rua` quando `endereco` não existe) — comum com respostas de API.
**Cura:** `console.log(dados)` e inspecione a estrutura real no Console (dá para expandir os objetos clicando).

### Nada acontece ao clicar no botão

**Checklist:** o Console mostra algum erro? O `addEventListener` está no elemento certo? O nome do evento é `"click"` (sem H)? O `<script src>` aponta para o arquivo certo (veja a aba Network / erros 404 no Console)?

### Alterei o JS e a página não mudou

**Causa:** cache, ou esqueceu de salvar.
**Cura:** `Ctrl+S` no arquivo e `Ctrl+Shift+R` no navegador (recarregar ignorando cache). O Live Server evita isso.

### `Failed to fetch` (Bloco 4)

**Causa:** URL errada, sem internet, ou API fora do ar.
**Cura:** cole a URL exata (dê `console.log` dela — variáveis no template literal podem estar vazias!) no navegador e veja o que volta.

### A API respondeu, mas meu código quebra

**Causa:** a estrutura do JSON não é a que você imaginou (é um array? o campo tem outro nome?).
**Cura:** sempre comece com `console.log(dados)` após o `resposta.json()` e desenhe o caminho até o campo desejado.

## Método universal de depuração

1. **Leia o erro** (tipo, arquivo, linha);
2. **`console.log` em tudo** que estiver suspeito — variáveis, objetos, "cheguei aqui!";
3. **Isole:** reproduza o problema no menor código possível;
4. **Explique em voz alta** para alguém (ou para um pato de borracha — [é uma técnica real](https://pt.wikipedia.org/wiki/Debug_com_pato_de_borracha));
5. Só então pesquise/pergunte — já sabendo descrever o problema com precisão.

---

🏠 [Voltar ao início](../README.md)
