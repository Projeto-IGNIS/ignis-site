import { useState } from "react";

const Hero = () => {
  const originalPlaylist = "https://open.spotify.com/embed/playlist/0QivnZb2d3yGQABbPq4djg?utm_source=generator";
  const [iframeSrc] = useState(originalPlaylist);

  return (
    <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0 md:flex md:items-center md:justify-center">
        <div className="md:mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300 mb-3">
            Vinicius Dias
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4">
            Software developer
          </h2>
          <p className="text-gray-400 max-w-md">
            Programador full-stack com experiência em desenvolvimento web. Atualmente trabalhando com Java e Spring Boot no backend e Angular no frontend.
          </p>
        </div>
      </div>

      {/* Player do Spotify */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:flex md:items-center md:justify-center">
        <div className="md:mx-auto w-full">
          <iframe
            title="Spotify Embed"
            src={iframeSrc}
            width="100%"
            height="352"
            style={{border: "0" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
