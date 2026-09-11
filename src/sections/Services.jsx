import { FaCode, FaLaptopCode, FaUserTie } from 'react-icons/fa'

const services = [
  { title: 'Website Development', icon: FaLaptopCode, description: 'Modern websites for businesses, organizations, restaurants, companies, and personal brands.', features: ['Responsive layouts', 'Mobile-friendly design', 'User-friendly interfaces', 'Modern UI', 'Fast, clean frontend', 'Cross-device compatibility', 'Interactive elements'] },
  { title: 'System Development', icon: FaCode, description: 'Practical web-based management systems designed around the way your business or organization works.', features: ['Responsive dashboards', 'Secure authentication', 'Role-based access', 'CRUD functionality', 'Data management', 'Search and filtering', 'REST API integration', 'Database integration'] },
  { title: 'Portfolio Building', icon: FaUserTie, description: 'Professional personal portfolios for developers, students, freelancers, professionals, and personal brands.', features: ['Professional design', 'Responsive layout', 'Personal branding', 'Project showcase', 'Skills section', 'Contact section', 'Social media integration', 'Mobile-friendly design'] },
]

function Services() {
  return <section id="services" className="scroll-mt-18 bg-white py-18 dark:bg-[#131e2e]"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl section-enter"><p className="section-label">Services</p><h2 className="section-title">Practical solutions for your next idea.</h2><p className="section-copy">I help turn clear goals into polished, responsive web experiences that people can use with confidence.</p></div><div className="mt-9 grid gap-5 lg:grid-cols-3">{services.map(({ title, icon: Icon, description, features }) => <article key={title} className="rounded-xl border border-slate-200 bg-stone-50 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-700 dark:bg-[#162235]"><div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-100 text-lg text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300"><Icon/></div><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p><ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-600 dark:border-slate-700 dark:text-slate-300">{features.map((feature) => <li key={feature} className="flex gap-1.5"><span className="text-cyan-600">•</span>{feature}</li>)}</ul></article>)}</div></div></section>
}

export default Services
