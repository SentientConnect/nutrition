'use client'

import { FormEvent, useMemo, useState } from 'react'

type ChatMessage = {
  role: 'assistant' | 'user'
  text: string
}

const services = [
  {
    number: '01',
    title: 'Recovery Meal Plans',
    description:
      'Practical meal planning designed for treatment facilities, sober-living communities, families, and individuals continuing recovery after discharge.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '02',
    title: 'Ingredient Supply',
    description:
      'Reliable ingredient sourcing built around repeatable meals, responsible purchasing, simplified inventory, and real-world affordability.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '03',
    title: 'Cooking Classes',
    description:
      'Hands-on classes inside treatment centers, recovery residences, transitional settings, and community kitchens.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '04',
    title: 'Educational Courses',
    description:
      'Accessible education covering nutrition, food safety, budgeting, cooking skills, meal preparation, and practical independence.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '05',
    title: 'Packing & Delivery',
    description:
      'Meal preparation, packaging, labeling, inventory, fulfillment, route coordination, and regional delivery support.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '06',
    title: 'Employment Pathways',
    description:
      'Opportunities to gain experience in cooking, teaching, inventory, logistics, packing, fulfillment, delivery, and peer leadership.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
  },
]

const audiences = [
  {
    title: 'Detox Facilities',
    text: 'Meal support, transition coordination, ingredient planning, and practical education during the earliest stage of stabilization.',
  },
  {
    title: 'Treatment & Rehabilitation',
    text: 'Cooking classes, nutrition education, skill development, discharge continuity, and meaningful partnership opportunities.',
  },
  {
    title: 'Sober Living',
    text: 'Household meal planning, ingredient supply, group classes, budgeting, routine development, and employment connections.',
  },
  {
    title: 'After Discharge',
    text: 'Continued education, meal resources, community connection, workforce training, and a practical next step into life.',
  },
]

const journey = [
  {
    step: '01',
    title: 'Nourishment',
    text: 'Create dependable access to practical meals and quality ingredients.',
  },
  {
    step: '02',
    title: 'Routine',
    text: 'Build repeatable daily habits around food, preparation, and responsibility.',
  },
  {
    step: '03',
    title: 'Skills',
    text: 'Teach cooking, safety, budgeting, inventory, packaging, and logistics.',
  },
  {
    step: '04',
    title: 'Employment',
    text: 'Connect qualified participants with supervised training and real work.',
  },
  {
    step: '05',
    title: 'Leadership',
    text: 'Help experienced participants teach, guide, and support the next person.',
  },
]

const roles = [
  'Kitchen preparation',
  'Cooking',
  'Food safety',
  'Inventory',
  'Ingredient receiving',
  'Meal packaging',
  'Order fulfillment',
  'Route support',
  'Delivery coordination',
  'Teaching assistance',
  'Community outreach',
  'Peer leadership',
]

const partnershipItems = [
  'Facility cooking classes',
  'Nutrition education',
  'Meal-plan development',
  'Ingredient sourcing',
  'Prepared meal delivery',
  'Discharge continuity',
  'Resident workshops',
  'Workforce referrals',
  'Sponsored access',
  'Regional distribution',
  'Program reporting',
  'Community events',
]

const firstYearGoals = [
  { value: '20,000+', label: 'Meals prepared' },
  { value: '200+', label: 'Participants served' },
  { value: '100+', label: 'Education sessions' },
  { value: '50+', label: 'Workforce trainees' },
  { value: '8+', label: 'Formal partners' },
  { value: '4', label: 'Quarterly reports' },
]

const faqs = [
  {
    question: 'What is Sentient Nutrition™?',
    answer:
      'Sentient Nutrition™ is a developing nonprofit recovery-support initiative connecting nutritious meals, cooking education, ingredient access, logistics, workforce development, and continued support after treatment.',
  },
  {
    question: 'Is Sentient Nutrition™ a treatment provider?',
    answer:
      'No. Sentient Nutrition™ is being developed as a complementary recovery-support resource. It does not replace medical care, counseling, medication, licensed treatment, or individualized guidance from qualified professionals.',
  },
  {
    question: 'Who will be able to participate?',
    answer:
      'The model is being designed for treatment organizations, recovery residences, individuals continuing recovery after discharge, families, workforce partners, and community stakeholders. Eligibility and service areas will be announced before launch.',
  },
  {
    question: 'Will Sentient Nutrition™ deliver meals?',
    answer:
      'Prepared meals, ingredient supply, partner pickup locations, and facility distribution are all part of the planned model. Availability will depend on location, funding, kitchen capacity, and partnerships.',
  },
  {
    question: 'Will there be cooking classes?',
    answer:
      'Yes. Facility-based and community cooking classes are a central part of the program being developed.',
  },
  {
    question: 'Will employment opportunities be available?',
    answer:
      'Sentient Nutrition™ intends to create supervised training and employment pathways in cooking, teaching, packing, logistics, delivery, fulfillment, and leadership. Availability will depend on funding, readiness, partnerships, and open roles.',
  },
  {
    question: 'When is the launch?',
    answer:
      'The initial nonprofit launch is planned for January 2027. Founding partnerships and operational infrastructure are being developed now.',
  },
]

