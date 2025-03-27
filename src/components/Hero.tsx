const Hero = () => {
  return <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-3">
          Vinicius Dias
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4">
          Software developer
        </h2>
        <p className="text-gray-400 max-w-md">
          Programdor full-stack com experiência em desenvolvimento web. Atualmente trabalhando com Java e Spring Boot no backend e Angular no frontend.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src="https://camo.githubusercontent.com/42f777fad7f8c4b69423b2bfac1ca72b7af08431f998cd79de2b8f8ef87965fa/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f32313462326366646662323265656138383165643430613131326130356330332f74756d626c725f6e6f6f38637073486e623173363870376f6f315f3634302e676966" alt="Developer illustration" className="w-64 h-64 object-contain" />
      </div>
    </section>;
};
export default Hero;