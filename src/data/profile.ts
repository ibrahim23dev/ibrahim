export const profile = {
  name: 'Mohammad Ibrahim',
  title: 'Full Stack Software Engineer',
  location: 'Malaysia',
  university: 'International Islamic University Malaysia',
  github: 'https://github.com/ibrahim23dev', // Add a verified profile URL before publishing.
  linkedin: 'https://www.linkedin.com/in/mohammad-ibrahim-7aa21b1ba/', // Add a verified profile URL before publishing.
  email: 'ibrahim23dev@gmail.com', // Add a verified email address before publishing.
  resume: '/resume/Mohammad-Ibrahim-Resume.pdf', // Set to '/resume/Mohammad-Ibrahim-Resume.pdf' after adding a real PDF.
}

export const experience = [
  {
    company: 'Easy Fashion Ltd', role: 'Software Engineer', dates: '2024 — 2026',
    description: 'Developed enterprise application features for employee and HR operations, including HRM modules, payroll, attendance, and reporting workflows. Implemented backend APIs and database-backed services.',
    stack: ['TypeScript', 'NestJS', 'Sequelize', 'PostgreSQL'],
  },
  {
    company: 'Naria IT Solution / NariaNext IT Ltd', role: 'Software Engineer / Full Stack Developer', dates: '2023 — 2024',
    description: 'Worked across frontend and backend development for full stack web applications, REST API integration, and database-driven features. Contributed to data validation, SQL queries, debugging, and troubleshooting.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs', 'SQL'],
  },
]

export const projects = [
  { id: 'ota', name: 'OTA Platform', kind: 'Full Stack', number: '01', color: 'blue',
    description: 'A travel-related application spanning user-facing experiences, backend services, and structured data workflows.',
    contribution: 'Full stack application development across frontend, backend, API integration, and data management.',
    details: 'The work brings together interface implementation and backend concerns in a travel application context. Specific product features and public launch details are not available.',
    stack: ['JavaScript', 'React', 'Node.js', 'REST APIs'], status: 'Private repository' },
  { id: 'hrm', name: 'HRM & Payroll Systems', kind: 'Enterprise Systems', number: '02', color: 'lime',
    description: 'Enterprise employee management modules supporting HR operations, payroll, attendance, and salary planning workflows.',
    contribution: 'Backend API implementation and database integration for employee and HRM modules.',
    details: 'Built modular backend functionality using DTOs, services, controllers, and relational data models. Work included employee information and payroll-related operations.',
    stack: ['NestJS', 'TypeScript', 'Sequelize', 'PostgreSQL'], status: 'Private repository' },
  { id: 'attendance', name: 'Mobile Attendance & Face Authentication', kind: 'AI & Research', number: '03', color: 'rose',
    description: 'An employee attendance workflow exploring mobile image capture and face-based verification.',
    contribution: 'Explored face detection, image capture, face embeddings, OTP verification, and an AI service approach.',
    details: 'The described work includes workflow exploration and a Python/FastAPI AI service prototype. It is presented as exploration, not as a validated or deployed face recognition system.',
    stack: ['Python', 'FastAPI', 'Face embeddings', 'OTP workflow'], status: 'Prototype exploration' },
  { id: 'reporting', name: 'Employee & HRM Reporting', kind: 'Backend', number: '04', color: 'amber',
    description: 'Structured business reports for payroll, attendance, bank advice, salary, and overtime operations.',
    contribution: 'Implemented backend reporting features and queries over HR and payroll data.',
    details: 'Reporting work focused on translating HR operations data into useful, structured outputs using TypeScript services and PostgreSQL-backed queries.',
    stack: ['NestJS', 'TypeScript', 'Sequelize', 'PostgreSQL'], status: 'Private repository' },
  { id: 'tours', name: 'Tour & Hajj Package Management', kind: 'Full Stack', number: '05', color: 'teal',
    description: 'Travel package and tour-management applications built around organized application data and workflows.',
    contribution: 'Application development and data management for travel and package use cases.',
    details: 'The project context covers tour and Hajj package management. No public demo or additional feature inventory is available.',
    stack: ['JavaScript', 'Web applications', 'APIs', 'SQL'], status: 'Private repository' },
]

export const skills = [
  { title: 'Frontend engineering', note: 'Interfaces & component systems', items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend engineering', note: 'Services & API design', items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'API integration', 'DTOs', 'Services & controllers', 'Modular architecture', 'Auth concepts'] },
  { title: 'Databases & modeling', note: 'Persistence & data access', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize', 'Mongoose', 'SQL'] },
  { title: 'Tools & infrastructure', note: 'Everyday engineering tools', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Redis', 'Vercel', 'npm', 'pnpm'] },
  { title: 'Programming & data', note: 'Analysis foundations', items: ['JavaScript', 'TypeScript', 'Python', 'R', 'Data science fundamentals'] },
  { title: 'AI & research interests', note: 'Emerging academic direction', items: ['Artificial intelligence', 'Machine learning', 'Deep learning', 'Explainable AI', 'Federated learning', 'Multimodal AI', 'Biomedical AI'] },
]
