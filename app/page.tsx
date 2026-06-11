export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">Chill Web Dev</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-neutral-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-neutral-300 hover:text-white transition-colors">
            About
          </a>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm bg-blue-500 hover:bg-blue-400 text-neutral-950 px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center px-6 py-32">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-5">
          Freelance Web Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          I Build Websites<br />That Work
        </h1>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
          Clean, fast, and modern websites for businesses and individuals.
          Take a look at what I&apos;ve built.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-neutral-950 px-8 py-3 rounded-lg font-medium transition-colors"
        >
          See My Work
        </a>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Recent Projects</h2>
        <p className="text-neutral-400 text-center mb-14">Coming soon — real projects will appear here</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-lg font-semibold mb-2">Restaurant Website</h3>
            <p className="text-neutral-400 text-sm mb-4">
              A modern restaurant site with menu, reservations, and location info.
            </p>
            <span className="text-xs text-blue-400 uppercase tracking-wider">Coming Soon</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2">SaaS Landing Page</h3>
            <p className="text-neutral-400 text-sm mb-4">
              A high-converting landing page for a software product.
            </p>
            <span className="text-xs text-blue-400 uppercase tracking-wider">Coming Soon</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-semibold mb-2">Real Estate Page</h3>
            <p className="text-neutral-400 text-sm mb-4">
              A property listing page with galleries and contact forms.
            </p>
            <span className="text-xs text-blue-400 uppercase tracking-wider">Coming Soon</span>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-lg font-semibold mb-2">Construction Company</h3>
            <p className="text-neutral-400 text-sm mb-4">
              A professional site showcasing services, projects, and testimonials.
            </p>
            <span className="text-xs text-blue-400 uppercase tracking-wider">Coming Soon</span>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-300 leading-relaxed">
          I&apos;m a freelance web developer focused on building clean, fast, and
          modern websites using the latest technologies. I believe every business
          deserves a professional online presence — and I&apos;m here to make that happen.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2025 Chill Web Dev. All rights reserved.
          </p>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            contact.chillweb@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}