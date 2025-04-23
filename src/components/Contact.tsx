import { BsGithub } from 'react-icons/bs';

const Contact = () => {
  return <section className="py-20 bg-ignis-background text-ignis-text" id="contact">
      <h2 className="text-4xl font-extrabold mb-12 text-ignis-primary text-center">
        Contato
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="https://github.com/Projeto-IGNIS"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:shadow-xl transition-all"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-700 rounded-lg p-6 flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <BsGithub size={28} className="text-blue-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">GitHub</h3>
              <p className="text-sm text-gray-200">Acesse o GitHub do Projeto Ignis</p>
            </div>
          </div>
        </a>
        <a
          href="https://discord.com/users/your-discord-id"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:shadow-xl transition-all"
        >
          <div className="bg-gradient-to-r from-blue-700 to-orange-500 rounded-lg p-6 flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <img src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" alt="Discord" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Discord</h3>
              <p className="text-sm text-gray-200">Me chame no Discord!</p>
            </div>
          </div>
        </a>
      </div>
    </section>;
};
export default Contact;