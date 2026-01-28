// Caliber Consulting — React landing page (Tailwind)
// Browser-ready JSX (no TypeScript)

// =============================================
// ENTRY & LAYOUT
// =============================================

// This is the main entry point that wraps the site with global theme variables.
function CaliberConsultingSite() {
  return (
    <div
      style={{
        "--brand-bg": "#FFFFFF",
        "--brand-deep": "#748D7D",
        "--brand-primary": "#1C2532",
        "--brand-accent": "#748D7D",
        "--brand-accent-2": "#748D7D",
        "--brand-text": "#111827",
        "--brand-muted": "#000000",
        "--surface": "#F8FAFC",
        "--card": "#FFFFFF",
        "--ring": "#5BC0BE",
      }}
    >
      <Site />
    </div>
  );
}

// Controls the overall page structure and the sequence of sections.
function Site() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--brand-bg)", color: "var(--brand-text)" }}
    >
      <Header />
      <Hero />
      <Trust />
      <WhyUs />
      <Services />
      <Rescue />
      <Process />
      <Industries />
      <About />
      <CTABand />
      <Contact />
      <Footer />
    </div>
  );
}

// =============================================
// HEADER SECTION
// =============================================

// Renders the sticky navigation header with desktop and mobile menu logic.
function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur border-b"
      style={{ borderColor: "rgba(0,0,0,0.06)", background: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo />
          <div>
            <div className="text-lg font-semibold tracking-tight group-hover:opacity-90 transition-opacity">
              Caliber Consulting
            </div>
            <div
              className="text-xs"
              style={{ color: "var(--brand-muted)" }}
            >
              Complex Systems, Simplified
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0 text-sm">
          <a
            className="ml-1 rounded-full px-4 py-2 border hover:text-[var(--brand-accent)]"
            style={{ background: "#243633", color: "#FFFFFF" }}
            href="#why"
          >
            Why Caliber
          </a>
          <a
            className="ml-2 rounded-full px-4 py-2 border hover:text-[var(--brand-accent)]"
            style={{ background: "#243633", color: "#FFFFFF" }}
            href="#services"
          >
            Services
          </a>
          <a
            className="ml-2 rounded-full px-4 py-2 border hover:text-[var(--brand-accent)]"
            style={{ background: "#243633", color: "#FFFFFF" }}
            href="#rescue"
          >
            Project Rescue
          </a>
          <a
            className="ml-2 rounded-full px-4 py-2 border hover:text-[var(--brand-accent)]"
            style={{ background: "#243633", color: "#FFFFFF" }}
            href="#process"
          >
            Process
          </a>
          <a
            className="ml-2 rounded-full px-4 py-2 border hover:text-[var(--brand-accent)]"
            style={{ background: "#243633", color: "#FFFFFF" }}
            href="#contact"
          >
            Contact
          </a>
          <a
            href="tel:+15550000000"
            className="ml-4 flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-all group"
          >
            <div className="p-1.5 rounded-full bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.11-2.12a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="font-bold text-[var(--brand-primary)] whitespace-nowrap">+1 (555) 000-0000</span>
          </a>
          <a
            className="ml-3 rounded-full px-4 py-2 border hover:shadow-sm"
            style={{
              borderColor: "rgba(0,0,0,0.08)",
              background: "#243633",
              color: "#FFFFFF",
            }}
            href="#contact"
          >
            Book a consult
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:+15550000000"
            className="p-2 rounded-full border border-gray-100 bg-gray-50 text-[var(--brand-accent)] hover:bg-gray-100 transition-colors"
            aria-label="Call us"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.11-2.12a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            aria-label="Open menu"
            className="rounded-full border px-3 py-2 hover:bg-gray-50 transition-colors"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile flyout */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "rgba(0,0,0,0.06)",
            background: "rgba(255,255,255,0.98)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-2 text-sm">
            <a
              href="tel:+15550000000"
              className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 border border-orange-100 mb-2"
            >
              <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.11-2.12a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-orange-900">+1 (555) 000-0000</div>
                <div className="text-xs text-orange-700">Urgent? Call us now</div>
              </div>
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-[rgba(0,0,0,0.03)] transition-colors active:bg-[rgba(0,0,0,0.05)]"
              href="#why"
              onClick={() => setMobileOpen(false)}
            >
              Why Caliber
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-[rgba(0,0,0,0.03)] transition-colors active:bg-[rgba(0,0,0,0.05)]"
              href="#services"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-[rgba(0,0,0,0.03)] transition-colors active:bg-[rgba(0,0,0,0.05)]"
              href="#rescue"
              onClick={() => setMobileOpen(false)}
            >
              Project Rescue
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-[rgba(0,0,0,0.03)] transition-colors active:bg-[rgba(0,0,0,0.05)]"
              href="#process"
              onClick={() => setMobileOpen(false)}
            >
              Process
            </a>
            <a
              className="rounded-lg px-3 py-2 hover:bg-[rgba(0,0,0,0.03)] transition-colors active:bg-[rgba(0,0,0,0.05)] text-[var(--brand-accent)] font-semibold"
              style={{ background: "rgba(116,141,125,0.08)" }}
              href="#contact"
              onClick={() => setMobileOpen(false)}
            >
              Book a consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// =============================================
// HERO SECTION
// =============================================

// The first section users see, containing the primary headline and call-to-action.
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--brand-accent) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <Badge>Business Central Experts</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700 ring-1 ring-inset ring-red-600/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Project Rescue Specialists
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your{" "}
            <span className="text-[var(--brand-accent)]">
              Business Central
            </span>
            , working better.
          </h1>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--brand-muted)" }}
          >
            We cut through ERP complexity so your operations run faster,
            cleaner, and at lower cost. Senior consultants only. No
            bureaucracy. Real results.
          </p>
          <ul
            className="mt-6 space-y-3"
            style={{ color: "var(--brand-text)" }}
          >
            <li className="flex items-start gap-3 p-2 rounded-lg bg-orange-50 border border-orange-100 font-semibold shadow-sm overflow-hidden relative group">
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Check /> Rescue specialists — we fix failed projects.
            </li>
            <li className="flex items-start gap-3">
              <Check /> Direct senior expertise — no junior consultants.
            </li>
            <li className="flex items-start gap-3">
              <Check /> Zero overhead — leaner team, faster outcomes.
            </li>
            <li className="flex items-start gap-3">
              <Check /> Built for scale — pragmatic now, extensible later.
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a
              href="#contact"
              className="rounded-xl px-5 py-3 font-medium text-white shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              style={{ background: "var(--brand-accent)" }}
            >
              Book a consult
            </a>
            <a
              href="#contact"
              className="rounded-xl px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50 transition-all text-sm"
            >
              Get a second opinion on your BC setup
            </a>
            <a
              href="#services"
              className="rounded-xl px-5 py-3 font-medium border border-transparent hover:border-gray-100 transition-all text-sm opacity-80 hover:opacity-100"
            >
              What we do
            </a>
          </div>
          <p
            className="mt-3 text-xs"
            style={{ color: "var(--brand-muted)" }}
          >
            Your Business Central, working better.
          </p>
        </div>
        <div className="relative">
          <div
            className="rounded-3xl border p-6 shadow-sm"
            style={{
              background: "var(--card)",
              borderColor: "rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Complex Systems, Simplified</h3>
              <span
                className="text-[10px]"
                style={{ color: "var(--brand-muted)" }}
              >
                CAL → AL → Cloud
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <Metric kpi="20+ yrs" label="Per consultant" />
              <Metric kpi="100+" label="Implementations" />
              <Metric kpi="All" label="Industries" />
            </div>
            <div
              className="mt-6 rounded-xl border p-4 text-sm"
              style={{
                borderColor: "rgba(0,0,0,0.08)",
                color: "var(--brand-text)",
              }}
            >
              <p style={{ color: "var(--brand-muted)" }}>
                Cut through complexity, and make Business Central work the
                way your business actually runs.
              </p>
            </div>
          </div>
          <Glow />
        </div>
      </div>
    </section>
  );
}

