# 🛠️ Preparação do Ambiente

Faça esta configuração **antes da Aula 01** (ou na própria aula, com calma).

## 1. Node.js

O Node executa JavaScript fora do navegador — é como rodaremos os programas dos Blocos 1 e 2.

1. Baixe a versão **LTS** em <https://nodejs.org/pt>;
2. Instale aceitando as opções padrão;
3. Verifique no terminal (Git Bash no Windows):

```bash
node --version     # deve mostrar algo como v22.x.x
```

Teste rápido: crie um arquivo `teste.js` com `console.log("funciona!")` e rode `node teste.js`.

> ⚠️ **Não usaremos `npm install` neste curso.** Node puro basta — e assim ninguém corre o risco de commitar uma pasta `node_modules` gigante (o `.gitignore` protege de qualquer forma).

## 2. VS Code

Editor oficial do curso: <https://code.visualstudio.com/>.

Extensões recomendadas (aba de extensões, `Ctrl+Shift+X`):

| Extensão | Para quê |
|----------|----------|
| **Portuguese (Brazil) Language Pack** | Interface em português (opcional) |
| **Live Server** | Bloco 3: recarrega a página a cada save (botão direito no HTML → *Open with Live Server*) |
| **Error Lens** | Mostra erros na própria linha, em tempo real |

Atalhos que valem ouro:

- `Ctrl + '` — abre o terminal integrado (dá para rodar `node` e `git` sem sair do editor);
- `Ctrl + Shift + V` — preview de arquivos Markdown;
- `Alt + Shift + F` — formata/indenta o código automaticamente.

## 3. Git configurado

Você já fez isso no [curso de Git e GitHub](https://github.com/jreluiz/curso-git-github). Confira:

```bash
git --version
git config --list      # user.name e user.email devem aparecer
```

## 4. O repositório de exercícios

Se ainda não fez o Exercício 05 do curso de Git, faça agora: crie o repositório **`exercicios-javascript`** com `.gitignore` de Node e README. É nele que **todas** as aulas serão entregues.

## ✅ Checklist final

- [ ] `node --version` responde;
- [ ] VS Code com Live Server instalado;
- [ ] `git config --list` mostra seu nome e e-mail;
- [ ] Repositório `exercicios-javascript` criado e com push funcionando.

---

🏠 [Voltar ao início](../README.md)
