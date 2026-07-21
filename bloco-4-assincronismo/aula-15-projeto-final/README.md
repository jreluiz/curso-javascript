# Aula 15 — Desenvolvimento do Projeto Final

> 🎯 Objetivo: aula-laboratório dedicada ao projeto final — mão na massa do início ao fim. 😄

A especificação completa está em [`projetos/projeto-final.md`](../../projetos/projeto-final.md). Reserve esta aula como o seu tempo protegido de desenvolvimento.

## Roteiro sugerido para a aula

### 1. Antes de escrever código (15 min)

- [ ] Escolha a API e **abra as URLs no navegador** — entenda o JSON antes de programar;
- [ ] Rabisque no papel: quais telas/estados o app tem? (inicial, carregando, sucesso, erro);
- [ ] Crie o repositório, o `index.html` esqueleto e o primeiro commit (`"Estrutura inicial do projeto"`).

### 2. Construa em fatias finas (o resto da aula)

Ordem que funciona — cada etapa termina com **commit**:

1. **HTML estático:** campos, botão, áreas de status e resultado → commit;
2. **Fetch no console:** busca funcionando com `console.log` do resultado, sem DOM → commit;
3. **Renderização:** resultado aparecendo na página → commit;
4. **Validação + erros:** entrada validada, CEP/termo inexistente tratado, mensagem amigável → commit;
5. **Carregando:** feedback "🔄 buscando..." → commit;
6. **CSS e capricho:** aparência, responsividade básica → commit;
7. **Pages + README:** publica e documenta → commit final.

> 📏 Se travar mais de 15 minutos no mesmo erro: leia a mensagem no Console com calma, isole o problema num arquivo mínimo, e consulte o [guia de erros comuns](../../recursos/erros-comuns.md). Aprender a **destravar** é parte do ofício. 🙂

## Erros que vão aparecer (aposto)

| Sintoma | Provável causa |
|---------|----------------|
| `Cannot read properties of null` | Seletor errado ou `<script>` antes do HTML |
| `Cannot read properties of undefined` | O caminho no JSON não é o que você acha — dê `console.log(dados)` e inspecione |
| Resultado não aparece, sem erro | Esqueceu de chamar `renderizar()`/atualizar o DOM após o fetch |
| `Failed to fetch` | URL errada, sem internet, ou API fora do ar — teste a URL no navegador |
| Página do Pages desatualizada | Esqueceu o push, ou o cache — force com Ctrl+Shift+R |

## 🧠 Revisão

[8 questões de múltipla escolha](revisao/README.md) sobre diagnóstico de erros e método de trabalho — o conteúdo desta aula. Responda sem consultar — depois volte e corrija.

## Checklist de fim de aula

- [ ] Pelo menos as fatias 1–3 concluídas e **commitadas**;
- [ ] `git push` dado (confira no navegador!);
- [ ] Anotou (numa issue do seu próprio repositório!) o que falta para a entrega.

---

⬅️ [Aula 14](../aula-14-fetch-apis/README.md) | ➡️ [Aula 16 — Revisão e Próximos Passos](../aula-16-revisao-proximos-passos/README.md)
