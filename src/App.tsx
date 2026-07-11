import { useEffect, useState } from 'react'
import './App.css'

type Locale = 'en' | 'tr'

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
const readyRecipesMobileUrl = 'https://karahankaratas06.wixsite.com/my-site/portfolio-collections/my-portfolio/project-title-6'
const readyRecipesWebUrl = 'https://karahankaratas06.wixsite.com/my-site/portfolio-collections/my-portfolio/project-title-5'
const phaidMobileUrl = 'https://karahankaratas06.wixsite.com/my-site/portfolio-collections/my-portfolio/project-title-4'
const phaidWebUrl = 'https://karahankaratas06.wixsite.com/my-site/portfolio-collections/my-portfolio/project-title-3'

const asset = (name: string) => `/assets/${name}`

const heroScreens = [
  asset('screen-home.png'),
  asset('screen-diet.png'),
  asset('screen-health.png'),
  asset('screen-exercise-tracker.png'),
  asset('screen-training-plan.png'),
]

const screenImages = [
  'screen-home.png',
  'screen-diet.png',
  'screen-health.png',
  'screen-exercise-tracker.png',
  'screen-exercise-history.png',
  'screen-training-plan.png',
  'screen-subscription.png',
  'screen-share-activity.png',
]

const productScreenCopy: Record<Locale, Omit<ScreenCard, 'image'>[]> = {
  en: [
  {
    eyebrow: 'Home',
    title: 'Owner dashboard',
    body: 'A fast daily view for recent activity, health reminders, diet actions, and the next most likely owner task.',
  },
  {
    eyebrow: 'Diet',
    title: 'Meal and weight tracking',
    body: 'Repeat logging flows for meals, treats, calories, weight changes, and long-term diet trends.',
  },
  {
    eyebrow: 'Health',
    title: 'Health records in one place',
    body: 'Medication, vaccine, symptom, vet visit, and export workflows grouped around real care routines.',
  },
  {
    eyebrow: 'Exercise',
    title: 'GPS-ready sessions',
    body: 'Walk, run, and ride tracking with distance, duration, pawstep feedback, weather, and quick session start.',
  },
  {
    eyebrow: 'Insights',
    title: 'Progress and trends',
    body: 'History views, weekly summaries, streaks, and best records designed for longer-term motivation.',
  },
  {
    eyebrow: 'Training',
    title: 'Structured command plans',
    body: 'Command libraries, plan progress, difficulty tags, and completion states for structured practice.',
  },
  {
    eyebrow: 'Monetization',
    title: 'Subscription-ready Plus flow',
    body: 'RevenueCat-powered subscription access with restore, refund guidance, EULA, privacy, and trial support.',
  },
  {
    eyebrow: 'Sharing',
    title: 'Shareable activity summaries',
    body: 'Owner-friendly activity recap designs that turn walk data into quick social or photo-library assets.',
  },
  ],
  tr: [
    { eyebrow: 'Ana Sayfa', title: 'Sahip paneli', body: 'Son aktiviteler, sağlık hatırlatmaları, beslenme işlemleri ve sıradaki olası görev için hızlı bir günlük görünüm.' },
    { eyebrow: 'Beslenme', title: 'Öğün ve kilo takibi', body: 'Öğün, ödül, kalori ve kilo değişimlerini kaydetmek; uzun dönem beslenme eğilimlerini izlemek için tekrarlanabilir akışlar.' },
    { eyebrow: 'Sağlık', title: 'Tüm sağlık kayıtları bir arada', body: 'İlaç, aşı, semptom, veteriner ziyareti ve dışa aktarma akışları gerçek bakım rutinlerine göre bir arada.' },
    { eyebrow: 'Egzersiz', title: 'GPS destekli seanslar', body: 'Mesafe, süre, pati adımı, hava durumu ve hızlı başlangıç ile yürüyüş, koşu ve bisiklet takibi.' },
    { eyebrow: 'İçgörüler', title: 'İlerleme ve eğilimler', body: 'Uzun vadeli motivasyon için geçmiş görünümleri, haftalık özetler, seriler ve kişisel rekorlar.' },
    { eyebrow: 'Eğitim', title: 'Yapılandırılmış komut planları', body: 'Düzenli pratik için komut kütüphanesi, plan ilerlemesi, zorluk etiketleri ve tamamlanma durumları.' },
    { eyebrow: 'Gelir Modeli', title: 'Aboneliğe hazır Plus akışı', body: 'RevenueCat destekli erişim; satın alımı geri yükleme, iade yönlendirmesi, EULA, gizlilik ve deneme süreci desteği.' },
    { eyebrow: 'Paylaşım', title: 'Paylaşılabilir aktivite özetleri', body: 'Yürüyüş verilerini sosyal medyada veya fotoğraf arşivinde paylaşılabilir özetlere dönüştüren sahip odaklı tasarım.' },
  ],
}

