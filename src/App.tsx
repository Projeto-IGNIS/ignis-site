import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-[#1a1f2e] min-h-screen w-full text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Header />
        <main>
          <Hero />
          <Works />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>;
}