import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              05. Academic Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Education
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Formal undergraduate engineering curriculum in Artificial Intelligence and Data Science.
            </p>
          </div>
        </ScrollReveal>

        {/* Education Timeline Card with ScrollReveal and Card3D */}
        <div className="max-w-4xl">
          <ScrollReveal delay={0.15}>
            <Card3D maxTilt={4}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-800/70 hover:shadow-2xl hover:shadow-indigo-500/5">
                {/* Top Bar with Degree & Status */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-3.5">
                    <span className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                        {educationData.degree}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400">
                        {educationData.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Status and Graduation Badge (Unboxed text with separators) */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {educationData.status}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{educationData.graduationYear}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Academic Highlights & Domain Curriculum
                  </h4>
                  <div className="space-y-3">
                    {educationData.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
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
