import {
  Project,
  SkillGroup,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  FinanceTransaction,
  TodoTask,
} from '../types/portfolio';
import avatarImg from '../assets/images/likhitha_final_portrait_1790966475481.jpg';

export const personalInfo = {
  name: 'Likhitha Sri Anjali',
  initials: 'LA',
  roles: [
    'AI & Data Science Student',
    'Generative AI Developer',
    'Backend Developer',
    'Full Stack Developer',
  ],
  educationBrief: 'B.Tech in Artificial Intelligence & Data Science (2027)',
  email: 'palipinilikhitha1407@gmail.com',
  github: 'https://github.com/likhitha-sri14',
  linkedin: 'https://www.linkedin.com/in/palipini-likhitha-sri-anjali-6789732a4',
  summary:
    'I am a final-year B.Tech student specializing in Artificial Intelligence and Data Science, graduating in 2027. I am interested in Generative AI, backend development, and full-stack application development. I enjoy building practical applications that combine AI with modern web technologies.',
  heroTagline:
    'Building practical AI-powered and full-stack applications with a focus on Generative AI, backend development, and modern web technologies.',
  location: 'Visakhapatnam, India',
  avatarImage: avatarImg,
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'pixelwind-intern',
    title: 'Generative AI & Backend Developer Intern',
    company: 'Pixelwind Technologies',
    location: 'Visakhapatnam (Vizag)',
    period: 'Current Internship',
    isCurrent: true,
    description:
      'Currently working as an intern at Pixelwind Technologies, gaining practical experience in Generative AI and backend development while building and working with real-world application concepts.',
    responsibilities: [
      'Generative AI application development and prompt structuring',
      'Backend development with server routes, request handling, and business logic',
      'API concepts, endpoint design, and third-party AI integration',
      'Application integration connecting frontend interfaces to AI services',
      'Working with AI-powered features including classification and conversational logic',
      'Building practical web applications and testing feature flows',
      'Understanding real-world software development workflows and team collaboration',
    ],
    internshipProjects: [
      'Fake News Detection System',
      'Medicare AI',
      'AI Career Guidance System',
    ],
  },
];

