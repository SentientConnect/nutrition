'use client'

import { type FormEvent, useState } from 'react'

type ChatMessage = {
  role: 'assistant' | 'user'
  text: string
}

const services = [
  {
    number: '01',
    title: 'Recovery Meal Plans',
    description:
      'Practical meal planning for detox facilities, treatment centers, recovery residences, families, and individuals continuing forward after discharge.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '02',
    title: 'Ingredient Supply',
    description:
      'Reliable access to quality ingredients supporting affordable, repeatable, whole-food meal preparation.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '03',
    title: 'Cooking Classes',
    description:
      'Hands-on classes delivered inside treatment centers, sober-living communities, transitional settings, and community kitchens.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '04',
    title: 'Educational Courses',
    description:
      'Education covering cooking, nutrition, food safety, budgeting, meal preparation, routine, and practical independence.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '05',
    title: 'Packing and Delivery',
    description:
      'Meal preparation, packaging, labeling, inventory, fulfillment, route coordination, and regional delivery support.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '06',
    title: 'Employment Pathways',
    description:
      'Opportunities in cooking, teaching, inventory, packing, fulfillment, logistics, delivery, outreach, and peer leadership.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
  },
]

const audiences = [
  {
    title: 'Detox Facilities',
    description:
      'Nutritious meal support, ingredient planning, practical education, and transition coordination during early stabilization.',
  },
  {
    title: 'Treatment and Rehabilitation',
    description:
      'Cooking classes, nutrition education, skill development, workforce exposure, and discharge continuity.',
  },
  {
    title: 'Sober-Living Communities',
    description:
      'Household meal planning, ingredient access, group classes, budgeting, routine development, and employment connections.',
  },
  {
    title: 'After Discharge',
    description:
      'Continued education, meal resources, community connection, workforce training, and a practical next step into life.',
  },
]

const workforceRoles = [
  'Kitchen preparation',
  'Cooking',
  'Food safety',
  'Ingredient receiving',
  'Inventory management',
  'Meal packaging',
  'Order fulfillment',
  'Route preparation',
  'Delivery coordination',
  'Teaching assistance',
  'Community outreach',
  'Peer leadership',
]

const partnershipOptions = [
  'Facility cooking classes',
  'Nutrition education',
  'Meal-plan development',
  'Ingredient sourcing',
  'Prepared meal delivery',
  'Discharge continuity',
  'Resident workshops',
  'Workforce referrals',
  'Sponsored participant access',
  'Regional distribution',
  'Program reporting',
  'Community events',
]

const faqs = [
  {
    question: 'What is Sentient Nutrition®?',
    answer:
      'Sentient Nutrition® is a developing nonprofit recovery-support initiative connecting nutritious meals, practical education, cooking classes, ingredient access, logistics, workforce development, and continued support after treatment.',
  },
  {
    question: 'Is Sentient Nutrition® a treatment provider?',
    answer:
      'No. Sentient Nutrition® is being developed as a complementary recovery-support resource. It will not replace medical care, counseling, medication, licensed treatment, or professional nutrition services.',
  },
  {
    question: 'Who will be able to participate?',
    answer:
      'The model is being designed for detox facilities, treatment centers, recovery residences, people continuing recovery after discharge, families, employers, funders, and community partners.',
  },
  {
    question: 'Will prepared meals be delivered?',
    answer:
      'Prepared meals, ingredient supply, partner pickup locations, facility distribution, and regional delivery are all part of the planned model. Availability will depend on location, funding, kitchen capacity, and partnerships.',
  },
  {
    question: 'Will employment opportunities be available?',
    answer:
      'Sentient Nutrition® intends to develop supervised training and employment pathways in cooking, packing, inventory, logistics, delivery, teaching, outreach, and leadership.',
  },
  {
    question: 'When will Sentient Nutrition® launch?',
    answer:
      'The initial nonprofit launch is planned for January 2027. Founding partnerships, kitchen resources, logistics, educational programming, and workforce pathways are being developed now.',
  },
]