// =============================================
// TRUST SECTION
// =============================================

// A visual strip of key expertise areas to build immediate credibility with visitors.
function Trust() {
  return (
    <section
      className="mx-auto max-w-7xl px-12 py-12"
      style={{ backgroundColor: "#243633", color: "#FFFFFF" }}
    >
      <div className="grid md:grid-cols-6 gap-4 items-center">
        <Pill>Upgrades &amp; Migrations</Pill>
        <Pill>Integrations &amp; APIs</Pill>
        <Pill>Inventory</Pill>
        <Pill>Warehousing &amp; WMS</Pill>
        <Pill>Finance &amp; Reporting</Pill>
        <Pill>Performance &amp; Tuning</Pill>
      </div>
    </section>
  );
}

// =============================================
// WHY US SECTION
// =============================================

// This section highlights the core value propositions and why clients choose Caliber.
function WhyUs() {
  const items = [
    {
      title: "Direct Senior Expertise",
      body: "Consult with the people who actually build and ship. No hand-offs, no interns, no learning on your dime.",
    },
    {
      title: "Zero Overhead",
      body: "Lean operating model means lower cost and faster turnarounds without the agency markup or red tape.",
    },
    {
      title: "Personalized, Not Bureaucratic",
      body: "We adapt to your business rhythms. You’re never just a ticket in a queue.",
    },
    {
      title: "Efficiency & Scalability",
      body: "Solutions are designed to perform today and scale tomorrow—clean AL, clear patterns, future-proof data.",
    },
    {
      title: "Proven Track Record",
      body: "40+ years of combined experience. 100+ implementations. Cross-industry patterns we reuse to move faster.",
    },
    {
      title: "Rescue Specialists",
      body: "If your project is off the rails, we diagnose quickly and stabilize within weeks, not months.",
    },
  ];
  return (
    <section
      id="why"
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2 className="text-3xl font-bold">Why Caliber</h2>
      <p
        className="mt-2 max-w-2xl"
        style={{ color: "var(--brand-muted)" }}
      >
        We bridge business and technology. It’s senior guidance, practical
        build, and accountable delivery—end-to-end.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <ValueCard key={i} title={it.title} body={it.body} />
        ))}
      </div>
    </section>
  );
}

