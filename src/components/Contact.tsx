import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin, Send } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export function Contact() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.8),transparent_70%)]"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container relative mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-6 items-center"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:shamasnehyousef173@gmail.com" 
                    className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="p-1.5 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>shamasnehyousef173@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-1.5 bg-slate-800 rounded-lg">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Ramallah, PS</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-4">Social Profiles</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Yousef301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-xl hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yousef-shamasneh-9b02b0225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-xl hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div variants={scaleIn} className="text-center md:text-left">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg shadow-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Let's Work Together</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                </p>
                <a
                  href="mailto:shamasnehyousef173@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}