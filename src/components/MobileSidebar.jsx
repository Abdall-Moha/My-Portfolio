import { FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle.jsx'

const navigation = ['Home', 'About', 'Projects', 'Services', 'Contact']

function MobileSidebar({ darkMode, setDarkMode, menuOpen, closeMenu }) {
  return <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`} aria-hidden={!menuOpen}><button onClick={closeMenu} className={`absolute inset-0 bg-slate-950/45 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`} aria-label="Close navigation menu"/><aside className={`relative flex h-full w-72 flex-col bg-stone-50 px-6 py-7 shadow-2xl transition-transform duration-300 dark:bg-[#162235] ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}><div className="flex items-center justify-between"><span className="text-lg font-bold">Abdullahi<span className="text-cyan-500">.</span></span><button onClick={closeMenu} className="p-2 text-xl" aria-label="Close navigation menu"><FaTimes /></button></div><div className="mt-12 flex flex-col gap-2">{navigation.map((item) => <a key={item} onClick={closeMenu} href={`#${item.toLowerCase()}`} className="rounded-lg px-3 py-3 font-medium hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-slate-800 dark:hover:text-cyan-300">{item}</a>)}</div><div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700"><span className="text-sm text-slate-500 dark:text-slate-400">Choose your theme</span><ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /></div></aside></div>
}

export default MobileSidebar
