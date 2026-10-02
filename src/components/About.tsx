import React from 'react';
import {
  Sparkles,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Code2,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Generative AI & LLMs',
      desc: 'Developing prompt-driven architectures, classification systems, and practical conversational assistants that ground LLMs in domain logic.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      desc: 'Writing clean, asynchronous server logic using Python (Flask) and JavaScript (Node.js/Express) with robust REST APIs and controllers.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Integration',
      desc: 'Connecting intuitive user interfaces to backend endpoints and AI models with end-to-end data flow and reactive client state.',
    },
    {
      icon: Cpu,
      title: 'Productivity & Utility Apps',
      desc: 'Creating tangible, functional software like task managers and financial trackers that solve day-to-day organizational challenges.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              01. Background & Profile
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              About Me
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative & Focus Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Narrative Card with ScrollReveal and Card3D */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <Card3D maxTilt={5}>
                <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    Engineering Philosophy & Focus
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    As an AI & Data Science undergraduate, my passion is turning theoretical machine learning concepts and generative foundation models into practical, responsive tools that people can easily interact with.
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Through my current internship at <strong className="text-slate-900 dark:text-white font-semibold">Pixelwind Technologies</strong> in Visakhapatnam, I actively apply Generative AI techniques to solve concrete problems — from text integrity verification in news to health information assistants, women's safety platforms, and legal guidance systems.
                  </p>

                  {/* Key Practical Takeaways */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Core Domains of Practice
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>Generative AI projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>Backend API development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>Full-stack applications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>AI-powered applications</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>Civic & safety utility apps</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Education & Internship Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-indigo-500" />
                      <span>B.Tech AI & Data Science (Graduating 2027)</span>
                    </div>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-emerald-500" />
                      <span>Pixelwind Technologies Intern</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Pillars of Specialization */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={0.15 + idx * 0.08}>
                  <Card3D maxTilt={7} className="h-full">
                    <div
                      className="bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all duration-300 group hover:-translate-y-1 shadow-2xs hover:shadow-lg hover:shadow-indigo-500/5 h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
