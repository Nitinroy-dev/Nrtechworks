import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Header, Footer } from "./index";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Our Work — Real Projects & Demo Templates | Nr Techworks" },
      { name: "description", content: "Explore real client projects and ready-to-customize website templates built by Nr Techworks — dental, tattoo studio, gym and more." },
      { property: "og:title", content: "Our Work — Real Projects & Demo Templates | Nr Techworks" },
      { property: "og:description", content: "Real client websites and demo templates you can customize for your business." },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "figure" | "h2" | "h3" | "p" | "span" | "li";
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

const DEMOS = [
  {
    title: "Dental Solution",
    category: "Healthcare · Clinic",
    url: "https://demo-dental-solution.vercel.app/",
    desc: "A calm, trust-first website template for modern dental clinics — appointment booking, services, and doctor profiles.",
  },
  {
    title: "Tattoo Artist Studio",
    category: "Creative · Studio",
    url: "https://Tatoo-artist-demo.vercel.app",
    desc: "An editorial, image-led template for tattoo artists and studios — portfolio galleries, artists, and enquiry flow.",
  },
  {
    title: "Ironforge Gym",
    category: "Fitness · Gym",
    url: "https://ironforge-gym-demo.vercel.app/",
    desc: "A bold, high-energy template for gyms and fitness studios — class schedules, memberships, and trainer profiles.",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#0f2a1d]">
      <Header />
      <PageIntro />
      <RealLifeProjects />
      <DemoProjects />
      <CTA />
      <Footer />
    </div>
  );
}

function PageIntro() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-8">
      <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">— Our Work</div>
      <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
        Real projects, and <em className="italic font-normal">ready-to-customize</em> templates.
      </h1>
      <p className="mt-6 max-w-2xl text-[#0f2a1d]/70">
        A closer look at websites we've built for real clients — plus a set of demo templates you can preview live and have us tailor to your brand.
      </p>
    </section>
  );
}

function RealLifeProjects() {
  return (
    <section id="real" className="bg-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">— 01 · Real Life Featured Projects</div>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05]">
            Real clients. <em className="italic font-normal">Live in the wild.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <a
              href="https://devandshiveventplanners.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="block card-lift border border-[#0f2a1d]/10 bg-[#0f2a1d] shadow-[0_30px_60px_-30px_rgba(15,42,29,0.45)]"
            >
              <div className="work-chrome"><span /><span /><span /></div>
              <div className="work-frame">
                <img
                  src="/dev-and-shiv.jpg"
                  alt="Dev & Shiv Event Planners — luxury event planning website designed and built by Nr Techworks"
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">Case Study — Luxury Event Planning</div>
            <h3 className="mt-3 font-serif text-3xl md:text-5xl leading-[1.05]">
              Dev &amp; Shiv <em className="italic font-normal">Event Planners</em>
            </h3>
            <p className="mt-5 text-[#0f2a1d]/75 leading-relaxed">
              A bespoke website for a real-world luxury event planning company. We designed and
              built an editorial, high-end brand experience with an interactive "Dream Concept
              Engine" that lets clients configure occasions, scale, and aesthetic direction — then
              request a bespoke quote in a single flow.
            </p>
            <ul className="mt-6 space-y-2 text-[#0f2a1d]/75">
              <li>— Brand system, typography, and editorial layout</li>
              <li>— Interactive concept configurator</li>
              <li>— Fully responsive, production-hosted</li>
            </ul>
            <a
              href="https://devandshiveventplanners.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#0f2a1d] text-[#f5f1e8] px-6 py-3 rounded-full text-sm hover:bg-[#1a3a2a] transition"
            >
              Visit live site →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DemoProjects() {
  return (
    <section id="demos" className="bg-[#efe9dc] border-y border-[#0f2a1d]/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">— 02 · Demo Projects</div>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05] max-w-3xl">
            Website templates, <em className="italic font-normal">tailored to your brand.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[#0f2a1d]/70">
            These are demo website templates built by us — a preview of what you'll get.
            We fully customize each one to match your brand, content, and business needs
            before your site goes live.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMOS.map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card-lift border border-[#0f2a1d]/10 bg-[#f5f1e8] rounded-sm overflow-hidden h-full flex flex-col"
              >
                <div className="work-chrome"><span /><span /><span /></div>
                <div className="aspect-[16/10] bg-gradient-to-br from-[#0f2a1d] to-[#1a3a2a] relative overflow-hidden flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-serif text-2xl md:text-3xl text-[#f5f1e8]">{d.title}</div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[#b8935a] break-all">
                      {d.url.replace(/^https?:\/\//, "")}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#b8935a]">{d.category}</div>
                  <h3 className="mt-2 font-serif text-2xl">{d.title}</h3>
                  <p className="mt-3 text-sm text-[#0f2a1d]/70 leading-relaxed flex-1">{d.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#0f2a1d] group-hover:text-[#b8935a] transition">
                    View live demo <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
      <Reveal className="border-t border-[#0f2a1d]/15 pt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0f2a1d]/60">— Like what you see?</div>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05] max-w-2xl">
            Let's build <em className="italic font-normal">yours next.</em>
          </h2>
        </div>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#0f2a1d] text-[#f5f1e8] px-7 py-3 text-sm hover:bg-[#1a3a2a] transition"
        >
          Start a Project <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}