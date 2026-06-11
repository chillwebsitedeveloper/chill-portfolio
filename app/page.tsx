export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">Chill Web Dev</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </a>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center px-6 py-36">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-6">
          Freelance Web Developer
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          I Build Websites<br />That Work
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Clean, fast, and modern websites for businesses and individuals.
          Take a look at what I&apos;ve built.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
        >
          See My Work
        </a>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Recent Projects</h2>
        <p className="text-gray-400 text-center mb-16">Real projects, live and shipped.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <a
            href="https://chill-restaurant-nine.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:bg-gray-100/50 hover:shadow-sm transition-all duration-300"
          >
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Restaurant Website</h3>
            <p className="text-gray-500 text-sm mb-4">
              A modern restaurant site with menu, reservations, and location info.
            </p>
            <span className="text-xs text-blue-600 uppercase tracking-wider font-medium">View Live →</span>
          </a>

          <a
            href="https://flowboard-six-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm transition-all duration-300"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">SaaS Landing Page</h3>
            <p className="text-gray-500 text-sm mb-4">
              A premium landing page with 49 features — 3D tilt cards, confetti, command palette, and more.
            </p>
            <span className="text-xs text-blue-600 uppercase tracking-wider font-medium">View Live →</span>
          </a>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-300">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Real Estate Page</h3>
            <p className="text-gray-500 text-sm mb-4">
              A property listing page with galleries and contact forms.
            </p>
            <span className="text-xs text-blue-600 uppercase tracking-wider">Coming Soon</span>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-300">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Construction Company</h3>
            <p className="text-gray-500 text-sm mb-4">
              A professional site showcasing services, projects, and testimonials.
            </p>
            <span className="text-xs text-blue-600 uppercase tracking-wider">Coming Soon</span>
          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m a freelance web developer focused on building clean, fast, and
          modern websites using the latest technologies. I believe every business
          deserves a professional online presence — and I&apos;m here to make that happen.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Chill Web Dev. All rights reserved.
          </p>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            contact.chillweb@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}