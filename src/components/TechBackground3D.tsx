import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Terminal,
  Server,
  Cpu,
  Layers,
  Bot,
  Binary,
  Code2,
  Workflow,
  Network,
  Database,
  Atom,
  Boxes,
  FileCode,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const TechBackground3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle 3D perspective tilt angles based on mouse
  const tiltX = mousePos.y * -4; // degrees
  const tiltY = mousePos.x * 4;  // degrees

  // Array of icons arranged geometrically across the grid
  const gridIcons = [
    { Icon: BrainCircuit, top: '8%', left: '7%', delay: '0s', size: 28 },
    { Icon: Terminal, top: '14%', left: '88%', delay: '1.2s', size: 24 },
    { Icon: Sparkles, top: '22%', left: '24%', delay: '2.5s', size: 22 },
    { Icon: Server, top: '30%', left: '80%', delay: '0.8s', size: 26 },
    { Icon: Cpu, top: '38%', left: '12%', delay: '1.8s', size: 26 },
    { Icon: Bot, top: '46%', left: '92%', delay: '3.1s', size: 24 },
    { Icon: Layers, top: '52%', left: '28%', delay: '0.4s', size: 24 },
    { Icon: Code2, top: '60%', left: '75%', delay: '2.2s', size: 28 },
    { Icon: Binary, top: '68%', left: '8%', delay: '1.5s', size: 22 },
    { Icon: Database, top: '75%', left: '86%', delay: '3.6s', size: 26 },
    { Icon: Network, top: '82%', left: '20%', delay: '0.9s', size: 24 },
    { Icon: Workflow, top: '89%', left: '68%', delay: '2.7s', size: 24 },
    { Icon: Atom, top: '94%', left: '42%', delay: '1.1s', size: 26 },
    { Icon: Boxes, top: '18%', left: '52%', delay: '3.3s', size: 22 },
    { Icon: FileCode, top: '64%', left: '48%', delay: '2.0s', size: 22 },
    { Icon: ShieldCheck, top: '42%', left: '64%', delay: '1.7s', size: 24 },
    { Icon: Zap, top: '86%', left: '94%', delay: '0.6s', size: 20 },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 3D Perspective Canvas Container */}
      <div
        className="relative w-full h-full"
        style={{
          perspective: '1200px',
        }}
      >
        <div
          className="w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Geometric Grid with Grid Coordinate Crosshairs */}
          <div className="absolute inset-0 bg-dot-matrix opacity-40 dark:opacity-60" />

          {/* Geometric Grid Lines (Very faint high-tech coordinate system) */}
          <svg
            className="absolute inset-0 w-full h-full stroke-slate-400/10 dark:stroke-indigo-500/10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid-pattern" width="96" height="96" patternUnits="userSpaceOnUse">
                <path d="M 96 0 L 0 0 0 96" fill="none" strokeWidth="0.75" />
                {/* Crosshair at vertex */}
                <path d="M 92 96 L 100 96 M 96 92 L 96 100" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          {/* Abstract Floating Tech Icons */}
          {gridIcons.map((item, index) => {
            const { Icon, top, left, delay, size } = item;
            return (
              <div
                key={index}
                className="absolute text-slate-400/35 dark:text-indigo-400/25 transition-transform duration-500"
                style={{
                  top,
                  left,
                  animation: `floatSlow 9s ease-in-out infinite`,
                  animationDelay: delay,
                  transform: `translateZ(${15 + (index % 4) * 12}px)`,
                }}
              >
                <div className="p-2 rounded-xl bg-slate-200/20 dark:bg-indigo-900/10 backdrop-blur-[1px] border border-slate-300/20 dark:border-indigo-500/10 hover:scale-125 transition-transform">
                  <Icon style={{ width: size, height: size }} />
                </div>
              </div>
            );
          })}

          {/* 3D Wireframe Isometric Cubes Floating Abstractly */}
          <div
            className="absolute top-1/4 right-[15%] w-24 h-24 text-indigo-500/15 dark:text-indigo-400/20 animate-float-slow hidden md:block"
            style={{
              transform: 'translateZ(40px) rotateX(45deg) rotateZ(30deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="w-full h-full border border-dashed border-indigo-400/40 rounded-xl" />
          </div>

          <div
            className="absolute bottom-1/3 left-[12%] w-28 h-28 text-cyan-500/15 dark:text-cyan-400/20 animate-float-reverse hidden md:block"
            style={{
              transform: 'translateZ(25px) rotateX(35deg) rotateZ(-25deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="w-full h-full border border-dashed border-cyan-400/40 rounded-xl" />
          </div>

          {/* Ambient Colored Radial Glowing Orbs */}
          <div className="absolute -top-24 -left-24 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-24 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl animate-float-reverse" />
          <div className="absolute -bottom-24 left-1/3 w-96 sm:w-[520px] h-96 sm:h-[520px] bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-3xl animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
};
