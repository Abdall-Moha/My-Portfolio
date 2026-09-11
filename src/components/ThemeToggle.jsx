import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeToggle({ darkMode, setDarkMode }) {
  return <button onClick={() => setDarkMode(!darkMode)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200" aria-label="Toggle color theme">{darkMode ? <FaSun /> : <FaMoon />}</button>
}

export default ThemeToggle