/*
 * STRICT REQUIREMENT CHECK:
 * DO NOT include: SQL, Deep Learning, Pandas, NumPy, Responsive Design.
 * Only the explicitly approved skills are included below.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'PROGRAMMING',
    title: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 'Core Language',
        description: 'Primary language for AI workflows, scripts, and server-side logic.',
        iconName: 'Terminal',
      },
      {
        name: 'JavaScript',
        level: 'Core Language',
        description: 'Modern ES6+ syntax, asynchronous programming, and DOM interaction.',
        iconName: 'Code',
      },
      {
        name: 'Java',
        level: 'Object-Oriented',
        description: 'Strong OOP principles, modular architecture, and structured backend concepts.',
        iconName: 'Coffee',
      },
    ],
  },
  {
    category: 'FRONTEND',
    title: 'Frontend Engineering',
    skills: [
      {
        name: 'HTML',
        level: 'Markup & Structure',
        description: 'Semantic page structure, accessibility standards, and SEO layout hygiene.',
        iconName: 'FileCode',
      },
      {
        name: 'CSS',
        level: 'Styling & Layouts',
        description: 'Modern Flexbox, CSS Grid, custom properties, and UI transitions.',
        iconName: 'Palette',
      },
      {
        name: 'React.js',
        level: 'Component Architecture',
        description: 'State management, custom hooks, component lifecycle, and virtual DOM.',
        iconName: 'Atom',
      },
    ],
  },
  {
    category: 'BACKEND',
    title: 'Backend & Server Frameworks',
    skills: [
      {
        name: 'Node.js',
        level: 'Runtime Environment',
        description: 'Event-driven server applications and asynchronous I/O execution.',
        iconName: 'Server',
      },
      {
        name: 'Express.js',
        level: 'REST Microframework',
        description: 'Middleware chaining, routing architecture, and JSON API controllers.',
        iconName: 'Layers',
      },
      {
        name: 'Flask',
        level: 'Python Web Microframework',
        description: 'Lightweight routing for Python AI endpoints and inference serving.',
        iconName: 'Cpu',
      },
    ],
  },
  {
    category: 'AI / GENERATIVE AI',
    title: 'AI & Generative Intelligence',
    skills: [
      {
        name: 'Generative AI',
        level: 'Foundation Models',
        description: 'Architecting generative workflows, context windows, and output parsers.',
        iconName: 'Sparkles',
      },
      {
        name: 'Prompt Engineering',
        level: 'Context Design',
        description: 'Few-shot prompting, system role configuration, and guardrailing techniques.',
        iconName: 'MessageSquareCode',
      },
      {
        name: 'Machine Learning',
        level: 'Predictive Modeling',
        description: 'Supervised classification, feature evaluation, and evaluation metrics.',
        iconName: 'BrainCircuit',
      },
      {
        name: 'NLP',
        level: 'Language Processing',
        description: 'Tokenization, sentiment analysis, text normalization, and lexical processing.',
        iconName: 'Binary',
      },
      {
        name: 'LLM Applications',
        level: 'Practical Orchestration',
        description: 'Building end-to-end user-facing applications powered by language models.',
        iconName: 'Bot',
      },
    ],
  },
  {
    category: 'TOOLS / DEVELOPMENT',
    title: 'Developer Tools & Workflows',
    skills: [
      {
        name: 'Git',
        level: 'Version Control',
        description: 'Branching strategies, commit hygiene, merge resolution, and history.',
        iconName: 'GitBranch',
      },
      {
        name: 'GitHub',
        level: 'Collaboration Hub',
        description: 'Repository hosting, pull requests, issue tracking, and open source sync.',
        iconName: 'GitPullRequest',
      },
      {
        name: 'REST APIs',
        level: 'Protocol Standard',
        description: 'HTTP methods, status code governance, JSON payloads, and auth headers.',
        iconName: 'Network',
      },
      {
        name: 'Vite',
        level: 'Modern Build Tool',
        description: 'Lightning-fast HMR, ES module bundling, and optimized production builds.',
        iconName: 'Zap',
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection System',
    category: 'AI / GENAI',
    categoryLabel: 'Generative AI / Machine Learning',
    shortDescription:
      'An AI-powered system designed to analyze news content and identify whether information is likely to be fake or genuine.',
    problem:
      'The rapid proliferation of digital misinformation makes it difficult for readers to verify veracity before sharing news articles and statements.',
    solution:
      'Developed an automated text evaluation pipeline during the Generative AI internship at Pixelwind Technologies that analyzes lexical patterns, source markers, and credibility cues to deliver an actionable authenticity assessment.',
    features: [
      'Text processing & linguistic token evaluation',
      'Binary & confidence-rated credibility classification',
      'AI-assisted context and source analysis',
      'Clear, digestible visual breakdown of prediction results',
      'User-friendly presentation designed for non-technical readers',
    ],
    technologies: ['Python', 'Machine Learning', 'NLP', 'Generative AI', 'Flask'],
    role: 'Generative AI & Backend Developer Intern (Pixelwind Technologies)',
    githubUrl: 'https://github.com/likhitha-sri14',
    isInternshipProject: true,
  },
  {
    id: 'medicare-ai',
    title: 'Medicare AI',
    category: 'AI / GENAI',
    categoryLabel: 'Generative AI / Healthcare',
    shortDescription:
      'An intelligent AI-powered healthcare assistant designed to provide users with information related to symptoms, diseases, medications, and health queries.',
    problem:
      'People frequently experience anxiety deciphering medical symptoms and terminology late at night without an accessible, structured informational guide.',
    solution:
      'Built a conversational healthcare assistant featuring intelligent symptom breakdown, medication information lookups, and critical red-flag emergency advisories.',
    features: [
      'Interactive conversational symptom guidance',
      'Structured disease information & general health overviews',
      'Medication guidance, dosage context & general precautions',
      'Lab report-related conversational assistance & explanation',
      'Emergency symptom awareness flagging critical conditions',
      'Persistent chat history concept for multi-turn user dialogues',
    ],
    technologies: ['Generative AI', 'Prompt Engineering', 'NLP', 'LLM Applications', 'Node.js'],
    role: 'AI Application Developer (Internship Project at Pixelwind Technologies)',
    githubUrl: 'https://github.com/likhitha-sri14',
    disclaimer:
      'This application is for educational and informational purposes only and is not a substitute for professional medical advice.',
    isInternshipProject: true,
  },
  {
    id: 'ai-career-guidance',
    title: 'AI Career Guidance System',
    category: 'AI / GENAI',
    categoryLabel: 'Generative AI / AI',
    shortDescription:
      'An AI-assisted career guidance application designed to help users understand career options based on their skills, interests, and performance.',
    problem:
      'Undergraduate students and job seekers frequently face career ambiguity without personalized roadmaps aligned with their current technical strengths.',
    solution:
      'Engineered an interactive guidance engine that analyzes user self-assessments, coding preferences, and interests to generate personalized career trajectory suggestions.',
    features: [
      'Personalized career pathway recommendations',
      'Skill evaluation across coding, problem-solving, and communication',
      'Aptitude and domain interest alignment matrix',
      'Actionable roadmaps with prioritized learning steps',
      'Resume and ATS-alignment feedback suggestions',
    ],
    technologies: ['Python', 'Generative AI', 'Prompt Engineering', 'Flask', 'JavaScript'],
    role: 'AI & Backend Developer Intern (Pixelwind Technologies)',
    githubUrl: 'https://github.com/likhitha-sri14',
    isInternshipProject: true,
  },
  {
    id: 'smart-nyaya-ai',
    title: 'Smart Nyaya AI',
    category: 'AI / GENAI',
    categoryLabel: 'Generative AI / Legal Tech & Civic Assistance',
    shortDescription:
      'An AI-powered legal and civic guidance platform assisting citizens in reaching out to police stations and navigating court procedural workflows.',
    problem:
      'Navigating jurisdictional police stations, understanding legal provisions, FIR filing formalities, and court petition procedures is intimidating and complex for everyday citizens.',
    solution:
      'Architected an intelligent legal assistance platform that simplifies legal jargon, guides users through FIR preparation and police station contact protocols, and demystifies court filing procedures.',
    features: [
      'Intelligent jurisdictional routing for police station and judicial outreach',
      'Automated guidance on FIR drafting, formal complaints, and civil petitions',
      'Simplified plain-language legal definitions and citizen constitutional rights breakdown',
      'Multi-lingual legal Q&A processing powered by NLP & Generative AI',
      'Court timeline and procedural checklist generator for judicial cases',
    ],
    technologies: ['Generative AI', 'NLP', 'Python', 'Flask', 'Prompt Engineering', 'REST APIs'],
    role: 'Lead AI & Backend Developer',
    githubUrl: 'https://github.com/likhitha-sri14',
  },
  {
    id: 'she-shield',
    title: 'She Shield',
    category: 'FULL STACK',
    categoryLabel: 'Full Stack / Women Safety & Emergency SOS',
    shortDescription:
      'A comprehensive women\'s safety platform providing instant emergency SOS broadcasting, real-time location dispatching, and rapid helpline connectivity.',
    problem:
      'In high-risk emergency situations, victims need an immediate, friction-free mechanism to alert emergency authorities and trusted guardians with pinpoint location coordinates.',
    solution:
      'Engineered an emergency safety platform featuring one-tap SOS alerts, live geolocation dispatching, automated distress notifications, and direct contact with police and national helplines.',
    features: [
      'One-tap Emergency SOS broadcast with real-time GPS coordinates',
      'Automated distress SMS and alert dispatch to designated guardians',
      'Instant hotkey dialer connecting directly to national emergency lines (112, 1091)',
      'Safe route guidance identifying nearby verified safe locations and police stations',
      'Discrete emergency activation mode for stealth situational safety',
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'Geolocation API', 'CSS'],
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/likhitha-sri14',
  },
  {
    id: 'finance-flow-tracker',
    title: 'Finance Flow Tracker',
    category: 'FULL STACK',
    categoryLabel: 'Full Stack / Web / Personal Finance',
    shortDescription:
      'An interactive personal finance tracker that helps users manage and understand their income, expenses, and savings with live visual analytics.',
    problem:
      'Traditional budgeting spreadsheets feel cumbersome and static, leaving students and professionals without immediate clarity on where money goes.',
    solution:
      'Developed a responsive, interactive full-stack financial dashboard powered by React, Recharts, and local storage state with zero external financial API dependencies.',
    features: [
      'Real-time financial summary (Income, Expenses, Savings, Remaining Balance)',
      'Interactive Recharts visualizations (Income vs Expense, Category breakdown, Monthly trend)',
      'Dynamic transaction logging with category tag and date picker',
      'Instant client-side transaction filtering and deletion',
      'Zero-latency local persistence with demo data reset capability',
      'Responsive dashboard layout crafted with modern design standards',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS', 'Recharts', 'Lucide React', 'Vite'],
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/likhitha-sri14',
    hasInteractiveDemo: 'finance',
  },
  {
    id: 'todo-list-application',
    title: 'To-Do List Application',
    category: 'WEB',
    categoryLabel: 'Full Stack / Web',
    shortDescription:
      'A productivity application for managing daily tasks with a clean and interactive user interface, task statuses, and filtering.',
    problem:
      'Over-complicated productivity tools introduce friction for quick daily task capture and status checks.',
    solution:
      'Created a focused, responsive task manager with zero-friction inline editing, priority flags, live completion metrics, and theme adaptability.',
    features: [
      'Add, edit, delete, and mark tasks complete with instant feedback',
      'Filter tasks by All, Active, and Completed states',
      'Live metric counter showing total, completed, and pending tasks',
      'Personalized dynamic greeting based on time of day',
      'Persistent task storage with offline browser synchronization',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS', 'HTML', 'Vite'],
    role: 'Frontend & Web Developer',
    githubUrl: 'https://github.com/likhitha-sri14',
    hasInteractiveDemo: 'todo',
  },
  {
    id: 'dynamic-personal-portfolio',
    title: 'Dynamic Personal Portfolio',
    category: 'WEB',
    categoryLabel: 'Web Development',
    shortDescription:
      'My personal responsive portfolio website showcasing my skills, experience, certifications, interactive tools, and projects.',
    problem:
      'Standard resume PDFs fail to showcase real interactive components, responsive ergonomics, and coding craft to prospective recruiters.',
    solution:
      'Designed and engineered this production-grade, single-page application featuring smooth section anchors, theme switching, interactive project modals, and an AI knowledge assistant.',
    features: [
      'Carefully engineered dual-theme engine (Light & Dark with CSS variables)',
      'Interactive project modal deep-dives with keyboard ESC support',
      'Live in-portfolio interactive demonstrations (Finance Tracker & To-Do app)',
      'Local portfolio knowledge assistant for recruiter Q&A',
      'Fluid responsiveness tailored across mobile, tablet, and widescreen layouts',
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
    role: 'Sole Designer & Engineer',
    githubUrl: 'https://github.com/likhitha-sri14',
  },
];

export const educationData: EducationItem = {
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  specialization: 'Artificial Intelligence, Machine Learning & Modern Web Systems',
  status: 'Currently Pursuing (Final Year)',
  graduationYear: 'Will graduate in 2027',
  highlights: [
    'Specialized coursework in AI algorithms, Natural Language Processing, and Software Engineering',
    'Practical hands-on lab work spanning Python backend architecture and modern web systems',
    'Active participation in technical projects and student innovation challenges',
  ],
};

/*
 * STRICT REQUIREMENT CHECK:
 * REMOVED: "Machine Learning Basics"
 * ONLY the 3 approved certifications are listed:
 */
