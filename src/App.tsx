import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';

export function App() {
  const isSidebarVisibleState = useState(true);
  const isSidebarVisible = isSidebarVisibleState[0];
  const setSidebarVisible = isSidebarVisibleState[1];

  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar
          isVisible={isSidebarVisible}
          onClose={() => setSidebarVisible(false)}
        />
        <div className={`flex-1 ${isSidebarVisible ? 'ml-64' : ''} transition-all`}>
          {/* Botão para abrir a barra lateral */}
          {!isSidebarVisible && (
            <button
              onClick={() => setSidebarVisible(true)}
              className="fixed top-4 left-4 text-white hover:text-gray-400"
              aria-label="Abrir barra lateral"
            >
              <img src="https://img.icons8.com/?size=100&id=ogapbOENSeXT&format=png&color=000000" alt="menu-open" className="w-8 h-8 backdrop-filter backdrop-blur" />
            </button>
          )}
          <div className="bg-[#0f0d17] text-white dark:bg-gray-100 dark:text-gray-800 w-full">
            <div className="container mx-auto px-4">
              <Header />
              <main>
                <Hero />
                <Works />
                <Skills />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}