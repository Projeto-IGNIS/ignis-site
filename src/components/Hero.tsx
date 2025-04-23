const Hero = () => {
  return (
    <section className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between bg-ignis-background">
      <div className="md:w-1/2 mb-10 md:mb-0 md:flex md:items-center md:justify-center">
        <div className="md:mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-ignis-primary mb-4">
            Projeto Ignis
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-ignis-accent mb-6">
            Vamos aprender juntos!
          </h2>
          <p className="text-lg text-ignis-text max-w-lg leading-relaxed">
            O Projeto Ignis é uma iniciativa focada em proporcionar uma experiência prática e enriquecedora para estudantes de tecnologia. 
            Nosso objetivo é aprendar e usar na prática tecnologias e ferramentas usadas no mercado de trabalho,
            visando preparar os participantes para situções que serão encontradas em suas futuras carreiras.
            Através de projetos colaborativos, buscamos desenvolver habilidades técnicas e interpessoais, promovendo um ambiente de aprendizado contínuo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
