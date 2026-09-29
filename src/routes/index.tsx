import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CircleDot, Globe2, Leaf, Menu, Server, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { africaPaths } from "@/lib/africa-paths";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talonex | Green Hyperscale Data Centre in Kenya" },
      { name: "description", content: "Discover Talonex, Africa's first green hyperscale data centre in Kenya. Renewable power, resilient infrastructure, and global connectivity." },
      { property: "og:title", content: "Talonex | Green Hyperscale Data Centre in Kenya" },
      { property: "og:description", content: "Africa's first green hyperscale data centre, built for a connected future in Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "50MW+", label: "Capacity" },
  { value: "90%", label: "Renewable power" },
  { value: "5", label: "Subsea cables" },
  { value: "99.999%", label: "Uptime target" },
  { value: "USD 250M+", label: "Investment" },
  { value: "Tier III+", label: "Rating" },
];

const news = [
  { tag: "Infrastructure", title: "Building the next backbone of Africa's digital economy", blurb: "A new class of digital infrastructure designed to support the continent's growing demand for compute and connectivity.", date: "29 Sep 2026" },
  { tag: "Sustainability", title: "The case for renewable-powered hyperscale in Kenya", blurb: "Why a cleaner energy mix is central to the future of large-scale data infrastructure.", date: "24 Sep 2026" },
  { tag: "Connectivity", title: "Connecting local opportunity to global networks", blurb: "How resilient, carrier-neutral infrastructure can bring digital services closer to the people who use them.", date: "18 Sep 2026" },
];

