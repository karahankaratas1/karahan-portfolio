import './App.css'

const highlights = [
  'Launched a real iOS product from concept to App Store release',
  'Owned product strategy, UX/UI, testing, subscription readiness, and launch details',
  'Used AI-assisted workflows to turn product decisions into working app features',
]

const productScope = [
  'Diet, exercise, health records, medication reminders, and vet visits in one place',
  'pawtrck Plus subscription, free trial logic, and promotional access workflows',
  'App Review compliance, privacy and terms requirements, and release preparation',
]

const processItems = [
  {
    label: '01',
    title: 'Defined the Product Problem',
    text: 'Dog owners often spread care information across notes, memory, screenshots, and multiple apps. pawtrck brings recurring care workflows into one organized mobile experience.',
  },
  {
    label: '02',
    title: 'Designed the Mobile Experience',
    text: 'I structured core flows around daily use: logging meals, walks, symptoms, medications, vaccines, vet visits, and long-term care history without making the app feel clinical.',
  },
  {
    label: '03',
    title: 'Prepared the Product for Launch',
    text: 'I managed App Store readiness, subscription compliance, RevenueCat access behavior, reviewer notes, legal links, smoke testing, and post-launch polish.',
  },
]

const capabilities = [
  'Product thinking',
  'UX research',
  'User flows',
  'Mobile UX/UI',
  'AI-assisted development workflows',
  'QA testing',
  'App Store launch preparation',
  'RevenueCat and subscription workflows',
]

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Karahan Karatas home">
          KK
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Product Designer & AI-Assisted Product Builder</p>
          <h1>I design, test, and launch product ideas into real mobile experiences.</h1>
          <p className="hero-text">
            I combine UX research, analytical thinking, product strategy, and AI-assisted development
            workflows to build practical digital products. My recent work includes pawtrck, a dog care
            tracking app launched on the App Store.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              View pawtrck case study
            </a>
            <a className="secondary-link" href="mailto:hello@karahankaratas.com">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="pawtrck product overview">
          <div className="phone-mockup">
            <div className="phone-status">
              <span>pawtrck</span>
              <span>Plus</span>
            </div>
            <div className="metric-card">
              <span>Today</span>
              <strong>3.2 km</strong>
              <small>walk tracked</small>
            </div>
            <div className="mini-grid">
              <span>Diet</span>
              <span>Health</span>
              <span>Meds</span>
              <span>Visits</span>
            </div>
          </div>
          <div className="launch-card">
            <span>Released product</span>
            <strong>pawtrck</strong>
            <p>iOS dog care tracking app with subscriptions, reminders, and health workflows.</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Portfolio highlights">
        {highlights.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="case-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Featured Product Experience</p>
          <h2>pawtrck - iOS Dog Care Tracking App</h2>
          <p>
            A real product case study covering product strategy, UX/UI design, AI-assisted
            implementation workflow, testing, monetization, and App Store release readiness.
          </p>
        </div>

        <div className="case-grid">
          <article className="case-card large">
            <span className="card-label">Role</span>
            <h3>Independent Product Designer & AI-Assisted Product Builder</h3>
            <p>
              I led the product from concept to launch, owning product decisions, experience design,
              QA, subscription setup, App Review preparation, and post-release improvements.
            </p>
          </article>
          <article className="case-card">
            <span className="card-label">Outcome</span>
            <h3>Launched on the App Store</h3>
            <p>
              Released as a live iOS app with core care tracking, Plus subscription access, and
              reviewer-compliant legal metadata.
            </p>
          </article>
          <article className="case-card">
            <span className="card-label">Product Scope</span>
            <ul>
              {productScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="process-list">
          {processItems.map((item) => (
            <article className="process-item" key={item.label}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Engineering background, product mindset, AI-assisted execution.</h2>
        </div>
        <div className="about-copy">
          <p>
            My background in astronautical engineering and quality assurance shaped how I approach
            products: define the problem clearly, understand constraints, test carefully, and keep
            improving through evidence.
          </p>
          <p>
            I do not come from a traditional software engineering path. Instead, I use strong research,
            analytical thinking, technical curiosity, and AI tools to coordinate implementation and bring
            product ideas into working form.
          </p>
        </div>
      </section>

      <section className="skills-section" aria-label="Skills">
        {capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Interested in product design, junior PM, and product builder roles.</h2>
        <div className="contact-actions">
          <a className="primary-link" href="mailto:hello@karahankaratas.com">
            hello@karahankaratas.com
          </a>
          <a
            className="secondary-link"
            href="https://www.linkedin.com/in/karahan-karatas"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
