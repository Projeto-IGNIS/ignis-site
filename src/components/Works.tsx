const Works = () => {
  return (
    <section className="py-20 bg-ignis-background text-ignis-text" id="works">
      <h2 className="text-4xl font-extrabold mb-12 text-ignis-primary text-center">
        Experiências
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-ignis-accent mb-6">
            Projetos
          </h3>
          <div className="space-y-6">
            <div className="bg-ignis-secondary rounded-lg p-6 flex items-start group hover:shadow-xl transition-all duration-300">
              <div className="mr-6">
                <div className="bg-ignis-accent p-2 rounded transition-transform duration-300 group-hover:scale-110">
                  <img src="https://github.com/Projeto-IGNIS.png" alt="Bracongo" className="w-12 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-ignis-darkText">TO-DO List</h4>
                <p className="text-sm text-ignis-darkText leading-relaxed">
                  Primeiro projeto do grupo foi um gerenciador de tarefas simples. Apenas para começar a trabalhar em grupo e aprender o fluxo de trabalho.
                </p>
                <div className="hidden group-hover:flex flex-wrap gap-3 mt-4 transition-opacity duration-300">
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">Java</span>
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">Spring</span>
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">Angular</span>
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">PostgreSQL</span>
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">Docker</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-ignis-darkText">1</span>
              </div>
            </div>
            <div className="bg-ignis-secondary rounded-lg p-6 flex items-start group hover:shadow-xl transition-all duration-300">
              <div className="mr-6">
                <div className="bg-ignis-accent p-2 rounded transition-transform duration-300 group-hover:scale-110">
                  <img src="https://github.com/Projeto-IGNIS.png" alt="Boissons" className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-ignis-darkText">ignis-stats</h4>
                <p className="text-sm text-ignis-darkText leading-relaxed">
                  Mini projeto para coletar informações de repositórios do github.
                </p>
                <div className="hidden group-hover:flex flex-wrap gap-3 mt-4 transition-opacity duration-300">
                  <span className="bg-ignis-accent text-xs py-1 px-3 rounded hover:bg-ignis-primary">Python</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <span className="text-xs text-ignis-darkText">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;