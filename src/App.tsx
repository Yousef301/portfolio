import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { PlutoAI } from './pages/PlutoAI';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p className="text-sm"> {new Date().getFullYear()} Yousef Shamasneh. All rights reserved.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/pluto-ai" element={<PlutoAI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;