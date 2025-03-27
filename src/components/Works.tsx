const Works = () => {
  return <section className="py-16" id="works">
      <h2 className="text-3xl font-bold mb-10">Works</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Work Experience Column */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Work</h3>
          <div className="space-y-4">
            <div className="bg-[#242938] rounded-lg p-4 flex items-start">
              <div className="mr-4">
                <div className="bg-white p-1 rounded">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1r11F9YSWskpskZTyma_ljvVbps-dN8Yrw&s" alt="Bracongo" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">IOSE - Imprensa Oficial de Sergipe</h4>
                <p className="text-sm text-gray-400">
                  Suporte e Manutenção de computadores · Estágio · 28/08/2023-15/01/2025
                </p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-gray-500">1</span>
              </div>
            </div>
            <div className="bg-[#242938] rounded-lg p-4 flex items-start">
              <div className="mr-4">
                <div className="bg-white p-1 rounded">
                  <img src="https://dhg1h5j42swfq.cloudfront.net/2015/11/03232602/TRE-SE.png" alt="Boissons" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Tribunal Reginonal Eleitoral de Sergipe - TRE/SE</h4>
                <p className="text-sm text-gray-400">
                  Desenvolvedor Backend · Estágio · 03/02/2025-Atualmente
                </p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-gray-500">2</span>
              </div>
            </div>
            {/* <div className="bg-[#242938] rounded-lg p-4 flex items-start">
              <div className="mr-4">
                <div className="bg-white p-1 rounded">
                  <img src="https://via.placeholder.com/30" alt="Boissons" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Boissons du Cameroun SA</h4>
                <p className="text-sm text-gray-400">
                  Software developer · Mission
                </p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-gray-500">2022</span>
              </div>
            </div>
            <div className="bg-[#242938] rounded-lg p-4 flex items-start">
              <div className="mr-4">
                <div className="bg-[#0077B5] p-1 rounded">
                  <img src="https://via.placeholder.com/30" alt="LinkedIn" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <p className="text-sm text-gray-400">
                  Always available for new experience
                </p>
              </div>
              <div className="ml-auto text-right">
                <ExternalLinkIcon size={16} className="text-gray-400" />
              </div>
            </div> */}
          </div>
        </div>
        {/* Projects Column */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">
            Projetos Pessoais
          </h3>
          <div className="space-y-4">
            <div className="bg-[#242938] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 p-2 rounded mr-3">
                <img src="https://avatars.githubusercontent.com/u/201299892?s=48&v=4" alt="Projeto IGNIS" className="w-8 h-8" />
                </div>
                <h4 className="font-medium">Projeto IGNIS</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Grupo de estudos focado em simulador fluxo de trabalho real do mercado de trabalho.
              </p>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://github.com/Projeto-IGNIS/todoList" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 text-xs py-1 px-2 rounded"
                >
                  To-do List
                </a>
              </div>
            </div>
            {/* <div className="bg-[#242938] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <span className="text-white text-lg">S</span>
                </div>
                <h4 className="font-medium">SafeLife</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Urban security application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  React
                </span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  Laravel
                </span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  MySQL
                </span>
              </div>
            </div>
            <div className="bg-[#242938] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 p-2 rounded mr-3">
                  <span className="text-white text-lg">P</span>
                </div>
                <h4 className="font-medium">Pro Sales</h4>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                Commercial management application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  React
                </span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  Node
                </span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  PostgreSQL
                </span>
                <span className="bg-gray-700 text-xs py-1 px-2 rounded">
                  Mongo
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>;
};
export default Works;