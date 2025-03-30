import { LinkedinIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="py-4 flex justify-between items-center">
      <div>
        <button
          className="text-blue-400 font-semibold text-xl dark:text-blue-600"
          aria-label="Home"
        >
          ViniDias
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-500 transition-colors duration-200"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
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