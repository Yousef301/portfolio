import React from 'react';
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="text-center px-4"
      >
        <motion.div
          variants={fadeInUp}
          className="flex justify-center mb-8"
        >
          <Construction className="w-24 h-24 text-blue-400 animate-bounce" />
        </motion.div>
        
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Coming Soon
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-slate-400 text-lg md:text-xl max-w-md mx-auto mb-8"
        >
          We're working hard to bring you something amazing. Stay tuned!
        </motion.p>
        
        <motion.a
          variants={fadeInUp}
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </motion.a>
      </motion.div>
    </div>
  );
}
</boltArtifact>

<boltAction type="file" filePath="src/App.tsx">
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ComingSoon } from './components/ComingSoon';

function App() {
  // Check if the URL includes 'coming-soon'
  const isComingSoon = window.location.pathname === '/coming-soon';

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Mohammad Shaheen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;