import { LinkedinIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const Header = () => {
  return (
    <header className="py-4 flex justify-between items-center">
      <div>
        <button className="text-blue-400 font-semibold text-xl" aria-label="Home">
          ViniDias
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/vinidias1" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
          <LinkedinIcon size={18} />
        </a>
        <a href="https://github.com/ViniDias1" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-200">
          <SiGithub size={18} />
        </a>
      </div>
    </header>
  );
};

export default Header;