const evidenceCardCopy: Record<Locale, Omit<EvidenceCard, 'image' | 'wide'>[]> = {
  en: [
  {
    title: 'Live App Store listing',
    body: 'The shipped product is public on the App Store with version 1.0.1 release notes, category metadata, previews, and developer attribution.',
  },
  {
    title: 'App Store Connect release state',
    body: 'App Store Connect confirms version 1.0.1 as ready for distribution after review completion and post-launch update preparation.',
  },
  ],
  tr: [
    { title: 'Canlı App Store sayfası', body: 'Yayınlanan ürün; 1.0.1 sürüm notları, kategori bilgileri, önizlemeler ve geliştirici kimliğiyle App Store’da herkese açık.' },
    { title: 'App Store Connect dağıtım durumu', body: 'App Store Connect, inceleme tamamlandıktan ve yayın sonrası güncelleme hazırlandıktan sonra 1.0.1 sürümünün dağıtıma hazır olduğunu doğruluyor.' },
  ],
}

const processCopy = {
  en: [
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
  ],
  tr: [
    { number: '01', title: 'Ürün problemini tanımladım', body: 'Köpek sahipleri bakım bilgilerini hafıza, notlar, ekran görüntüleri, veteriner belgeleri ve farklı uygulamalara yayıyordu. pawtrck bu dağınık rutini sahip odaklı tek bir mobil sisteme dönüştürdü.' },
    { number: '02', title: 'Tekrarlanan günlük kullanıma göre tasarladım', body: 'Temel akışlar hızlı işlemlere öncelik veriyor: öğün kaydetmek, yürüyüş başlatmak, ilaç ve semptom eklemek, kiloyu kontrol etmek ve veterinere hazır geçmişi dışa aktarmak.' },
    { number: '03', title: 'Kararları çalışan özelliklere dönüştürdüm', body: 'Ürün kararlarını yayınlanmış uygulama davranışına taşımak için yapılandırılmış araştırma, ürün muhakemesi, QA testleri ve yapay zeka destekli uygulama akışlarını kullandım.' },
    { number: '04', title: 'Yayın ve gelir modelini hazırladım', body: 'Yayın süreci; App Review hazırlığı, abonelik bilgileri, RevenueCat yetki testleri, ödeme ekranı yasal bağlantıları, gizlilik politikası uyumu ve inceleme notlarını kapsadı.' },
    { number: '05', title: 'Yayın sonrasında geliştirdim', body: 'Yayın sonrası çalışmalar; hatırlatıcı güvenilirliği, ikon tutarlılığı, promosyon erişim akışları, destek kontrolleri ve üretim ortamına uygun güncelleme planlamasını içerdi.' },
  ],
}