const suggestedQuestions = [
  'What is Sentient Nutrition?',
  'How can our facility partner?',
  'What employment pathways are planned?',
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

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-logo ${footer ? 'brand-logo-footer' : ''}`}>
      <img
        src="/images/Sentient_Nutrition%20Logo.png"
        alt="Sentient Nutrition® — Powered by Sentient Connect®"
      />
    </span>
  )
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [partnerSubmitted, setPartnerSubmitted] = useState(false)
  const [launchSubmitted, setLaunchSubmitted] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Sentient Nutrition®. I’m AURA Genesis™. I can answer questions about our mission, planned services, facility partnerships, workforce pathways, and January 2027 launch.',
    },
  ])

  function answerQuestion(question: string) {
    const value = question.toLowerCase()

    if (
      value.includes('facility') ||
      value.includes('partner') ||
      value.includes('treatment') ||
      value.includes('rehab')
    ) {
      return 'Facilities will be able to explore cooking classes, nutrition education, meal planning, ingredient supply, discharge continuity, workforce referrals, and delivery partnerships. Complete the founding-partner form and the Sentient Nutrition® team will follow up.'
    }

    if (
      value.includes('employment') ||
      value.includes('job') ||
      value.includes('workforce') ||
      value.includes('work')
    ) {
      return 'Planned pathways include kitchen preparation, cooking, food safety, inventory, packaging, fulfillment, route support, delivery coordination, teaching assistance, outreach, and peer leadership.'
    }

    if (
      value.includes('launch') ||
      value.includes('january') ||
      value.includes('join')
    ) {
      return 'Sentient Nutrition® is planning its initial nonprofit launch for January 2027. Join the launch list for service, partnership, volunteer, employment, and funding updates.'
    }

    if (
      value.includes('meal') ||
      value.includes('food') ||
      value.includes('ingredient') ||
      value.includes('nutrition')
    ) {
      return 'The planned model includes recovery-conscious meal planning, ingredient sourcing, prepared meals, cooking education, facility distribution, and continued resources after discharge.'
    }

    if (
      value.includes('donate') ||
      value.includes('fund') ||
      value.includes('sponsor')
    ) {
      return 'Sentient Nutrition® is currently building its founding-partner and funder network. Join the launch list and choose donor or funder interest so the team can contact you.'
    }

    return 'Sentient Nutrition® is building recovery infrastructure around food, education, routine, useful skills, logistics, workforce development, and continuity after treatment.'
  }

  function sendChatMessage(question?: string) {
    const text = (question ?? chatInput).trim()

    if (!text) return

    setMessages((current) => [
      ...current,
      {
        role: 'user',
        text,
      },
      {
        role: 'assistant',
        text: answerQuestion(text),
      },
    ])

    setChatInput('')
  }

  function handlePartnerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPartnerSubmitted(true)
  }

  function handleLaunchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLaunchSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-shell">
          <a
            href="#top"
            className="header-logo-link"
            aria-label="Sentient Nutrition home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandLogo />
          </a>

          <nav className="desktop-navigation" aria-label="Main navigation">
            <a href="#theory">Our Theory</a>
            <a href="#ecosystem">What We’re Building</a>
            <a href="#audience">Who We Serve</a>
            <a href="#workforce">Workforce</a>
            <a href="#partners">Partner</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <a className="founding-link" href="#partners">
              Founding Partner
            </a>

            <a className="header-launch-button" href="#launch">
              Join the Launch
              <ArrowIcon />
            </a>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label={
                mobile className="mobile-menu-button"
              type="button"
              aria-label={
                mobileMenuOpen ? 'Close navigation' : 'Open navigation'
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-navigation" aria-label="Mobile navigation">
            <a href="#theory" onClick={() => setMobileMenuOpen(false)}>
              Our Theory
            </a>
            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>
              What We’re Building
            </a>
            <a href="#audience" onClick={() => setMobileMenuOpen(false)}>
              Who We Serve
            </a>
            <a href="#workforce" onClick={() => setMobileMenuOpen(false)}>
              Workforce
            </a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)}>
              Partner
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <a
              className="mobile-launch-link"
              href="#launch"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the January 2027 Launch
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <img
            className="hero-background"
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2400&q=90"
            alt="A person preparing a nutritious meal in a bright kitchen"
          />

          <div className="hero-side-overlay" />
          <div className="hero-bottom-overlay" />

          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                A new recovery nutrition nonprofit
              </p>

              <h1>
                Food can be more than a meal.
                <strong>It can become a path forward.</strong>
              </h1>

              <p className="hero-description">
                Sentient Nutrition® is building a recovery-support ecosystem
                connecting nutritious meals, practical education, cooking
                classes, ingredient access, logistics, employment, and
                continued support after treatment.
              </p>

              <div className="hero-buttons">
                <a className="button button-gold" href="#launch">
                  Join the Launch List
                  <ArrowIcon />
                </a>

                <a className="button button-glass" href="#theory">
                  Explore Our Approach
                </a>
              </div>

              <div className="hero-trust">
                <span>
                  <CheckIcon />
                </span>

                <p>
                  Built for treatment providers, recovery residences, families,
                  community partners, and people building their next chapter.
                </p>
              </div>
            </div>

            <aside className="hero-launch-card">
              <div className="development-status">
                <span />
                In development
              </div>

              <p className="launch-card-label">Nonprofit launch</p>
              <strong>JAN 2027</strong>

              <div className="launch-card-divider" />

              <p className="launch-card-description">
                Building partnerships, kitchen resources, educational
                programming, workforce pathways, and regional distribution now.
              </p>

              <a href="#partners">
                Become a founding partner
                <ArrowIcon />
              </a>
            </aside>
          </div>
        </section>

        <section className="announcement-section">
          <div className="wide-shell">
            <div className="announcement-card">
              <div>
                <p className="section-label">COMING SOON</p>
                <h2>Sentient Nutrition® is currently in development.</h2>
                <p>
                  We are building founding partnerships, developing program
                  standards, identifying kitchen and distribution resources,
                  and preparing for the January 2027 nonprofit launch.
                </p>
              </div>

              <div className="announcement-actions">
                <a className="button button-dark" href="#launch">
                  Join for Updates
                </a>

                <a className="button button-outline" href="#partners">
                  Discuss a Partnership
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="theory" className="section theory-section">
          <div className="wide-shell">
            <div className="section-heading">
              <div>
                <p className="section-label">OUR THEORY</p>

                <h2>
                  Recovery does not end
                  <span>when treatment ends.</span>
                </h2>
              </div>

              <div className="heading-description">
                <p>
                  A person may leave treatment with knowledge, hope, and a plan,
                  yet still return to familiar environments, financial
                  limitations, employment barriers, and routines that may not
                  support the life they are trying to build.
                </p>

                <p>
                  Sentient Nutrition® begins with a simple theory: better daily
                  inputs, useful skills, meaningful responsibility, and an
                  opportunity to contribute can create a stronger pathway
                  forward.
                </p>
              </div>
            </div>

            <div className="theory-grid">
              <div className="theory-image">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"
                  alt="Fresh ingredients prepared for a nutritious community meal"
                  loading="lazy"
                />

                <div className="image-caption">
                  <span>01</span>
                  <p>
                    Nutrition becomes the starting point. Skills,
                    responsibility, work, and leadership become the pathway.
                  </p>
                </div>
              </div>

              <div className="theory-cards">
                <article>
                  <span>Food</span>
                  <h3>A dependable daily input.</h3>
                  <p>
                    Practical meals and quality ingredients can establish
                    structure that continues beyond treatment.
                  </p>
                </article>

                <article>
                  <span>Cooking</span>
                  <h3>A transferable life skill.</h3>
                  <p>
                    Cooking develops capability, confidence, independence,
                    teamwork, planning, and responsibility.
                  </p>
                </article>

                <article>
                  <span>Work</span>
                  <h3>A route back into community.</h3>
                  <p>
                    Kitchens, packing, inventory, teaching, logistics, and
                    delivery can become real workforce pathways.
                  </p>
                </article>
              </div>
            </div>

            <blockquote className="mission-quote">
              <span>“</span>
              <p>
                A meal can provide relief today. A skill, a routine, and an
                opportunity can help build tomorrow.
              </p>
              <footer>The Sentient Nutrition® Theory</footer>
            </blockquote>
          </div>
        </section>

        <section className="pathway-banner">
          <div className="wide-shell pathway-row">
            {[
              'Nourishment',
              'Routine',
              'Skills',
              'Responsibility',
              'Employment',
              'Leadership',
            ].map((item, index) => (
              <div className="pathway-step" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                {index < 5 && <ArrowIcon />}
              </div>
            ))}
          </div>
        </section>

        <section id="ecosystem" className="section ecosystem-section">
          <div className="wide-shell">
            <div className="section-heading">
              <div>
                <p className="section-label">
                  THE SENTIENT NUTRITION ECOSYSTEM
                </p>

                <h2>
                  One connected model.
                  <span>Multiple paths into stability.</span>
                </h2>
              </div>

              <p className="heading-introduction">
                A meal opens the door. Education, practical skills, logistics,
                employment, and leadership turn that door into a pathway.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                    <span>{service.number}</span>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="service-footer">
                      <span>Part of the connected model</span>
                      <ArrowIcon />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="audience" className="section audience-section">
          <div className="wide-shell">
            <div className="audience-images">
              <div className="audience-main-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1900&q=90"
                  alt="Community partners collaborating around a table"
                  loading="lazy"
                />

                <div className="audience-image-caption">
                  <p>BUILT FOR THE CONTINUUM OF CARE</p>
                  <strong>
                    Support connecting facilities, residences, participants,
                    families, employers, and community partners.
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

            <div className="section-heading">
              <div>
                <p className="section-label">WHO WE SERVE</p>

                <h2>
                  Designed to strengthen
                  <span>the entire continuum of care.</span>
                </h2>
              </div>

              <p className="heading-introduction">
                Sentient Nutrition® is being designed to work alongside
                organizations, families, employers, and people already doing
                the difficult work of creating long-term change.
              </p>
            </div>

            <div className="audience-grid">
              {audiences.map((audience, index) => (
                <article key={audience.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workforce" className="section workforce-section">
          <div className="wide-shell workforce-grid">
            <div className="workforce-copy">
              <p className="section-label">WORKFORCE PATHWAY</p>

              <h2>
                Dignity grows when
                <span>responsibility becomes real.</span>
              </h2>

              <p className="workforce-description">
                Sentient Nutrition® will work toward creating supervised,
                measurable pathways that help qualified participants develop
                practical experience and move toward sustainable employment.
              </p>

              <div className="role-grid">
                {workforceRoles.map((role) => (
                  <span key={role}>
                    <CheckIcon />
                    {role}
                  </span>
                ))}
              </div>

              <p className="program-note">
                Employment, stipends, training placements, and role
                availability will depend on funding, partnerships, readiness,
                program requirements, and applicable laws.
              </p>

              <a className="button button-dark" href="#launch">
                Support the Workforce Pathway
                <ArrowIcon />
              </a>
            </div>

            <div className="workforce-visual">
              <div className="workforce-large-image">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1500&q=90"
                  alt="A professional culinary team working together"
                  loading="lazy"
                />
              </div>

              <div className="workforce-small-image">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1000&q=90"
                  alt="Prepared meals being organized and packaged"
                  loading="lazy"
                />
              </div>

              <div className="progress-card">
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
        </section>

        <section id="partners" className="section partner-section">
          <div className="wide-shell partner-grid">
            <div className="partner-copy">
              <p className="section-label">FACILITY PARTNERSHIPS</p>

              <h2>
                A practical partner for the work that happens
                <span>between appointments.</span>
              </h2>

              <p>
                Sentient Nutrition® is being designed for executive directors,
                clinical leaders, discharge planners, case managers, recovery
                residence operators, community organizations, employers, and
                funders.
              </p>

              <div className="partner-list">
                {partnershipOptions.map((option) => (
                  <span key={option}>
                    <CheckIcon />
                    {option}
                  </span>
                ))}
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

                  <form onSubmit={handlePartnerSubmit}>
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
                      <select name="organizationType" defaultValue="" required>
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
                        placeholder="Tell us about your organization and the partnership you would like to explore."
                        required
                      />
                    </label>

                    <button
                      className="button button-gold button-full"
                      type="submit"
                    >
                      Start a Partnership Conversation
                      <ArrowIcon />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="section-label">MESSAGE RECEIVED</p>
                  <h3>Thank you for starting the conversation.</h3>
                  <p>
                    Your organization has been added to the founding-partner
                    interest list for Sentient Nutrition®.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="aura-section">
          <div className="aura-glow aura-glow-left" />
          <div className="aura-glow aura-glow-right" />

          <div className="wide-shell aura-grid">
            <div className="aura-copy">
              <p className="section-label section-label-light">
                POWERED BY SENTIENT CONNECT®
              </p>

              <h2>
                Human support, strengthened by
                <span>thoughtful technology.</span>
              </h2>

              <p>
                AURA Genesis™ is designed to help coordinate education,
                questions, program navigation, partner communication,
                referrals, launch information, and future continuity through
                the Sentient Connect® ecosystem.
              </p>

              <blockquote>
                Technology should strengthen human connection—not replace it.
              </blockquote>
            </div>

            <div className="aura-preview">
              <div className="aura-preview-header">
                <div className="aura-identity">
                  <span className="aura-orb">A</span>

                  <div>
                    <strong>AURA Genesis™</strong>
                    <small>
                      <span />
                      Sentient Nutrition Guide
                    </small>
                  </div>
                </div>

                <p>SENTIENT CONNECT®</p>
              </div>

              <div className="aura-preview-body">
                <div className="aura-preview-message">
                  Welcome to Sentient Nutrition®. How can I help you understand
                  the mission?
                </div>

                {suggestedQuestions.slice(1).map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => {
                      setChatOpen(true)
                      sendChatMessage(question)
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>

              <button
                className="aura-preview-open"
                type="button"
                onClick={() => setChatOpen(true)}
              >
                Ask AURA Genesis™
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>

        <section id="launch" className="launch-section">
          <div className="wide-shell launch-grid">
            <div className="launch-copy">
              <p className="section-label section-label-light">
                COMING JANUARY 2027
              </p>

              <h2>
                We are building the kitchen, classroom, workforce, and
                distribution network now.
              </h2>

              <p>
                Sentient Nutrition® is identifying founding partners, treatment
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
                      Bring meal support, education, cooking classes, or
                      workforce pathways to your community.
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
                      Join for education, services, training, employment, and
                      launch updates.
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>
                  <div>
                    <h3>Funders and Donors</h3>
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

                  <form onSubmit={handleLaunchSubmit}>
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

                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>
                        I agree to receive launch and program updates from
                        Sentient Nutrition®.
                      </span>
                    </label>

                    <button
                      className="button button-gold button-full"
                      type="submit"
                    >
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
                  <p className="section-label section-label-light">
                    YOU’RE ON THE LIST
                  </p>
                  <h3>Welcome to the beginning.</h3>
                  <p>
                    We’ll keep you informed as Sentient Nutrition® moves toward
                    its January 2027 launch.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="wide-shell faq-grid">
            <div className="faq-heading">
              <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>

              <h2>
                Questions about
                <span>what we are building?</span>
              </h2>

              <p>
                AURA Genesis™ is available in the bottom-left corner to answer
                questions about the mission, partnerships, services, workforce
                model, and January 2027 launch.
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
                  <article className="faq-item" key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span>{isOpen ? '−' : '+'}</span>
                    </button>

                    {isOpen && <p>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wide-shell footer-grid">
          <div className="footer-brand">
            <BrandLogo footer />

            <p>
              Food, education, practical skills, logistics, employment, and
              continuity after treatment.
            </p>

            <span className="footer-launch-status">
              <span />
              Launching January 2027
            </span>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>
            <a href="#theory">Our Theory</a>
            <a href="#ecosystem">What We’re Building</a>
            <a href="#audience">Who We Serve</a>
            <a href="#workforce">Workforce Pathway</a>
          </div>

          <div className="footer-column">
            <strong>Participate</strong>
            <a href="#partners">Facility Partnerships</a>
            <a href="#launch">Join the Launch List</a>
            <a href="#launch">Volunteer Interest</a>
            <a href="#launch">Donor and Funder Interest</a>
          </div>

          <div className="footer-column">
            <strong>Information</strong>
            <a href="#faq">FAQ</a>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Accessibility</a>
            <a href="#top">Program Disclaimer</a>
          </div>
        </div>

        <div className="wide-shell footer-bottom">
          <p>© 2026–2027 Sentient Nutrition®. All rights reserved.</p>

          <p>
            Powered by Sentient Connect®. Program availability is subject to
            funding, partnerships, regulatory requirements, and operational
            readiness.
          </p>
        </div>
      </footer>

      <div className="aura-widget">
        {chatOpen && (
          <section
            className="aura-chat-panel"
            aria-label="AURA Genesis chat"
            aria-live="polite"
          >
            <header>
              <div className="aura-identity">
                <span className="aura-orb">A</span>

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
            </header>

            <div className="aura-chat-messages">
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
              className="aura-chat-input"
              onSubmit={(event) => {
                event.preventDefault()
                sendChatMessage()
              }}
            >
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask AURA Genesis™..."
                aria-label="Ask AURA Genesis a question"
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
          className="aura-launcher"
          type="button"
          aria-label={
            chatOpen ? 'Close AURA Genesis chat' : 'Open AURA Genesis chat'
          }
          onClick={() => setChatOpen((current) => !current)}
        >
          <span className="aura-orb">A</span>

          <span className="aura-launcher-copy">
            <strong>AURA Genesis™</strong>
            <small>Ask a question</small>
          </span>

          <span className="aura-online-indicator" />
        </button>
      </div>

      <style jsx global>{`
        :root {
          --edge-space: clamp(18px, 2.4vw, 44px);
          --background: #f6f3eb;
          --surface: #fffdf8;
          --surface-alt: #ece7da;
          --ink: #191a16;
          --muted: #66685f;
          --gold: #caa651;
          --gold-light: #e4ce91;
          --sage-dark: #425243;
          --purple: #7864ad;
          --purple-light: #b6a7e1;
          --border: rgba(25, 26, 22, 0.13);
          --radius-large: 32px;
          --radius-medium: 22px;
          --shadow: 0 30px 80px rgba(23, 24, 18, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 96px;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          background: var(--background);
          color: var(--ink);
          font-family:
            Inter, Manrope, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button {
          color: inherit;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }

        .wide-shell {
          width: calc(100% - (var(--edge-space) * 2));
          max-width: 1800px;
          margin: 0 auto;
        }

        .site-header {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 17, 0.94);
          backdrop-filter: blur(18px);
        }

        .header-shell {
          display: flex;
          width: calc(100% - (var(--edge-space) * 2));
          max-width: 1800px;
          min-height: 92px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .header-logo-link {
          display: block;
          width: 410px;
          height: 84px;
          flex: 0 0 410px;
        }

        .brand-logo {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .brand-logo img {
          position: absolute;
          top: -94px;
          left: -10px;
          width: 430px;
          max-width: none;
          height: auto;
          filter: brightness(1.15) contrast(1.7);
          mix-blend-mode: screen;
        }

        .brand-logo-footer {
          width: 430px;
          max-width: 100%;
          height: 100px;
        }

        .brand-logo-footer img {
          top: -86px;
          left: -8px;
          width: 450px;
        }

        .desktop-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 1.6vw, 30px);
        }

        .desktop-navigation a,
        .founding-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .desktop-navigation a:hover,
        .founding-link:hover {
          color: #ffffff;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .header-launch-button {
          display: inline-flex;
          min-height: 46px;
          padding: 0 23px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          background: var(--gold);
          color: #171812;
          font-size: 12px;
          font-weight: 750;
          white-space: nowrap;
        }

        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          padding: 0;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }

        .mobile-menu-button span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #ffffff;
        }

        .mobile-navigation {
          display: flex;
          padding: 14px 24px 28px;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #151611;
        }

        .mobile-navigation a {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.76);
          font-size: 14px;
        }

        .mobile-navigation .mobile-launch-link {
          margin-top: 18px;
          padding: 14px 18px;
          border: 0;
          border-radius: 999px;
          background: var(--gold);
          color: #171812;
          font-weight: 700;
          text-align: center;
        }

        .hero-section {
          position: relative;
          display: flex;
          min-height: 910px;
          align-items: center;
          overflow: hidden;
          background: #151611;
          color: #ffffff;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .hero-side-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(16, 18, 13, 0.94) 0%,
            rgba(16, 18, 13, 0.77) 18%,
            rgba(16, 18, 13, 0.28) 36%,
            rgba(16, 18, 13, 0.03) 51%,
            rgba(16, 18, 13, 0.08) 68%,
            rgba(16, 18, 13, 0.63) 87%,
            rgba(16, 18, 13, 0.88) 100%
          );
        }

        .hero-bottom-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(16, 18, 13, 0.07) 10%,
            rgba(16, 18, 13, 0.06) 55%,
            rgba(16, 18, 13, 0.84) 100%
          );
        }

        .hero-shell {
          position: relative;
          z-index: 3;
          display: grid;
          width: calc(100% - (var(--edge-space) * 2));
          max-width: 1800px;
          margin: 0 auto;
          padding-top: 145px;
          padding-bottom: 90px;
          grid-template-columns: minmax(510px, 660px) minmax(290px, 360px);
          align-items: end;
          justify-content: space-between;
          column-gap: clamp(180px, 25vw, 620px);
        }

        .hero-copy {
          width: 100%;
          max-width: 660px;
          justify-self: start;
        }

        .eyebrow,
        .section-label {
          display: flex;
          margin: 0 0 22px;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .eyebrow span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 0 6px rgba(228, 206, 145, 0.11);
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(58px, 5.6vw, 91px);
          font-weight: 440;
          letter-spacing: -0.062em;
          line-height: 0.99;
        }

        .hero-copy h1 strong {
          display: block;
          margin-top: 14px;
          color: var(--gold-light);
          font-weight: 430;
        }

        .hero-description {
          max-width: 625px;
          margin: 34px 0 0;
          color: rgba(255, 255, 255, 0.77);
          font-size: clamp(16px, 1.35vw, 20px);
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          margin-top: 36px;
          flex-wrap: wrap;
          gap: 13px;
        }

        .button {
          display: inline-flex;
          min-height: 52px;
          padding: 0 24px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-gold {
          background: linear-gradient(135deg, #cba854, #e5cf92);
          color: #171812;
          box-shadow: 0 18px 38px rgba(202, 166, 81, 0.22);
        }

        .button-glass {
          border-color: rgba(255, 255, 255, 0.34);
          background: rgba(18, 19, 16, 0.34);
          color: #ffffff;
          backdrop-filter: blur(12px);
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

        .button-full {
          width: 100%;
        }

        .hero-trust {
          display: flex;
          max-width: 630px;
          margin-top: 32px;
          align-items: flex-start;
          gap: 12px;
        }

        .hero-trust > span {
          display: inline-flex;
          width: 27px;
          height: 27px;
          flex: 0 0 27px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(228, 206, 145, 0.45);
          border-radius: 50%;
          color: var(--gold-light);
        }

        .hero-trust p {
          margin: 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 12px;
          line-height: 1.65;
        }

        .hero-launch-card {
          width: 100%;
          max-width: 350px;
          justify-self: end;
          padding: 31px;
          border: 1px solid rgba(255, 255, 255, 0.19);
          border-radius: 20px;
          background: rgba(26, 27, 24, 0.7);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(18px);
        }

        .development-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .development-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9fc393;
          box-shadow: 0 0 0 6px rgba(159, 195, 147, 0.12);
        }

        .launch-card-label {
          margin: 34px 0 7px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hero-launch-card > strong {
          display: block;
          color: var(--gold-light);
          font-size: 40px;
          font-weight: 540;
          letter-spacing: -0.04em;
        }

        .launch-card-divider {
          height: 1px;
          margin: 26px 0;
          background: rgba(255, 255, 255, 0.15);
        }

        .launch-card-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 12px;
          line-height: 1.75;
        }

        .hero-launch-card > a {
          display: flex;
          margin-top: 25px;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
        }

        .announcement-section {
          padding: 36px 0;
          background: var(--surface-alt);
        }

        .announcement-card {
          display: flex;
          padding: 31px 34px;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          border: 1px solid var(--border);
          border-radius: var(--radius-medium);
          background: var(--surface);
          box-shadow: 0 15px 42px rgba(26, 25, 19, 0.06);
        }

        .announcement-card h2 {
          margin: 0;
          font-size: 23px;
          font-weight: 570;
          letter-spacing: -0.025em;
        }

        .announcement-card > div:first-child > p:last-child {
          max-width: 830px;
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
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
          margin-bottom: 62px;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.62fr);
          align-items: end;
          gap: 100px;
        }

        .section-heading h2,
        .workforce-copy h2,
        .partner-copy h2,
        .aura-copy h2,
        .faq-heading h2 {
          margin: 0;
          font-size: clamp(42px, 4.7vw, 70px);
          font-weight: 450;
          letter-spacing: -0.055em;
          line-height: 1.04;
        }

        .section-heading h2 span,
        .workforce-copy h2 span,
        .partner-copy h2 span,
        .faq-heading h2 span {
          display: block;
          color: var(--sage-dark);
        }

        .heading-description {
          display: grid;
          gap: 18px;
        }

        .heading-description p,
        .heading-introduction {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .theory-section {
          background: var(--background);
        }

        .theory-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.32fr) minmax(360px, 0.62fr);
          gap: 42px;
        }

        .theory-image {
          position: relative;
          min-height: 670px;
          overflow: hidden;
          border-radius: var(--radius-large);
        }

        .theory-image > img {
          height: 100%;
          object-fit: cover;
        }

        .image-caption {
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
          background: rgba(22, 24, 19, 0.74);
          color: #ffffff;
          backdrop-filter: blur(14px);
        }

        .image-caption span {
          display: inline-flex;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(228, 206, 145, 0.42);
          border-radius: 50%;
          color: var(--gold-light);
          font-size: 11px;
        }

        .image-caption p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 13px;
          line-height: 1.65;
        }

        .theory-cards {
          display: grid;
          gap: 18px;
        }

        .theory-cards article {
          padding: 30px;
          border: 1px solid var(--border);
          border-radius: var(--radius-medium);
          background: rgba(255, 253, 248, 0.76);
        }

        .theory-cards article > span {
          display: block;
          margin-bottom: 21px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .theory-cards h3 {
          margin: 0;
          font-size: 25px;
          font-weight: 540;
          letter-spacing: -0.03em;
        }

        .theory-cards p {
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .mission-quote {
          max-width: 980px;
          margin: 100px auto 0;
          padding: 0 40px;
          text-align: center;
        }

        .mission-quote > span {
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 100px;
          line-height: 0.5;
        }

        .mission-quote p {
          margin: 24px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 4vw, 49px);
          letter-spacing: -0.04em;
          line-height: 1.2;
        }

        .mission-quote footer {
          color: var(--muted);
          font-size: 10px;
          font-style: normal;
          font-weight: 750;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .pathway-banner {
          padding: 31px 0;
          background: var(--sage-dark);
          color: #ffffff;
        }

        .pathway-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .pathway-step {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pathway-step span {
          color: var(--gold-light);
          font-size: 9px;
        }

        .pathway-step strong {
          font-size: 10px;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .pathway-step svg {
          width: 14px;
          color: rgba(255, 255, 255, 0.27);
        }

        .ecosystem-section {
          background: var(--surface);
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: var(--radius-medium);
          background: var(--background);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .service-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow);
        }

        .service-image {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .service-image img {
          height: 100%;
          object-fit: cover;
          transition: transform 450ms ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.04);
        }

        .service-image > span {
          position: absolute;
          right: 16px;
          bottom: 16px;
          display: inline-flex;
          width: 45px;
          height: 45px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.34);
          border-radius: 50%;
          background: rgba(19, 20, 17, 0.52);
          color: #ffffff;
          font-size: 10px;
          backdrop-filter: blur(10px);
        }

        .service-content {
          padding: 27px;
        }

        .service-content h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 550;
          letter-spacing: -0.03em;
        }

        .service-content > p {
          min-height: 93px;
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .service-footer {
          display: flex;
          margin-top: 23px;
          padding-top: 18px;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
          color: var(--sage-dark);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .audience-section {
          background: var(--background);
        }

        .audience-images {
          display: grid;
          margin-bottom: 90px;
          grid-template-columns: minmax(0, 1.72fr) minmax(280px, 0.42fr);
          gap: 22px;
        }

        .audience-main-image,
        .audience-side-image {
          position: relative;
          min-height: 540px;
          overflow: hidden;
          border-radius: var(--radius-large);
        }

        .audience-main-image img,
        .audience-side-image img {
          height: 100%;
          object-fit: cover;
        }

        .audience-image-caption {
          position: absolute;
          right: 28px;
          bottom: 28px;
          left: 28px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 18px;
          background: rgba(21, 23, 18, 0.7);
          color: #ffffff;
          backdrop-filter: blur(14px);
        }

        .audience-image-caption p {
          margin: 0 0 8px;
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.17em;
        }

        .audience-image-caption strong {
          display: block;
          max-width: 720px;
          font-size: 19px;
          font-weight: 480;
          line-height: 1.45;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .audience-grid article {
          min-height: 275px;
          padding: 28px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: rgba(255, 253, 248, 0.58);
        }

        .audience-grid article > span {
          color: var(--gold);
          font-size: 10px;
          font-weight: 750;
        }

        .audience-grid h3 {
          margin: 55px 0 0;
          font-size: 23px;
          font-weight: 550;
          letter-spacing: -0.03em;
        }

        .audience-grid p {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .workforce-section {
          background: var(--surface);
        }

        .workforce-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(490px, 1fr);
          align-items: center;
          gap: 105px;
        }

        .workforce-description,
        .partner-copy > p:not(.section-label),
        .aura-copy > p:not(.section-label),
        .faq-heading > p:not(.section-label) {
          margin: 28px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .role-grid,
        .partner-list {
          display: grid;
          margin: 35px 0;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .role-grid span,
        .partner-list span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--muted);
          font-size: 13px;
        }

        .role-grid svg,
        .partner-list svg {
          color: var(--gold);
        }

        .program-note {
          margin-bottom: 30px;
          border-left: 2px solid var(--gold);
          padding-left: 18px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.75;
        }

        .workforce-visual {
          position: relative;
          min-height: 720px;
        }

        .workforce-large-image,
        .workforce-small-image {
          position: absolute;
          overflow: hidden;
          border-radius: var(--radius-large);
        }

        .workforce-large-image {
          inset: 0 85px 110px 0;
        }

        .workforce-small-image {
          right: 0;
          bottom: 10px;
          width: 48%;
          height: 285px;
          border: 10px solid var(--surface);
        }

        .workforce-large-image img,
        .workforce-small-image img {
          height: 100%;
          object-fit: cover;
        }

        .progress-card {
          position: absolute;
          bottom: 36px;
          left: -45px;
          width: 290px;
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: rgba(255, 253, 248, 0.95);
          box-shadow: var(--shadow);
          backdrop-filter: blur(14px);
        }

        .progress-card > p {
          margin: 0 0 18px;
          color: var(--gold);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.16em;
        }

        .progress-card > div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .progress-card span {
          font-size: 10px;
          font-weight: 700;
        }

        .progress-card svg {
          width: 12px;
          color: var(--gold);
        }

        .partner-section {
          background: var(--background);
        }

        .partner-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(440px, 0.66fr);
          align-items: start;
          gap: 100px;
        }

        .form-card,
        .launch-form-card {
          padding: 38px;
          border: 1px solid var(--border);
          border-radius: var(--radius-large);
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .form-heading > p {
          margin: 0 0 9px;
          color: var(--gold);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.18em;
        }

        .form-heading h3 {
          margin: 0;
          font-size: 31px;
          font-weight: 530;
          letter-spacing: -0.04em;
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
          color: #505248;
          font-size: 11px;
          font-weight: 700;
        }

        input,
        textarea,
        select {
          width: 100%;
          border: 1px solid rgba(25, 26, 22, 0.15);
          border-radius: 12px;
          outline: none;
          background: #fbfaf5;
          color: var(--ink);
          font-size: 14px;
          font-weight: 450;
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
          box-shadow: 0 0 0 4px rgba(202, 166, 81, 0.12);
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
          margin-bottom: 24px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(118, 133, 116, 0.14);
          color: var(--sage-dark);
        }

        .form-success h3 {
          margin: 0;
          font-size: 32px;
          font-weight: 520;
          letter-spacing: -0.04em;
        }

        .form-success > p:not(.section-label) {
          max-width: 420px;
          margin: 14px 0 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .aura-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #19181e;
          color: #ffffff;
        }

        .aura-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
        }

        .aura-glow-left {
          top: -250px;
          left: -200px;
          width: 650px;
          height: 650px;
          background: rgba(120, 100, 173, 0.22);
        }

        .aura-glow-right {
          right: -280px;
          bottom: -340px;
          width: 750px;
          height: 750px;
          background: rgba(202, 166, 81, 0.12);
        }

        .aura-grid {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(450px, 0.66fr);
          align-items: center;
          gap: 110px;
        }

        .section-label-light {
          color: var(--gold-light);
        }

        .aura-copy h2 span {
          display: block;
          color: var(--purple-light);
        }

        .aura-copy > p:not(.section-label) {
          color: rgba(255, 255, 255, 0.62);
        }

        .aura-copy blockquote {
          margin: 34px 0;
          border-left: 2px solid var(--purple-light);
          padding: 6px 0 6px 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          line-height: 1.5;
        }

        .aura-preview {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 28px;
          background: rgba(33, 31, 40, 0.85);
          box-shadow:
            0 45px 100px rgba(0, 0, 0, 0.32),
            0 0 80px rgba(120, 100, 173, 0.14);
          backdrop-filter: blur(18px);
        }

        .aura-preview-header {
          display: flex;
          padding: 21px 22px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .aura-identity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .aura-identity strong {
          display: block;
          font-size: 13px;
        }

        .aura-identity small {
          display: flex;
          margin-top: 3px;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.46);
          font-size: 9px;
        }

        .aura-identity small span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9fc493;
        }

        .aura-preview-header > p {
          margin: 0;
          color: rgba(255, 255, 255, 0.34);
          font-size: 8px;
          letter-spacing: 0.14em;
        }

        .aura-orb {
          display: inline-flex;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(228, 206, 145, 0.43);
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, #ded0f0, #7864ad 45%, #25202f);
          box-shadow: 0 0 26px rgba(120, 100, 173, 0.4);
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: 17px;
        }

        .aura-preview-body {
          display: grid;
          min-height: 350px;
          padding: 28px 22px;
          align-content: start;
          gap: 11px;
        }

        .aura-preview-message {
          max-width: 84%;
          margin-bottom: 17px;
          padding: 15px 16px;
          border-radius: 6px 17px 17px 17px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.78);
          font-size: 12px;
          line-height: 1.65;
        }

        .aura-preview-body button {
          padding: 13px 14px;
          border: 1px solid rgba(182, 167, 225, 0.25);
          border-radius: 13px;
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          font-size: 11px;
          text-align: left;
        }

        .aura-preview-open {
          display: flex;
          width: calc(100% - 32px);
          min-height: 52px;
          margin: 0 16px 16px;
          padding: 0 16px;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 15px;
          background: var(--purple);
          color: #ffffff;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
        }

        .launch-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #22291f;
          color: #ffffff;
        }

        .launch-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(450px, 0.62fr);
          align-items: start;
          gap: 110px;
        }

        .launch-copy h2 {
          margin: 0;
          font-size: clamp(43px, 4.8vw, 70px);
          font-weight: 440;
          letter-spacing: -0.055em;
          line-height: 1.05;
        }

        .launch-copy > p:not(.section-label) {
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 15px;
          line-height: 1.85;
        }

        .launch-paths {
          display: grid;
          margin-top: 48px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .launch-paths article {
          display: flex;
          min-height: 175px;
          padding: 23px;
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
          font-weight: 540;
        }

        .launch-paths p {
          margin: 9px 0 0;
          color: rgba(255, 255, 255, 0.49);
          font-size: 12px;
          line-height: 1.7;
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
          color: rgba(255, 255, 255, 0.52);
        }

        .launch-form-card label {
          color: rgba(255, 255, 255, 0.67);
        }

        .launch-form-card input,
        .launch-form-card textarea,
        .launch-form-card select {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .launch-form-card select option {
          color: var(--ink);
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.58);
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

        .form-success-dark h3 {
          color: #ffffff;
        }

        .form-success-dark > p:not(.section-label) {
          color: rgba(255, 255, 255, 0.6);
        }

        .faq-section {
          background: var(--background);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.62fr) minmax(480px, 1fr);
          align-items: start;
          gap: 115px;
        }

        .faq-heading {
          position: sticky;
          top: 130px;
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
          font-weight: 550;
          letter-spacing: -0.02em;
        }

        .faq-item > button > span:last-child {
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
          max-width: 760px;
          margin: -4px 0 28px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .site-footer {
          padding: 80px 0 30px;
          background: #151611;
          color: #ffffff;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: minmax(350px, 1.45fr) repeat(
              3,
              minmax(150px, 0.42fr)
            );
          gap: 60px;
        }

        .footer-brand > p {
          max-width: 390px;
          margin: 24px 0;
          color: rgba(255, 255, 255, 0.46);
          font-size: 13px;
          line-height: 1.7;
        }

        .footer-launch-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-launch-status > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9fc493;
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
        }

        .footer-bottom {
          display: flex;
          margin-top: 65px;
          padding-top: 25px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.33);
          font-size: 9px;
          line-height: 1.6;
        }

        .footer-bottom p {
          margin: 0;
        }

        .footer-bottom p:last-child {
          max-width: 700px;
          text-align: right;
        }

        .aura-widget {
          position: fixed;
          z-index: 250;
          bottom: 22px;
          left: 22px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 12px;
        }

        .aura-launcher {
          display: flex;
          min-width: 218px;
          min-height: 64px;
          padding: 8px 16px 8px 9px;
          align-items: center;
          gap: 11px;
          border: 1px solid rgba(228, 206, 145, 0.36);
          border-radius: 999px;
          background: rgba(25, 24, 30, 0.95);
          box-shadow:
            0 20px 55px rgba(0, 0, 0, 0.28),
            0 0 35px rgba(120, 100, 173, 0.2);
          color: #ffffff;
          cursor: pointer;
          backdrop-filter: blur(18px);
        }

        .aura-launcher .aura-orb {
          width: 46px;
          height: 46px;
          flex-basis: 46px;
        }

        .aura-launcher-copy {
          display: flex;
          flex: 1;
          align-items: flex-start;
          flex-direction: column;
        }

        .aura-launcher-copy strong {
          font-size: 12px;
        }

        .aura-launcher-copy small {
          margin-top: 2px;
          color: rgba(255, 255, 255, 0.47);
          font-size: 9px;
        }

        .aura-online-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9fc493;
          box-shadow: 0 0 0 6px rgba(159, 196, 147, 0.08);
        }

        .aura-chat-panel {
          display: flex;
          width: min(400px, calc(100vw - 44px));
          height: min(620px, calc(100vh - 110px));
          overflow: hidden;
          flex-direction: column;
          border: 1px solid rgba(228, 206, 145, 0.25);
          border-radius: 25px;
          background: #1d1b23;
          box-shadow:
            0 40px 90px rgba(0, 0, 0, 0.38),
            0 0 60px rgba(120, 100, 173, 0.2);
          color: #ffffff;
        }

        .aura-chat-panel > header {
          display: flex;
          padding: 16px 18px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .aura-chat-panel > header > button {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          background: transparent;
          color: rgba(255, 255, 255, 0.62);
          cursor: pointer;
          font-size: 21px;
        }

        .aura-chat-messages {
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
          gap: 8px;
        }

        .chat-suggestions button {
          padding: 10px 12px;
          border: 1px solid rgba(182, 167, 225, 0.25);
          border-radius: 12px;
          background: transparent;
          color: rgba(255, 255, 255, 0.66);
          cursor: pointer;
          font-size: 10px;
          text-align: left;
        }

        .aura-chat-input {
          display: flex;
          margin: 0;
          padding: 12px;
          flex-direction: row;
          gap: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aura-chat-input input {
          min-height: 45px;
          flex: 1;
          border-color: rgba(255, 255, 255, 0.11);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .aura-chat-input button {
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
          color: rgba(255, 255, 255, 0.28);
          font-size: 8px;
          text-align: center;
        }

        @media (max-width: 1380px) {
          .header-logo-link {
            width: 350px;
            flex-basis: 350px;
          }

          .brand-logo img {
            top: -76px;
            width: 365px;
          }

          .desktop-navigation {
            display: none;
          }

          .mobile-menu-button {
            display: inline-flex;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .audience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1000px) {
          .founding-link {
            display: none;
          }

          .hero-section {
            min-height: 1080px;
          }

          .hero-shell {
            padding-top: 155px;
            grid-template-columns: 1fr;
            align-items: center;
            row-gap: 46px;
          }

          .hero-copy {
            max-width: 680px;
          }

          .hero-launch-card {
            max-width: 440px;
            justify-self: start;
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

          .section-heading,
          .theory-grid,
          .workforce-grid,
          .partner-grid,
          .aura-grid,
          .launch-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .section-heading {
            gap: 28px;
          }

          .theory-image {
            min-height: 540px;
          }

          .pathway-row {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 5px;
          }

          .pathway-step {
            flex: 0 0 auto;
          }

          .audience-images {
            grid-template-columns: 1fr;
          }

          .audience-side-image {
            display: none;
          }

          .workforce-visual {
            min-height: 660px;
          }

          .progress-card {
            left: 20px;
          }

          .faq-heading {
            position: static;
          }

          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          :root {
            --edge-space: 15px;
          }

          .header-shell {
            min-height: 76px;
          }

          .header-logo-link {
            width: 235px;
            height: 70px;
            flex-basis: 235px;
          }

          .brand-logo img {
            top: -47px;
            left: -4px;
            width: 245px;
          }

          .header-launch-button {
            display: none;
          }

          .hero-section {
            min-height: 1010px;
          }

          .hero-side-overlay {
            background: linear-gradient(
              90deg,
              rgba(16, 18, 13, 0.9),
              rgba(16, 18, 13, 0.42)
            );
          }

          .hero-shell {
            padding-top: 130px;
          }

          .hero-copy h1 {
            font-size: clamp(47px, 13.5vw, 67px);
          }

          .hero-buttons {
            display: grid;
          }

          .hero-buttons .button {
            width: 100%;
          }

          .hero-launch-card {
            max-width: 100%;
          }

          .announcement-actions {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 80px 0;
          }

          .section-heading h2,
          .workforce-copy h2,
          .partner-copy h2,
          .aura-copy h2,
          .faq-heading h2 {
            font-size: 42px;
          }

          .service-grid,
          .audience-grid {
            grid-template-columns: 1fr;
          }

          .service-content > p {
            min-height: auto;
          }

          .audience-main-image {
            min-height: 470px;
          }

          .role-grid,
          .partner-list,
          .launch-paths {
            grid-template-columns: 1fr;
          }

          .workforce-visual {
            min-height: 560px;
          }

          .workforce-large-image {
            inset: 0 0 100px;
          }

          .workforce-small-image {
            right: -3px;
            width: 55%;
            height: 210px;
          }

          .progress-card {
            bottom: 25px;
            left: 12px;
            width: 255px;
          }

          .form-card,
          .launch-form-card {
            padding: 27px 21px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer-bottom p:last-child {
            text-align: left;
          }

          .aura-widget {
            right: 14px;
            bottom: 14px;
            left: 14px;
          }

          .aura-chat-panel {
            width: 100%;
            height: min(620px, calc(100vh - 100px));
          }
        }

        @media (max-width: 460px) {
          .header-logo-link {
            width: 190px;
            flex-basis: 190px;
          }

          .brand-logo img {
            top: -36px;
            width: 195px;
          }

          .section-heading h2,
          .workforce-copy h2,
          .partner-copy h2,
          .aura-copy h2,
          .faq-heading h2 {
            font-size: 37px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: auto;
          }

          .aura-launcher {
            width: 64px;
            min-width: 64px;
            padding: 8px;
            border-radius: 50%;
          }

          .aura-launcher-copy {
            display: none;
          }

          .aura-online-indicator {
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
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}
