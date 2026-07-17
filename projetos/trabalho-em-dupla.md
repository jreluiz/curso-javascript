# 🤝 Trabalho em Dupla — Quiz via Pull Request

> 📅 Lançado no Bloco 3 (após a aula 11) · Peso: 30% da nota
> 👥 Duplas definidas em aula

## Objetivo

Construir, **em dupla e via Pull Requests**, um **quiz interativo** de 8+ perguntas sobre qualquer tema (a própria disciplina, cultura pop, esportes...). Além do JavaScript, este trabalho avalia o **fluxo de colaboração Git** do Módulo 6 do curso de Git/GitHub.

## A dinâmica de colaboração (parte da nota!)

1. O **Aluno A** cria o repositório `quiz-<tema>` e adiciona o Aluno B como *collaborator* (Settings → Collaborators);
2. **Ninguém commita direto no `main`.** Toda contribuição segue: branch → commits → push → **Pull Request** → o **outro** aluno revisa (comenta de verdade!) e faz o merge;
3. Divisão sugerida (negociem e registrem no README):
   - Aluno A: estrutura HTML/CSS + array de perguntas;
   - Aluno B: lógica de exibição e pontuação;
   - Ambos: melhorias finais, cada um via seu PR;
4. **Mínimo de 3 PRs por aluno**, revisados pelo colega.

## Requisitos funcionais

O quiz deve:

- [ ] Guardar as perguntas num **array de objetos** — formato sugerido:
  ```javascript
  const perguntas = [
    {
      texto: "Qual operador de igualdade devemos usar em JS?",
      alternativas: ["==", "===", "=", "!=="],
      correta: 1,                              // índice da alternativa certa
    },
    // ...
  ];
  ```
- [ ] Exibir **uma pergunta por vez**, com alternativas clicáveis (botões gerados via `createElement` a partir do array — nada de HTML fixo por pergunta!);
- [ ] Dar feedback visual imediato (acertou/errou — `classList`);
- [ ] Mostrar a pontuação final com uma mensagem conforme o desempenho;
- [ ] Ter um botão "Jogar novamente" que zera o estado;
- [ ] Estar **publicado no GitHub Pages**, com o link no README.

## Critérios de avaliação

| Critério | Peso |
|----------|:---:|
| Funcionamento completo dos requisitos | 40% |
| Fluxo Git: branches, PRs com revisão real, mensagens de commit, ambos contribuindo | 30% |
| Qualidade do código: funções bem divididas, nomes claros, sem duplicação | 20% |
| README (descrição, link do Pages, divisão de tarefas, como executar) | 10% |

> ⚠️ O `git log` e a aba de PRs mostram **quem fez o quê**. Contribuições muito desequilibradas terão notas individualizadas. Combinem, dividam, conversem — colaborar é o objetivo do trabalho.

## Entrega

Enviar pelo canal combinado: link do **repositório** + link do **Pages**.
