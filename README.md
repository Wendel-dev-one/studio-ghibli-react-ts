# 🎬 Studio Ghibli — Catálogo de Filmes

Aplicação web desenvolvida em **React + TypeScript + Vite** que consome a [Studio Ghibli API](https://ghibliapi.vercel.app/) para exibir um catálogo completo de filmes do estúdio, com navegação entre páginas e página de detalhes de cada filme.

---

## ✨ Funcionalidades

- 🗂 **Listagem de filmes** — todos os filmes do Studio Ghibli, ordenados alfabeticamente
- ➕ **"Ver mais"** — carregamento paginado (10 em 10 cards) sem recarregar a página
- 🔍 **Página de detalhes** — título, título original, sinopse, diretor, produtor, ano, duração e nota Rotten Tomatoes
- 🧭 **Navegação SPA** — roteamento com React Router DOM (sem reload)
- 📱 **Responsivo** — layout adaptado para mobile, tablet e desktop
- 🍔 **Menu mobile** — header com menu hambúrguer animado
- ℹ️ **Página Sobre** — informações sobre a API utilizada
- ⏳ **Loading unificado** — spinner global consistente em todas as páginas

---

## 🛠 Stack e Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI e componentes |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Bundler e dev server |
| React Router DOM | 7 | Roteamento SPA |
| Tailwind CSS | 4 | Estilização utilitária |

---

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── Header/           # Navbar com menu desktop e hambúrguer mobile
│   ├── Footer/           # Rodapé com links externos
│   ├── ListMoviesCards/  # Grid de cards de filmes + botão "Ver mais"
│   ├── MovieCard/        # Card individual de filme (Link navegável)
│   └── LoadingSpinner/   # Spinner de carregamento reutilizável
│
├── pages/
│   ├── MovieDetails/     # Página de detalhes de um filme específico
│   └── About/            # Página sobre a API
│
├── hooks/
│   ├── useMovies.ts      # Busca, ordenação e paginação da listagem
│   └── useMovieDetails.ts# Busca dos detalhes de um filme por ID
│
├── types/
│   └── movie.ts          # Interface Movie (tipagem da API)
│
├── styles/
│   └── globals.css       # Tema, variáveis CSS, estilos base e spinner global
│
├── App.tsx               # Rotas da aplicação
└── main.tsx              # Ponto de entrada + BrowserRouter
```

---

## 🗺 Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `ListMoviesCards` | Listagem paginada de todos os filmes |
| `/movie/:id` | `MovieDetails` | Detalhes de um filme específico |
| `/about` | `About` | Informações sobre a API |

---

## 🪝 Custom Hooks

### `useMovies`
Encapsula toda a lógica da listagem: fetch à API, ordenação alfabética e controle de `visibleCount`.

```ts
const { movies, loading, visibleMoviesCount, showMore } = useMovies();
```

### `useMovieDetails`
Encapsula o fetch dos detalhes de um filme a partir do `id` capturado pelo `useParams`.

```ts
const { movie, loading } = useMovieDetails(id);
```

---

## 🧩 Componentes

### `<MovieCard movie={movie} />`
Recebe um objeto `Movie` e renderiza o card navegável. Exporta também a constante `cardBaseClass` com as classes Tailwind base do card, reutilizada no botão "Ver mais".

### `<LoadingSpinner message="..." />`
Spinner de carregamento unificado. Usa as classes CSS globais `loader-container` e `spinner` definidas em `globals.css`. A cor do spinner segue o dourado principal do tema (`#e6b450`).

---

## 🎨 Design System

As variáveis de design ficam centralizadas no `globals.css` via `@theme` do Tailwind v4:

- **Cor primária:** `#e6b450` (dourado/âmbar)
- **Fundo principal:** `#0d1117` (dark)
- **Tipografia heading:** `Cinzel`, `Playfair Display`, Georgia
- **Tipografia corpo:** `Inter`, system-ui

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Wendel-dev-one/desafio-react-ts-api-filmes.git

# Entre na pasta
cd desafio-react-ts-api-filmes

# Instale as dependências
npm install
```

### Scripts disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera o build de produção (TypeScript + Vite)
npm run build

# Pré-visualiza o build de produção
npm run preview

# Roda o linter
npm run lint
```

---

## 🌐 API Utilizada

**Studio Ghibli API** — [`https://ghibliapi.vercel.app`](https://ghibliapi.vercel.app)

- Sem autenticação (acesso livre)
- Retorna dados em JSON
- Endpoints usados neste projeto:

| Endpoint | Descrição |
|---|---|
| `GET /films` | Lista todos os filmes |
| `GET /films/:id` | Retorna os detalhes de um filme específico |

---

## 👤 Desenvolvedor

Desenvolvido por **Wendel Silva**  
[GitHub](https://github.com/Wendel-dev-one)
