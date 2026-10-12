export function About() {
  return (
    <section className="flex-1 max-w-7xl mx-auto w-full p-6 text-white">
      <div className="bg-slate-800/70 rounded-xl p-6 md:p-8 border border-slate-700 shadow-xl flex flex-col gap-6">
        <h1 className="text-3xl md:text-2xl font-bold text-amber-400">
          Studio Ghibli API
        </h1>
        <p className="text-lg text-slate-300 italic">
          A Studio Ghibli API é uma API REST gratuita e open-source criada para
          desenvolvedores que desejam acessar dados detalhados sobre o universo
          de animações do famoso estúdio japonês. É muito utilizada em projetos
          de portfólio, testes de consumo de API e aplicativos educativos.
        </p>
        <h2 className="text-3xl md:text-xl font-bold text-amber-400">
          Principais Características
        </h2>
        <ul className="text-lg text-slate-300 italic">
          <li>
            - Acesso Livre (Sem Chave): Não exige criação de conta ou autenticação
            via chave de API (API Key) para requisições básicas de leitura.
          </li>
          <li>
            - Formato de Dados: Todas as respostas são retornadas em JSON.
          </li>
          <li>
            - Relacionamento de Dados: Os recursos são interligados (ex.: um filme
            contém links para seus personagens, espécies, veículos e locações).
          </li>
        </ul>
      </div>
    </section>
  );
}