export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'AI DevOps Engineer Certificate Programme',
    issuer: 'RF Skilling Academy',
    type: 'Professional Certification',
    skillsCovered: [
      'AI Workflow Automation',
      'Deployment Principles',
      'Model Lifecycle Management',
      'Environment Orchestration',
    ],
  },
  {
    id: 'cert-2',
    title: 'Full Stack Master Class',
    issuer: 'NoviTech',
    duration: '30 Days',
    type: 'Intensive Training & Certification',
    skillsCovered: [
      'Frontend Component Design',
      'Backend Route Implementation',
      'REST API Integration',
      'Full Stack Architecture',
    ],
  },
  {
    id: 'cert-3',
    title: 'Full Stack Java',
    issuer: 'Skill Dzire',
    type: 'Short-term Internship & Certification',
    skillsCovered: [
      'Java Object-Oriented Programming',
      'Modular System Design',
      'Backend Logic Flow',
      'Application Building',
    ],
  },
  {
    id: 'cert-4',
    title: 'Python Programming Masterclass',
    issuer: 'Udemy',
    type: 'Professional Course Certification',
    skillsCovered: [
      'Core & Advanced Python Syntax',
      'Object-Oriented Programming (OOP)',
      'Data Structures & Algorithms',
      'Backend Scripting & Automation',
    ],
  },
  {
    id: 'cert-5',
    title: 'Programming in Java (NPTEL)',
    issuer: 'NPTEL — IIT',
    type: 'National Elite Certification',
    skillsCovered: [
      'Java Object-Oriented Principles',
      'Multithreading & Concurrency',
      'Java Collections Framework',
      'Exception Handling & I/O Streams',
    ],
  },
];

