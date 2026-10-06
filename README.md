# CineMatch

Digite um filme e receba 5 sugestões parecidas (sinopse + gêneros), sempre com uma joia pouco conhecida. Dados: TMDB.

## Como publicar
1. Suba este projeto no GitHub.
2. No Netlify: Add new project → Import an existing project → escolha o repositório.
3. Em Project configuration → Environment variables, crie `TMDB_KEY` com sua chave do TMDB.
4. Faça um novo deploy (Deploys → Trigger deploy).

A chave fica só no servidor (função `netlify/functions/tmdb.js`) e nunca no código público.

Este produto usa a API do TMDB, mas não é endossado ou certificado pelo TMDB.
