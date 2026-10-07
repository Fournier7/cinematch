# 🎬 CineMatch

Digite um filme que você gosta e receba **5 sugestões parecidas**, comparando sinopse e gêneros. Pelo menos uma delas é uma **joia pouco conhecida**.

**Site no ar:** https://seu-cinematch.netlify.app

## O que o site faz

- **Busca com sugestões:** conforme você digita, aparecem filmes com pôster e ano. Dá para navegar pelas setas do teclado.
- **5 filmes parecidos:** cada um vem com nota, gêneros (os que são iguais ao do seu filme ficam destacados) e sinopse.
- **💎 Joia pouco conhecida:** um dos cinco é um filme bem avaliado, mas com poucos votos.
- **Onde assistir:** mostra os serviços no Brasil em que o filme está disponível (streaming, aluguel ou compra).
- **Filtros:** por gênero, época e nota mínima.
- **Já vi:** marque filmes que você já assistiu para não vê-los de novo. A lista fica salva no navegador.
- **Clássicos na home:** pôsteres para começar a explorar com um clique.

## Como as sugestões são escolhidas

O site usa a API do TMDB e monta uma lista de candidatos a partir das recomendações do próprio TMDB, de filmes similares e de filmes que compartilham gêneros e palavras-chave com o filme escolhido. Depois dá uma nota a cada candidato, combinando:

1. **Semelhança entre as sinopses**, comparando as palavras mais características de cada texto.
2. **Gêneros em comum.**
3. **Presença nas recomendações do TMDB.**
4. **Nota do público.**

A "joia pouco conhecida" é o candidato mais parecido entre os filmes com até 2.500 votos e nota de pelo menos 6,3.

## Tecnologias

- HTML, CSS e JavaScript puro, sem frameworks
- [TMDB API](https://www.themoviedb.org/documentation/api) para filmes, pôsteres e sinopses
- Netlify (hospedagem) e Netlify Functions (servidor para esconder a chave)
- Git e GitHub

## Segurança da chave

A chave da API do TMDB **não está no código**. O navegador chama uma função (`netlify/functions/tmdb.js`), e só ela conhece a chave, guardada em uma variável de ambiente no Netlify. A função aceita apenas as consultas que o site usa. O arquivo `public/_headers` define cabeçalhos de segurança, como a política de conteúdo (CSP).

## Estrutura

```
cinematch/
├── public/
│   ├── index.html        # o site inteiro (HTML, CSS e JS)
│   └── _headers          # cabeçalhos de segurança
├── netlify/functions/
│   └── tmdb.js           # função que fala com o TMDB usando a chave
├── netlify.toml          # configuração do Netlify
└── README.md
```

## Como publicar a sua própria cópia

1. Crie uma conta e peça uma chave em [themoviedb.org](https://www.themoviedb.org) (Configurações → API).
2. Faça um fork ou clone deste repositório.
3. No [Netlify](https://app.netlify.com): **Add new project → Import an existing project** e escolha o repositório.
4. Em **Environment variables**, crie `TMDB_KEY` com a sua chave (marque *Contains secret values*).
5. Faça o deploy e abra o link.

## Sobre este projeto

Este é um projeto de estudo, vindo de uma ideia pessoal de um amante de filmes, feito com **ajuda de IA** (Claude). Eu o usei para aprender o caminho completo de colocar uma ideia no ar: usar uma API, publicar no Netlify, guardar segredos em variáveis de ambiente e versionar com Git e GitHub.

**O que aprendi fazendo:**

- Como uma API funciona e como obter uma chave de acesso
- Seguran;ca de chave e como esconder uma com uma função no servidor
- Publicar um site com deploy automático a cada commit
- Usar o GitHub Desktop para versionar o projeto

## Créditos

Este produto usa a API do TMDB, mas não é endossado ou certificado pelo [TMDB](https://www.themoviedb.org). Dados de onde assistir fornecidos pelo JustWatch.