function AfricaMap() {
  return (
    <svg className="hero-map" viewBox="0 0 950 900" fill="none" role="img" aria-label="Outline map of Africa highlighting Kenya" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="map-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".75" fill="var(--soft)" opacity=".3" /></pattern>
      </defs>
      <g transform="translate(94 90) scale(1.08)">
        {africaPaths.map((path, index) => <path key={index} className="map-country" pathLength={1} d={path} fill="var(--surface)" fillOpacity=".8" stroke="var(--muted-foreground)" strokeOpacity=".42" strokeWidth=".8" />)}
        <g className="map-draw" stroke="var(--primary)" strokeOpacity=".24" strokeWidth="1.2" fill="none">
          <path d="M 570 380 Q 488 281 344 186" />
          <path d="M 570 380 Q 642 299 775 238" />
        </g>
        <circle cx="570" cy="380" r="27" fill="var(--primary)" fillOpacity=".09" />
        <circle cx="570" cy="380" r="11" fill="var(--primary)" fillOpacity=".13" />
        <circle cx="570" cy="380" r="5" fill="var(--primary)" />
        <circle className="kenya-ring" cx="570" cy="380" r="13" stroke="var(--primary)" strokeWidth="1.5" />
        <circle className="kenya-ring kenya-ring-2" cx="570" cy="380" r="13" stroke="var(--primary)" strokeWidth="1.5" />
        <text x="589" y="374" fill="var(--foreground)" fontFamily="var(--font-data)" fontSize="12">KENYA</text>
        <text x="589" y="390" fill="var(--muted-foreground)" fontFamily="var(--font-data)" fontSize="9">01°17′S 36°49′E</text>
      </g>
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const navLinks = [{ label: "The Facility", href: "#facility" }, { label: "Our Story", href: "#about" }, { label: "Partners", href: "#partners" }, { label: "News", href: "#news" }];
  const openEnquiry = () => { setMenuOpen(false); setEnquiryOpen(true); };

  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <nav className="page-shell flex h-[76px] items-center justify-between gap-8" aria-label="Main navigation">
          <a href="#top" className="wordmark inline-flex items-center text-foreground" aria-label="Talonex home">TALONEX<span className="wordmark-mark" /></a>
          <div className="hidden items-center gap-9 lg:flex">{navLinks.map(link => <a key={link.href} href={link.href} className="nav-link text-[13px] font-medium">{link.label}</a>)}</div>
          <Button variant="talonOutline" className="hidden lg:inline-flex" onClick={openEnquiry}>Investment Enquiry</Button>
          <Button variant="talonIcon" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div className="page-shell flex flex-col gap-5 border-t border-border py-6 lg:hidden">{navLinks.map(link => <a key={link.href} href={link.href} className="nav-link text-base" onClick={() => setMenuOpen(false)}>{link.label}</a>)}<Button variant="talonOutline" className="w-fit" onClick={openEnquiry}>Investment Enquiry</Button></div>}
      </header>

      <section id="top" className="hero">
        <AfricaMap />
        <div className="hero-scrim" />
        <div className="page-shell relative z-10 py-12">
          <div className="hero-enter hero-enter-1 mb-8 flex items-center gap-3 font-mono text-[10px] text-soft sm:text-xs"><span className="status-dot" /> Built in Kenya. Built for what’s next.</div>
          <h1 className="hero-title hero-enter hero-enter-2">Africa’s first <span>green</span> hyperscale data centre.</h1>
          <p className="hero-enter hero-enter-3 mt-8 max-w-[520px] text-base leading-[1.7] text-soft sm:text-lg">A new foundation for Africa’s digital future. Renewable-powered, globally connected, and built to scale without compromise.</p>
          <div className="hero-enter hero-enter-4 mt-10 flex flex-wrap gap-3"><Button variant="talon" size="talon" asChild><a href="#facility">Explore the Facility</a></Button><Button variant="talonOutline" size="talon" onClick={openEnquiry}>Investment Enquiry</Button></div>
        </div>
        <div className="absolute bottom-7 left-0 w-full"><div className="page-shell flex items-center gap-3 font-mono text-[10px] text-muted-foreground"><span className="h-px w-7 bg-primary" /> Kenya · East Africa</div></div>
      </section>

      <div className="ticker" aria-label="Talonex facility highlights"><div className="ticker-track">{[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1}>{stats.map(stat => <div className="ticker-item" key={stat.label}><strong className="font-mono text-[15px] font-medium text-data sm:text-[17px]">{stat.value}</strong><span className="font-mono text-[10px] text-soft sm:text-[11px]">{stat.label}</span></div>)}</div>)}</div></div>

      <section id="facility" className="page-shell scroll-mt-24 py-24 sm:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-label mb-5">01 / The facility</p><h2 className="text-section max-w-[600px]">Infrastructure for an<br className="hidden sm:block" /> always-on world.</h2></div><p className="max-w-[350px] text-[15px] leading-7 text-muted-foreground">Purpose-built for the scale of tomorrow, with sustainability at the centre of every decision.</p></div>
        <div className="grid border-y border-border md:grid-cols-3">
          <article className="border-b border-border px-0 py-9 md:border-b-0 md:border-r md:pr-10 md:py-12"><Leaf className="pillar-icon mb-11" /><p className="font-mono text-[11px] text-primary">01</p><h3 className="mt-5 text-[23px] font-bold">Green Power</h3><p className="mt-4 max-w-[330px] leading-7 text-muted-foreground">Powered by Kenya’s renewable energy potential, designed to meet growing demand with a lighter footprint.</p></article>
          <article className="border-b border-border px-0 py-9 md:border-b-0 md:border-r md:px-10 md:py-12"><Server className="pillar-icon mb-11" /><p className="font-mono text-[11px] text-primary">02</p><h3 className="mt-5 text-[23px] font-bold">Hyperscale Ready</h3><p className="mt-4 max-w-[330px] leading-7 text-muted-foreground">High-density, resilient infrastructure engineered for ambitious enterprises and the next wave of compute.</p></article>
          <article className="px-0 py-9 md:pl-10 md:py-12"><Globe2 className="pillar-icon mb-11" /><p className="font-mono text-[11px] text-primary">03</p><h3 className="mt-5 text-[23px] font-bold">Africa-First</h3><p className="mt-4 max-w-[330px] leading-7 text-muted-foreground">Rooted in Kenya, connected to the world. Digital capacity that helps opportunity grow closer to home.</p></article>
        </div>
      </section>

      <section id="about" className="quote-band scroll-mt-20 py-24 sm:py-32"><div className="page-shell grid gap-12 md:grid-cols-[1fr_2fr]"><div><p className="text-label">02 / Our story</p><p className="mt-4 text-sm text-muted-foreground">A different kind of infrastructure.</p></div><div className="border-l-2 border-primary pl-7 sm:pl-12"><blockquote className="max-w-[830px] font-display text-[clamp(27px,3.15vw,47px)] font-bold leading-[1.3]">“Africa’s digital future deserves infrastructure that is as ambitious as the people building it.”</blockquote><a href="#facility" className="underline-link mt-9 inline-block text-sm font-medium">Read the full story</a></div></div></section>

      <section id="partners" className="page-shell scroll-mt-24 py-24 sm:py-28"><div className="mb-12 flex flex-wrap items-end justify-between gap-4"><div><p className="text-label mb-5">03 / Ecosystem</p><h2 className="text-section">Stronger together.</h2></div><p className="text-sm text-muted-foreground">Partner identities to be announced.</p></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">{Array.from({ length: 5 }, (_, i) => <div className="partner-chip" key={i}><CircleDot size={18} strokeWidth={1.4} /><span className="font-mono text-[11px]">Partner {String(i + 1).padStart(2, "0")}</span></div>)}</div></section>

      <section id="news" className="section-rule scroll-mt-24 py-24 sm:py-28"><div className="page-shell"><div className="mb-14 flex items-end justify-between gap-5"><div><p className="text-label mb-5">04 / Perspectives</p><h2 className="text-section">The latest thinking.</h2></div><span className="hidden text-sm text-muted-foreground sm:block">Ideas shaping what comes next.</span></div><div className="grid gap-8 md:grid-cols-3 lg:gap-10">{news.map(item => <article className="news-card flex min-h-[320px] flex-col pt-7" key={item.title}><div className="flex items-center gap-2 font-mono text-[10px] text-data"><span className="h-[5px] w-[5px] rounded-full bg-data" />{item.tag}</div><h3 className="mt-8 text-[22px] font-bold leading-[1.35]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.blurb}</p><time className="mt-auto pt-9 font-mono text-[10px] text-muted-foreground" dateTime={item.date === "29 Sep 2026" ? "2026-09-29" : item.date === "24 Sep 2026" ? "2026-09-24" : "2026-09-18"}>{item.date}</time></article>)}</div></div></section>

      <section id="contact" className="relative isolate overflow-hidden border-y border-border bg-surface-deep py-24 sm:py-32"><div className="closing-glow -z-10" /><div className="fine-grid absolute inset-0 -z-10" /><div className="page-shell relative text-center"><p className="text-label mb-7">Build what’s next</p><h2 className="mx-auto max-w-[850px] font-display text-[clamp(35px,5vw,69px)] font-bold leading-[1.13]">The future of Africa’s digital infrastructure starts here.</h2><p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-soft">Explore the facility. Be part of the vision.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button variant="talon" size="talon" onClick={openEnquiry}>Investment Enquiry</Button><Button variant="talonOutline" size="talon" asChild><a href="#facility">Explore the Facility</a></Button></div></div></section>

      <footer className="page-shell flex flex-col justify-between gap-8 py-12 sm:flex-row sm:items-end"><div><a href="#top" className="wordmark inline-flex items-center text-foreground">TALONEX<span className="wordmark-mark" /></a><p className="mt-5 max-w-[530px] text-xs leading-6 text-muted-foreground">Design prototype only. Facility figures, partner placeholders, news content, and investment information are illustrative and subject to verification.</p></div><div className="flex flex-col gap-3 text-xs text-muted-foreground sm:items-end"><span>Kenya · East Africa</span><span>© 2026 Talonex. Concept presentation.</span></div></footer>
      <div className="prototype-badge fixed bottom-4 right-4 z-40 px-3 py-2 font-mono text-[10px] text-muted-foreground">Design prototype</div>

      {enquiryOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-5 backdrop-blur-sm" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setEnquiryOpen(false); }}><div className="w-full max-w-[480px] border border-border bg-card p-7 shadow-2xl sm:p-9" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><div className="flex items-start justify-between gap-5"><div><p className="text-label">TALONEX / INVESTMENT</p><h2 id="enquiry-title" className="mt-4 font-display text-3xl font-bold">Investment Enquiry</h2></div><Button variant="talonIcon" size="icon" aria-label="Close enquiry" onClick={() => setEnquiryOpen(false)}><X /></Button></div><p className="mt-6 leading-7 text-soft">This is a design prototype. Investment contact details and an enquiry channel will be available when the live site launches.</p><Button variant="talonOutline" className="mt-8" onClick={() => setEnquiryOpen(false)}>Close</Button></div></div>}
    </main>
  );
}
