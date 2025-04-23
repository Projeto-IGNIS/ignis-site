const Hero = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28 flex flex-col md:flex-row items-center justify-between bg-ignis-background">
      <div className="md:w-1/2 mb-10 md:mb-0 md:flex md:items-center md:justify-center">
        <div className="md:mx-auto text-center md:text-left px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ignis-primary mb-4">
            Projeto Ignis
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-ignis-accent mb-6">
            Vamos aprender juntos!
          </h2>
          <p className="text-base sm:text-lg text-ignis-text max-w-lg leading-relaxed">
            O Projeto Ignis é uma iniciativa focada em proporcionar uma experiência prática e enriquecedora para estudantes de tecnologia. 
            Nosso objetivo é aprender e usar na prática tecnologias e ferramentas usadas no mercado de trabalho,
            visando preparar os participantes para situações que serão encontradas em suas futuras carreiras.
            Através de projetos colaborativos, buscamos desenvolver habilidades técnicas e interpessoais, promovendo um ambiente de aprendizado contínuo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
