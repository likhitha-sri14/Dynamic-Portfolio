import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Bot,
  BrainCircuit,
  Terminal,
  ExternalLink,
  Camera,
  Upload,
  RotateCcw,
  Check,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>(personalInfo.avatarImage);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom photo from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('likhitha_custom_photo');
      if (stored) {
        setAvatarSrc(stored);
        setIsCustomPhoto(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image format
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, or WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAvatarSrc(result);
        setIsCustomPhoto(true);
        setImageError(false);
        try {
          localStorage.setItem('likhitha_custom_photo', result);
        } catch {
          // Ignore quota errors
        }
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    try {
      localStorage.removeItem('likhitha_custom_photo');
    } catch {
      // Ignore
    }
    setAvatarSrc(personalInfo.avatarImage);
    setIsCustomPhoto(false);
    setImageError(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-cyan-500/10 dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-cyan-600/10 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status & Unboxed Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Pixelwind Technologies Intern
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>B.Tech AI & Data Science (2027)</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Visakhapatnam, India</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase font-mono">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-name text-balance leading-tight">
                <span className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-800 dark:from-white dark:via-indigo-200 dark:to-slate-100 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Rotating Titles */}
            <div className="border-l-2 border-indigo-500 dark:border-indigo-400 pl-4 py-1">
              <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
                AI & Data Science Student
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                Generative AI Developer <span className="text-indigo-500">/</span> Backend Developer
              </p>
            </div>

            {/* Verified Short Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroTagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </button>
            </div>

            {/* Social Buttons (Must actually work) */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400 dark:text-slate-500 mr-2">Profiles:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700/60 bg-white/50 dark:bg-slate-900/50 transition-colors group flex items-center gap-1.5 text-xs font-medium"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700/60 bg-white/50 dark:bg-slate-900/50 transition-colors group flex items-center gap-1.5 text-xs font-medium"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700/60 bg-white/50 dark:bg-slate-900/50 transition-colors group flex items-center gap-1.5 text-xs font-medium"
                aria-label="Email Likhitha"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Interactive Floating Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <Card3D maxTilt={6} className="w-full max-w-sm sm:max-w-md">
              <div className="relative w-full">
                {/* Hidden File Input for Custom Photo Upload */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  className="hidden"
                  aria-label="Upload custom profile photo"
                />

                {/* Decorative Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-slate-900 dark:to-slate-950 p-2 shadow-xl shadow-slate-200/50 dark:shadow-indigo-950/20 group">
                  <div className="aspect-square relative rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                    {!imageError ? (
                      <img
                        src={avatarSrc}
                        alt="Likhitha Sri Anjali"
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* High-polish resilient SVG Fallback Container */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 text-center">
                        <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-3xl font-mono font-bold text-indigo-300 mb-3 shadow-inner">
                          LA
                        </div>
                        <p className="font-display font-bold text-lg">{personalInfo.name}</p>
                        <p className="text-xs text-indigo-300 font-mono mt-1">AI & GenAI Engineer</p>
                      </div>
                    )}

                    {/* Camera Quick-Upload Trigger Button */}
                    <button
                      onClick={handleUploadClick}
                      className="absolute top-3 right-3 z-20 px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all duration-200 flex items-center gap-1.5 text-xs font-semibold hover:scale-105 active:scale-95"
                      title="Upload your own photo from device"
                      aria-label="Upload custom photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-indigo-300" />
                      <span className="hidden sm:inline">Upload Photo</span>
                    </button>

                    {/* Upload Success Toast notification */}
                    {uploadSuccess && (
                      <div className="absolute top-12 right-3 z-30 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>Photo Updated!</span>
                      </div>
                    )}

                    {/* Measured scrim at bottom of avatar */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-end justify-between p-4">
                      <div className="text-white text-xs space-y-0.5">
                        <p className="font-semibold text-white/95">Pixelwind Technologies</p>
                        <p className="text-white/75 text-[11px]">Generative AI & Backend Intern</p>
                      </div>

                      {isCustomPhoto && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/80 text-white font-medium border border-indigo-300/30">
                          Custom Photo
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Highlight 1: AI & LLM Focus */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-lg flex items-center gap-3 animate-bounce [animation-duration:4s]">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Generative AI</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">LLM & Prompt Eng.</p>
                  </div>
                </div>

                {/* Floating Highlight 2: Backend Architecture */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-lg flex items-center gap-3 animate-pulse [animation-duration:3s]">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Backend Systems</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Python · Node · APIs</p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Photo Management Actions Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-end gap-2 text-xs w-full max-w-sm sm:max-w-md">
              <button
                onClick={handleUploadClick}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Upload className="w-3.5 h-3.5 text-indigo-500" />
                <span>Upload My Photo</span>
              </button>

              {isCustomPhoto && (
                <button
                  onClick={handleResetPhoto}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  title="Revert back to default avatar"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
