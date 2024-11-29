import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export function Contact() {
  return (
    <section className="py-24 bg-slate-900">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
            Get in Touch
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 mb-12">
            I'm always open to discussing new projects and opportunities.
          </motion.p>

          <motion.div variants={scaleIn} className="inline-flex flex-col items-center">
            <a
              href="mailto:shamasnehyousef173@gmail.com"
              className="group px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors mb-8 flex items-center gap-3"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Let's talk</span>
              <ExternalLink className="w-4 h-4 text-white opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>

            <div className="flex flex-col sm:flex-row gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ramallah, PS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}