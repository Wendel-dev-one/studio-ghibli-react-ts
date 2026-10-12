export const Footer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-6 mt-auto">
      <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-5 bg-[#0d1723]/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl relative overflow-hidden">

        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 flex items-center justify-center bg-amber-400 rounded-full overflow-hidden opacity-90">
              <img src="./images/logo.png" alt="Studio Ghibli Logo" />
            </div>
            <h3 className="text-amber-400 font-heading text-sm md:text-base font-bold tracking-[0.15em] uppercase">
              Studio Ghibli Challenge
            </h3>
          </div>
          <p className="text-xs text-gray-400 max-w-md leading-relaxed">
            Projeto desenvolvido para exercitar o consumo de APIs com React, TypeScript e Tailwind CSS.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3 mt-2 md:mt-0">
          <div className="flex gap-4 items-center">
            <a 
              href="https://ghibliapi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-amber-400 transition-colors"
            >
              Ghibli API
            </a>
            
            <span className="text-slate-600/70 font-light text-sm mb-0.5">|</span>
            
            <a 
              href="https://github.com/Wendel-dev-one" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-amber-400 transition-colors"
            >
              Github
            </a>
          </div>
          
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
            &copy; 2026 - Desenvolvido por Wendel Silva
          </p>
        </div>
      </footer>
    </div>
  );
};
