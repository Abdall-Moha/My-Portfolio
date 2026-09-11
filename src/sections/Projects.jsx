import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: 'Inventory Management System', image: '/Inventory Pic.png', description: 'A full-stack inventory and sales management system for products, employees, sales, invoices, and business reports.', technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'], features: ['Product & sales management', 'Invoices and reports', 'Role-based employees'], demo: 'https://inventory-system-demo-six.vercel.app/', code: 'https://github.com/Abdall-Moha/FullStack-Inventory-Management-System' },
  { title: 'School Management System', image: '/School MS.png', description: 'A modern management interface for students, teachers, users, exams, attendance, and everyday school activities.', technologies: ['React', 'Tailwind', 'Redux', 'JavaScript', 'LocalStorage'], features: ['Student & teacher management', 'Attendance and exams', 'Responsive data tables'], demo: 'https://school-ms-chi-navy.vercel.app/', code: 'https://github.com/Abdall-Moha/Full-Stack-School-System' },
  { title: 'Resumify — CV Builder', image: '/resumify.webp', description: 'A modern CV builder that lets users create and customize professional resumes through an interactive interface.', technologies: ['React', 'JavaScript', 'Tailwind', 'LocalStorage'], features: ['Editable resume sections', 'Live resume preview', 'Local data persistence'], demo: 'https://resumify-neon.vercel.app/', code: 'https://github.com/Abdall-Moha/Resumify' },
  { title: 'TableFlow — Restaurant Website', image: '/TableFlow.jpg', description: 'A modern restaurant website designed to give customers an attractive, clear, and mobile-friendly online experience.', technologies: ['React', 'JavaScript', 'Tailwind'], features: ['Menu presentation', 'Responsive navigation', 'Restaurant information'], demo: 'https://restaurant-web-demo-theta.vercel.app/', code: 'https://github.com/Abdall-Moha/full-Stack-Restaurant-website' },
]

function Projects() {
  return <section id="projects" className="scroll-mt-18 py-18"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl section-enter"><p className="section-label">Selected work</p><h2 className="section-title">Projects built around real needs.</h2><p className="section-copy">A selection of web applications that show my approach to practical, polished, responsive development.</p></div><div className="mt-9 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project}/>)}</div></div></section>
}

export default Projects
