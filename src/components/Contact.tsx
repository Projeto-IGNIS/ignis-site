import { LinkedinIcon, MailIcon } from 'lucide-react';
const Contact = () => {
  return <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>
      <p className="text-gray-400 mb-8">Me contrata!</p>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6"> 
        <a href="https://www.linkedin.com/in/vinidias1" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-[#0077B5] rounded-lg p-4 flex items-center">
            <div className="bg-[#0077B5] p-2 rounded-full mr-4">
              <LinkedinIcon size={24} className="text-white" />
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
          <div className="bg-[#242938] rounded-lg p-4 flex items-center">
            <div className="bg-[#242938] p-2 rounded-full mr-4">
              <MailIcon size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-sm text-gray-400">
                Me envie um email!
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>;
};
export default Contact;