// =============================================
// SERVICES SECTION
// =============================================

// Details the specific technical and advisory services offered by the firm.
function Services() {
  const services = [
    {
      title: "Implementations",
      desc: "Brand new implementation, data migration with clean data, and right-sized customizations.",
    },
    {
      title: "Upgrades",
      desc: "NAV → BC upgrades, refactoring CAL to AL, extension-first architecture, testability, and pipelines.",
    },
    { title: "Integrations", desc: "REST, GRAPH, SOAP, ODATA" },
    {
      title: "Performance Tuning",
      desc: "Indexing, telemetry, bottleneck analysis, and refactors that shave hours to minutes.",
    },
    {
      title: "Project Rescue",
      desc: "Triage, recovery plans, scope reset, and stakeholder alignment to get value back on track.",
    },
    {
      title: "Advisory & Architecture",
      desc: "Roadmaps, governance, solution reviews, and fractional leadership for growing teams.",
    },
  ];
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#243633", color: "#FFFFFF" }}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">What we do</h2>
        <a
          href="#contact"
          className="hidden md:inline-block rounded-lg border px-4 py-2"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          Start a scope chat
        </a>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Card key={i} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}

// =============================================
// RESCUE SECTION
// =============================================

// Focuses specifically on project triage and recovery for troubled ERP implementations.
function Rescue() {
  return (
    <section
      id="rescue"
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <Badge color="var(--brand-accent-2)">Rescue Specialists</Badge>
          <h2 className="mt-3 text-3xl font-bold">
            When projects stall, we unstick them.
          </h2>
          <p
            className="mt-3"
            style={{ color: "var(--brand-muted)" }}
          >
            Caliber consultants aim for for fast triage and realistic
            recovery plans. Expect candid findings, a prioritized backlog,
            and momentum in weeks.
          </p>
          <ul className="mt-5 space-y-3">
            <li className="flex gap-3">
              <Check /> Fast diagnostic: environment, code quality, data,
              integrations, process fit.
            </li>
            <li className="flex gap-3">
              <Check /> Decision brief: keep / refactor / retire—no fluff,
              just trade-offs.
            </li>
            <li className="flex gap-3">
              <Check /> Stabilize → Optimize → Scale: a clear path with
              measurable milestones.
            </li>
          </ul>
          <div className="mt-6">
            <a
              href="#contact"
              className="rounded-xl px-5 py-3 font-medium text-white"
              style={{ background: "var(--brand-accent)" }}
            >
              Run a rescue assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// PROCESS SECTION
// =============================================

// Visualizes the step-by-step methodology used for client engagements.
function Process() {
  const steps = [
    {
      n: 1,
      title: "Discovery",
      desc: "Clarify goals, constraints, and critical paths. Map current state.",
    },
    {
      n: 2,
      title: "Diagnostic",
      desc: "Assess solution fit, data, customizations, performance, and team capacity.",
    },
    {
      n: 3,
      title: "Plan",
      desc: "Right-sized roadmap, risks, and a deliverable-based timeline. No mystery.",
    },
    {
      n: 4,
      title: "Build",
      desc: "Iterative delivery with demos, artifacts, and documentation you can keep.",
    },
    {
      n: 5,
      title: "Stabilize",
      desc: "Cut defects, tune performance, train users, and prep for handoff.",
    },
    {
      n: 6,
      title: "Scale",
      desc: "Automate, measure, and extend to support growth.",
    },
  ];
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#243633", color: "#FFFFFF" }}
    >
      <h2 className="text-3xl font-bold">How we work</h2>
      <div className="mt-8 grid md:grid-cols-6 gap-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border p-4"
            style={{
              background: "#748D7D",
              borderColor: "rgba(0,0,0,0.08)",
            }}
          >
            <div className="text-xs" style={{ color: "#FFFFFF" }}>
              Step {s.n}
            </div>
            <div className="mt-1 font-semibold">{s.title}</div>
            <div className="mt-1 text-sm" style={{ color: "#FFFFFF" }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================
// INDUSTRIES SECTION
// =============================================

// Highlights the various sectors where the firm has deep domain knowledge.
function Industries() {
  const items = [
    "Entertainment: Royalties, IP, rights",
    "Food: Fresh & Frozen",
    "Apparel & Fashion",
    "Distribution & 3PL: WMS, License Plating",
    "Subscriptions & billing",
    "Manufacturing & MRP basics",
  ];
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div
        className="rounded-3xl border p-6"
        style={{
          background: "var(--card)",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <h2 className="text-3xl font-bold">Where we’re strongest</h2>
        <p
          className="mt-2"
          style={{ color: "var(--brand-muted)" }}
        >
          Cross-industry experience means fostered innovation, improved
          problem-solving, and more user-centered products.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          {items.map((t, i) => (
            <div key={i} className="flex gap-3">
              <Dot /> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// ABOUT SECTION
// =============================================

// Provides background on the company’s history, expertise, and core principles.
function About() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#243633", color: "#FFFFFF" }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Who we are</h2>
          <p
            className="mt-3"
            style={{ color: "#FFFFFF" }}
          >
            A collective of senior consultants with 20+ years each in
            Microsoft NAV/Business Central. We started in CAL, grew
            through NAV, and lead in AL and cloud—so we know what to keep,
            what to refactor, and what to retire.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-3">
              <Check /> Architecture, AL Engineering, and Hands-On
              Delivery
            </li>
            <li className="flex gap-3">
              <Check /> On-prem and Cloud Experience
            </li>
            <li className="flex gap-3">
              <Check /> Friendly, Candid, and Accountable Partners
            </li>
          </ul>
        </div>
        <div
          className="rounded-3xl border p-6"
          style={{
            background: "var(--card)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <h3 className="font-semibold">Our Core Competence</h3>
          <p
            className="mt-2"
            style={{ color: "var(--brand-muted)" }}
          >
            We are the bridge between business and technology, bringing
            unmatched expertise to ERP projects that have stalled, failed,
            or grown too complex for in-house teams.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <Metric kpi="P2P" label="Approach" />
            <Metric kpi="Pragmatic" label="Style" />
            <Metric kpi="Measurable" label="Outcomes" />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// CTA SECTION
// =============================================

// A strong call-to-action banner to capture potential leads at the end of the scroll.
function CTABand() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div
        className="rounded-3xl border p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(91,192,190,0.15), rgba(28,37,50,0.08))",
          borderColor: "rgba(0,0,0,0.06)",
        }}
      >
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">
              Make Business Central work the way your business actually
              runs.
            </h3>
            <p
              className="mt-2"
              style={{ color: "var(--brand-muted)" }}
            >
              Quick diagnostic or full project—your call. We’ll meet you
              where you are.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3 items-center">
            <a
              href="#contact"
              className="rounded-xl px-5 py-2 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Talk to a senior consultant
            </a>
            <a
              href="#contact"
              className="rounded-xl px-6 py-3 font-medium text-white shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              style={{ background: "var(--brand-accent)" }}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// CONTACT SECTION
// =============================================

// Contains the lead capture form and alternative contact methods.
function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16"
      style={{ backgroundColor: "#243633", color: "#FFFFFF" }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Let’s talk</h2>
          <p
            className="mt-2"
            style={{ color: "#FFFFFF" }}
          >
            Tell us what’s stuck, slow, or too complex—and the outcome you
            want. We’ll reply within one business day.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex gap-3">
              <Dot /> Typical first step: 30-60 min discovery call
            </div>
            <div className="flex gap-3">
              <Dot /> NDA-friendly. We keep it simple.
            </div>
            <div className="flex gap-3">
              <Dot /> Prefer email?{" "}
              <a
                className="underline"
                href="mailto:contact@caliberconsulting.group"
              >
                contact@caliberconsulting.group
              </a>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="rounded-3xl border p-6 space-y-4"
          style={{
            background: "var(--card)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Field label="Name">
            <input
              required
              name="name"
              className="FieldInput"
              placeholder="Your name"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              className="FieldInput"
              placeholder="contact@caliberconsulting.group"
            />
          </Field>
          <Field label="Company">
            <input
              name="company"
              className="FieldInput"
              placeholder="Caliber Consulting Group"
            />
          </Field>
          <Field label="What do you need help with?">
            <textarea
              required
              name="message"
              rows={4}
              className="FieldInput"
              placeholder="Briefly describe the issue and the ideal outcome"
            />
          </Field>
          <button
            className="rounded-xl px-5 py-3 font-medium w-full text-white"
            style={{ background: "var(--brand-accent)" }}
          >
            Send message
          </button>
          <p
            className="text-xs"
            style={{ color: "var(--brand-muted)" }}
          >
            By submitting, you agree we may contact you about this
            inquiry. We don’t sell data, ever.
          </p>
          <style>{`
              .FieldInput {
                width: 100%;
                border-radius: 0.75rem;
                border: 1px solid rgba(0,0,0,0.08);
                background: #FFFFFF;
                padding: 0.75rem 1rem;
                outline: none;
                color: var(--brand-text);
              }
              .FieldInput:focus {
                border-color: var(--ring);
                box-shadow: 0 0 0 3px rgba(91,192,190,0.25);
              }
            `}</style>
        </form>
      </div>
    </section>
  );
}

// =============================================
// FOOTER SECTION
// =============================================

// The final section of the page with brand identification and legal links.
function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <Logo small />
          <div>
            <div className="font-semibold">Caliber Consulting</div>
            <div
              className="text-xs"
              style={{ color: "var(--brand-muted)" }}
            >
              © {new Date().getFullYear()} — All rights reserved
            </div>
          </div>
        </div>
        <div
          className="text-sm"
          style={{ color: "var(--brand-muted)" }}
        >
          Our mission: We solve ERP problems with speed, expertise and
          practicality—helping businesses cut through complexity and focus
          on growth.
        </div>
        <div className="flex md:justify-end gap-4 text-sm">
          <a
            href="#services"
            className="hover:text-[var(--brand-accent)]"
          >
            Services
          </a>
          <a
            href="#rescue"
            className="hover:text-[var(--brand-accent)]"
          >
            Rescue
          </a>
          <a
            href="#process"
            className="hover:text-[var(--brand-accent)]"
          >
            Process
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--brand-accent)]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// =============================================
// UI COMPONENTS (Shared)
// =============================================

// Reusable atomic UI elements used across different sections of the landing page.

function Logo({ small = false }) {
  const size = small ? 28 : 36;
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        className="drop-shadow"
        style={{ width: size, height: size }}
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="2"
        />
        <path
          d="M32 10 L36 18 L28 18 Z"
          fill="var(--brand-accent)"
          opacity="0.9"
        />
        <path
          d="M44 22a16 16 0 1 0 0 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Badge({ children, color }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border"
      style={{
        background: "rgba(0,0,0,0.02)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: color || "var(--brand-accent)" }}
      />
      {children}
    </span>
  );
}

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
      style={{ borderColor: "rgba(0,0,0,0.08)", color: "#FFFFFF" }}
    >
      {children}
    </span>
  );
}

function ValueCard({ title, body }) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{
        background: "var(--card)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div className="font-semibold">{title}</div>
      <div
        className="mt-2 text-sm"
        style={{ color: "var(--brand-muted)" }}
      >
        {body}
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{
        background: "var(--card)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        <div
          className="text-[10px]"
          style={{ color: "var(--brand-muted)" }}
        >
          Fixed-fee or T&amp;M
        </div>
      </div>
      <div
        className="mt-2 text-sm"
        style={{ color: "var(--brand-muted)" }}
      >
        {desc}
      </div>
    </div>
  );
}

function Metric({ kpi, label }) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        borderColor: "rgba(0,0,0,0.08)",
        background: "var(--surface)",
      }}
    >
      <div
        className="text-2xl font-bold"
        style={{ color: "var(--brand-primary)" }}
      >
        {kpi}
      </div>
      <div
        className="text-xs"
        style={{ color: "var(--brand-muted)" }}
      >
        {label}
      </div>
    </div>
  );
}

function Outcome({ kpi, label }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-lg border px-2 py-1 text-sm font-semibold"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        {kpi}
      </div>
      <div style={{ color: "var(--brand-text)" }}>{label}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <div
        className="mb-1"
        style={{ color: "var(--brand-text)" }}
      >
        {label}
      </div>
      <div className="relative">{children}</div>
    </label>
  );
}

function Glow() {
  return (
    <div className="pointer-events-none absolute -z-10 inset-0">
      <div
        className="absolute right-10 top-10 h-40 w-40 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--brand-primary) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--brand-accent) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

function Check() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Dot() {
  return (
    <span
      className="mt-2 h-2 w-2 rounded-full inline-block"
      style={{ background: "var(--brand-accent)" }}
    />
  );
}

// =============================================
// REACT MOUNTING
// =============================================

// Root injection point for the React application.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CaliberConsultingSite />);