const suggestedQuestions = [
  'What is Sentient Nutrition?',
  'How can a facility partner?',
  'What employment paths are planned?',
  'How do I join the launch?',
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [launchSubmitted, setLaunchSubmitted] = useState(false)
  const [partnerSubmitted, setPartnerSubmitted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Sentient Nutrition™. I’m AURA Genesis™. Ask me about our mission, planned services, facility partnerships, workforce pathways, or January 2027 launch.',
    },
  ])

  const navigation = useMemo(
    () => [
      { label: 'Our Theory', href: '#theory' },
      { label: 'What We’re Building', href: '#ecosystem' },
      { label: 'Who We Serve', href: '#who-we-serve' },
      { label: 'Workforce', href: '#workforce' },
      { label: 'Partner', href: '#partner' },
      { label: 'FAQ', href: '#faq' },
    ],
    [],
  )

  function submitLaunchForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLaunchSubmitted(true)
  }

  function submitPartnerForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPartnerSubmitted(true)
  }

  function answerQuestion(question: string) {
    const normalized = question.toLowerCase()

    if (
      normalized.includes('facility') ||
      normalized.includes('partner') ||
      normalized.includes('treatment')
    ) {
      return 'Facilities will be able to explore cooking classes, nutrition education, meal planning, ingredient supply, discharge continuity, workforce referrals, and delivery partnerships. Use the partnership form and our team will follow up as launch planning develops.'
    }

    if (
      normalized.includes('employment') ||
      normalized.includes('job') ||
      normalized.includes('workforce')
    ) {
      return 'Planned pathways include kitchen preparation, cooking, food safety, inventory, packaging, order fulfillment, delivery support, teaching assistance, outreach, and peer leadership. Roles will depend on funding, readiness, partnerships, and availability.'
    }

    if (
      normalized.includes('launch') ||
      normalized.includes('january') ||
      normalized.includes('join')
    ) {
      return 'Sentient Nutrition™ is planning an initial nonprofit launch in January 2027. You can join the launch list for program, partnership, volunteer, donor, and employment updates.'
    }

    if (
      normalized.includes('meal') ||
      normalized.includes('food') ||
      normalized.includes('ingredient')
    ) {
      return 'The planned model includes recovery-conscious meal plans, ingredient sourcing, prepared meals, cooking education, facility distribution, and continued support after discharge.'
    }

    if (
      normalized.includes('what is') ||
      normalized.includes('mission') ||
      normalized.includes('nutrition')
    ) {
      return 'Sentient Nutrition™ is building recovery infrastructure around food, education, routine, practical skills, workforce development, and continuity after treatment. The goal is to turn a meal into a pathway forward.'
    }

    return 'Sentient Nutrition™ is still in development, but I can help with questions about facility partnerships, meal services, cooking classes, employment pathways, volunteering, funding, and the January 2027 launch.'
  }

  function sendChatMessage(question?: string) {
    const text = (question ?? chatInput).trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      { role: 'assistant', text: answerQuestion(text) },
    ])
    setChatInput('')
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a
            href="#top"
            className="brand"
            aria-label="Sentient Nutrition home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-leaf brand-leaf-one" />
              <span className="brand-leaf brand-leaf-two" />
              <span className="brand-core" />
            </span>

            <span className="brand-copy">
              <strong>SENTIENT NUTRITION™</strong>
              <small>Powered by SentientOS™</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="text-link desktop-only" href="#partner">
              Founding Partner
            </a>

            <a className="button button-small" href="#launch">
              Join the Launch
              <ArrowIcon />
            </a>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              className="mobile-nav-cta"
              href="#launch"
              onClick={() => setMobileOpen(false)}
            >
              Join the January 2027 Launch
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2400&q=90"
            alt="People preparing a healthy meal together in a welcoming kitchen"
          />
          <div className="hero-overlay" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content page-shell">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" />
                A new recovery nutrition nonprofit
              </div>

              <h1>
                Food can be more than a meal.
                <span>It can become a path forward.</span>
              </h1>

              <p className="hero-description">
                Sentient Nutrition™ is building a recovery-support ecosystem
                connecting nutritious meals, practical education, cooking
                classes, ingredient access, logistics, employment, and
                continued support after treatment.
              </p>

              <div className="hero-buttons">
                <a className="button button-primary" href="#launch">
                  Join the Launch List
                  <ArrowIcon />
                </a>

                <a className="button button-ghost" href="#theory">
                  Explore Our Approach
                </a>
              </div>

              <div className="hero-trust">
                <span className="hero-trust-icon">
                  <CheckIcon />
                </span>
                Built for treatment providers, recovery residences, families,
                community partners, and people building their next chapter.
              </div>
            </div>

            <aside className="launch-card">
              <div className="launch-card-topline">
                <span className="status-dot" />
                In development
              </div>

              <p className="launch-card-kicker">Nonprofit launch</p>
              <p className="launch-date">JAN 2027</p>

              <div className="launch-card-divider" />

              <p>
                Building partnerships, kitchen resources, education, workforce
                pathways, and regional distribution now.
              </p>

              <a href="#partner">
                Become a founding partner
                <ArrowIcon />
              </a>
            </aside>
          </div>

          <a className="scroll-indicator" href="#announcement">
            <span>Discover the model</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section id="announcement" className="announcement-section">
          <div className="page-shell">
            <div className="announcement-card">
              <div className="announcement-copy">
                <span className="announcement-icon" aria-hidden="true">
                  2027
                </span>

                <div>
                  <p className="section-kicker">COMING SOON</p>
                  <h2>Sentient Nutrition™ is currently in development.</h2>
                  <p>
                    We are building partnerships, developing program standards,
                    identifying kitchen and distribution resources, and
                    preparing for an initial January 2027 launch.
                  </p>
                </div>
              </div>

              <div className="announcement-actions">
                <a className="button button-dark" href="#launch">
                  Join for Updates
                </a>
                <a className="button button-outline" href="#partner">
                  Discuss a Partnership
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="theory" className="section theory-section">
          <div className="page-shell">
            <div className="section-heading section-heading-wide">
              <div>
                <p className="section-kicker">OUR THEORY</p>
                <h2>
                  Recovery does not end
                  <span>when treatment ends.</span>
                </h2>
              </div>

              <div className="section-heading-copy">
                <p>
                  A person may leave treatment with knowledge, hope, and a plan,
                  but still return to daily decisions, familiar environments,
                  financial limitations, employment barriers, and routines that
                  may not support the life they are trying to build.
                </p>

                <p>
                  Sentient Nutrition™ starts with a simple idea: better daily
                  inputs, useful skills, meaningful responsibility, and a
                  pathway to contribute can create more opportunities to keep
                  moving forward.
                </p>
              </div>
            </div>

            <div className="theory-layout">
              <div className="theory-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90"
                  alt="Fresh vegetables and ingredients prepared for a shared meal"
                />

                <div className="image-note">
                  <span className="image-note-number">01</span>
                  <p>
                    Nutrition becomes the starting point. Skills, responsibility,
                    work, and leadership become the path.
                  </p>
                </div>
              </div>

              <div className="theory-statements">
                <article>
                  <span>Food</span>
                  <h3>Becomes a dependable daily input.</h3>
                  <p>
                    Practical meals and quality ingredients help establish
                    structure that can continue beyond treatment.
                  </p>
                </article>

                <article>
                  <span>Cooking</span>
                  <h3>Becomes a transferable life skill.</h3>
                  <p>
                    Learning to prepare food builds capability, confidence,
                    independence, teamwork, and responsibility.
                  </p>
                </article>

                <article>
                  <span>Work</span>
                  <h3>Becomes a route back into community.</h3>
                  <p>
                    Kitchens, packing, inventory, teaching, logistics, and
                    delivery can become supervised workforce pathways.
                  </p>
                </article>
              </div>
            </div>

            <blockquote className="feature-quote">
              <span className="quote-mark">“</span>
              <p>
                A meal can provide relief today. A skill, a routine, and an
                opportunity can help build tomorrow.
              </p>
              <footer>THE SENTIENT NUTRITION™ THEORY</footer>
            </blockquote>
          </div>
        </section>

        <section className="pathway-strip" aria-label="Program pathway">
          <div className="page-shell pathway-strip-inner">
            {['Nourishment', 'Routine', 'Skills', 'Responsibility', 'Employment', 'Leadership'].map(
              (item, index) => (
                <div className="pathway-strip-item" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                  {index < 5 && <ArrowIcon />}
                </div>
              ),
            )}
          </div>
        </section>

        <section id="ecosystem" className="section ecosystem-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">
                  THE SENTIENT NUTRITION ECOSYSTEM
                </p>
                <h2>
                  One connected model.
                  <span>Multiple paths into stability.</span>
                </h2>
              </div>

              <p className="section-intro">
                A meal opens the door. Education, practical skills, logistics,
                employment, and leadership turn that door into a pathway.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image-wrap">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <span className="service-number">{service.number}</span>
                  </div>

                  <div className="service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-link">
                      Part of the connected model
                      <ArrowIcon />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="section audience-section">
          <div className="page-shell">
            <div className="audience-visual">
              <div className="audience-main-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=90"
                  alt="A collaborative team discussing a community support program"
                  loading="lazy"
                />

                <div className="audience-image-caption">
                  <p>BUILT FOR THE CONTINUUM OF CARE</p>
                  <strong>
                    Support that connects facilities, residences, participants,
                    families, and employers.
                  </strong>
                </div>
              </div>

              <div className="audience-side-image">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=90"
                  alt="A chef teaching practical cooking skills"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="section-heading audience-heading">
              <div>
                <p className="section-kicker">WHO WE SERVE</p>
                <h2>
                  Designed to strengthen
                  <span>the entire continuum of care.</span>
                </h2>
              </div>

              <p className="section-intro">
                Sentient Nutrition™ is being designed to work alongside the
                organizations and people already doing the difficult work of
                creating long-term change.
              </p>
            </div>

            <div className="audience-grid">
              {audiences.map((audience, index) => (
                <article className="audience-card" key={audience.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>

            <div className="centered-actions">
              <a className="button button-primary" href="#partner">
                Bring It to Our Organization
                <ArrowIcon />
              </a>

              <a className="button button-outline" href="#launch">
                Join the Community
              </a>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <div className="page-shell">
            <div className="journey-header">
              <p className="section-kicker section-kicker-light">
                RECOVERY CONTINUITY
              </p>
              <h2>
                From receiving support
                <span>to helping build the system.</span>
              </h2>
              <p>
                A participant might first encounter Sentient Nutrition™ through
                a facility class, continue building practical skills after
                discharge, enter supervised training, and eventually help
                welcome the next person into the kitchen.
              </p>
            </div>

            <div className="journey-grid">
              {journey.map((item, index) => (
                <article className="journey-card" key={item.title}>
                  <div className="journey-card-top">
                    <span>{item.step}</span>
                    {index < journey.length - 1 && <ArrowIcon />}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="journey-story">
              <div className="journey-story-image">
                <img
                  src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1500&q=90"
                  alt="People learning and preparing food together"
                  loading="lazy"
                />
              </div>

              <div className="journey-story-copy">
                <p className="section-kicker section-kicker-light">
                  THE FUTURE WE ARE BUILDING
                </p>
                <h3>
                  The person who once needed the pathway may someday help lead
                  it.
                </h3>

                <ul>
                  <li>
                    <CheckIcon />
                    Attend a practical cooking class during treatment
                  </li>
                  <li>
                    <CheckIcon />
                    Continue education and structured practice after discharge
                  </li>
                  <li>
                    <CheckIcon />
                    Train in packaging, inventory, fulfillment, or delivery
                  </li>
                  <li>
                    <CheckIcon />
                    Build references, responsibility, experience, and confidence
                  </li>
                  <li>
                    <CheckIcon />
                    Help teach, welcome, or support the next participant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="workforce" className="section workforce-section">
          <div className="page-shell">
            <div className="workforce-layout">
              <div className="workforce-copy">
                <p className="section-kicker">WORKFORCE PATHWAY</p>
                <h2>
                  Dignity grows when
                  <span>responsibility becomes real.</span>
                </h2>

                <p className="workforce-lead">
                  Sentient Nutrition™ will work toward creating supervised,
                  measurable pathways that help qualified participants develop
                  practical experience and move toward sustainable employment.
                </p>

                <div className="role-grid">
                  {roles.map((role) => (
                    <span key={role}>
                      <CheckIcon />
                      {role}
                    </span>
                  ))}
                </div>

                <div className="workforce-note">
                  Employment, stipends, training placements, and role
                  availability will depend on funding, partnerships, readiness,
                  program requirements, and applicable laws.
                </div>

                <a className="button button-dark" href="#launch">
                  Support the Workforce Pathway
                  <ArrowIcon />
                </a>
              </div>

              <div className="workforce-images">
                <div className="workforce-image-large">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=90"
                    alt="Professional culinary team working together"
                    loading="lazy"
                  />
                </div>

                <div className="workforce-image-small">
                  <img
                    src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1000&q=90"
                    alt="Prepared meals being packed and organized"
                    loading="lazy"
                  />
                </div>

                <div className="workforce-progress-card">
                  <p>THE PATHWAY</p>
                  <div>
                    <span>Participant</span>
                    <ArrowIcon />
                    <span>Student</span>
                    <ArrowIcon />
                    <span>Trainee</span>
                    <ArrowIcon />
                    <span>Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partner" className="section partner-section">
          <div className="page-shell">
            <div className="partner-layout">
              <div className="partner-copy">
                <p className="section-kicker">FACILITY PARTNERSHIPS</p>
                <h2>
                  A practical partner for the work that happens
                  <span>between appointments.</span>
                </h2>

                <p>
                  Sentient Nutrition™ is being designed for executive directors,
                  clinical leaders, discharge planners, case managers, recovery
                  residence operators, community organizations, employers, and
                  funders.
                </p>

                <div className="partner-items">
                  {partnershipItems.map((item) => (
                    <span key={item}>
                      <CheckIcon />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="partner-photo">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=90"
                    alt="Community partners discussing a collaborative program"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="form-card">
                {!partnerSubmitted ? (
                  <>
                    <div className="form-heading">
                      <p>START A CONVERSATION</p>
                      <h3>Become a founding partner.</h3>
                      <span>
                        Tell us what your organization serves and what you would
                        like to build together.
                      </span>
                    </div>

                    <form onSubmit={submitPartnerForm}>
                      <div className="form-row">
                        <label>
                          Full name
                          <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                          />
                        </label>

                        <label>
                          Organization
                          <input
                            name="organization"
                            type="text"
                            placeholder="Organization name"
                            required
                          />
                        </label>
                      </div>

                      <div className="form-row">
                        <label>
                          Email
                          <input
                            name="email"
                            type="email"
                            placeholder="you@organization.org"
                            required
                          />
                        </label>

                        <label>
                          Phone
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Optional"
                          />
                        </label>
                      </div>

                      <label>
                        Organization type
                        <select name="type" required defaultValue="">
                          <option value="" disabled>
                            Select organization type
                          </option>
                          <option>Detox facility</option>
                          <option>Residential treatment</option>
                          <option>Outpatient treatment</option>
                          <option>Sober living</option>
                          <option>Transitional housing</option>
                          <option>Hospital or health system</option>
                          <option>Community nonprofit</option>
                          <option>Government or funding organization</option>
                          <option>Employer</option>
                          <option>Food supplier</option>
                          <option>Transportation or logistics partner</option>
                          <option>Other</option>
                        </select>
                      </label>

                      <label>
                        How would you like to participate?
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us about your organization, the people you serve, and the partnership you would like to explore."
                          required
                        />
                      </label>

                      <button className="button button-primary button-full">
                        Start a Partnership Conversation
                        <ArrowIcon />
                      </button>

                      <p className="form-privacy">
                        By submitting this form, you agree to be contacted about
                        Sentient Nutrition™ planning and partnership
                        opportunities.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="form-success">
                    <span>
                      <CheckIcon />
                    </span>
                    <p className="section-kicker">MESSAGE RECEIVED</p>
                    <h3>Thank you for starting the conversation.</h3>
                    <p>
                      Your organization has been added to the founding partner
                      interest list for Sentient Nutrition™.
                    </p>
                    <button
                      type="button"
                      className="button button-outline"
                      onClick={() => setPartnerSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section">
          <div className="technology-glow technology-glow-one" />
          <div className="technology-glow technology-glow-two" />

          <div className="page-shell technology-layout">
            <div className="technology-copy">
              <p className="section-kicker section-kicker-light">
                POWERED BY SENTIENTOS™
              </p>
              <h2>
                Human support, strengthened by
                <span>thoughtful technology.</span>
              </h2>

              <p>
                Sentient Nutrition™ is being designed to coordinate education,
                referrals, participation, partner communication, resource
                navigation, delivery information, and future outcome reporting
                through the SentientOS™ ecosystem.
              </p>

              <blockquote>
                Technology should strengthen human connection—not replace it.
              </blockquote>

              <div className="technology-features">
                {[
                  'Participant education',
                  'Meal-plan guidance',
                  'Class reminders',
                  'Partner referrals',
                  'Resource navigation',
                  'Delivery updates',
                  'Participant feedback',
                  'Program reporting',
                ].map((feature) => (
                  <span key={feature}>
                    <CheckIcon />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="aura-preview">
              <div className="aura-window">
                <div className="aura-window-header">
                  <div className="aura-identity">
                    <span className="aura-orb">A</span>
                    <div>
                      <strong>AURA Genesis™</strong>
                      <small>
                        <span />
                        Online
                      </small>
                    </div>
                  </div>

                  <span className="aura-powered">SENTIENTOS™</span>
                </div>

                <div className="aura-window-body">
                  <div className="aura-message">
                    Welcome to Sentient Nutrition™. How can I help you explore
                    the mission?
                  </div>

                  <div className="aura-option">
                    How can our treatment facility partner?
                  </div>
                  <div className="aura-option">
                    What workforce opportunities are planned?
                  </div>
                  <div className="aura-option">
                    How do I join the January 2027 launch?
                  </div>
                </div>

                <div className="aura-window-input">
                  <span>Ask AURA Genesis™ a question...</span>
                  <button type="button" aria-label="Send preview message">
                    <ArrowIcon />
                  </button>
                </div>
              </div>

              <div className="aura-preview-label">
                <span />
                AURA Genesis™ is available in the bottom-left corner.
              </div>
            </div>
          </div>
        </section>

        <section className="section impact-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">OUR FIRST-YEAR VISION</p>
                <h2>
                  What gets measured
                  <span>gets strengthened.</span>
                </h2>
              </div>

              <p className="section-intro">
                These represent initial program goals—not current results or
                guaranteed outcomes. Final targets will depend on funding,
                partnerships, capacity, and launch readiness.
              </p>
            </div>

            <div className="impact-grid">
              {firstYearGoals.map((goal) => (
                <article key={goal.label}>
                  <strong>{goal.value}</strong>
                  <span>{goal.label}</span>
                </article>
              ))}
            </div>

            <div className="impact-image-band">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=2200&q=90"
                alt="Fresh foods and ingredients arranged for meal preparation"
                loading="lazy"
              />

              <div className="impact-band-content">
                <p>FOOD AS RECOVERY INFRASTRUCTURE</p>
                <h3>
                  Clean meals. Practical skills. Meaningful work. A stronger
                  pathway forward.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section id="launch" className="launch-section">
          <div className="page-shell launch-layout">
            <div className="launch-copy">
              <p className="section-kicker section-kicker-light">
                COMING JANUARY 2027
              </p>
              <h2>
                We are building the kitchen, classroom, workforce, and
                distribution network now.
              </h2>

              <p>
                Sentient Nutrition™ is identifying founding partners, treatment
                organizations, recovery residences, food suppliers, kitchens,
                instructors, logistics partners, volunteers, employers,
                funders, and future participants.
              </p>

              <div className="launch-paths">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Organizations</h3>
                    <p>
                      Bring programming, meal support, or workforce pathways to
                      your community.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h3>Community Partners</h3>
                    <p>
                      Support ingredients, kitchens, packaging, transportation,
                      technology, or training.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h3>Future Participants</h3>
                    <p>
                      Join for education, services, training, and employment
                      updates.
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>
                  <div>
                    <h3>Funders & Donors</h3>
                    <p>
                      Help establish durable recovery nutrition infrastructure.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="launch-form-card">
              {!launchSubmitted ? (
                <>
                  <div className="form-heading">
                    <p>JOIN THE LAUNCH LIST</p>
                    <h3>Help shape what comes next.</h3>
                    <span>
                      Tell us how you would like to participate in the January
                      2027 launch.
                    </span>
                  </div>

                  <form onSubmit={submitLaunchForm}>
                    <div className="form-row">
                      <label>
                        First name
                        <input
                          name="firstName"
                          type="text"
                          placeholder="First name"
                          required
                        />
                      </label>

                      <label>
                        Last name
                        <input
                          name="lastName"
                          type="text"
                          placeholder="Last name"
                          required
                        />
                      </label>
                    </div>

                    <label>
                      Email
                      <input
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                      />
                    </label>

                    <div className="form-row">
                      <label>
                        City
                        <input
                          name="city"
                          type="text"
                          placeholder="Your city"
                          required
                        />
                      </label>

                      <label>
                        State
                        <input
                          name="state"
                          type="text"
                          placeholder="State"
                          required
                        />
                      </label>
                    </div>

                    <label>
                      I am interested as...
                      <select name="interest" defaultValue="" required>
                        <option value="" disabled>
                          Select your interest
                        </option>
                        <option>Treatment provider</option>
                        <option>Recovery residence</option>
                        <option>Potential participant</option>
                        <option>Family member</option>
                        <option>Volunteer</option>
                        <option>Instructor</option>
                        <option>Employer</option>
                        <option>Food or ingredient supplier</option>
                        <option>Delivery or logistics partner</option>
                        <option>Donor or funder</option>
                        <option>Community organization</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label>
                      What would you like us to help make possible?
                      <textarea
                        name="vision"
                        rows={4}
                        placeholder="Optional"
                      />
                    </label>

                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I agree to receive launch and program updates from
                        Sentient Nutrition™.
                      </span>
                    </label>

                    <button className="button button-primary button-full">
                      Join the January 2027 Launch
                      <ArrowIcon />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success form-success-dark">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="section-kicker section-kicker-light">
                    YOU’RE ON THE LIST
                  </p>
                  <h3>Welcome to the beginning.</h3>
                  <p>
                    We’ll keep you informed as Sentient Nutrition™ moves toward
                    its January 2027 launch.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="page-shell faq-layout">
            <div className="faq-heading">
              <p className="section-kicker">FREQUENTLY ASKED QUESTIONS</p>
              <h2>
                Questions about
                <span>what we are building?</span>
              </h2>

              <p>
                AURA Genesis™ is also available in the bottom-left corner to
                answer questions about the mission, partnerships, services,
                workforce model, and planned launch.
              </p>

              <button
                className="button button-outline"
                type="button"
                onClick={() => setChatOpen(true)}
              >
                Ask AURA Genesis™
                <ArrowIcon />
              </button>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <article
                    className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-plus">{isOpen ? '−' : '+'}</span>
                    </button>

                    {isOpen && <p>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="responsibility-section">
          <div className="page-shell responsibility-layout">
            <p className="section-kicker">AN EVIDENCE-INFORMED SUPPORT MODEL</p>

            <div>
              <h2>Supporting recovery without overstating the role of food.</h2>
              <p>
                Sentient Nutrition™ is being developed around the understanding
                that nutrition, routine, education, employment, social
                connection, and supportive environments can contribute to
                stability and quality of life.
              </p>

              <p>
                Sentient Nutrition™ does not claim that food cures substance-use
                disorders or that nutrition replaces licensed treatment,
                medication, counseling, emergency care, or individualized
                medical advice.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" className="brand brand-footer">
                <span className="brand-mark" aria-hidden="true">
                  <span className="brand-leaf brand-leaf-one" />
                  <span className="brand-leaf brand-leaf-two" />
                  <span className="brand-core" />
                </span>

                <span className="brand-copy">
                  <strong>SENTIENT NUTRITION™</strong>
                  <small>Powered by SentientOS™</small>
                </span>
              </a>

              <p>
                Food, education, practical skills, logistics, employment, and
                continuity after treatment.
              </p>

              <span className="footer-launch">
                <span />
                Launching January 2027
              </span>
            </div>

            <div className="footer-column">
              <strong>Explore</strong>
              <a href="#theory">Our Theory</a>
              <a href="#ecosystem">What We’re Building</a>
              <a href="#who-we-serve">Who We Serve</a>
              <a href="#workforce">Workforce Pathway</a>
            </div>

            <div className="footer-column">
              <strong>Participate</strong>
              <a href="#partner">Facility Partnerships</a>
              <a href="#launch">Join the Launch List</a>
              <a href="#launch">Volunteer Interest</a>
              <a href="#launch">Donor & Funder Interest</a>
            </div>

            <div className="footer-column">
              <strong>Information</strong>
              <a href="#faq">FAQ</a>
              <a href="#responsibility">Program Disclaimer</a>
              <a href="#top">Privacy Policy</a>
              <a href="#top">Accessibility</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2026–2027 Sentient Nutrition™. All rights reserved.
            </p>

            <p>
              A developing nonprofit recovery-support initiative. Program
              availability is subject to funding, partnerships, regulatory
              requirements, and operational readiness.
            </p>
          </div>
        </div>
      </footer>

      <div className={`chat-widget ${chatOpen ? 'chat-widget-open' : ''}`}>
        {chatOpen && (
          <section
            className="chat-panel"
            aria-label="AURA Genesis chat"
            aria-live="polite"
          >
            <div className="chat-header">
              <div className="chat-identity">
                <span className="chat-orb">A</span>
                <div>
                  <strong>AURA Genesis™</strong>
                  <small>
                    <span />
                    Sentient Nutrition Guide
                  </small>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close AURA Genesis chat"
                onClick={() => setChatOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  className={`chat-message chat-message-${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  {message.text}
                </div>
              ))}

              {messages.length === 1 && (
                <div className="chat-suggestions">
                  {suggestedQuestions.map((question) => (
                    <button
                      type="button"
                      key={question}
                      onClick={() => sendChatMessage(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              className="chat-input"
              onSubmit={(event) => {
                event.preventDefault()
                sendChatMessage()
              }}
            >
              <input
                aria-label="Ask AURA Genesis a question"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask a question..."
              />

              <button type="submit" aria-label="Send message">
                <ArrowIcon />
              </button>
            </form>

            <p className="chat-disclaimer">
              AURA provides program information, not medical advice or emergency
              support.
            </p>
          </section>
        )}

        <button
          className="chat-launcher"
          type="button"
          aria-label={
            chatOpen ? 'Close AURA Genesis chat' : 'Open AURA Genesis chat'
          }
          onClick={() => setChatOpen((current) => !current)}
        >
          <span className="chat-launcher-orb">A</span>
          <span className="chat-launcher-copy">
            <strong>AURA Genesis™</strong>
            <small>Ask a question</small>
          </span>
          <span className="chat-status" />
        </button>
      </div>

      <style jsx global>{`
        :root {
          --background: #f7f4ed;
          --surface: #fffdf8;
          --surface-alt: #eee9dd;
          --ink: #171812;
          --muted: #67695e;
          --gold: #b9964b;
          --gold-light: #dbc48b;
          --sage: #778776;
          --sage-dark: #465746;
          --purple: #7966ac;
          --purple-light: #b4a5dd;
          --border: rgba(23, 24, 18, 0.12);
          --shadow: 0 30px 80px rgba(29, 28, 20, 0.12);
          --radius-lg: 32px;
          --radius-md: 22px;
          --radius-sm: 14px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          margin: 0;
          background: var(--background);
          color: var(--ink);
          font-family:
            Inter, Manrope, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }

        button {
          color: inherit;
        }

        .page-shell {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .site-header {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.11);
          background: rgba(20, 20, 16, 0.82);
          backdrop-filter: blur(18px);
        }

        .nav-shell {
          display: flex;
          width: min(1320px, calc(100% - 48px));
          min-height: 80px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
        }

        .brand-mark {
          position: relative;
          display: inline-flex;
          width: 39px;
          height: 39px;
          flex: 0 0 39px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(219, 196, 139, 0.55);
          border-radius: 50%;
        }

        .brand-core {
          width: 6px;
          height: 15px;
          transform: rotate(30deg);
          border-radius: 100%;
          background: linear-gradient(180deg, var(--gold-light), var(--gold));
        }

        .brand-leaf {
          position: absolute;
          width: 10px;
          height: 19px;
          border: 1.5px solid var(--gold-light);
          border-radius: 100% 0 100% 0;
        }

        .brand-leaf-one {
          top: 7px;
          left: 8px;
          transform: rotate(-10deg);
        }

        .brand-leaf-two {
          right: 8px;
          bottom: 7px;
          transform: rotate(170deg);
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-copy strong {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
        }

        .brand-copy small {
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.54);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 2vw, 30px);
        }

        .desktop-nav a,
        .text-link {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .desktop-nav a::after,
        .text-link::after {
          position: absolute;
          right: 0;
          bottom: -8px;
          left: 0;
          height: 1px;
          transform: scaleX(0);
          transform-origin: left;
          background: var(--gold-light);
          content: "";
          transition: transform 180ms ease;
        }

        .desktop-nav a:hover,
        .text-link:hover {
          color: #ffffff;
        }

        .desktop-nav a:hover::after,
        .text-link:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 0 24px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease,
            border-color 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-small {
          min-height: 42px;
          padding: 0 18px;
          background: var(--gold);
          color: #171812;
        }

        .button-primary {
          background: linear-gradient(135deg, #c7a65c, #e0cb93);
          color: #171812;
          box-shadow: 0 16px 32px rgba(185, 150, 75, 0.22);
        }

        .button-primary:hover {
          box-shadow: 0 20px 40px rgba(185, 150, 75, 0.3);
        }

        .button-dark {
          background: var(--ink);
          color: #ffffff;
        }

        .button-outline {
          border-color: var(--border);
          background: transparent;
          color: var(--ink);
        }

        .button-outline:hover {
          border-color: rgba(23, 24, 18, 0.3);
          background: rgba(255, 255, 255, 0.45);
        }

        .button-ghost {
          border-color: rgba(255, 255, 255, 0.33);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          backdrop-filter: blur(12px);
        }

        .button-ghost:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .button-full {
          width: 100%;
        }

        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }

        .menu-icon {
          display: flex;
          width: 18px;
          flex-direction: column;
          gap: 4px;
        }

        .menu-icon span {
          display: block;
          width: 100%;
          height: 1.5px;
          background: #ffffff;
          transition: transform 180ms ease;
        }

        .mobile-nav {
          display: flex;
          padding: 12px 24px 28px;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #151612;
        }

        .mobile-nav a {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
        }

        .mobile-nav .mobile-nav-cta {
          margin-top: 18px;
          padding: 14px 18px;
          border: 0;
          border-radius: 999px;
          background: var(--gold);
          color: #171812;
          font-weight: 600;
          text-align: center;
        }

        .hero {
          position: relative;
          display: flex;
          min-height: 850px;
          align-items: center;
          overflow: hidden;
          background: #181913;
          color: #ffffff;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(18, 20, 15, 0.96) 0%,
              rgba(18, 20, 15, 0.8) 42%,
              rgba(18, 20, 15, 0.27) 76%,
              rgba(18, 20, 15, 0.18) 100%
            ),
            linear-gradient(
              180deg,
              rgba(18, 20, 15, 0.15) 0%,
              rgba(18, 20, 15, 0.38) 100%
            );
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .hero-glow-one {
          top: 6%;
          left: -4%;
          width: 420px;
          height: 420px;
          background: rgba(185, 150, 75, 0.16);
        }

        .hero-glow-two {
          right: 3%;
          bottom: -12%;
          width: 500px;
          height: 500px;
          background: rgba(121, 102, 172, 0.13);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          padding-top: 120px;
          padding-bottom: 100px;
          grid-template-columns: minmax(0, 1fr) 310px;
          align-items: end;
          gap: 80px;
        }

        .hero-copy {
          max-width: 820px;
        }

        .eyebrow,
        .section-kicker {
          display: flex;
          margin: 0 0 22px;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .eyebrow-light,
        .section-kicker-light {
          color: var(--gold-light);
        }

        .eyebrow-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 0 6px rgba(219, 196, 139, 0.12);
        }

        .hero h1 {
          max-width: 920px;
          margin: 0;
          font-size: clamp(55px, 7vw, 96px);
          font-weight: 450;
          letter-spacing: -0.055em;
          line-height: 0.98;
        }

        .hero h1 span,
        .section-heading h2 span,
        .audience-heading h2 span,
        .journey-header h2 span,
        .workforce-copy h2 span,
        .partner-copy h2 span,
        .technology-copy h2 span,
        .faq-heading h2 span {
          display: block;
          color: var(--gold-light);
          font-weight: 420;
        }

        .hero-description {
          max-width: 730px;
          margin: 34px 0 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: clamp(17px, 1.7vw, 21px);
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          margin-top: 38px;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hero-trust {
          display: flex;
          max-width: 650px;
          margin-top: 36px;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
        }

        .hero-trust-icon {
          display: inline-flex;
          width: 25px;
          height: 25px;
          flex: 0 0 25px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(219, 196, 139, 0.38);
          border-radius: 50%;
          color: var(--gold-light);
        }

        .launch-card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.19);
          border-radius: var(--radius-md);
          background: rgba(18, 20, 15, 0.58);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(18px);
        }

        .launch-card::before {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(121, 102, 172, 0.18);
          filter: blur(45px);
          content: "";
        }

        .launch-card-topline {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.67);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a9c59d;
          box-shadow: 0 0 0 6px rgba(169, 197, 157, 0.12);
        }

        .launch-card-kicker {
          margin: 32px 0 0;
          color: rgba(255, 255, 255, 0.46);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .launch-date {
          margin: 5px 0 0;
          color: var(--gold-light);
          font-size: 42px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .launch-card-divider {
          height: 1px;
          margin: 24px 0;
          background: rgba(255, 255, 255, 0.13);
        }

        .launch-card > p:not(.launch-card-kicker):not(.launch-date) {
          margin: 0;
          color: rgba(255, 255, 255, 0.64);
          font-size: 13px;
          line-height: 1.65;
        }

        .launch-card > a {
          display: flex;
          margin-top: 22px;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
        }

        .scroll-indicator {
          position: absolute;
          z-index: 3;
          bottom: 36px;
          left: 50%;
          display: flex;
          transform: translateX(-50%);
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .scroll-line {
          position: relative;
          display: block;
          width: 54px;
          height: 1px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.2);
        }

        .scroll-line::after {
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: var(--gold-light);
          content: "";
          animation: scrollLine 2.3s infinite ease;
        }

        @keyframes scrollLine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .announcement-section {
          position: relative;
          z-index: 5;
          margin-top: -1px;
          padding: 36px 0;
          background: var(--surface-alt);
        }

        .announcement-card {
          display: flex;
          padding: 30px 32px;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--surface);
          box-shadow: 0 14px 40px rgba(29, 28, 20, 0.06);
        }

        .announcement-copy {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .announcement-icon {
          display: inline-flex;
          width: 68px;
          height: 68px;
          flex: 0 0 68px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(185, 150, 75, 0.4);
          border-radius: 50%;
          color: var(--gold);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .announcement-copy .section-kicker {
          margin-bottom: 6px;
        }

        .announcement-copy h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 560;
          letter-spacing: -0.02em;
        }

        .announcement-copy p:last-child {
          max-width: 680px;
          margin: 7px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .announcement-actions {
          display: flex;
          flex: 0 0 auto;
          gap: 10px;
        }

        .announcement-actions .button {
          min-height: 46px;
          padding: 0 20px;
          font-size: 12px;
        }

        .section {
          padding: 120px 0;
        }

        .section-heading {
          display: grid;
          margin-bottom: 60px;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.65fr);
          align-items: end;
          gap: 70px;
        }

        .section-heading-wide {
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.75fr);
        }

        .section-heading h2,
        .audience-heading h2,
        .workforce-copy h2,
        .partner-copy h2,
        .technology-copy h2,
        .faq-heading h2 {
          margin: 0;
          font-size: clamp(40px, 5vw, 67px);
          font-weight: 450;
          letter-spacing: -0.05em;
          line-height: 1.04;
        }

        .section-heading h2 span,
        .audience-heading h2 span,
        .workforce-copy h2 span,
        .partner-copy h2 span,
        .faq-heading h2 span {
          color: var(--sage-dark);
        }

        .section-intro,
        .section-heading-copy p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .section-heading-copy {
          display: grid;
          gap: 20px;
        }

        .theory-section {
          background: var(--background);
        }

        .theory-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(350px, 0.72fr);
          gap: 38px;
        }

        .theory-image-wrap {
          position: relative;
          min-height: 650px;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .theory-image-wrap > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-note {
          position: absolute;
          right: 22px;
          bottom: 22px;
          left: 22px;
          display: flex;
          padding: 22px;
          align-items: center;
          gap: 18px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          background: rgba(23, 24, 18, 0.74);
          color: #ffffff;
          backdrop-filter: blur(14px);
        }

        .image-note-number {
          display: inline-flex;
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(219, 196, 139, 0.4);
          border-radius: 50%;
          color: var(--gold-light);
          font-size: 12px;
        }

        .image-note p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 13px;
        }

        .theory-statements {
          display: grid;
          gap: 18px;
        }

        .theory-statements article {
          padding: 30px;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: rgba(255, 253, 248, 0.74);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .theory-statements article:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(29, 28, 20, 0.08);
        }

        .theory-statements article > span {
          display: block;
          margin-bottom: 20px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .theory-statements h3 {
          margin: 0;
          font-size: 25px;
          font-weight: 520;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        .theory-statements p {
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .feature-quote {
          position: relative;
          display: grid;
          max-width: 940px;
          margin: 100px auto 0;
          padding: 0 60px;
          text-align: center;
        }

        .quote-mark {
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 100px;
          line-height: 0.5;
        }

        .feature-quote p {
          margin: 25px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(29px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.2;
        }

        .feature-quote footer {
          color: var(--muted);
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .pathway-strip {
          padding: 32px 0;
          background: var(--sage-dark);
          color: #ffffff;
        }

        .pathway-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .pathway-strip-item {
          display: flex;
          align-items: center;
          gap: 13px;
          color: rgba(255, 255, 255, 0.66);
        }

        .pathway-strip-item span {
          color: var(--gold-light);
          font-size: 10px;
        }

        .pathway-strip-item strong {
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .pathway-strip-item svg {
          width: 15px;
          color: rgba(255, 255, 255, 0.28);
        }

        .ecosystem-section {
          background: var(--surface);
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .service-card {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--background);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .service-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow);
        }

        .service-image-wrap {
          position: relative;
          height: 245px;
          overflow: hidden;
        }

        .service-image-wrap::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 40%,
            rgba(18, 20, 15, 0.42)
          );
          content: "";
        }

        .service-image-wrap img {
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .service-card:hover .service-image-wrap img {
          transform: scale(1.04);
        }

        .service-number {
          position: absolute;
          z-index: 2;
          right: 17px;
          bottom: 15px;
          display: inline-flex;
          width: 45px;
          height: 45px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          background: rgba(18, 20, 15, 0.48);
          color: #ffffff;
          font-size: 11px;
          backdrop-filter: blur(10px);
        }

        .service-card-content {
          padding: 27px;
        }

        .service-card-content h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 520;
          letter-spacing: -0.03em;
        }

        .service-card-content p {
          min-height: 92px;
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .service-link {
          display: flex;
          margin-top: 24px;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
          padding-top: 18px;
          color: var(--sage-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .audience-section {
          background: var(--background);
        }

        .audience-visual {
          display: grid;
          margin-bottom: 90px;
          grid-template-columns: minmax(0, 1.65fr) minmax(260px, 0.5fr);
          gap: 20px;
        }

        .audience-main-image,
        .audience-side-image {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .audience-main-image {
          min-height: 520px;
        }

        .audience-side-image {
          min-height: 520px;
        }

        .audience-main-image > img,
        .audience-side-image > img {
          height: 100%;
          object-fit: cover;
        }

        .audience-image-caption {
          position: absolute;
          right: 28px;
          bottom: 28px;
          left: 28px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.21);
          border-radius: 18px;
          background: rgba(20, 21, 17, 0.69);
          color: #ffffff;
          backdrop-filter: blur(14px);
        }

        .audience-image-caption p {
          margin: 0 0 8px;
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .audience-image-caption strong {
          display: block;
          max-width: 650px;
          font-size: 19px;
          font-weight: 480;
          letter-spacing: -0.02em;
          line-height: 1.45;
        }

        .audience-heading {
          display: grid;
          margin-bottom: 55px;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.55fr);
          align-items: end;
          gap: 70px;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .audience-card {
          min-height: 275px;
          padding: 28px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: rgba(255, 253, 248, 0.55);
        }

        .audience-card > span {
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
        }

        .audience-card h3 {
          margin: 54px 0 0;
          font-size: 24px;
          font-weight: 520;
          letter-spacing: -0.03em;
        }

        .audience-card p {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .centered-actions {
          display: flex;
          margin-top: 45px;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .journey-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #1d251e;
          color: #ffffff;
        }

        .journey-section::before {
          position: absolute;
          top: -280px;
          right: -180px;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: rgba(121, 102, 172, 0.12);
          filter: blur(100px);
          content: "";
        }

        .journey-header {
          position: relative;
          max-width: 900px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .journey-header .section-kicker {
          justify-content: center;
        }

        .journey-header h2 {
          margin: 0;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 440;
          letter-spacing: -0.05em;
          line-height: 1.05;
        }

        .journey-header h2 span {
          display: block;
          color: var(--gold-light);
        }

        .journey-header > p:last-child {
          max-width: 740px;
          margin: 28px auto 0;
          color: rgba(255, 255, 255, 0.63);
          font-size: 16px;
          line-height: 1.8;
        }

        .journey-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-left: 1px solid rgba(255, 255, 255, 0.12);
        }

        .journey-card {
          min-height: 280px;
          padding: 26px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .journey-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .journey-card-top span {
          color: var(--gold-light);
          font-size: 10px;
        }

        .journey-card-top svg {
          width: 16px;
          color: rgba(255, 255, 255, 0.22);
        }

        .journey-card h3 {
          margin: 75px 0 0;
          font-size: 23px;
          font-weight: 500;
        }

        .journey-card p {
          margin: 13px 0 0;
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
          line-height: 1.7;
        }

        .journey-story {
          position: relative;
          display: grid;
          margin-top: 70px;
          grid-template-columns: minmax(0, 1.08fr) minmax(370px, 0.75fr);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.035);
        }

        .journey-story-image {
          min-height: 560px;
        }

        .journey-story-image img {
          height: 100%;
          object-fit: cover;
        }

        .journey-story-copy {
          display: flex;
          padding: 55px;
          flex-direction: column;
          justify-content: center;
        }

        .journey-story-copy h3 {
          margin: 0;
          font-size: clamp(31px, 4vw, 48px);
          font-weight: 440;
          letter-spacing: -0.04em;
          line-height: 1.12;
        }

        .journey-story-copy ul {
          display: grid;
          margin: 35px 0 0;
          padding: 0;
          gap: 15px;
          list-style: none;
        }

        .journey-story-copy li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .journey-story-copy li svg {
          flex: 0 0 18px;
          color: var(--gold-light);
        }

        .workforce-section {
          background: var(--surface);
        }

        .workforce-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(430px, 1fr);
          align-items: center;
          gap: 85px;
        }

        .workforce-lead {
          margin: 28px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .role-grid {
          display: grid;
          margin: 35px 0;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
        }

        .role-grid span,
        .technology-features span,
        .partner-items span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--muted);
          font-size: 13px;
        }

        .role-grid svg,
        .partner-items svg {
          flex: 0 0 17px;
          color: var(--gold);
        }

        .workforce-note {
          margin-bottom: 30px;
          border-left: 2px solid var(--gold);
          padding-left: 18px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .workforce-images {
          position: relative;
          min-height: 710px;
        }

        .workforce-image-large,
        .workforce-image-small {
          position: absolute;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .workforce-image-large {
          inset: 0 80px 110px 0;
        }

        .workforce-image-small {
          right: 0;
          bottom: 10px;
          width: 48%;
          height: 280px;
          border: 10px solid var(--surface);
        }

        .workforce-image-large img,
        .workforce-image-small img {
          height: 100%;
          object-fit: cover;
        }

        .workforce-progress-card {
          position: absolute;
          bottom: 35px;
          left: -45px;
          width: 285px;
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: rgba(255, 253, 248, 0.94);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
        }

        .workforce-progress-card > p {
          margin: 0 0 18px;
          color: var(--gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .workforce-progress-card > div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .workforce-progress-card span {
          font-size: 11px;
          font-weight: 600;
        }

        .workforce-progress-card svg {
          width: 12px;
          color: var(--gold);
        }

        .partner-section {
          background: var(--background);
        }

        .partner-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(420px, 0.78fr);
          align-items: start;
          gap: 80px;
        }

        .partner-copy > p:not(.section-kicker) {
          margin: 28px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
        }

        .partner-items {
          display: grid;
          margin: 36px 0;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .partner-photo {
          height: 280px;
          overflow: hidden;
          border-radius: var(--radius-md);
        }

        .partner-photo img {
          height: 100%;
          object-fit: cover;
        }

        .form-card,
        .launch-form-card {
          padding: 38px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .form-heading > p {
          margin: 0 0 9px;
          color: var(--gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .form-heading h3 {
          margin: 0;
          font-size: 31px;
          font-weight: 500;
          letter-spacing: -0.035em;
        }

        .form-heading > span {
          display: block;
          margin-top: 10px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.65;
        }

        form {
          display: grid;
          margin-top: 30px;
          gap: 17px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        label {
          display: grid;
          gap: 8px;
          color: #4e5148;
          font-size: 11px;
          font-weight: 650;
          letter-spacing: 0.02em;
        }

        input,
        textarea,
        select {
          width: 100%;
          border: 1px solid rgba(23, 24, 18, 0.14);
          border-radius: 12px;
          outline: none;
          background: #fbfaf5;
          color: var(--ink);
          font-size: 14px;
          font-weight: 450;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        input,
        select {
          min-height: 50px;
          padding: 0 15px;
        }

        textarea {
          min-height: 120px;
          padding: 14px 15px;
          resize: vertical;
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(185, 150, 75, 0.12);
        }

        input::placeholder,
        textarea::placeholder {
          color: #a3a49c;
        }

        .form-privacy {
          margin: 0;
          color: #8a8c83;
          font-size: 10px;
          line-height: 1.6;
          text-align: center;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          font-weight: 450;
          line-height: 1.55;
        }

        .checkbox-label input {
          width: 17px;
          min-height: 17px;
          flex: 0 0 17px;
          margin-top: 2px;
          accent-color: var(--gold);
        }

        .form-success {
          display: flex;
          min-height: 470px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }

        .form-success > span {
          display: inline-flex;
          width: 65px;
          height: 65px;
          margin-bottom: 25px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(119, 135, 118, 0.14);
          color: var(--sage-dark);
        }

        .form-success > span svg {
          width: 27px;
          height: 27px;
        }

        .form-success h3 {
          margin: 0;
          font-size: 33px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .form-success > p:not(.section-kicker) {
          max-width: 420px;
          margin: 14px 0 28px;
          color: var(--muted);
        }

        .technology-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #18171d;
          color: #ffffff;
        }

        .technology-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .technology-glow-one {
          top: -260px;
          left: -200px;
          width: 650px;
          height: 650px;
          background: rgba(121, 102, 172, 0.22);
        }

        .technology-glow-two {
          right: -260px;
          bottom: -310px;
          width: 720px;
          height: 720px;
          background: rgba(185, 150, 75, 0.13);
        }

        .technology-layout {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(430px, 0.8fr);
          align-items: center;
          gap: 90px;
        }

        .technology-copy h2 span {
          color: var(--purple-light);
        }

        .technology-copy > p:not(.section-kicker) {
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 16px;
          line-height: 1.8;
        }

        .technology-copy blockquote {
          margin: 34px 0;
          border-left: 2px solid var(--purple-light);
          padding: 6px 0 6px 20px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          line-height: 1.5;
        }

        .technology-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .technology-features span {
          color: rgba(255, 255, 255, 0.63);
        }

        .technology-features svg {
          color: var(--purple-light);
        }

        .aura-preview {
          position: relative;
        }

        .aura-window {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 28px;
          background: rgba(32, 30, 39, 0.84);
          box-shadow:
            0 45px 100px rgba(0, 0, 0, 0.32),
            0 0 80px rgba(121, 102, 172, 0.14);
          backdrop-filter: blur(18px);
        }

        .aura-window-header {
          display: flex;
          padding: 21px 22px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .aura-identity,
        .chat-identity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .aura-orb,
        .chat-orb,
        .chat-launcher-orb {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(219, 196, 139, 0.45);
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, #dfcfef, #7966ac 45%, #24202f);
          box-shadow: 0 0 25px rgba(121, 102, 172, 0.38);
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: 17px;
        }

        .aura-identity strong,
        .chat-identity strong {
          display: block;
          font-size: 13px;
          font-weight: 600;
        }

        .aura-identity small,
        .chat-identity small {
          display: flex;
          margin-top: 3px;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.46);
          font-size: 9px;
        }

        .aura-identity small span,
        .chat-identity small span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9fc794;
        }

        .aura-powered {
          color: rgba(255, 255, 255, 0.36);
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .aura-window-body {
          display: grid;
          min-height: 370px;
          padding: 28px 22px;
          align-content: start;
          gap: 11px;
        }

        .aura-message {
          max-width: 82%;
          margin-bottom: 17px;
          border-radius: 6px 17px 17px 17px;
          padding: 15px 16px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 12px;
          line-height: 1.65;
        }

        .aura-option {
          border: 1px solid rgba(180, 165, 221, 0.25);
          border-radius: 13px;
          padding: 13px 14px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 11px;
        }

        .aura-window-input {
          display: flex;
          margin: 0 16px 16px;
          min-height: 52px;
          padding: 0 7px 0 16px;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.33);
          font-size: 11px;
        }

        .aura-window-input button {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 12px;
          background: var(--purple);
          color: #ffffff;
        }

        .aura-preview-label {
          display: flex;
          margin-top: 17px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
        }

        .aura-preview-label span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9fc794;
        }

        .impact-section {
          background: var(--surface);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .impact-grid article {
          display: flex;
          min-height: 170px;
          padding: 24px 18px;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .impact-grid strong {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .impact-grid span {
          color: var(--muted);
          font-size: 11px;
          font-weight: 650;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .impact-image-band {
          position: relative;
          height: 500px;
          margin-top: 60px;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .impact-image-band > img {
          height: 100%;
          object-fit: cover;
        }

        .impact-image-band::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(19, 21, 16, 0.82),
            rgba(19, 21, 16, 0.12)
          );
          content: "";
        }

        .impact-band-content {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 55px;
          max-width: 620px;
          transform: translateY(-50%);
          color: #ffffff;
        }

        .impact-band-content p {
          margin: 0 0 17px;
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .impact-band-content h3 {
          margin: 0;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 430;
          letter-spacing: -0.05em;
          line-height: 1.08;
        }

        .launch-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #22291f;
          color: #ffffff;
        }

        .launch-section::before {
          position: absolute;
          top: -350px;
          right: -250px;
          width: 850px;
          height: 850px;
          border-radius: 50%;
          background: rgba(185, 150, 75, 0.1);
          filter: blur(110px);
          content: "";
        }

        .launch-layout {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(420px, 0.68fr);
          align-items: start;
          gap: 90px;
        }

        .launch-copy h2 {
          margin: 0;
          font-size: clamp(43px, 5vw, 68px);
          font-weight: 430;
          letter-spacing: -0.05em;
          line-height: 1.05;
        }

        .launch-copy > p:not(.section-kicker) {
          max-width: 650px;
          margin: 27px 0 0;
          color: rgba(255, 255, 255, 0.61);
          font-size: 16px;
          line-height: 1.8;
        }

        .launch-paths {
          display: grid;
          margin-top: 50px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .launch-paths article {
          display: flex;
          min-height: 170px;
          padding: 23px;
          align-items: flex-start;
          gap: 15px;
          border-right: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .launch-paths article > span {
          margin-top: 3px;
          color: var(--gold-light);
          font-size: 9px;
        }

        .launch-paths h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 520;
        }

        .launch-paths p {
          margin: 9px 0 0;
          color: rgba(255, 255, 255, 0.49);
          font-size: 12px;
          line-height: 1.65;
        }

        .launch-form-card {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.055);
          box-shadow: 0 35px 85px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(16px);
        }

        .launch-form-card .form-heading h3 {
          color: #ffffff;
        }

        .launch-form-card .form-heading > span {
          color: rgba(255, 255, 255, 0.5);
        }

        .launch-form-card label {
          color: rgba(255, 255, 255, 0.65);
        }

        .launch-form-card input,
        .launch-form-card textarea,
        .launch-form-card select {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .launch-form-card input::placeholder,
        .launch-form-card textarea::placeholder {
          color: rgba(255, 255, 255, 0.28);
        }

        .launch-form-card select option {
          color: var(--ink);
        }

        .form-success-dark h3 {
          color: #ffffff;
        }

        .form-success-dark > p:not(.section-kicker) {
          color: rgba(255, 255, 255, 0.58);
        }

        .form-success-dark > span {
          background: rgba(219, 196, 139, 0.12);
          color: var(--gold-light);
        }

        .faq-section {
          background: var(--background);
        }

        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.68fr) minmax(450px, 1fr);
          align-items: start;
          gap: 100px;
        }

        .faq-heading {
          position: sticky;
          top: 130px;
        }

        .faq-heading > p:not(.section-kicker) {
          margin: 26px 0 30px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .faq-list {
          border-top: 1px solid var(--border);
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
        }

        .faq-item > button {
          display: flex;
          width: 100%;
          min-height: 95px;
          padding: 0;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border: 0;
          background: transparent;
          cursor: pointer;
          text-align: left;
        }

        .faq-item > button > span:first-child {
          font-size: 20px;
          font-weight: 520;
          letter-spacing: -0.02em;
        }

        .faq-plus {
          display: inline-flex;
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--gold);
          font-size: 22px;
          font-weight: 300;
        }

        .faq-item > p {
          max-width: 720px;
          margin: -4px 0 28px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .responsibility-section {
          padding: 70px 0;
          border-top: 1px solid var(--border);
          background: var(--surface-alt);
        }

        .responsibility-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.34fr) minmax(0, 1fr);
          gap: 90px;
        }

        .responsibility-layout h2 {
          max-width: 750px;
          margin: 0 0 22px;
          font-size: 34px;
          font-weight: 480;
          letter-spacing: -0.04em;
          line-height: 1.2;
        }

        .responsibility-layout div p {
          max-width: 860px;
          margin: 0 0 14px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .site-footer {
          padding: 80px 0 30px;
          background: #151612;
          color: #ffffff;
        }

        .footer-top {
          display: grid;
          grid-template-columns: minmax(280px, 1.35fr) repeat(
              3,
              minmax(130px, 0.45fr)
            );
          gap: 55px;
        }

        .brand-footer {
          display: inline-flex;
        }

        .footer-brand > p {
          max-width: 380px;
          margin: 25px 0;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13px;
          line-height: 1.7;
        }

        .footer-launch {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 650;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-launch > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9fc794;
          box-shadow: 0 0 0 6px rgba(159, 199, 148, 0.08);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-column strong {
          margin-bottom: 9px;
          color: var(--gold-light);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .footer-column a {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          transition: color 180ms ease;
        }

        .footer-column a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          display: flex;
          margin-top: 65px;
          padding-top: 25px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.32);
          font-size: 9px;
          line-height: 1.6;
        }

        .footer-bottom p {
          margin: 0;
        }

        .footer-bottom p:last-child {
          max-width: 650px;
          text-align: right;
        }

        .chat-widget {
          position: fixed;
          z-index: 200;
          bottom: 22px;
          left: 22px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 12px;
        }

        .chat-launcher {
          display: flex;
          min-width: 210px;
          min-height: 62px;
          padding: 8px 16px 8px 9px;
          align-items: center;
          gap: 11px;
          border: 1px solid rgba(219, 196, 139, 0.35);
          border-radius: 999px;
          background: rgba(24, 23, 29, 0.94);
          box-shadow:
            0 20px 55px rgba(0, 0, 0, 0.25),
            0 0 35px rgba(121, 102, 172, 0.18);
          color: #ffffff;
          cursor: pointer;
          backdrop-filter: blur(18px);
        }

        .chat-launcher-orb {
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
        }

        .chat-launcher-copy {
          display: flex;
          flex: 1;
          align-items: flex-start;
          flex-direction: column;
        }

        .chat-launcher-copy strong {
          font-size: 12px;
          font-weight: 600;
        }

        .chat-launcher-copy small {
          margin-top: 2px;
          color: rgba(255, 255, 255, 0.47);
          font-size: 9px;
        }

        .chat-status {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9fc794;
          box-shadow: 0 0 0 6px rgba(159, 199, 148, 0.08);
        }

        .chat-panel {
          display: flex;
          width: min(390px, calc(100vw - 44px));
          height: min(610px, calc(100vh - 110px));
          overflow: hidden;
          flex-direction: column;
          border: 1px solid rgba(219, 196, 139, 0.25);
          border-radius: 25px;
          background: #1d1b23;
          box-shadow:
            0 40px 90px rgba(0, 0, 0, 0.35),
            0 0 60px rgba(121, 102, 172, 0.18);
          color: #ffffff;
        }

        .chat-header {
          display: flex;
          padding: 16px 18px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .chat-header > button {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          font-size: 21px;
        }

        .chat-messages {
          display: flex;
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          flex-direction: column;
          gap: 12px;
        }

        .chat-message {
          max-width: 84%;
          padding: 12px 14px;
          font-size: 12px;
          line-height: 1.65;
        }

        .chat-message-assistant {
          align-self: flex-start;
          border-radius: 5px 16px 16px 16px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.77);
        }

        .chat-message-user {
          align-self: flex-end;
          border-radius: 16px 5px 16px 16px;
          background: var(--purple);
          color: #ffffff;
        }

        .chat-suggestions {
          display: grid;
          margin-top: 4px;
          gap: 8px;
        }

        .chat-suggestions button {
          padding: 10px 12px;
          border: 1px solid rgba(180, 165, 221, 0.25);
          border-radius: 12px;
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          font-size: 10px;
          text-align: left;
        }

        .chat-input {
          display: flex;
          margin: 0;
          padding: 12px;
          flex-direction: row;
          gap: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chat-input input {
          min-height: 45px;
          flex: 1;
          border-color: rgba(255, 255, 255, 0.11);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .chat-input button {
          display: inline-flex;
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 12px;
          background: var(--purple);
          color: #ffffff;
          cursor: pointer;
        }

        .chat-disclaimer {
          margin: 0;
          padding: 0 14px 12px;
          color: rgba(255, 255, 255, 0.27);
          font-size: 8px;
          text-align: center;
        }

        @media (max-width: 1120px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: inline-flex;
          }

          .hero-content {
            grid-template-columns: minmax(0, 1fr) 280px;
            gap: 45px;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .audience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .journey-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .impact-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .workforce-layout,
          .partner-layout,
          .technology-layout,
          .launch-layout {
            gap: 50px;
          }

          .footer-top {
            grid-template-columns: 1.2fr repeat(3, 0.6fr);
            gap: 30px;
          }
        }

        @media (max-width: 900px) {
          .page-shell {
            width: min(100% - 34px, 1180px);
          }

          .desktop-only {
            display: none;
          }

          .hero {
            min-height: 920px;
          }

          .hero-content {
            padding-top: 155px;
            grid-template-columns: 1fr;
            align-items: center;
          }

          .launch-card {
            width: min(100%, 460px);
          }

          .announcement-card,
          .announcement-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .announcement-actions {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .section {
            padding: 90px 0;
          }

          .section-heading,
          .section-heading-wide,
          .audience-heading {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .theory-layout,
          .workforce-layout,
          .partner-layout,
          .technology-layout,
          .launch-layout,
          .faq-layout {
            grid-template-columns: 1fr;
          }

          .theory-image-wrap {
            min-height: 520px;
          }

          .pathway-strip-inner {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 4px;
          }

          .pathway-strip-item {
            flex: 0 0 auto;
          }

          .audience-visual {
            grid-template-columns: 1fr;
          }

          .audience-side-image {
            display: none;
          }

          .journey-story {
            grid-template-columns: 1fr;
          }

          .journey-story-image {
            min-height: 440px;
          }

          .workforce-images {
            min-height: 650px;
          }

          .workforce-progress-card {
            left: 20px;
          }

          .partner-layout,
          .technology-layout,
          .launch-layout {
            gap: 65px;
          }

          .faq-heading {
            position: static;
          }

          .responsibility-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 680px) {
          .nav-shell {
            width: calc(100% - 28px);
            min-height: 72px;
          }

          .brand-copy strong {
            font-size: 11px;
          }

          .brand-copy small {
            font-size: 7px;
          }

          .nav-actions .button-small {
            display: none;
          }

          .hero {
            min-height: 900px;
          }

          .hero-content {
            padding-top: 130px;
            padding-bottom: 110px;
          }

          .hero h1 {
            font-size: clamp(46px, 14vw, 69px);
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-buttons {
            display: grid;
          }

          .hero-buttons .button {
            width: 100%;
          }

          .launch-card {
            padding: 25px;
          }

          .scroll-indicator {
            display: none;
          }

          .announcement-section {
            padding: 18px 0;
          }

          .announcement-card {
            padding: 24px;
          }

          .announcement-copy {
            align-items: flex-start;
            flex-direction: column;
          }

          .announcement-actions {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 75px 0;
          }

          .section-heading {
            margin-bottom: 42px;
          }

          .section-heading h2,
          .audience-heading h2,
          .workforce-copy h2,
          .partner-copy h2,
          .technology-copy h2,
          .faq-heading h2 {
            font-size: 42px;
          }

          .theory-image-wrap {
            min-height: 450px;
          }

          .image-note {
            right: 14px;
            bottom: 14px;
            left: 14px;
            padding: 17px;
          }

          .feature-quote {
            margin-top: 70px;
            padding: 0;
          }

          .service-grid,
          .audience-grid,
          .journey-grid,
          .impact-grid {
            grid-template-columns: 1fr;
          }

          .service-card-content p {
            min-height: auto;
          }

          .audience-main-image {
            min-height: 470px;
          }

          .audience-image-caption {
            right: 15px;
            bottom: 15px;
            left: 15px;
          }

          .journey-section,
          .technology-section,
          .launch-section {
            padding: 80px 0;
          }

          .journey-card {
            min-height: 220px;
          }

          .journey-card h3 {
            margin-top: 44px;
          }

          .journey-story-image {
            min-height: 350px;
          }

          .journey-story-copy {
            padding: 34px 25px;
          }

          .role-grid,
          .partner-items,
          .technology-features,
          .launch-paths {
            grid-template-columns: 1fr;
          }

          .workforce-images {
            min-height: 560px;
          }

          .workforce-image-large {
            inset: 0 0 100px;
          }

          .workforce-image-small {
            right: -3px;
            width: 55%;
            height: 210px;
          }

          .workforce-progress-card {
            bottom: 25px;
            left: 12px;
            width: 250px;
          }

          .form-card,
          .launch-form-card {
            padding: 26px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .impact-image-band {
            height: 470px;
          }

          .impact-band-content {
            right: 25px;
            left: 25px;
          }

          .faq-item > button > span:first-child {
            font-size: 17px;
          }

          .footer-top {
            grid-template-columns: 1fr 1fr;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer-bottom p:last-child {
            text-align: left;
          }

          .chat-widget {
            right: 14px;
            bottom: 14px;
            left: 14px;
            align-items: flex-start;
          }

          .chat-launcher {
            min-width: 0;
          }

          .chat-panel {
            width: 100%;
            height: min(620px, calc(100vh - 100px));
          }
        }

        @media (max-width: 430px) {
          .page-shell {
            width: calc(100% - 26px);
          }

          .hero h1 {
            font-size: 46px;
          }

          .hero-trust {
            font-size: 12px;
          }

          .section-heading h2,
          .audience-heading h2,
          .workforce-copy h2,
          .partner-copy h2,
          .technology-copy h2,
          .faq-heading h2 {
            font-size: 37px;
          }

          .footer-top {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: auto;
          }

          .chat-launcher-copy {
            display: none;
          }

          .chat-launcher {
            min-width: 62px;
            width: 62px;
            padding: 8px;
            border-radius: 50%;
          }

          .chat-status {
            position: absolute;
            top: 5px;
            right: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}
