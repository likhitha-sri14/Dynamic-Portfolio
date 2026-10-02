import React, { useState } from 'react';
import {
  Terminal,
  Code,
  Coffee,
  FileCode,
  Palette,
  Atom,
  Server,
  Layers,
  Cpu,
  Sparkles,
  MessageSquareCode,
  BrainCircuit,
  Binary,
  Bot,
  GitBranch,
  GitPullRequest,
  Network,
  Zap,
  Info,
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  // Dynamic Lucide icon lookup
  const renderIcon = (iconName: string) => {
    const iconProps = { className: 'w-5 h-5 transition-transform group-hover:scale-110 duration-200' };
    switch (iconName) {
      case 'Terminal':
        return <Terminal {...iconProps} />;
      case 'Code':
        return <Code {...iconProps} />;
      case 'Coffee':
        return <Coffee {...iconProps} />;
      case 'FileCode':
        return <FileCode {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'Atom':
        return <Atom {...iconProps} />;
      case 'Server':
        return <Server {...iconProps} />;
      case 'Layers':
        return <Layers {...iconProps} />;
      case 'Cpu':
        return <Cpu {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'MessageSquareCode':
        return <MessageSquareCode {...iconProps} />;
      case 'BrainCircuit':
        return <BrainCircuit {...iconProps} />;
      case 'Binary':
        return <Binary {...iconProps} />;
      case 'Bot':
        return <Bot {...iconProps} />;
      case 'GitBranch':
        return <GitBranch {...iconProps} />;
      case 'GitPullRequest':
        return <GitPullRequest {...iconProps} />;
      case 'Network':
        return <Network {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              03. Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Skills & Toolbox
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Core programming languages, frontend/backend frameworks, and Generative AI technologies used in my projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <div className="space-y-4">
                {/* Category Title & Unboxed Index */}
                <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800/70 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                      0{groupIndex + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skill Cards with Card3D */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.skills.map((skill) => {
                    const isHovered = activeSkill?.name === skill.name;
                    return (
                      <Card3D key={skill.name} maxTilt={6}>
                        <div
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(null)}
                          className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer h-full ${
                            isHovered
                              ? 'border-indigo-400 dark:border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/40 shadow-xl shadow-indigo-500/10'
                              : 'border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                  isHovered
                                    ? 'bg-indigo-600 text-white shadow-xs'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                {renderIcon(skill.iconName)}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                                  {skill.name}
                                </h4>
                                <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono">
                                  {skill.level}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Description tooltip / preview */}
                          <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </Card3D>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Verification note & domain banner */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
            <Info className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>
              Toolbox curated for production AI/GenAI application development, backend microservices, and full-stack integration workflows.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
