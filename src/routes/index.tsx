import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import heroVideo from "../assets/hero.mp4.asset.json";

// Lovable CDN assets (/__l5e/...) are only served by Lovable's hosting.
// When deployed elsewhere (e.g. Netlify), prefix with the absolute origin.
const ASSET_ORIGIN = "https://59429260-2ffa-410a-abf8-f925515c6774.lovableproject.com";
const heroVideoUrl = `${ASSET_ORIGIN}${heroVideo.url}`;

export const Route = createFileRoute("/")({
  component: Index,
});

// --- Scroll reveal wrapper ---
function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "figure" | "h1" | "h2" | "h3" | "p" | "span" | "li";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-reveal", "in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  const Component = Tag as any;
  return (
    <Component ref={ref as any} data-reveal="" style={style} className={className}>
      {children}
    </Component>
  );
}

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { n: "01", tag: "Core", title: "Web Design & Development", desc: "Landing pages, marketing sites, e-commerce — custom-built and mobile-first." },
  { n: "02", tag: "Core", title: "Web Applications", desc: "Dashboards, CRMs, MVPs, and SaaS products engineered for real users." },
  { n: "03", title: "UI / UX Design", desc: "Wireframes, prototypes, and polished interfaces that convert." },
  { n: "04", title: "Search Engine Optimisation", desc: "On-page, off-page and technical SEO with a measurable keyword strategy." },
  { n: "05", title: "Meta Ads", desc: "Facebook & Instagram campaigns engineered for ROI, not vanity metrics." },
  { n: "06", title: "Social Media", desc: "Content planning, design systems, and community engagement." },
  { n: "07", title: "API & Integrations", desc: "Payment gateways, WhatsApp, CRMs — connected the right way." },
  { n: "08", title: "Branding", desc: "Logo systems, brand identity kits, and collateral that scale." },
  { n: "09", title: "AI-Powered Tools", desc: "Chatbots, workflow automation, and smart product features." },
  { n: "10", title: "Maintenance & Support", desc: "Hosting, updates, backups, security and bug fixes on retainer." },
];

const PROCESS = [
  { n: "01", title: "Discovery & Strategy", desc: "We start with your business goals, users, and constraints — then define a measurable brief." },
  { n: "02", title: "UI / UX Design", desc: "Wireframes evolve into polished, brand-aligned interfaces reviewed collaboratively." },
  { n: "03", title: "Development & Integration", desc: "Clean, scalable code with the integrations your business actually needs." },
  { n: "04", title: "Testing & Launch", desc: "Rigorous QA, performance tuning and a calm, controlled launch." },
  { n: "05", title: "Ongoing Support", desc: "We stay on as your long-term partner — improving, iterating and maintaining." },
];

const STATS = [
  { v: "10+", l: "Services under one roof" },
  { v: "2026", l: "Independent studio, est." },
  { v: "1:1", l: "Founder-led engagements" },
  { v: "100%", l: "Founder-led delivery" },
];

const WHY = [
  { title: "Founder-led. No hand-offs.", desc: "You work directly with the person who designed and built your product." },
  { title: "Design + Engineering in one team.", desc: "Fewer meetings, faster iterations, and a truly cohesive final result." },
  { title: "Built for founders, not committees.", desc: "We move at the speed of a startup because we are one — for you." },
  { title: "Fixed-scope. Fixed pricing.", desc: "You'll know exactly what you're getting, what it costs, and when it ships." },
];

const TESTIMONIALS = [
  { quote: "Nr Techworks built our website exactly the way we imagined it — elegant, fast, and true to our brand. Bookings started coming in within the first week of launch.", name: "Krishan Kumar", role: "Founder, Dev&Shiv Event Planners" },
  { quote: "They understood our small brand's voice and turned it into a website that finally feels premium. The attention to detail is rare.", name: "Meera Sharma", role: "Founder, Kaaya Handlooms" },
  { quote: "Working with Nr Techworks felt like having an in-house team. Clear communication, quick turnarounds, and a site our customers love.", name: "Arjun Bansal", role: "Co-founder, Tulsi Organics" },
];

const MARQUEE = ["Premium Digital Services", "Design + Engineering", "AI-Native Products", "Brand Systems", "SEO & Growth", "Bespoke Applications"];

