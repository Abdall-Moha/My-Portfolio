import { FaReact } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

function Home() {
  const skills = [
    "Html5",
    "CSS3",
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "FastAPI",
  ];
  return (
    <section id="home" className="scroll-mt-18">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-18 pt-28 lg:min-h-[680px] lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="order-2 section-enter lg:order-1">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-700 dark:text-cyan-300">
            <span className="h-px w-8 bg-cyan-600" />
            Available for opportunities
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            I build practical web experiences that feel{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              effortless.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Hi, I’m Abdullahi, a MERN Stack Developer focused on building
            modern, responsive, and practical web applications with React and
            Node.js.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 hover:scale-[1.02]"
            >
              View my projects <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:border-cyan-600 hover:text-cyan-700 dark:border-slate-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              Contact me
            </a>
            <a
              href="/Abdullahi-Mohamed-Ali-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:border-cyan-600 hover:text-cyan-700 dark:border-slate-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              Download CV <FiDownload />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[290px] hero-image-enter lg:order-2 lg:max-w-xs">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.7rem] bg-cyan-200/60 -rotate-6 dark:bg-cyan-950/80" />
            <img
              src="/valid_passport_picture.jpeg"
              alt="Abdullahi"
              className="relative aspect-[4/5] w-full rounded-[1.3rem] object-cover object-top shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <p className="flex items-center gap-2 text-xs font-semibold">
                <FaReact className="text-cyan-500" />
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
