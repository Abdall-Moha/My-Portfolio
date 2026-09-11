import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import MobileSidebar from './components/MobileSidebar.jsx'
import Footer from './components/Footer.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Services from './sections/Services.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return <div className="min-w-0 overflow-hidden bg-stone-50 text-slate-800 transition-colors dark:bg-[#101826] dark:text-slate-100">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} openMenu={() => setMenuOpen(true)} />
    <MobileSidebar darkMode={darkMode} setDarkMode={setDarkMode} menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    <main><Home /><About /><Projects /><Services /><Contact /></main>
    <Footer />
  </div>
}

export default App
