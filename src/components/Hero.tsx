import { useState, useEffect } from "react";

const Hero = () => {
  const originalPlaylist = "https://open.spotify.com/embed/playlist/0QivnZb2d3yGQABbPq4djg?utm_source=generator&theme=1";
  const [iframeSrc, setIframeSrc] = useState(originalPlaylist);
  const [topTracks, setTopTracks] = useState<{ id: string }[]>([]);

  const token = "BQBNsxxvAAyyBbHvbQxn6eDevDzt3J1SpntbLr2CAoLDmH4T2ZK7Bv883BisNhK3xDL5l1VbrscRpUIWIdh1FFl0OezLdqgxbhmHMyDSRUq9ncPmLzC46xIRr8egeF4ecmOQEBGQLdUcYLtdDNDLRIRBqgUvF14spMKBt1S_fgxdHnVpDpqhis3V_6EoAyREvOYXRG3d9apgnRY6gIP6rUU96vR9jq8DoJpSo2zf4gmJ0LzYtc3Bkt8BFk2aE0WJdIts0i9blfbwI9MRjxumnBfIJQIHN0g4fUSSQ_3V6c7rCIcZK5FLBbVGq61z"; // 🔴 Troque por um token válido do Spotify

  const fetchTopTracks = async () => {
    try {
      const res = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      });

      const data = await res.json();
      setTopTracks(data.items || []);
    } catch (error) {
      console.error("Erro ao buscar top tracks:", error);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, []);

  const playRandomTrack = () => {
    if (topTracks.length > 0) {
      const randomTrack = topTracks[Math.floor(Math.random() * topTracks.length)];
      setIframeSrc(`https://open.spotify.com/embed/track/${randomTrack.id}`);
    }
  };

  const resetToPlaylist = () => {
    setIframeSrc(originalPlaylist);
  };

  return (
    <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0 md:flex md:items-center md:justify-center">
        <div className="md:mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-3">
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
        <div className="md:mx-auto">
          <iframe
            title="Spotify Embed"
            src={iframeSrc}
            width="500px"
            height="100px"
            style={{ border: "0", minHeight: "360px" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          />

          {/* Botões de controle */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={playRandomTrack}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
            >
              Tocar música aleatória
            </button>
            
            {/* O botão só aparece se a playlist original NÃO estiver sendo exibida */}
            {iframeSrc !== originalPlaylist && (
              <button
                onClick={resetToPlaylist}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Voltar para a playlist
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
