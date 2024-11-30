import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const experiences = [
  {
    company: 'Foothill Technology Solutions LLC',
    position: 'Backend Intern',
    period: 'February 2024 - July 2024',
    description: [
      'Developed with C# following SOLID principles and design patterns',
      'Implemented complex database queries using CTEs and window functions',
      'Utilized RabbitMQ for message brokering in multi-service architectures',
      'Implemented JWT authentication and RBAC authorization',
      'Developed a comprehensive Hotel Booking Platform'
    ]
  },
  {
    company: 'Harri LLC',
    position: 'Backend Intern',
    period: 'September 2023 - November 2023',
    description: [
      'Implemented Django Rest Framework for API development',
      'Worked with various ORM tools including SQLAlchemy',
      'Developed HR Absence project with JWT authentication',
      'Implemented Role-Based Access Control (RBAC)'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-32 bg-slate-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-16 relative pl-8 border-l-2 border-blue-500 last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-600 font-semibold">{exp.company}</span>
                  <span className="text-gray-500 font-mono">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 pl-6 relative">
                    <span className="absolute left-0 top-2.5 w-2 h-2 bg-blue-500/50 rounded-full" />
                    {item}
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
