import { LinkedinIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="py-4 flex justify-end">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-500 transition-colors duration-200"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <img
              src="https://img.icons8.com/?size=100&id=TMEWD76XezdX&format=png&color=000000"
              alt="Dark Mode Icon"
              className="w-8 h-8"
            />
          ) : (
            <img
              src="https://img.icons8.com/?size=100&id=H3yHeysB1dxv&format=png&color=000000"
              alt="Light Mode Icon"
              className="w-8 h-8"
            />
          )}
        </button>
        <a href="https://www.linkedin.com/in/vinidias1" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-500 transition-colors duration-200">
          <LinkedinIcon size={18} />
        </a>
        <a href="https://github.com/ViniDias1" aria-label="GitHub" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-black transition-colors duration-200">
          <SiGithub size={18} />
        </a>
      </div>
    </header>
  );
};

export default Header;