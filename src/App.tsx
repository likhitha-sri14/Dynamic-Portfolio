import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { TechBackground3D } from './components/TechBackground3D';
import { FinanceFlowTracker } from './components/FinanceFlowTracker';
import { TodoListWidget } from './components/TodoListWidget';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAssistant } from './components/PortfolioAssistant';
import { projectsData } from './data/portfolioData';
import { Project } from './types/portfolio';
import { BarChart3, ListTodo, Sparkles } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Selected project for deep-dive modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // AI Knowledge Assistant state
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Active Interactive Demo Tab ('finance' | 'todo')
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'finance' | 'todo'>('finance');

  // Handle selecting project by ID (from Experience section, etc.)
  const handleSelectProjectId = (id: string) => {
    const found = projectsData.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  // Launch interactive demo and scroll to sandbox section
  const handleLaunchInteractive = (demoType: 'finance' | 'todo') => {
    setActiveInteractiveTab(demoType);
    const sandboxEl = document.getElementById('interactive-sandbox');
    if (sandboxEl) {
      const topOffset = 80;
      const elementPosition = sandboxEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-250 relative overflow-x-hidden">
      {/* Dynamic 3D Geometric Tech Background */}
      <TechBackground3D />

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience onSelectProject={handleSelectProjectId} />

        {/* Skills / Toolbox Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInteractive={handleLaunchInteractive}
        />

        {/* Live Interactive Sandbox Section */}
        <section
          id="interactive-sandbox"
          className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-100/60 dark:bg-slate-950/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Live Interactive Sandbox
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                Try My Working Applications
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Interact with the full working implementations built right into this portfolio. All state is maintained locally in your browser.
              </p>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-fit mb-8 shadow-xs">
              <button
                onClick={() => setActiveInteractiveTab('finance')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-2 ${
                  activeInteractiveTab === 'finance'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Finance Flow Tracker</span>
              </button>

              <button
                onClick={() => setActiveInteractiveTab('todo')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-2 ${
                  activeInteractiveTab === 'todo'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ListTodo className="w-4 h-4" />
                <span>To-Do List Application</span>
              </button>
            </div>

            {/* Interactive Component Render */}
            <div>
              {activeInteractiveTab === 'finance' ? (
                <FinanceFlowTracker />
              ) : (
                <TodoListWidget />
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInteractive={handleLaunchInteractive}
      />

      {/* AI / Local Knowledge Base Assistant */}
      <PortfolioAssistant
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onSelectProject={handleSelectProjectId}
      />
    </div>
  );
}
