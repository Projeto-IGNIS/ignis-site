import { SiGithub } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-ignis-background text-ignis-text py-4 flex justify-between items-center ">
      <h1 className="text-2xl font-bold text-ignis-primary">Projeto Ignis</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-ignis-text hover:text-ignis-accent transition-colors duration-200"
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
        <a href="https://github.com/Projeto-IGNIS" aria-label="GitHub" className="text-ignis-text hover:text-ignis-accent transition-colors duration-200">
          <SiGithub size={28} />
        </a>
      </div>
    </header>
  );
};

export default Header;