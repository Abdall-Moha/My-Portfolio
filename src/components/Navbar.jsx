import { FaBars } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle.jsx'

const navigation = ['Home', 'About', 'Projects', 'Services', 'Contact']

function Navbar({ darkMode, setDarkMode, openMenu }) {
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur dark:border-slate-800 dark:bg-[#101826]/90"><nav className="mx-auto flex h-18 max-w-6xl items-center px-5 lg:px-8" aria-label="Main navigation"><a href="#home" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Abdullahi<span className="text-cyan-600 dark:text-cyan-400">.</span></a><div className="ml-auto hidden items-center gap-7 md:flex">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300">{item}</a>)}<ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /></div><button onClick={openMenu} className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-lg md:hidden dark:border-slate-700" aria-label="Open navigation menu"><FaBars /></button></nav></header>
}

export default Navbar
