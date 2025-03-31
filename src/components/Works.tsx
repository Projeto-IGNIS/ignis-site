const Works = () => {
  return (
    <section className="py-16" id="works">
      <h2 className="text-3xl font-bold mb-10">Experiências</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Work Experience Column */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Profissionais</h3>
          <div className="space-y-4">
            <div className="bg-[#242938] rounded-lg p-4 flex items-start group hover:shadow-lg transition-all duration-300">
              <div className="mr-4">
                <div className="bg-white p-1 rounded transition-transform duration-300 group-hover:scale-105">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1r11F9YSWskpskZTyma_ljvVbps-dN8Yrw&s" alt="Bracongo" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">IOSE - Imprensa Oficial de Sergipe</h4>
                <p className="text-sm text-gray-400">
                  Suporte e Manutenção de computadores · Estágio · 28/08/2023-15/01/2025
                </p>
                <div className="hidden group-hover:flex flex-wrap gap-2 mt-2 transition-opacity duration-300">
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Windows</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Redes</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Hardware</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">LGPD</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-gray-500">1</span>
              </div>
            </div>
            <div className="bg-[#242938] rounded-lg p-4 flex items-start group hover:shadow-lg transition-all duration-300">
              <div className="mr-4">
                <div className="bg-white p-1 rounded transition-transform duration-300 group-hover:scale-105">
                  <img src="https://dhg1h5j42swfq.cloudfront.net/2015/11/03232602/TRE-SE.png" alt="Boissons" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Tribunal Reginonal Eleitoral de Sergipe - TRE/SE</h4>
                <p className="text-sm text-gray-400">
                  Desenvolvedor Backend · Estágio · 03/02/2025-Atualmente
                </p>
                <div className="hidden group-hover:flex flex-wrap gap-2 mt-2 transition-opacity duration-300">
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Java</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Spring</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Angular</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Oracle</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">PostgreSQL</span>
                  <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">Docker</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-gray-500">2</span>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Column */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Projetos Pessoais</h3>
          <div className="space-y-4">
            <div className="bg-[#242938] rounded-lg p-4 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-2">
                <div className="bg-white p-1 rounded mr-3 transition-transform duration-300 group-hover:scale-105">
                  <img src="https://avatars.githubusercontent.com/u/201299892?s=48&v=4" alt="Projeto IGNIS" className="w-8 h-8" />
                </div>
                <h4 className="font-medium">Projeto IGNIS</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Grupo de estudos focado em simular fluxo de trabalho, o uso tecnologias e ferramentas usadas no mercado de trabalho.
              </p>
              <div className="hidden group-hover:flex flex-wrap gap-2 mt-2 transition-opacity duration-300">
                {/* <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">React</span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900">TypeScript</span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900"  >GitHub</span> */}
                <a 
                  href="https://github.com/Projeto-IGNIS/todoList" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 text-xs py-1 px-2 rounded hover:bg-gray-900"
                >
                  To-do List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;