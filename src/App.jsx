import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Join from './components/Join';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="join" className="relative">
          <Join />
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Nova Tech Club. Built with passion and caffeine.
        </div>
      </footer>
    </div>
  );
}

export default App;
