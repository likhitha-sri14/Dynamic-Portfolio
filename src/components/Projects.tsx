import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Layers,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  HeartPulse,
  Compass,
  CheckSquare,
  Globe,
  Code2,
  Scale,
  ShieldAlert,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenInteractive: (demoType: 'finance' | 'todo') => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  onOpenInteractive,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('ALL');

  const filterTabs: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'ALL' },
    { label: 'AI / GenAI', value: 'AI / GENAI' },
    { label: 'Full Stack', value: 'FULL STACK' },
    { label: 'Web', value: 'WEB' },
    { label: 'Backend', value: 'BACKEND' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'BACKEND') {
      return (
        p.category === 'BACKEND' ||
        p.technologies.some((t) => ['Flask', 'Node.js', 'Express.js', 'Python'].includes(t))
      );
    }
    return p.category === selectedFilter;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'smart-nyaya-ai':
        return <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'she-shield':
        return <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'fake-news-detection':
        return <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'medicare-ai':
        return <HeartPulse className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'ai-career-guidance':
        return <Compass className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'finance-flow-tracker':
        return <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'todo-list-application':
        return <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'dynamic-personal-portfolio':
        return <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                04. Selected Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                Featured Projects
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Real, practical AI-powered software, legal civic tech, women's safety platforms, financial intelligence dashboards, and full-stack systems.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedFilter(tab.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with Card3D and ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            return (
              <ScrollReveal key={project.id} delay={idx * 0.07}>
                <Card3D maxTilt={6} className="h-full">
                  <div
                    className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-indigo-400 dark:hover:border-indigo-700/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden h-full"
                  >
                    {/* Subtle Top Accent Bar */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-4">
                      {/* Top Bar: Domain Icon & Index / Metadata */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 transition-all duration-300">
                          {getProjectIcon(project.id)}
                        </div>

                        <div className="flex flex-col items-end text-right">
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                            0{idx + 1}
                          </span>
                          {project.isInternshipProject && (
                            <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                              Pixelwind Intern
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Category */}
                      <div>
                        <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                          {project.categoryLabel}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-1">
                          {project.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Medical Disclaimer indicator if present */}
                      {project.disclaimer && (
                        <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 flex items-center gap-2 text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span className="line-clamp-1">Educational medical information only</span>
                        </div>
                      )}

                      {/* Key Capabilities */}
                      <div className="space-y-1.5 pt-1">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Section: Technologies & Actions */}
                    <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3.5">
                      {/* Technologies (Unboxed text with separators) */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {i < Math.min(project.technologies.length, 4) - 1 && (
                              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-indigo-500">+{project.technologies.length - 4}</span>
                        )}
                      </div>

                      {/* Actions Bar */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {/* Direct Interactive Demo Launcher */}
                          {project.hasInteractiveDemo && (
                            <button
                              onClick={() => onOpenInteractive(project.hasInteractiveDemo!)}
                              className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs"
                              title="Open live interactive sandbox"
                            >
                              <Sparkles className="w-3 h-3 text-indigo-500" />
                              <span>Live Demo</span>
                            </button>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              title="View Source on GitHub"
                              aria-label={`GitHub Repository for ${project.title}`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Live Sandboxes Showcase Spotlight Section with ScrollReveal and Card3D */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 bg-gradient-to-r from-indigo-50/70 via-slate-50 to-indigo-50/40 dark:from-slate-900 dark:via-slate-900/80 dark:to-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Interactive Demonstrations
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                Test Live Functional Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                Interact directly with the Finance Flow Tracker (Recharts analytics & balance calculations) and the To-Do List Application with real local state synchronization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenInteractive('finance')}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Launch Finance Flow</span>
              </button>

              <button
                onClick={() => onOpenInteractive('todo')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <CheckSquare className="w-4 h-4 text-emerald-500" />
                <span>Launch To-Do Sandbox</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
