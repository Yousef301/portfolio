import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronRight, Sparkles, Zap, Layers, Cpu, Wrench, X } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { projects } from '../data/projects';

const FeatureIcons = {
  "Voice Recognition": Cpu,
  "OCR Support": Layers,
  "Image Generation": Zap,
  "Multi-LLM Intelligence": Sparkles,
  "Tool Calling": Wrench,
};

export function PlutoAI() {
  const plutoProject = projects.find(p => p.title === 'PlutoAI');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!plutoProject) return null;

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { replace: true });
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/50 selection:bg-blue-100">
      {/* Background Pattern - Modern dot matrix */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(228,233,246)_1px,transparent_0)] [background-size:32px_32px] opacity-20 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-6 lg:px-8 pt-12 pb-24"
      >
        {/* Breadcrumb */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 text-sm text-slate-400 mb-12 ml-1 backdrop-blur-sm bg-white/30 py-2 px-4 rounded-full w-fit"
        >
          <Link to="/" className="hover:text-blue-500 transition-colors flex items-center gap-1">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/#projects" className="hover:text-blue-500 transition-colors" onClick={handleProjectsClick}>Projects</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-blue-500 font-medium">PlutoAI</span>
        </motion.div>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2.5rem] blur-3xl opacity-10" />
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 tracking-wide bg-blue-50/80 px-6 py-2.5 rounded-full shadow-sm backdrop-blur-sm border border-blue-100/50"
              >
                <Sparkles className="w-4 h-4" />
                FEATURED PROJECT
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-7xl lg:text-8xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 leading-tight"
              >
                {plutoProject.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed font-light"
              >
                PlutoAI is a versatile AI-powered assistant that combines voice recognition, OCR, image generation, and multi-LLM intelligence to handle a wide range of user interactions seamlessly. The chatbot integrates multiple advanced large language models like Llama 3.1, DeepSeek V3, and Gemini-1.5-Flash, allowing users to select the LLM that best suits their needs. With its embedding-based memory system using FAISS, the chatbot maintains context across conversations, delivering more coherent and contextually relevant responses.
              </motion.p>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-700" />
            <motion.div
              className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent pointer-events-none" />
              <a
                href="https://plutoai.shamasneh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative z-10 aspect-video"
              >
                <iframe
                  src="https://streamable.com/e/q3o5hz?autoplay=1&amp;hd=1"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  width="1280"
                  height="720"
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                ></iframe>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-4xl font-bold text-slate-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Voice Recognition",
                    description: "Powered by OpenAI Whisper, enabling natural voice interactions with automatic transcription.",
                    icon: Cpu,
                    demo: (
                      <div className="relative aspect-video rounded-xl overflow-hidden mt-4">
                        <iframe
                          src="https://streamable.com/e/vt2lud"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                      </div>
                    )
                  },
                  {
                    title: "OCR Support",
                    description: "Extract text from images and PDFs, enabling seamless interaction with diverse content formats.",
                    icon: Layers,
                    demo: (
                      <div className="relative aspect-video rounded-xl overflow-hidden mt-4">
                        <iframe
                          src="https://streamable.com/e/mi6fal"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                      </div>
                    )
                  },
                  {
                    title: "Image Generation",
                    description: "Create custom visuals using Stable Diffusion v1.6, enhancing creative capabilities.",
                    icon: Zap,
                    demo: (
                      <div className="relative rounded-xl overflow-hidden mt-4 aspect-video">
                        <iframe
                          src="https://streamable.com/e/yytidv?quality=720p"
                          width="1280"
                          height="720"
                          frameBorder="0"
                          allowFullScreen
                          className="w-full h-full"
                          style={{ aspectRatio: '16/9' }}
                        ></iframe>
                      </div>
                    )
                  },
                  {
                    title: "Multi-LLM Intelligence",
                    description: "Integrates Llama 3.1, DeepSeek V3, and Gemini-1.5-Flash for versatile AI responses.",
                    icon: Sparkles,
                    demo: (
                      <div className="relative aspect-video rounded-xl overflow-hidden mt-4">
                        <iframe
                          src="https://streamable.com/e/hudj7g"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                      </div>
                    )
                  },
                  {
                    title: "Tool Calling",
                    description: "Perform specific tasks like retrieving weather information.",
                    icon: Wrench,
                    demo: (
                      <div className="relative aspect-video rounded-xl overflow-hidden mt-4">
                        <iframe
                          src="https://streamable.com/e/p3ls20"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                      </div>
                    )
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-10 transition-all duration-700" />
                    <div className="relative bg-gradient-to-br from-white to-slate-50/80 rounded-[2rem] p-8 border border-slate-200/50 shadow-sm backdrop-blur-sm">
                      <div className="flex items-start space-x-4">
                        <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                          <p className="text-slate-600 mt-2">{feature.description}</p>
                        </div>
                      </div>
                      {feature.demo}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
                  Core Capabilities
                </h2>
                <div className="space-y-6">
                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Multi-Model AI Integration</h3>
                    <p className="text-slate-600">The system intelligently routes queries to the most suitable LLM based on the task type and complexity. Llama 3.1 handles general queries, DeepSeek V3 specializes in technical and coding tasks, while Gemini-1.5-Flash excels at multimodal interactions involving images and complex reasoning.</p>
                  </div>

                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Advanced Memory System</h3>
                    <p className="text-slate-600">Utilizing FAISS (Facebook AI Similarity Search) for embedding-based memory, the chatbot maintains conversation context across multiple interactions. This system enables the bot to reference previous conversations and maintain coherent, contextually aware dialogues.</p>
                  </div>

                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Security & Authentication</h3>
                    <p className="text-slate-600">Implements robust security measures including email/password authentication with verification, Google OAuth integration, and HTTP-only cookies for secure session management. All sensitive data is encrypted and stored securely in MSSQL Server.</p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
                  Technical Architecture
                </h2>
                <div className="space-y-6">
                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Frontend Architecture</h3>
                    <p className="text-slate-600">Built with TypeScript and Vite for optimal performance and type safety.</p>
                  </div>

                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Backend Infrastructure</h3>
                    <p className="text-slate-600">Powered by .NET Core, the backend handles user authentication, session management, and core functionalities. MSSQL Server ensures efficient data storage with optimized query performance through proper indexing and caching strategies. The system implements user-based rate limiting to prevent abuse and ensure fair resource allocation.</p>
                  </div>

                  <div className="relative p-8 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
                    <p className="text-slate-600">Deployed on Google Cloud Platform using containerized microservices with Docker, enabling easy scaling and maintenance. Nginx serves as a reverse proxy with SSL/TLS encryption, ensuring secure communication. The infrastructure includes automated backup systems and monitoring tools for optimal performance and reliability.</p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
                  System Architecture
                </h2>
                <motion.div
                  variants={fadeInUp}
                  className="relative group mb-12"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-10 transition-all duration-700" />
                  <div className="relative bg-gradient-to-br from-white to-slate-50/80 rounded-[2rem] p-8 border border-slate-200/50 shadow-sm backdrop-blur-sm">
                    <img 
                      src="https://plutoai.s3.eu-central-1.amazonaws.com/plutoai_architecture.png"
                      alt="PlutoAI System Architecture"
                      className="w-full rounded-xl shadow-lg cursor-pointer"
                      onClick={() => setShowModal(true)}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Tech Stack */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[1.25rem] blur-xl opacity-0 group-hover:opacity-10 transition-all duration-700" />
                <div className="relative p-6 rounded-[1.25rem] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-slate-200/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {plutoProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-br from-slate-50 to-blue-50/50 text-slate-600 rounded-full text-sm font-medium hover:from-blue-50 hover:to-blue-100/50 hover:text-blue-600 transition-all duration-300 cursor-default border border-slate-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[1.25rem] blur-xl opacity-0 group-hover:opacity-10 transition-all duration-700" />
                <div className="relative p-6 rounded-[1.25rem] bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-slate-200/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Project Links</h3>
                  <div className="flex flex-col gap-3">
                    {plutoProject.link && (
                      <a
                        href={plutoProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-[0_8px_30px_-12px_rgba(59,130,246,0.5)]"
                      >
                        <span className="font-medium">View Live Demo</span>
                        <ExternalLink className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {plutoProject.github && (
                      <a
                        href={plutoProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center justify-between p-4 bg-gradient-to-br from-slate-50 to-blue-50/50 text-slate-700 rounded-xl hover:from-blue-50 hover:to-blue-100/50 hover:text-blue-700 transition-all duration-300 border border-slate-200/50"
                      >
                        <span className="font-medium">View a Part of the Source Code</span>
                        <Github className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80"
            onClick={() => setShowModal(false)}
          >
            <div className="min-h-screen p-4 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-[90vw]"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src="https://plutoai.s3.eu-central-1.amazonaws.com/plutoai_architecture.png"
                  alt="PlutoAI System Architecture"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PlutoAI;
