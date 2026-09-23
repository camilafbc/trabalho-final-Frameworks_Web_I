# CineFlow

Projeto Final da disciplina **Frameworks Web I**.

O CineFlow é uma plataforma de busca de filmes desenvolvida com React e Vite, integrada à [API do TMDB](https://developer.themoviedb.org/docs). A aplicação permite pesquisar filmes por título, navegar por categorias de gênero, consultar filmes populares e visualizar os detalhes de cada filme.

Integrantes:

- Anna Alexandre Olímpio
- Camila Fernanda Batista Coelho
- Lucas Paredes Braga

## Funcionalidades

- Busca de filmes por título;
- Navegação por gêneros/categorias;
- Listagem de filmes populares;
- Paginação dos resultados;
- Visualização dos detalhes de um filme;
- Interface em português do Brasil.

## Tecnologias

- React;
- Vite;
- React Router;
- Material UI;
- Axios;
- API do TMDB.

## Como executar localmente

### Pré-requisitos

- Node.js instalado;
- Uma chave de acesso da API do TMDB.

### Instalação

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone https://github.com/camilafbc/trabalho-final-Frameworks_Web_I
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e informe o token da API do TMDB:

   ```env
   VITE_TMDB_API_KEY=seu_token_do_tmdb
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Outros comandos

```bash
npm run build      # Gera a versão de produção
npm run preview    # Visualiza a build de produção localmente
npm run lint       # Executa a verificação do ESLint
```

Não compartilhe o conteúdo do arquivo `.env` nem publique sua chave da API.
