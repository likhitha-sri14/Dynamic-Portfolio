import React from 'react';
import { Award, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              06. Verified Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Certifications & Training
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Professional certificate programmes and intensive development bootcamps completed.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid with Card3D and ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.08}>
              <Card3D maxTilt={6} className="h-full">
                <div
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-700/80 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl hover:shadow-indigo-500/5 group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Duration / Type */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span>{cert.type}</span>
                      {cert.duration && (
                        <>
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                          <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-indigo-500" />
                            {cert.duration}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Skills Covered */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <p className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                        Core Concepts Covered
                      </p>
                      <div className="space-y-1.5">
                        {cert.skillsCovered.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
