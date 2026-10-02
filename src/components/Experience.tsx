import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FolderGit2,
  ArrowRight,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

interface ExperienceProps {
  onSelectProject: (projectId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectProject }) => {
  const currentExp = experienceData[0];

  const projectMap: Record<string, string> = {
    'Fake News Detection System': 'fake-news-detection',
    'Medicare AI': 'medicare-ai',
    'AI Career Guidance System': 'ai-career-guidance',
  };

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              02. Professional Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Internship Experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hands-on software engineering and AI system development in a real-world company setting.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Timeline / Spotlight Card with ScrollReveal and Card3D */}
        <div className="relative">
          <ScrollReveal delay={0.15}>
            <Card3D maxTilt={4}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-800/70 hover:shadow-2xl hover:shadow-indigo-500/5">
                {/* Top Bar with Role & Company */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                          {currentExp.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400">
                          {currentExp.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badges / Period */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{currentExp.location}</span>
                    </div>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                      <Calendar className="w-4 h-4" />
                      <span>{currentExp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="py-6">
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {currentExp.description}
                  </p>
                </div>

                {/* Responsibilities & Learning Areas */}
                <div className="pb-8">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    Key Responsibilities & Learning Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentExp.responsibilities.map((resp, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Internship Projects Section */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Projects Developed During This Internship
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Click any project to view comprehensive details
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentExp.internshipProjects.map((projectName) => {
                      const targetId = projectMap[projectName] || 'fake-news-detection';
                      return (
                        <button
                          key={projectName}
                          onClick={() => onSelectProject(targetId)}
                          className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-700/60 text-left transition-all duration-200 group flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {projectName}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
