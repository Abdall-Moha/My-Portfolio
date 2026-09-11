import { FaEnvelope, FaGithub } from 'react-icons/fa'

const navigation = ['Home', 'About', 'Projects', 'Services', 'Contact']

function Footer() {
  return <footer className="bg-slate-950 py-12 text-slate-300"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row"><div><p className="text-xl font-bold text-white">Abdullahi<span className="text-cyan-400">.</span></p><p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">MERN Stack Developer building modern, responsive, and practical web applications.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm transition hover:text-cyan-300">{item}</a>)}</div></div><div className="flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row"><p className="text-sm text-slate-500">© 2026 Abdullahi. All rights reserved.</p><div className="flex gap-4"><a href="https://github.com/Abdall-Moha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-300"><FaGithub/></a><a href="mailto:wizzcabdala9@gmail.com" aria-label="Email" className="hover:text-cyan-300"><FaEnvelope/></a></div></div></div></footer>
}

export default Footer
