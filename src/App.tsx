import './App.css'

type ScreenCard = {
  eyebrow: string
  title: string
  body: string
  image: string
}

type EvidenceCard = {
  title: string
  body: string
  image: string
  wide?: boolean
}

const appStoreUrl = 'https://apps.apple.com/tr/app/pawtrck/id6769860025?l=tr'
const pawtrckUrl = 'https://pawtrck.com/'
const linkedInUrl = 'https://www.linkedin.com/in/karahan-karatas'

const asset = (name: string) => `/assets/${name}`

const heroScreens = [
  asset('screen-home.png'),
  asset('screen-diet.png'),
  asset('screen-health.png'),
  asset('screen-exercise-tracker.png'),
]

const productScreens: ScreenCard[] = [
  {
    eyebrow: 'Home',
    title: 'Owner dashboard',
    body: 'A fast daily view for recent activity, health reminders, diet actions, and the next most likely owner task.',
    image: asset('screen-home.png'),
  },
  {
    eyebrow: 'Diet',
    title: 'Meal and weight tracking',
    body: 'Repeat logging flows for meals, treats, calories, weight changes, and long-term diet trends.',
    image: asset('screen-diet.png'),
  },
  {
    eyebrow: 'Health',
    title: 'Health records in one place',
    body: 'Medication, vaccine, symptom, vet visit, and export workflows grouped around real care routines.',
    image: asset('screen-health.png'),
  },
  {
    eyebrow: 'Exercise',
    title: 'GPS-ready sessions',
    body: 'Walk, run, and ride tracking with distance, duration, pawstep feedback, weather, and quick session start.',
    image: asset('screen-exercise-tracker.png'),
  },
  {
    eyebrow: 'Insights',
    title: 'Progress and trends',
    body: 'History views, weekly summaries, streaks, and best records designed for longer-term motivation.',
    image: asset('screen-exercise-history.png'),
  },
  {
    eyebrow: 'Training',
    title: 'Structured command plans',
    body: 'Command libraries, plan progress, difficulty tags, and completion states for structured practice.',
    image: asset('screen-training-plan.png'),
  },
  {
    eyebrow: 'Monetization',
    title: 'Subscription-ready Plus flow',
    body: 'RevenueCat-powered subscription access with restore, refund guidance, EULA, privacy, and trial support.',
    image: asset('screen-subscription.png'),
  },
  {
    eyebrow: 'Sharing',
    title: 'Shareable activity summaries',
    body: 'Owner-friendly activity recap designs that turn walk data into quick social or photo-library assets.',
    image: asset('screen-share-activity.png'),
  },
]

const evidenceCards: EvidenceCard[] = [
  {
    title: 'Live App Store listing',
    body: 'The shipped product is public on the App Store with version 1.0.1 release notes, category metadata, previews, and developer attribution.',
    image: asset('evidence-app-store.png'),
    wide: true,
  },
  {
    title: 'App Store Connect release state',
    body: 'App Store Connect confirms version 1.0.1 as ready for distribution after review completion and post-launch update preparation.',
    image: asset('evidence-app-connect.png'),
    wide: true,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Found the product problem',
    body: 'Dog owners spread care information across memory, notes, screenshots, vet papers, and separate apps. pawtrck reframed that scattered routine as one owner-friendly mobile system.',
  },
  {
    number: '02',
    title: 'Designed around repeat daily use',
    body: 'The core flows prioritize fast actions: log a meal, start a walk, record medication, add a symptom, check weight, and export a vet-ready history.',
  },
  {
    number: '03',
    title: 'Turned decisions into working features',
    body: 'I used structured research, product judgment, QA testing, and AI-assisted implementation workflows to move from product decisions into shipped app behavior.',
  },
  {
    number: '04',
    title: 'Prepared launch and monetization',
    body: 'The release included App Review readiness, subscription metadata, RevenueCat entitlement testing, paywall legal links, privacy policy alignment, and reviewer notes.',
  },
  {
    number: '05',
    title: 'Improved after release',
    body: 'Post-launch work included reminder reliability, icon consistency, promotional access workflows, support checks, and production-safe update planning.',
  },
]

