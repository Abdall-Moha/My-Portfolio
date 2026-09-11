import { useState } from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/Abdall-Moha' }, { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/abdalla_mohamed61/' }, { label: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/abdalla.mohamed.703359' }, { label: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@wizz.cabdala' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [error, setError] = useState('')
  const updateForm = (event) => { setForm({ ...form, [event.target.name]: event.target.value }); setError('') }
  function submitForm(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) { setError('Please complete your name, phone number, and message.'); return }
    const message = `Hello, My name is ${form.name}\n\nMy phone number is ${form.phone}\n\nMy message is ${form.message}`
    window.open(`https://wa.me/252613975914?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return <section id="contact" className="scroll-mt-18 py-18"><div className="mx-auto grid max-w-6xl gap-9 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div className="section-enter"><p className="section-label">Get in touch</p><h2 className="section-title">Let’s build something useful.</h2><p className="section-copy">Have a project in mind or want to work together? Feel free to get in touch.</p><div className="mt-6 space-y-3"><a href="mailto:wizzcabdala9@gmail.com" className="contact-link"><FaEnvelope className="text-cyan-600"/>wizzcabdala9@gmail.com</a><a href="https://wa.me/252613975914" target="_blank" rel="noopener noreferrer" className="contact-link"><FaWhatsapp className="text-cyan-600"/>+252 613 975 914</a></div><div className="mt-6 flex gap-3">{socialLinks.map(({ label, icon: Icon, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon"><Icon/></a>)}</div></div><form onSubmit={submitForm} className="rounded-xl border border-slate-200 bg-stone-50 p-5 shadow-sm dark:border-slate-700 dark:bg-[#162235] sm:p-6"><label className="form-label">Name<input name="name" value={form.name} onChange={updateForm} className="form-input" placeholder="Your name"/></label><label className="form-label mt-4">Phone<input name="phone" value={form.phone} onChange={updateForm} className="form-input" placeholder="Your phone number"/></label><label className="form-label mt-4">Message<textarea name="message" value={form.message} onChange={updateForm} className="form-input min-h-28 resize-y" placeholder="Tell me about your project"/></label>{error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}<button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1fb857] hover:scale-[1.01]"><FaWhatsapp className="text-lg"/>Send via WhatsApp</button></form></div></section>
}

export default Contact
