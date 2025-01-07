import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Database, Cloud, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    skills: ['C# (.NET Core)', 'Python (Django, FastAPI)', 'Java', 'C']
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ['MS SQL Server', 'MySQL', 'MongoDB']
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    skills: ['AWS', 'Docker', 'Docker Compose', 'GitHub Actions', 'Git & GitHub']
  },
  {
    title: 'AI',
    icon: <Brain className="w-6 h-6 text-blue-500" />,
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'Tensorflow']
  }
];

export function Skills() {
  return (
    <section className="py-32 bg-slate-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-blue-50 rounded-lg scale-0 group-hover/item:scale-100 transition-transform duration-200" />
                      <CheckCircle2 className="w-5 h-5 text-blue-500 relative" />
                    </div>
                    <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}