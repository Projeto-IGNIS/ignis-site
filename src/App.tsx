import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-[#0f0d17] text-white">
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
    </div>;
}