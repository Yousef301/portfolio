import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code2, Server, Database, Briefcase, GraduationCap, Award, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main Content - Takes up 8 columns */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="md:col-span-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2 mb-8 pt-32">
              <div className="flex items-center gap-2 text-blue-400 font-mono mb-8">
                <span className="inline-block w-12 h-[1px] bg-blue-400" />
                <span>Hi, my name is</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 animate-gradient mb-4">
                Yousef Shamasneh
              </h1>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-300 mb-6 flex flex-col gap-2">
                I'm a Junior
                <span className="text-blue-400">Back-End Developer</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 mb-12 max-w-2xl"
            >
              I'm a Backend Developer specializing in building scalable applications and APIs, with expertise in C#,
              Python, and cloud technologies. I am also passionate about AI, with hands-on experience in developing
              and deploying models to address specific challenges and drive innovative solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
              <a
                href="https://github.com/Yousef301"
                className="group px-6 py-3 bg-transparent border-2 border-blue-500 rounded-lg flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yousef-shamasneh-9b02b0225/"
                className="group px-6 py-3 bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:shamasnehyousef173@gmail.com"
                className="group px-6 py-3 bg-slate-700 rounded-lg flex items-center gap-2 hover:bg-slate-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-8"
            >
              <Code2 className="w-6 h-6 text-slate-500 animate-float" />
              <Server className="w-6 h-6 text-slate-500 animate-float delay-100" />
              <Database className="w-6 h-6 text-slate-500 animate-float delay-200" />
              <Brain className="w-6 h-6 text-slate-500 animate-float delay-300" />
            </motion.div>
          </motion.div>

          {/* Info Cards - Takes up 4 columns */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="md:col-span-4 space-y-4 pt-48"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-[280px] p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h3 className="font-medium text-sm">Current Role</h3>
              </div>
              <p className="text-slate-400 text-sm">Seeking for a Job</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-[280px] p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <h3 className="font-medium text-sm">Education</h3>
              </div>
              <p className="text-slate-400 text-sm">B.S. Computer Engineering, Birzeit University</p>
            </motion.div>

            <motion.a
              href="https://www.credly.com/badges/6bd5c808-989c-4c59-a4d9-e752a956bc63/public_url"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="block max-w-[280px] p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800/70 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <h3 className="font-medium text-sm">Certification</h3>
              </div>
              <p className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors">AWS Solutions Architect Associate</p>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}