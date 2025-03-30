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
  const [isSidebarVisible, setSidebarVisible] = useState(true);

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
              className="fixed top-4 left-4 z-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
              aria-label="Abrir barra lateral"
            >
              ☰
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