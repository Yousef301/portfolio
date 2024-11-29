import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['C# (.NET Core)', 'Python (Django, FastAPI)', 'Java', 'C']
  },
  {
    title: 'Databases',
    skills: ['MS SQL Server', 'MySQL', 'MongoDB']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'GitHub Actions']
  },
  {
    title: 'AI',
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'Tensorflow']
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}