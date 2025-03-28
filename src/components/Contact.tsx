import { LinkedinIcon, MailIcon } from 'lucide-react';

const Contact = () => {
  return <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>
      <p className="text-gray-400 mb-8">Me contrata!</p>
      <div className="grid gap-4 md:grid-cols-4 md:gap-6"> 
        <a href="https://www.linkedin.com/in/vinidias1" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-4">
              <LinkedinIcon size={24} className="text-blue-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">LinkedIn</h3>
              <p className="text-sm text-white">
                Meu Linkedin!
              </p>
            </div>
          </div>
        </a>
        <a href="mailto:viniciusdvalenca@gmail.com" className="block">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-4">
              <MailIcon size={24} className="text-gray-900" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-sm text-white">
                Fale comigo!
              </p>
            </div>
          </div>
        </a>
        <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-4">
              <img src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" alt="Discord" className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Discord</h3>
              <p className="text-sm text-white">
                Me chame no Discord!
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/viniciussdia" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-4 flex items-center">
            <div className="bg-white p-2 rounded-full mr-4">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="Instagram" className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Instagram</h3>
              <p className="text-sm text-white">
                Meu Instagram!
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>;
};
export default Contact;