function Header() {
  return (
    <header className="site-header">
      <a className="mark" href="#top" aria-label="Karahan Karatas home">KK</a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#screens">Screens</a>
        <a href="#evidence">Evidence</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function HeroPhones() {
  return (
    <div className="hero-visual" aria-label="pawtrck app screen preview collage">
      <div className="hero-glow" />
      {heroScreens.map((screen, index) => (
        <div className={`hero-phone hero-phone-${index + 1}`} key={screen}>
          <img src={screen} alt="pawtrck mobile screen" />
        </div>
      ))}
    </div>
  )
}

function ScreenCard({ card }: { card: ScreenCard }) {
  return (
    <article className="screen-card reveal-card">
      <div className="screen-frame">
        <img src={card.image} alt={`${card.title} screen from pawtrck`} loading="lazy" />
      </div>
      <div className="screen-copy">
        <p className="eyebrow">{card.eyebrow}</p>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </article>
  )
}

function EvidenceCard({ card }: { card: EvidenceCard }) {
  return (
    <article className={`evidence-card ${card.wide ? 'evidence-card-wide' : ''}`}>
      <div className="evidence-image">
        <img src={card.image} alt={card.title} loading="lazy" />
      </div>
      <div>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Product Designer & AI-assisted Product Builder</p>
            <h1>I launched pawtrck, a real iOS dog care app from concept to App Store.</h1>
            <p className="hero-lede">I combine UX research, analytical thinking, product strategy, QA, and AI-assisted development workflows to design practical mobile products and bring them into working form.</p>
            <div className="button-row">
              <a className="button button-dark" href="#work">View case study</a>
              <a className="button" href={appStoreUrl} target="_blank" rel="noreferrer">App Store</a>
              <a className="button" href={pawtrckUrl} target="_blank" rel="noreferrer">pawtrck website</a>
            </div>
          </div>
          <HeroPhones />
        </section>

        <section className="stats-strip" aria-label="Project highlights">
          <div><strong>Live</strong><span>on the App Store</span></div>
          <div><strong>1.0.1</strong><span>post-launch release</span></div>
          <div><strong>5</strong><span>core care areas</span></div>
          <div><strong>Plus</strong><span>subscription ready</span></div>
        </section>

        <section className="case-section section-pad" id="work">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Featured Product Experience</p>
              <h2>pawtrck - iOS Dog Care Tracking App</h2>
            </div>
            <p>A live product case study covering product strategy, mobile UX/UI, subscription readiness, App Review compliance, launch preparation, and post-release improvement.</p>
          </div>

          <div className="case-grid">
            <article className="case-card">
              <p className="eyebrow">Role</p>
              <h3>Independent Product Designer & AI-Assisted Product Builder</h3>
              <p>I owned product decisions, experience design, app readiness, QA, subscription setup, reviewer-facing details, and the launch path from early concept to a shipped iOS product.</p>
            </article>
            <article className="case-card case-card-dark">
              <p className="eyebrow">Product Value</p>
              <h3>Everything your dog needs, organized in one place.</h3>
              <p>pawtrck reduces scattered dog-care tracking by bringing diet, activity, health, training, medication reminders, vet visits, and exportable records into one owner-friendly app.</p>
            </article>
            <article className="case-card">
              <p className="eyebrow">Launch Scope</p>
              <ul>
                <li>Live iOS app with App Store metadata and release notes</li>
                <li>pawtrck Plus subscription, trial, legal links, and purchase recovery</li>
                <li>Post-launch 1.0.1 update for reminders and symptom icon consistency</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="screens-section section-pad" id="screens">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Real Product Screens</p>
            <h2>Core workflows from the shipped app</h2>
            <p>These are actual product screens from pawtrck, grouped by workflow instead of squeezed into a single collage.</p>
          </div>
          <div className="screens-grid">
            {productScreens.map((card) => <ScreenCard key={card.title} card={card} />)}
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Process</p>
              <h2>How I moved from product idea to launch</h2>
            </div>
            <p>The project was not only visual design. It required defining what mattered, coordinating technical implementation, testing edge cases, preparing subscriptions, and responding to App Review feedback.</p>
          </div>
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-row" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="walkthrough-section section-pad">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Product Walkthrough</p>
            <h2>A short overview of the pawtrck experience</h2>
            <p>The video gives a quick sense of navigation, interaction model, and product breadth beyond static screens.</p>
          </div>
          <div className="video-shell">
            <video controls playsInline preload="metadata" poster={asset('screen-home.png')}>
              <source src={asset('pawtrck-walkthrough.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="evidence-section section-pad" id="evidence">
          <div className="evidence-copy">
            <p className="eyebrow">Launch Evidence</p>
            <h2>Released, reviewed, and public</h2>
            <p>The strongest proof here is the public App Store listing and App Store Connect release state. Product feature screenshots live in the real screens section above.</p>
            <div className="button-row">
              <a className="button button-dark" href={appStoreUrl} target="_blank" rel="noreferrer">Open App Store listing</a>
              <a className="button" href={asset('vet-export.pdf')} target="_blank" rel="noreferrer">View vet export PDF</a>
            </div>
          </div>
          <div className="evidence-grid">
            {evidenceCards.map((card) => <EvidenceCard card={card} key={card.title} />)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div>
            <p className="eyebrow">About</p>
            <h2>Engineering background, product mindset, AI-assisted execution.</h2>
          </div>
          <div className="about-copy">
            <p>My background in astronautical engineering and quality assurance shaped how I approach products: define the problem clearly, understand constraints, test carefully, and keep improving through evidence.</p>
            <p>I do not come from a traditional software engineering path. Instead, I use strong research, analytical thinking, technical curiosity, and AI tools to coordinate implementation and bring product ideas into working form.</p>
          </div>
        </section>

        <section className="skills-strip" aria-label="Focus areas">
          {['Product strategy', 'Mobile UX/UI', 'User flows', 'QA testing', 'App Store launch', 'Subscription workflows', 'AI-assisted execution', 'Product documentation'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </section>

        <section className="contact-section section-pad" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Interested in product design, junior PM, and product builder roles.</h2>
          <div className="button-row">
            <a className="button button-dark" href="mailto:hello@karahankaratas.com">hello@karahankaratas.com</a>
            <a className="button" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