const ui = {
  en: {
    archiveEyebrow: 'Earlier UX Work', archiveTitle: 'Selected concept projects', archiveIntro: 'Two focused projects that show my foundation in research, interaction design, prototyping, and responsive product thinking.', archiveRole: 'Role: UX Designer', archiveScope: 'Mobile + responsive web', archiveButton: 'View project archive',
    readyTitle: 'ReadyRecipes', readyProblem: 'Helping people with limited cooking experience prepare healthy meals at home through guided recipes and nearly ready-to-cook ingredient orders.', readyApproach: 'I mapped the core ordering and cooking journey, developed personas and problem statements, and translated the concept into mobile and responsive web prototypes.',
    phaidTitle: 'PHAID', phaidProblem: 'A social-good concept designed to make professional health and mental-health support easier to reach for people who need free assistance.', phaidApproach: 'The work explored patient, volunteer, and donation journeys through research, personas, information architecture, wireframes, usability testing, and high-fidelity prototypes.',
    nav: ['Work', 'Screens', 'Validation', 'About', 'Resume', 'Contact'],
    heroEyebrow: 'Product Designer · Mobile UX · Engineering & QA', heroTitle: 'I brought pawtrck from product idea to the App Store.', heroLede: 'A live iOS product shaped through research, product strategy, mobile UX, rigorous QA, and AI-assisted implementation.', viewCase: 'View case study', appStore: 'App Store', website: 'pawtrck website',
    stats: [['Live', 'on the App Store'], ['1.0.1', 'post-launch release'], ['5', 'core care areas'], ['Plus', 'subscription ready']],
    caseEyebrow: 'Featured Product Experience', caseTitle: 'pawtrck - an iOS dog care companion', caseIntro: 'A shipped product case study spanning strategy, mobile UX/UI, subscriptions, App Review readiness, launch, and post-release improvement.', role: 'Role', roleTitle: 'Independent Product Designer & Product Builder', roleBody: 'I led product decisions, experience design, QA, subscription setup, reviewer-facing details, and the path from early concept to a shipped iOS product.', value: 'Product Value', valueTitle: 'Everything your dog needs, organized in one place.', valueBody: 'pawtrck brings diet, activity, health, training, medication reminders, vet visits, and exportable records into one owner-friendly system.', scope: 'Launch Scope', scopeItems: ['Live iOS app with App Store metadata and release notes', 'pawtrck Plus subscription, trial, legal links, and purchase recovery', 'Post-launch 1.0.1 update for reminders and symptom icon consistency'],
    screensEyebrow: 'Real Product Screens', screensTitle: 'Core workflows from the shipped app', screensIntro: 'Actual screens from the live product, grouped around the owner workflows they support.',
    processEyebrow: 'Process', processTitle: 'How I moved from product idea to launch', processIntro: 'Beyond interface design, the work covered product definition, implementation coordination, edge-case testing, subscriptions, and App Review feedback.',
    walkthroughEyebrow: 'Product Tour', walkthroughTitle: 'Explore the live app', walkthroughBody: 'A direct walkthrough of the shipped iOS experience, its navigation, and core care flows.', walkthroughNote: 'Recorded in the live iOS app', marketingEyebrow: 'Campaign Creative', marketingTitle: 'A launch film built for product marketing', marketingBody: 'A short, brand-led video created to introduce pawtrck through social and launch communications.', marketingNote: '22-second marketing film',
    validationEyebrow: 'Release Validation', validationTitle: 'Public release, independently verifiable', validationBody: 'The public App Store listing and App Store Connect distribution state document that pawtrck passed review and shipped. Product workflows are presented separately above.', openListing: 'Open App Store listing', viewPdf: 'View vet export PDF',
    aboutEyebrow: 'About', aboutTitle: 'Engineering discipline, applied to product work.', aboutLede: 'My background in astronautical engineering and quality assurance shapes a structured approach to product work: define the problem clearly, understand constraints, test carefully, and improve through evidence.', aboutBody: 'Completing the Google UX Design Professional Certificate strengthened my practice in user research, prototyping, and usability testing. I combine that foundation with analytical thinking and AI-assisted workflows to turn product decisions into working software.',
    skills: ['Product strategy', 'Mobile UX/UI', 'User flows', 'QA testing', 'App Store launch', 'Subscription workflows', 'AI-assisted execution', 'Product documentation'], resumeEyebrow: 'Resume', resumeTitle: 'Experience, education, and product work in one place.', resumeBody: 'View or download the English resume and Turkish CV.', resumeEn: 'Resume - English', resumeTr: 'Özgeçmiş - Türkçe',
    contactEyebrow: 'Contact', contactTitle: "Let's build thoughtful products that ship.", contactBody: "I'm seeking product design roles where I can combine mobile UX, analytical thinking, QA discipline, and hands-on product ownership.", linkedIn: 'LinkedIn',
  },
  tr: {
    archiveEyebrow: 'Önceki UX Çalışmaları', archiveTitle: 'Seçili konsept projeleri', archiveIntro: 'Araştırma, etkileşim tasarımı, prototipleme ve duyarlı ürün düşüncesindeki temelimi gösteren iki odaklı çalışma.', archiveRole: 'Rol: UX Tasarımcısı', archiveScope: 'Mobil + duyarlı web', archiveButton: 'Proje arşivini aç',
    readyTitle: 'ReadyRecipes', readyProblem: 'Yemek deneyimi sınırlı kişilerin yönlendirmeli tarifler ve pişirmeye yakın hazırlanmış malzeme siparişleriyle evde sağlıklı yemek yapmasını kolaylaştıran konsept.', readyApproach: 'Temel sipariş ve pişirme yolculuğunu haritaladım; persona ve problem ifadeleri oluşturdum; konsepti mobil ve duyarlı web prototiplerine dönüştürdüm.',
    phaidTitle: 'PHAID', phaidProblem: 'Ücretsiz desteğe ihtiyaç duyan kişilerin profesyonel sağlık ve ruh sağlığı hizmetlerine daha kolay ulaşmasını amaçlayan sosyal fayda konsepti.', phaidApproach: 'Hasta, gönüllü ve bağışçı yolculuklarını araştırma, persona, bilgi mimarisi, wireframe, kullanılabilirlik testi ve yüksek detaylı prototiplerle ele aldım.',
    nav: ['Çalışma', 'Ekranlar', 'Doğrulama', 'Hakkımda', 'Özgeçmiş', 'İletişim'],
    heroEyebrow: 'Ürün Tasarımcısı · Mobil UX · Mühendislik ve QA', heroTitle: "pawtrck'i ürün fikrinden App Store'a taşıdım.", heroLede: 'Araştırma, ürün stratejisi, mobil UX, titiz QA ve yapay zeka destekli uygulama süreçleriyle şekillenen canlı bir iOS ürünü.', viewCase: 'Vaka çalışmasını incele', appStore: 'App Store', website: 'pawtrck web sitesi',
    stats: [['Yayında', "App Store'da"], ['1.0.1', 'yayın sonrası sürüm'], ['5', 'temel bakım alanı'], ['Plus', 'aboneliğe hazır']],
    caseEyebrow: 'Öne Çıkan Ürün Deneyimi', caseTitle: 'pawtrck - iOS köpek bakım asistanı', caseIntro: 'Strateji, mobil UX/UI, abonelikler, App Review hazırlığı, yayın ve yayın sonrası geliştirmeyi kapsayan gerçek bir ürün vaka çalışması.', role: 'Rol', roleTitle: 'Bağımsız Ürün Tasarımcısı ve Ürün Geliştirici', roleBody: 'Ürün kararlarını, deneyim tasarımını, QA sürecini, abonelik kurulumunu, inceleme detaylarını ve erken fikirden yayınlanmış iOS ürününe uzanan yolu yönettim.', value: 'Ürün Değeri', valueTitle: 'Köpeğinizin ihtiyaç duyduğu her şey tek yerde.', valueBody: 'pawtrck; beslenme, aktivite, sağlık, eğitim, ilaç hatırlatmaları, veteriner ziyaretleri ve dışa aktarılabilir kayıtları sahip odaklı tek bir sistemde buluşturuyor.', scope: 'Yayın Kapsamı', scopeItems: ['App Store bilgileri ve sürüm notlarıyla canlı iOS uygulaması', 'pawtrck Plus aboneliği, deneme süreci, yasal bağlantılar ve satın alımı geri yükleme', 'Hatırlatıcılar ve semptom ikon tutarlılığı için yayın sonrası 1.0.1 güncellemesi'],
    screensEyebrow: 'Gerçek Ürün Ekranları', screensTitle: 'Yayınlanmış uygulamanın temel akışları', screensIntro: 'Canlı üründen alınan gerçek ekranlar, destekledikleri sahip iş akışlarına göre gruplandırıldı.',
    processEyebrow: 'Süreç', processTitle: 'Ürün fikrinden yayına nasıl ilerledim', processIntro: 'Arayüz tasarımının ötesinde çalışma; ürün tanımı, uygulama koordinasyonu, uç durum testleri, abonelikler ve App Review geri bildirimlerini kapsadı.',
    walkthroughEyebrow: 'Ürün Turu', walkthroughTitle: 'Canlı uygulamayı keşfedin', walkthroughBody: "Yayınlanmış iOS deneyiminde, navigasyonda ve temel bakım akışlarında doğrudan bir gezinti.", walkthroughNote: 'Canlı iOS uygulamasında kaydedildi', marketingEyebrow: 'Kampanya İçeriği', marketingTitle: 'Ürün pazarlaması için hazırlanan yayın filmi', marketingBody: "pawtrck'i sosyal medya ve yayın iletişimlerinde tanıtmak için hazırlanmış kısa, marka odaklı video.", marketingNote: '22 saniyelik tanıtım filmi',
    validationEyebrow: 'Yayın Doğrulaması', validationTitle: 'Herkese açık ve bağımsız olarak doğrulanabilir', validationBody: "App Store'daki herkese açık sayfa ve App Store Connect dağıtım durumu, pawtrck'in incelemeyi geçip yayınlandığını belgeliyor. Ürün akışları yukarıda ayrı olarak sunuluyor.", openListing: 'App Store sayfasını aç', viewPdf: 'Veteriner PDF çıktısını görüntüle',
    aboutEyebrow: 'Hakkımda', aboutTitle: 'Ürün çalışmalarına uygulanan mühendislik disiplini.', aboutLede: 'Uzay mühendisliği ve kalite güvence geçmişim ürün çalışmalarına yapılandırılmış yaklaşımımı şekillendiriyor: problemi net tanımlamak, kısıtları anlamak, dikkatle test etmek ve kanıta göre geliştirmek.', aboutBody: 'Google UX Design Professional Certificate programını başarıyla tamamlamam; kullanıcı araştırması, prototipleme ve kullanılabilirlik testleri pratiğimi güçlendirdi. Bu temeli analitik düşünme ve yapay zeka destekli iş akışlarıyla birleştirerek ürün kararlarını çalışan yazılıma dönüştürüyorum.',
    skills: ['Ürün stratejisi', 'Mobil UX/UI', 'Kullanıcı akışları', 'QA testleri', 'App Store yayını', 'Abonelik akışları', 'Yapay zeka destekli uygulama', 'Ürün dokümantasyonu'], resumeEyebrow: 'Özgeçmiş', resumeTitle: 'Deneyim, eğitim ve ürün çalışmalarım tek yerde.', resumeBody: 'İngilizce ve Türkçe özgeçmişleri görüntüleyebilir veya indirebilirsiniz.', resumeEn: 'Resume - English', resumeTr: 'Özgeçmiş - Türkçe',
    contactEyebrow: 'İletişim', contactTitle: 'Yayınlanan, düşünülmüş ürünler geliştirelim.', contactBody: 'Mobil UX, analitik düşünme, QA disiplini ve uçtan uca ürün sahipliğini birleştirebileceğim ürün tasarımı rollerine açığım.', linkedIn: 'LinkedIn',
  },
} as const