function Index() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#0f2a1d]">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[#f5f1e8]/85 backdrop-blur border-b border-[#0f2a1d]/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-tight">
          Nr <span className="italic">Techworks</span><span className="text-[#b8935a]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-[#0f2a1d]/80 hover:text-[#0f2a1d] transition">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0f2a1d] text-[#f5f1e8] px-5 py-2.5 text-sm hover:bg-[#1a3a2a] transition">
          Book a Call <ArrowUpRight className="h-4 w-4" />
        </a>
        <button className="md:hidden p-2 -mr-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-[#0f2a1d] mb-1.5" />
          <div className="w-6 h-0.5 bg-[#0f2a1d] mb-1.5" />
          <div className="w-6 h-0.5 bg-[#0f2a1d]" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#0f2a1d]/10 bg-[#f5f1e8]">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-[#0f2a1d]">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0f2a1d] text-[#f5f1e8] px-5 py-3 text-sm">
              Book a Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
        <div>
          <div className="hero-rise flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/70" style={{ ["--rise-delay" as any]: "0ms" }}>
            <Sparkles className="h-4 w-4 text-[#b8935a]" />
            Independent Digital Studio · Est. 2026
          </div>
          <h1 className="hero-rise mt-6 font-serif text-[42px] leading-[1.05] sm:text-6xl lg:text-[80px] tracking-tight" style={{ ["--rise-delay" as any]: "120ms" }}>
            We build calm, <em className="italic font-normal">considered</em> digital products for modern brands.
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-[15px] md:text-base text-[#0f2a1d]/70 leading-relaxed" style={{ ["--rise-delay" as any]: "320ms" }}>
            Nr Techworks is a small, focused team designing and engineering premium websites, applications and brand systems — end-to-end, without the agency overhead.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ ["--rise-delay" as any]: "460ms" }}>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f2a1d] text-[#f5f1e8] px-6 py-3 text-sm hover:bg-[#1a3a2a] transition">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[#0f2a1d]/30 px-6 py-3 text-sm hover:bg-[#0f2a1d]/5 transition">
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative hero-rise overflow-hidden rounded-sm" style={{ ["--rise-delay" as any]: "220ms" }}>
          <video
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-media w-full aspect-[4/5] object-cover rounded-sm shadow-xl bg-[#0f2a1d]"
          />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="border-y border-[#0f2a1d]/10 bg-[#efe9dc] overflow-hidden py-5">
      <div className="flex gap-10 animate-marquee whitespace-nowrap font-serif text-2xl md:text-3xl">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            {t}
            <span className="text-[#b8935a]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">— {eyebrow}</div>
      <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">{title}</h2>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
      <Reveal><SectionHeader eyebrow="01 · What We Do" title={<>A full studio, <em className="italic font-normal">under one roof.</em></>} /></Reveal>
      <Reveal delay={120} as="p" className="mt-6 max-w-2xl text-[#0f2a1d]/70">We handle every layer of your digital presence — from the first brand mark to the last line of production code. Two services are our core craft; the rest are natural extensions of them.</Reveal>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0f2a1d]/10 border border-[#0f2a1d]/10">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={(i % 3) * 100} className="card-lift bg-[#f5f1e8] p-7 md:p-8 min-h-[220px] flex flex-col">
            <div className="flex items-center justify-between text-xs">
              {s.tag ? <span className="uppercase tracking-widest text-[#b8935a]">{s.tag}</span> : <span />}
              <span className="text-[#0f2a1d]/40 tabular-nums">{s.n}</span>
            </div>
            <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
            <p className="mt-3 text-sm text-[#0f2a1d]/70 leading-relaxed">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-[#0f2a1d] text-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
        <Reveal className="max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#f5f1e8]/60">— 02 · How We Work</div>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">A five-step process, <em className="italic font-normal">no surprises.</em></h2>
          <p className="mt-6 text-[#f5f1e8]/70">Every engagement follows the same rigorous, transparent structure. You'll always know what's happening this week, and what's coming next.</p>
        </Reveal>
        <div className="mt-14 divide-y divide-[#f5f1e8]/15 border-y border-[#f5f1e8]/15">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className="grid md:grid-cols-[100px_1fr_2fr] gap-4 md:gap-10 py-8 md:py-10 items-start">
              <div className="text-[#b8935a] font-serif text-xl tabular-nums">{p.n}</div>
              <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
              <p className="text-[#f5f1e8]/70 leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
      <Reveal><SectionHeader eyebrow="04 · Why Nr Techworks" title={<>The studio you'd <em className="italic font-normal">actually recommend.</em></>} /></Reveal>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-y border-[#0f2a1d]/15 py-10">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div className="font-serif text-4xl md:text-5xl">{s.v}</div>
            <div className="mt-2 text-xs md:text-sm text-[#0f2a1d]/70">{s.l}</div>
          </Reveal>
        ))}
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-10">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <h3 className="font-serif text-2xl md:text-3xl">{w.title}</h3>
            <p className="mt-3 text-[#0f2a1d]/70 leading-relaxed">{w.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#efe9dc]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
        <Reveal><SectionHeader eyebrow="03 · Voices" title={<>Words from <em className="italic font-normal">the people we've built with.</em></>} /></Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} as="figure" delay={i * 120} className="card-lift bg-[#f5f1e8] border border-[#0f2a1d]/10 p-7 flex flex-col">
              <blockquote className="font-serif text-xl leading-snug flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-[#0f2a1d]/60">{t.role}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-32">
      <SectionHeader eyebrow="05 · Let's Build" title={<>Tell us about <em className="italic font-normal">your project.</em></>} />
      <p className="mt-6 max-w-2xl text-[#0f2a1d]/70">We're currently accepting a limited number of new engagements for Q1 2026. Share the basics below and we'll get back to you within two business days.</p>

      <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <div className="space-y-8">
          {[
            { l: "Email", v: "nitinroy.hireme@gmail.com", href: "mailto:nitinroy.hireme@gmail.com" },
            { l: "Phone", v: "+91 97160 87278", href: "tel:+919716087278" },
            { l: "Studio", v: "Delhi NCR, India" },
          ].map((c) => (
            <div key={c.l} className="border-t border-[#0f2a1d]/15 pt-4">
              <div className="text-xs uppercase tracking-widest text-[#0f2a1d]/50">{c.l}</div>
              {c.href ? (
                <a href={c.href} className="mt-2 block font-serif text-xl hover:text-[#b8935a] transition">{c.v}</a>
              ) : (
                <div className="mt-2 font-serif text-xl">{c.v}</div>
              )}
            </div>
          ))}
        </div>

        <form
          name="nrtechworks-contact"
          className="space-y-5"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="nrtechworks-contact" />
          <p className="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Phone (optional)" name="phone" />
          <div>
            <label className="text-xs uppercase tracking-widest text-[#0f2a1d]/60">Service Interested</label>
            <select name="service" required className="mt-2 w-full bg-transparent border-b border-[#0f2a1d]/30 py-3 text-[#0f2a1d] focus:outline-none focus:border-[#0f2a1d]">
              <option value="">Select…</option>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[#0f2a1d]/60">Budget Range</label>
            <select name="budget" className="mt-2 w-full bg-transparent border-b border-[#0f2a1d]/30 py-3 text-[#0f2a1d] focus:outline-none focus:border-[#0f2a1d]">
              <option value="">Select…</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹1,50,000</option>
              <option>₹1,50,000 – ₹5,00,000</option>
              <option>₹5,00,000 – ₹15,00,000</option>
              <option>₹15,00,000+</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[#0f2a1d]/60">Project Details</label>
            <textarea name="message" rows={4} className="mt-2 w-full bg-transparent border-b border-[#0f2a1d]/30 py-3 text-[#0f2a1d] focus:outline-none focus:border-[#0f2a1d] resize-none" />
          </div>
          <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
            <p className="text-xs text-[#0f2a1d]/60">We reply within 48 hours.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#0f2a1d] text-[#f5f1e8] px-7 py-3 text-sm hover:bg-[#1a3a2a] transition">
              Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-[#0f2a1d]/60" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-[#0f2a1d]/30 py-3 text-[#0f2a1d] focus:outline-none focus:border-[#0f2a1d]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f2a1d] text-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 md:pt-28 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#b8935a]">Nr Techworks</div>
            <h3 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              Have a project in mind?<br />
              <a href="#contact" className="italic border-b-2 border-[#b8935a] pb-1">Let's talk.</a>
            </h3>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#f5f1e8]/60">Contact</div>
            <ul className="mt-5 space-y-3 text-[15px] text-[#f5f1e8]/85">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#f5f1e8]/60" /><a href="mailto:nitinroy.hireme@gmail.com" className="hover:text-[#b8935a] transition">nitinroy.hireme@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#f5f1e8]/60" /><a href="tel:+919716087278" className="hover:text-[#b8935a] transition">+91 97160 87278</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#f5f1e8]/60" />Delhi NCR, India</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#f5f1e8]/60">Elsewhere</div>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/nrtechworks" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Twitter, label: "Twitter / X", href: "#" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="inline-flex items-center gap-3 text-[#f5f1e8]/85 hover:text-[#b8935a] transition">
                    <s.icon className="h-4 w-4" />
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#f5f1e8]/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#f5f1e8]/60">
          <div>© {new Date().getFullYear()} Nr Techworks. All rights reserved.</div>
          <div>Crafted by Nr Techworks.</div>
        </div>
      </div>
    </footer>
  );
}
