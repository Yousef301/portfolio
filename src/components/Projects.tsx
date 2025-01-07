import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="py-32 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of my recent work, showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {project.title === 'PlutoAI' ? (
                <div>
                  {/* Project Image - Clickable */}
                  <Link to="/projects/pluto-ai" className="block">
                    <div className="relative h-36 overflow-hidden bg-gradient-to-br from-slate-50 to-white cursor-pointer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain scale-75 p-4 group-hover:scale-[0.85] object-center transform transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  {/* Project Content - Not Clickable */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">
                      {project.title}
                    </h3>
                    <p 
                      className="text-slate-600 mb-4 line-clamp-2 text-sm group-hover:line-clamp-none transition-all duration-300" 
                      title={project.description}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium group"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="group-hover:underline">Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium group"
                        >
                          <Github className="w-4 h-4" />
                          <span className="group-hover:underline">Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Project Image */}
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                    <div className={`absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 ${project.title !== 'PlutoAI' ? 'group-hover:opacity-60' : ''} transition-opacity`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-center transform transition-transform duration-500 ${
                        project.title === 'PlutoAI' 
                          ? 'object-contain scale-75 p-4 group-hover:scale-[0.85]' 
                          : 'object-cover group-hover:scale-110'
                      }`}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">
                      {project.title}
                    </h3>
                    <p 
                      className="text-slate-600 mb-4 line-clamp-2 text-sm group-hover:line-clamp-none transition-all duration-300" 
                      title={project.description}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium group"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="group-hover:underline">Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium group"
                        >
                          <Github className="w-4 h-4" />
                          <span className="group-hover:underline">Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}