export const initialFinanceTransactions: FinanceTransaction[] = [
  {
    id: 't-1',
    type: 'income',
    amount: 15000,
    category: 'Internship Stipend',
    description: 'Pixelwind Technologies monthly stipend',
    date: '2026-09-01',
  },
  {
    id: 't-2',
    type: 'expense',
    amount: 2200,
    category: 'Learning & Books',
    description: 'AI & Cloud development course materials',
    date: '2026-09-05',
  },
  {
    id: 't-3',
    type: 'expense',
    amount: 1800,
    category: 'Tech Subscriptions',
    description: 'Cloud hosting & API testing sandbox',
    date: '2026-09-10',
  },
  {
    id: 't-4',
    type: 'savings',
    amount: 5000,
    category: 'Emergency Fund',
    description: 'Transferred to high-yield student savings',
    date: '2026-09-15',
  },
  {
    id: 't-5',
    type: 'income',
    amount: 4500,
    category: 'Freelance Project',
    description: 'Frontend component bug fixes and integration',
    date: '2026-09-20',
  },
  {
    id: 't-6',
    type: 'expense',
    amount: 1200,
    category: 'Commute & Travel',
    description: 'Monthly transit pass to Visakhapatnam tech park',
    date: '2026-09-22',
  },
];

export const initialTodoTasks: TodoTask[] = [
  {
    id: 'task-1',
    text: 'Refine Fake News Detection model prompt evaluation matrix',
    completed: true,
    createdAt: '2026-09-28',
    priority: 'high',
  },
  {
    id: 'task-2',
    text: 'Review Medicare AI medical disclaimer and symptom classification',
    completed: true,
    createdAt: '2026-09-29',
    priority: 'high',
  },
  {
    id: 'task-3',
    text: 'Test Finance Flow Tracker Recharts responsive scaling',
    completed: false,
    createdAt: '2026-10-01',
    priority: 'medium',
  },
  {
    id: 'task-4',
    text: 'Complete NoviTech Full Stack project capstone review',
    completed: false,
    createdAt: '2026-10-02',
    priority: 'low',
  },
];

