'use client'

import { type FormEvent, useState } from 'react'

type ChatMessage = {
  role: 'assistant' | 'user'
  text: string
}

const services = [
  {
    title: 'Recovery Meal Plans',
    description:
      'Practical meal planning for detox facilities, treatment centers, recovery residences, families, and people continuing forward after discharge.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Ingredient Supply',
    description:
      'Reliable access to quality ingredients supporting affordable, repeatable, whole-food meal preparation.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Cooking Classes',
    description:
      'Hands-on classes delivered inside treatment centers, sober-living communities, transitional settings, and community kitchens.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Educational Courses',
    description:
      'Education covering cooking, nutrition, food safety, budgeting, meal preparation, routine, and practical independence.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Packing and Delivery',
    description:
      'Meal preparation, packaging, labeling, inventory, fulfillment, route coordination, and regional delivery support.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Employment Pathways',
    description:
      'Opportunities in cooking, teaching, inventory, packing, fulfillment, logistics, delivery, outreach, and peer leadership.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
  },
]

const audience = [
  {
    title: 'Detox Facilities',
    description:
      'Meal support, ingredient planning, practical education, and transition coordination during early stabilization.',
  },
  {
    title: 'Treatment and Rehabilitation',
    description:
      'Cooking classes, nutrition education, practical skill development, workforce exposure, and discharge continuity.',
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

const roles = [
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

const faqs = [
  {
    question: 'What is Sentient Nutrition®?',
    answer:
      'Sentient Nutrition® is a developing nonprofit recovery-support initiative connecting meals, practical education, cooking classes, ingredient access, logistics, workforce development, and continued support after treatment.',
  },
  {
    question: 'Is Sentient Nutrition® a treatment provider?',
    answer:
      'No. Sentient Nutrition® is being developed as a complementary recovery-support resource. It does not replace medical care, counseling, medication, licensed treatment, or individualized nutrition guidance.',
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
      'The initial nonprofit launch is planned for January 2027. Founding partnerships, kitchen resources, programming, and distribution are being developed now.',
  },
]

const suggestions = [
  'How can our facility partner?',
  'What employment pathways are planned?',
  'How do I join the launch?',
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
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
      viewBox="0 0 24 24"
      className="h-4 w-4"
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

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src="/images/Sentient_Nutrition%20Logo.png"
      alt="Sentient Nutrition® powered by Sentient Connect®"
      className={
        footer
          ? 'h-auto max-h-24 w-full max-w-[470px] object-contain object-left'
          : 'h-auto max-h-[78px] w-full object-contain object-left'
      }
    />
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Sentient Nutrition®. I’m AURA Genesis™. Ask me about our mission, facility partnerships, planned services, workforce pathways, or January 2027 launch.',
    },
  ])

  function answerQuestion(question: string): string {
    const value = question.toLowerCase()

    if (
      value.includes('facility') ||
      value.includes('partner') ||
      value.includes('treatment') ||
      value.includes('rehab')
    ) {
      return 'Facilities can explore cooking classes, meal planning, ingredient supply, education, delivery coordination, discharge continuity, and workforce referrals. Use the partnership form and the Sentient Nutrition® team will follow up.'
    }

    if (
      value.includes('employment') ||
      value.includes('job') ||
      value.includes('workforce')
    ) {
      return 'Planned pathways include kitchen preparation, cooking, food safety, inventory, packaging, fulfillment, route support, delivery coordination, teaching assistance, outreach, and peer leadership.'
    }

    if (
      value.includes('launch') ||
      value.includes('january') ||
      value.includes('join')
    ) {
      return 'The initial nonprofit launch is planned for January 2027. Join the launch list for program, partnership, volunteer, employment, and funding updates.'
    }

    if (
      value.includes('meal') ||
      value.includes('food') ||
      value.includes('ingredient')
    ) {
      return 'The planned model includes meal planning, ingredient sourcing, prepared meals, cooking education, facility distribution, and continued resources after discharge.'
    }

    return 'Sentient Nutrition® is building recovery infrastructure around food, education, practical skills, logistics, workforce development, and continuity after treatment.'
  }

  function sendMessage(override?: string): void {
    const text = (override ?? chatInput).trim()

    if (!text) {
      return
    }

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      { role: 'assistant', text: answerQuestion(text) },
    ])

    setChatInput('')
  }

  function submitForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151611]/95 backdrop-blur-xl">
        <div className="flex min-h-[92px] w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 2xl:px-10">
          <a
            href="#top"
            aria-label="Sentient Nutrition home"
            className="flex h-[82px] w-[290px] shrink-0 items-center sm:w-[350px] xl:w-[430px]"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-6 xl:flex 2xl:gap-8"
            aria-label="Primary navigation"
          >
            {[
              ['Our Theory', '#theory'],
              ["What We're Building", '#services'],
              ['Who We Serve', '#audience'],
              ['Workforce', '#workforce'],
              ['Partner', '#launch'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap text-xs font-medium text-white/70 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#launch"
              className="hidden whitespace-nowrap text-xs text-white/70 hover:text-white lg:block"
            >
              Founding Partner
            </a>

            <a
              href="#launch"
              className="hidden min-h-12 items-center gap-2 rounded-full bg-[#caa651] px-6 text-xs font-bold text-[#171812] sm:inline-flex"
            >
              Join the Launch
              <ArrowIcon />
            </a>

            <button
              type="button"
              aria-label={
                menuOpen ? 'Close navigation' : 'Open navigation'
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-white/15 xl:hidden"
            >
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="flex flex-col border-t border-white/10 bg-[#151611] px-5 pb-6 pt-3 xl:hidden"
            aria-label="Mobile navigation"
          >
            {[
              ['Our Theory', '#theory'],
              ["What We're Building", '#services'],
              ['Who We Serve', '#audience'],
              ['Workforce', '#workforce'],
              ['Partner', '#launch'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm text-white/75"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[920px] overflow-hidden bg-[#151611] text-white">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2400&q=90"
            alt="A person preparing a nutritious meal in a bright kitchen"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,16,12,0.96)_0%,rgba(14,16,12,0.74)_22%,rgba(14,16,12,0.10)_52%,rgba(14,16,12,0.18)_72%,rgba(14,16,12,0.84)_100%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(14,16,12,0.86)_100%)]" />

          <div className="relative z-10 grid min-h-[920px] w-full items-end justify-between gap-12 px-4 pb-20 pt-40 sm:px-6 lg:grid-cols-[minmax(0,680px)_350px] lg:px-8 2xl:gap-40 2xl:px-10">
            <div className="max-w-[680px]">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4ce91]">
                <span className="h-2 w-2 rounded-full bg-[#e4ce91] shadow-[0_0_0_6px_rgba(228,206,145,0.12)]" />
                A new recovery nutrition nonprofit
              </p>

              <h1 className="m-0 text-[clamp(58px,5.8vw,96px)] font-normal leading-[0.99] tracking-[-0.065em]">
                Food can be more than a meal.

                <strong className="mt-4 block font-normal text-[#e4ce91]">
                  It can become a path forward.
                </strong>
              </h1>

              <p className="mt-8 max-w-[640px] text-[clamp(16px,1.35vw,20px)] leading-8 text-white/75">
                Sentient Nutrition® is building a recovery-support ecosystem
                connecting nutritious meals, practical education, cooking
                classes, ingredient access, logistics, employment, and
                continued support after treatment.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#launch"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gradient-to-r from-[#cba854] to-[#e5cf92] px-6 text-sm font-bold text-[#171812]"
                >
                  Join the Launch List
                  <ArrowIcon />
                </a>

                <a
                  href="#theory"
                  className="inline-flex min-h-[52px] items-center rounded-full border border-white/30 bg-black/20 px-6 text-sm font-bold text-white backdrop-blur-md"
                >
                  Explore Our Approach
                </a>
              </div>

              <div className="mt-8 flex max-w-[640px] items-start gap-3 text-xs leading-6 text-white/55">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e4ce91]/40 text-[#e4ce91]">
                  <CheckIcon />
                </span>

                Built for treatment providers, recovery residences, families,
                community partners, and people building their next chapter.
              </div>
            </div>

            <aside className="w-full max-w-[350px] justify-self-end rounded-[22px] border border-white/20 bg-[#1c1d1a]/75 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">
                <span className="h-2 w-2 rounded-full bg-[#9fc393] shadow-[0_0_0_6px_rgba(159,195,147,0.12)]" />
                In development
              </div>

              <p className="mb-2 mt-9 text-[10px] uppercase tracking-[0.16em] text-white/40">
                Nonprofit launch
              </p>

              <strong className="text-4xl font-semibold tracking-[-0.04em] text-[#e4ce91]">
                JAN 2027
              </strong>

              <div className="my-7 h-px bg-white/15" />

              <p className="text-xs leading-6 text-white/60">
                Building partnerships, kitchen resources, educational
                programming, workforce pathways, and regional distribution now.
              </p>

              <a
                href="#launch"
                className="mt-6 flex items-center justify-between text-xs font-bold text-white"
              >
                Become a founding partner
                <ArrowIcon />
              </a>
            </aside>
          </div>
        </section>

        <section id="theory" className="bg-[#f6f3eb] py-24 lg:py-32">
          <div className="grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.58fr)] lg:items-end lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#caa651]">
                Our Theory
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em] text-[#191a16]">
                Recovery does not end

                <span className="block text-[#425243]">
                  when treatment ends.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-7 text-[#66685f]">
              <p>
                A person may leave treatment with knowledge, hope, and a plan,
                yet still return to familiar environments, financial
                limitations, employment barriers, and routines that may not
                support the life they are trying to build.
              </p>

              <p>
                Better daily inputs, useful skills, meaningful responsibility,
                and an opportunity to contribute can create a stronger pathway
                forward.
              </p>
            </div>
          </div>

          <div className="mt-16 grid w-full gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.6fr)] lg:px-8 2xl:px-10">
            <div className="min-h-[560px] overflow-hidden rounded-[32px] lg:min-h-[680px]">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"
                alt="Fresh ingredients prepared for a community meal"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-5">
              {[
                [
                  'Food',
                  'A dependable daily input.',
                  'Practical meals and quality ingredients can establish structure that continues beyond treatment.',
                ],
                [
                  'Cooking',
                  'A transferable life skill.',
                  'Cooking develops capability, confidence, independence, teamwork, planning, and responsibility.',
                ],
                [
                  'Work',
                  'A route back into community.',
                  'Kitchens, packing, inventory, teaching, logistics, and delivery can become real workforce pathways.',
                ],
              ].map(([label, title, text]) => (
                <article
                  key={label}
                  className="rounded-[22px] border border-black/10 bg-[#fffdf8] p-8"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#caa651]">
                    {label}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#191a16]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#66685f]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#fffdf8] py-24 lg:py-32">
          <div className="grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.55fr)] lg:items-end lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#caa651]">
                The Sentient Nutrition Ecosystem
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em] text-[#191a16]">
                One connected model.

                <span className="block text-[#425243]">
                  Multiple paths into stability.
                </span>
              </h2>
            </div>

            <p className="text-[15px] leading-7 text-[#66685f]">
              A meal opens the door. Education, practical skills, logistics,
              employment, and leadership turn that door into a pathway.
            </p>
          </div>

          <div className="mt-16 grid w-full gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8 xl:grid-cols-3 2xl:px-10">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[22px] border border-black/10 bg-[#f6f3eb]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-[10px] text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#191a16]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#66685f]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="audience" className="bg-[#f6f3eb] py-24 lg:py-32">
          <div className="grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.55fr)] lg:items-end lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#caa651]">
                Who We Serve
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em] text-[#191a16]">
                Designed to strengthen

                <span className="block text-[#425243]">
                  the entire continuum of care.
                </span>
              </h2>
            </div>

            <p className="text-[15px] leading-7 text-[#66685f]">
              Sentient Nutrition® is designed to work alongside organizations,
              families, employers, and people already doing the difficult work
              of creating long-term change.
            </p>
          </div>

          <div className="mt-16 grid w-full px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 2xl:px-10">
            {audience.map((item, index) => (
              <article
                key={item.title}
                className="min-h-[280px] border border-black/10 bg-[#fffdf8] p-7"
              >
                <span className="text-[10px] font-bold text-[#caa651]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-[#191a16]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#66685f]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="workforce" className="bg-[#fffdf8] py-24 lg:py-32">
          <div className="grid w-full items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(480px,1fr)] lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#caa651]">
                Workforce Pathway
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em] text-[#191a16]">
                Dignity grows when

                <span className="block text-[#425243]">
                  responsibility becomes real.
                </span>
              </h2>

              <p className="mt-7 text-[15px] leading-7 text-[#66685f]">
                Sentient Nutrition® will work toward creating supervised,
                measurable pathways that help qualified participants develop
                practical experience and move toward sustainable employment.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="flex items-center gap-2 text-sm text-[#66685f]"
                  >
                    <span className="text-[#caa651]">
                      <CheckIcon />
                    </span>

                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-[520px] overflow-hidden rounded-[32px] lg:h-[700px]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=90"
                alt="A culinary team working together"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="launch" className="bg-[#22291f] py-24 text-white lg:py-32">
          <div className="grid w-full items-start gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,0.62fr)] lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4ce91]">
                Coming January 2027
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em]">
                We are building the kitchen, classroom, workforce, and
                distribution network now.
              </h2>

              <p className="mt-7 max-w-[780px] text-[15px] leading-7 text-white/60">
                Sentient Nutrition® is identifying founding partners, treatment
                organizations, recovery residences, food suppliers, kitchens,
                instructors, logistics partners, volunteers, employers,
                funders, and future participants.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              {!submitted ? (
                <>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e4ce91]">
                    Join the Launch List
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                    Help shape what comes next.
                  </h3>

                  <form onSubmit={submitForm} className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2 text-xs font-semibold text-white/65">
                        First name

                        <input
                          name="firstName"
                          type="text"
                          required
                          className="min-h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white outline-none focus:border-[#caa651]"
                        />
                      </label>

                      <label className="grid gap-2 text-xs font-semibold text-white/65">
                        Last name

                        <input
                          name="lastName"
                          type="text"
                          required
                          className="min-h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white outline-none focus:border-[#caa651]"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2 text-xs font-semibold text-white/65">
                      Email

                      <input
                        name="email"
                        type="email"
                        required
                        className="min-h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white outline-none focus:border-[#caa651]"
                      />
                    </label>

                    <label className="grid gap-2 text-xs font-semibold text-white/65">
                      I am interested as...

                      <select
                        name="interest"
                        defaultValue=""
                        required
                        className="min-h-12 rounded-xl border border-white/10 bg-[#343b31] px-4 text-white outline-none focus:border-[#caa651]"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option>Treatment provider</option>
                        <option>Recovery residence</option>
                        <option>Potential participant</option>
                        <option>Volunteer</option>
                        <option>Employer</option>
                        <option>Supplier or logistics partner</option>
                        <option>Donor or funder</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <button
                      type="submit"
                      className="mt-2 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#cba854] to-[#e5cf92] px-6 text-sm font-bold text-[#171812]"
                    >
                      Join the January 2027 Launch
                      <ArrowIcon />
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e4ce91]/10 text-[#e4ce91]">
                    <CheckIcon />
                  </span>

                  <h3 className="mt-6 text-3xl font-semibold">
                    You’re on the list.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
                    We’ll keep you informed as Sentient Nutrition® moves toward
                    its January 2027 launch.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f6f3eb] py-24 lg:py-32">
          <div className="grid w-full items-start gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(480px,1fr)] lg:gap-24 lg:px-8 2xl:px-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#caa651]">
                Frequently Asked Questions
              </p>

              <h2 className="text-[clamp(42px,4.8vw,72px)] font-normal leading-[1.03] tracking-[-0.055em] text-[#191a16]">
                Questions about

                <span className="block text-[#425243]">
                  what we are building?
                </span>
              </h2>

              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full border border-black/15 px-6 text-sm font-bold text-[#191a16]"
              >
                Ask AURA Genesis™
                <ArrowIcon />
              </button>
            </div>

            <div className="border-t border-black/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <article
                    key={faq.question}
                    className="border-b border-black/10"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-24 w-full items-center justify-between gap-6 bg-transparent text-left"
                    >
                      <span className="text-lg font-semibold tracking-[-0.02em] text-[#191a16] sm:text-xl">
                        {faq.question}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-xl text-[#caa651]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mb-7 max-w-3xl text-sm leading-7 text-[#66685f]">
                        {faq.answer}
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#151611] py-16 text-white">
        <div className="grid w-full gap-12 px-4 sm:px-6 md:grid-cols-[minmax(340px,1.5fr)_repeat(2,minmax(150px,0.5fr))] lg:px-8 2xl:px-10">
          <div>
            <Logo footer />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Food, education, practical skills, logistics, employment, and
              continuity after treatment.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/50">
            <strong className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#e4ce91]">
              Explore
            </strong>

            <a href="#theory">Our Theory</a>
            <a href="#services">What We’re Building</a>
            <a href="#audience">Who We Serve</a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/50">
            <strong className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#e4ce91]">
              Participate
            </strong>

            <a href="#launch">Founding Partners</a>
            <a href="#launch">Join the Launch List</a>
            <a href="#launch">Donor Interest</a>
          </div>
        </div>

        <div className="mx-4 mt-14 border-t border-white/10 pt-6 text-[10px] text-white/30 sm:mx-6 lg:mx-8 2xl:mx-10">
          © 2026–2027 Sentient Nutrition®. Powered by Sentient Connect®.
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 z-[100] flex flex-col gap-3 sm:bottom-5 sm:left-5">
        {chatOpen && (
          <section
            className="flex h-[min(620px,calc(100vh-110px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-[25px] border border-[#e4ce91]/25 bg-[#1d1b23] text-white shadow-2xl"
            aria-label="AURA Genesis chat"
          >
            <header className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4ce91]/40 bg-[radial-gradient(circle_at_30%_25%,#ded0f0,#7864ad_45%,#25202f)] font-serif text-lg">
                  A
                </span>

                <div>
                  <strong className="block text-sm">AURA Genesis™</strong>

                  <small className="text-[10px] text-white/45">
                    Sentient Nutrition Guide
                  </small>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close AURA Genesis chat"
                onClick={() => setChatOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-white/60"
              >
                ×
              </button>
            </header>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === 'assistant'
                      ? 'max-w-[84%] self-start rounded-[5px_16px_16px_16px] bg-white/[0.08] px-4 py-3 text-xs leading-6 text-white/75'
                      : 'max-w-[84%] self-end rounded-[16px_5px_16px_16px] bg-[#7864ad] px-4 py-3 text-xs leading-6 text-white'
                  }
                >
                  {message.text}
                </div>
              ))}

              {messages.length === 1 && (
                <div className="grid gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-xl border border-[#b6a7e1]/25 px-3 py-2 text-left text-[11px] text-white/65"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                sendMessage()
              }}
              className="flex gap-2 border-t border-white/10 p-3"
            >
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask AURA Genesis™..."
                aria-label="Ask AURA Genesis a question"
                className="min-h-11 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-3 text-sm text-white outline-none"
              />

              <button
                type="submit"
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7864ad]"
              >
                <ArrowIcon />
              </button>
            </form>
          </section>
        )}

        <button
          type="button"
          aria-label={
            chatOpen ? 'Close AURA Genesis chat' : 'Open AURA Genesis chat'
          }
          onClick={() => setChatOpen((current) => !current)}
          className="relative flex min-h-16 min-w-[218px] items-center gap-3 rounded-full border border-[#e4ce91]/35 bg-[#19181e]/95 p-2 pr-4 text-white shadow-2xl backdrop-blur-xl max-[450px]:min-w-16 max-[450px]:w-16 max-[450px]:pr-2"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e4ce91]/40 bg-[radial-gradient(circle_at_30%_25%,#ded0f0,#7864ad_45%,#25202f)] font-serif text-lg">
            A
          </span>

          <span className="flex flex-1 flex-col items-start max-[450px]:hidden">
            <strong className="text-xs">AURA Genesis™</strong>
            <small className="text-[9px] text-white/45">
              Ask a question
            </small>
          </span>

          <span className="h-2 w-2 rounded-full bg-[#9fc493] max-[450px]:absolute max-[450px]:right-1 max-[450px]:top-1" />
        </button>
      </div>
    </>
  )
}
