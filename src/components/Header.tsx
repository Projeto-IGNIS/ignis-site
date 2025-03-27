import { LinkedinIcon, TwitterIcon, MoonIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
const Header = () => {
  return <header className="py-4 flex justify-between items-center">
      <div>
        <button className="text-blue-400 font-semibold text-xl" aria-label="Home">
          ViniDias
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-200">
          <LinkedinIcon size={18} />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-200">
          <TwitterIcon size={18} />
        <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-gray-200">
          <SiGithub size={18} />
        </a>
        </a>
        <button aria-label="Toggle theme" className="text-gray-400 hover:text-gray-200 ml-2">
          <MoonIcon size={18} />
        </button>
      </div>
    </header>;
};
export default Header;