export const knowledgeBaseFaq = [
  {
    keywords: ['who', 'about', 'background', 'likhitha', 'profile'],
    question: 'Who is Likhitha Sri Anjali?',
    answer:
      'Likhitha Sri Anjali is a final-year B.Tech student specializing in Artificial Intelligence and Data Science (graduating in 2027). She is a Generative AI Developer, Backend Developer, and Full Stack Developer with practical industry experience from her ongoing internship at Pixelwind Technologies in Visakhapatnam.',
  },
  {
    keywords: ['project', 'projects', 'build', 'work', 'fake news', 'medicare', 'finance', 'nyaya', 'she shield', 'safety', 'court', 'police'],
    question: 'What projects has Likhitha built?',
    answer:
      'Likhitha has built notable applications including:\n1) Smart Nyaya AI (Generative AI legal & civic guidance for contacting police stations & court workflows)\n2) She Shield (Full-stack women safety platform with instant emergency SOS & GPS dispatch)\n3) Fake News Detection System (Generative AI text integrity & authenticity verification)\n4) Medicare AI (Healthcare conversational assistant)\n5) AI Career Guidance System (Skill assessment & trajectory modeling)\n6) Finance Flow Tracker (Interactive Recharts financial dashboard)\n7) To-Do List Application (Interactive task management).',
  },
  {
    keywords: ['internship', 'experience', 'pixelwind', 'company', 'job'],
    question: 'What is Likhitha’s current work experience?',
    answer:
      'Likhitha is currently working as a Generative AI & Backend Developer Intern at Pixelwind Technologies in Visakhapatnam (Vizag). Her core responsibilities include developing Generative AI applications, architecting backend server endpoints, API integration, and implementing real-world software workflows.',
  },
  {
    keywords: ['skills', 'tech', 'stack', 'languages', 'tools', 'technologies'],
    question: 'What are Likhitha’s core technical skills?',
    answer:
      'Her toolbox includes:\n• Programming: Python, JavaScript, Java\n• Frontend: React.js, HTML, CSS\n• Backend: Node.js, Express.js, Flask\n• AI/GenAI: Generative AI, Prompt Engineering, Machine Learning, NLP, LLM Applications\n• Tools: Git, GitHub, REST APIs, Vite.',
  },
  {
    keywords: ['education', 'college', 'degree', 'graduation', 'btech', 'university'],
    question: 'What is Likhitha’s educational background?',
    answer:
      'She is currently pursuing her B.Tech degree in Artificial Intelligence & Data Science, graduating in 2027.',
  },
  {
    keywords: ['certifications', 'certificate', 'novitech', 'dzire', 'devops', 'rf skilling'],
    question: 'What certifications does Likhitha hold?',
    answer:
      'Likhitha holds 3 specialized credentials:\n1) AI DevOps Engineer Certificate Programme (RF Skilling Academy)\n2) Full Stack Master Class (NoviTech — 30 Days)\n3) Full Stack Java (Skill Dzire — Short-term internship & certification).',
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'github', 'linkedin'],
    question: 'How can recruiters contact Likhitha?',
    answer:
      'You can reach Likhitha directly via email at palipinilikhitha1407@gmail.com, on LinkedIn at https://www.linkedin.com/in/palipini-likhitha-sri-anjali-6789732a4, or review her source repositories on GitHub at https://github.com/likhitha-sri14.',
  },
];