function Header({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const t = ui[locale]
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Karahan Karatas home">
        <span className="brand-initials">KK</span>
        <span className="brand-name">Karahan Karatas</span>
      </a>
      <div className="header-actions">
        <nav aria-label="Main navigation">
          <a href="#work">{t.nav[0]}</a>
          <a href="#screens">{t.nav[1]}</a>
          <a href="#evidence">{t.nav[2]}</a>
          <a href="#about">{t.nav[3]}</a>
          <a href="#resume">{t.nav[4]}</a>
          <a href="#contact">{t.nav[5]}</a>
        </nav>
        <div className="language-switch" aria-label="Language selection">
          <button className={locale === 'en' ? 'active' : ''} type="button" onClick={() => onLocaleChange('en')} aria-pressed={locale === 'en'}>EN</button>
          <button className={locale === 'tr' ? 'active' : ''} type="button" onClick={() => onLocaleChange('tr')} aria-pressed={locale === 'tr'}>TR</button>
        </div>
      </div>
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
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = window.localStorage.getItem('portfolio-locale')
    return savedLocale === 'tr' ? 'tr' : 'en'
  })
  const t = ui[locale]
  const productScreens = productScreenCopy[locale].map((card, index) => ({ ...card, image: asset(screenImages[index]) }))
  const evidenceCards: EvidenceCard[] = evidenceCardCopy[locale].map((card, index) => ({ ...card, image: asset(index === 0 ? 'evidence-app-store.png' : 'evidence-app-connect.png'), wide: true }))
  const processSteps = processCopy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem('portfolio-locale', locale)
  }, [locale])

  return (
    <>
      <Header locale={locale} onLocaleChange={setLocale} />
      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-lede">{t.heroLede}</p>
            <div className="button-row">
              <a className="button button-dark" href="#work">{t.viewCase}</a>
              <a className="button" href={appStoreUrl} target="_blank" rel="noreferrer">{t.appStore}</a>
              <a className="button" href={pawtrckUrl} target="_blank" rel="noreferrer">{t.website}</a>
            </div>
          </div>
          <HeroPhones />
        </section>

        <section className="stats-strip" aria-label="Project highlights">
          {t.stats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="case-section section-pad" id="work">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.caseEyebrow}</p>
              <h2>{t.caseTitle}</h2>
            </div>
            <p>{t.caseIntro}</p>
          </div>

          <div className="case-grid">
            <article className="case-card">
              <p className="eyebrow">{t.role}</p>
              <h3>{t.roleTitle}</h3>
              <p>{t.roleBody}</p>
            </article>
            <article className="case-card case-card-dark">
              <p className="eyebrow">{t.value}</p>
              <h3>{t.valueTitle}</h3>
              <p>{t.valueBody}</p>
            </article>
            <article className="case-card">
              <p className="eyebrow">{t.scope}</p>
              <ul>
                {t.scopeItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="screens-section section-pad" id="screens">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">{t.screensEyebrow}</p>
            <h2>{t.screensTitle}</h2>
            <p>{t.screensIntro}</p>
          </div>
          <div className="screens-grid">
            {productScreens.map((card) => <ScreenCard key={card.title} card={card} />)}
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.processEyebrow}</p>
              <h2>{t.processTitle}</h2>
            </div>
            <p>{t.processIntro}</p>
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

        <section className="walkthrough-section section-pad" id="walkthrough">
          <div className="walkthrough-copy">
            <p className="eyebrow">{t.walkthroughEyebrow}</p>
            <h2>{t.walkthroughTitle}</h2>
            <p>{t.walkthroughBody}</p>
            <span className="video-note">{t.walkthroughNote}</span>
          </div>
          <div className="video-stage">
            <div className="video-shell product-tour-shell">
              <span className="iphone-island" aria-hidden="true" />
              <video controls playsInline preload="metadata" poster={asset('screen-home.png')}>
                <source src={asset('pawtrck-product-tour.m4v')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="marketing-section section-pad">
          <div className="marketing-media">
            <div className="marketing-video-shell">
              <video controls playsInline preload="metadata">
                <source src={asset('pawtrck-walkthrough.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="marketing-copy">
            <p className="eyebrow">{t.marketingEyebrow}</p>
            <h2>{t.marketingTitle}</h2>
            <p>{t.marketingBody}</p>
            <span className="video-note">{t.marketingNote}</span>
          </div>
        </section>

        <section className="evidence-section section-pad" id="evidence">
          <div className="evidence-copy">
            <p className="eyebrow">{t.validationEyebrow}</p>
            <h2>{t.validationTitle}</h2>
            <p>{t.validationBody}</p>
            <div className="button-row">
              <a className="button button-dark" href={appStoreUrl} target="_blank" rel="noreferrer">{t.openListing}</a>
              <a className="button" href={asset('vet-export.pdf')} target="_blank" rel="noreferrer">{t.viewPdf}</a>
            </div>
          </div>
          <div className="evidence-grid">
            {evidenceCards.map((card) => <EvidenceCard card={card} key={card.title} />)}
          </div>
        </section>

        <section className="archive-section section-pad" id="archive">
          <div className="archive-heading">
            <p className="eyebrow">{t.archiveEyebrow}</p>
            <h2>{t.archiveTitle}</h2>
            <p>{t.archiveIntro}</p>
          </div>
          <div className="archive-projects">
            <article className="archive-project">
              <div className="archive-visual readyrecipes-visual" aria-label="ReadyRecipes web and mobile screens">
                <img className="readyrecipes-web" src={asset('readyrecipes-web-home.png')} alt="ReadyRecipes responsive website home page" loading="lazy" />
                <div className="archive-phones readyrecipes-phones">
                  {['readyrecipes-home.avif', 'readyrecipes-recipes.avif', 'readyrecipes-menu.avif'].map((image) => (
                    <img src={asset(image)} alt="ReadyRecipes mobile app screen" loading="lazy" key={image} />
                  ))}
                </div>
              </div>
              <div className="archive-copy">
                <div className="archive-meta"><span>{t.archiveRole}</span><span>{t.archiveScope}</span></div>
                <h3>{t.readyTitle}</h3>
                <p className="archive-problem">{t.readyProblem}</p>
                <p>{t.readyApproach}</p>
                <div className="archive-links">
                  <a href={readyRecipesMobileUrl} target="_blank" rel="noreferrer">{t.archiveButton} · Mobile</a>
                  <a href={readyRecipesWebUrl} target="_blank" rel="noreferrer">{t.archiveButton} · Web</a>
                </div>
              </div>
            </article>
            <article className="archive-project">
              <div className="archive-visual archive-phones archive-phones-two" aria-label="PHAID mobile app screens">
                {['phaid-login.avif', 'phaid-home.avif'].map((image) => (
                  <img src={asset(image)} alt="PHAID mobile app screen" loading="lazy" key={image} />
                ))}
              </div>
              <div className="archive-copy">
                <div className="archive-meta"><span>{t.archiveRole}</span><span>{t.archiveScope}</span></div>
                <h3>{t.phaidTitle}</h3>
                <p className="archive-problem">{t.phaidProblem}</p>
                <p>{t.phaidApproach}</p>
                <div className="archive-links">
                  <a href={phaidMobileUrl} target="_blank" rel="noreferrer">{t.archiveButton} · Mobile</a>
                  <a href={phaidWebUrl} target="_blank" rel="noreferrer">{t.archiveButton} · Web</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-heading">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <span className="about-rule" />
          </div>
          <div className="about-copy">
            <p className="about-lede">{t.aboutLede}</p>
            <p>{t.aboutBody}</p>
          </div>
        </section>

        <section className="skills-strip" aria-label="Focus areas">
          {t.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </section>

        <section className="resume-section section-pad" id="resume">
          <div className="resume-copy">
            <p className="eyebrow">{t.resumeEyebrow}</p>
            <h2>{t.resumeTitle}</h2>
          </div>
          <div className="resume-actions">
            <p>{t.resumeBody}</p>
            <div className="button-row">
              <a className={`button ${locale === 'en' ? 'button-dark' : ''}`} href={asset('karahan-karatas-resume-en.pdf')} target="_blank" rel="noreferrer">{t.resumeEn}</a>
              <a className={`button ${locale === 'tr' ? 'button-dark' : ''}`} href={asset('karahan-karatas-resume-tr.pdf')} target="_blank" rel="noreferrer">{t.resumeTr}</a>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
          </div>
          <div className="contact-action">
            <p>{t.contactBody}</p>
            <div className="button-row">
              <a className="button button-dark" href="mailto:hello@karahankaratas.com">hello@karahankaratas.com</a>
              <a className="button" href={linkedInUrl} target="_blank" rel="noreferrer">{t.linkedIn}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
