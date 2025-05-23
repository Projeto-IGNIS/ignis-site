import {MailIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type SidebarProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const handleNavigation = (id: string) => {
    if (id === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-ignis-secondary text-ignis-darkText flex flex-col justify-between shadow-lg transform transition-transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Botão para fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-ignis-text hover:text-ignis-accent"
        aria-label="Fechar barra lateral"
      >
        ✕
      </button>

      {/* Navegação */}
      <nav className="mt-20">
        <ul className="space-y-4 px-4">
          <li>
            <button
              onClick={() => handleNavigation('#hero')}
              className="hover:text-ignis-accent transition-colors"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('#works')}
              className="hover:text-ignis-accent transition-colors"
            >
              Experiências
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('#skills')}
              className="hover:text-ignis-accent transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('#contact')}
              className="hover:text-ignis-accent transition-colors"
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>

      {/* Contatos */}
      <div className="mb-8 px-4">
        <h3 className="text-lg font-bold mb-4">Contatos</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="mailto:viniciusdvalenca@gmail.com"
              className="flex items-center space-x-2 hover:text-ignis-accent transition-colors"
            >
              <MailIcon size={20} />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Projeto-IGNIS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-ignis-accent transition-colors"
            >
              <SiGithub size={20} />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
