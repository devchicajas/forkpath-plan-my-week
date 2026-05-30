import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  Sparkles,
  ChefHat,
  Leaf,
  Refrigerator,
  Users,
  ShoppingBasket,
  Check,
  ArrowRight,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForkPath — Weekly meal plans that fit your life" },
      {
        name: "description",
        content:
          "ForkPath turns 'what's for dinner this week?' into a 2-minute decision. Personalized weekly meal plans, pantry-aware, with a smart grocery list.",
      },
      { property: "og:title", content: "ForkPath — Weekly meal plans that fit your life" },
      {
        property: "og:description",
        content:
          "Personalized weekly meal plans, pantry-aware, with a smart grocery list.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Leaf className="h-4 w-4" />
      </span>
      ForkPath
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <Button size="sm" className="rounded-full px-4">Start your week</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--sage) 55%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Private beta — now open
        </div>
        <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          Weekly meal plans that fit your <em className="not-italic text-primary">schedule, budget, and pantry</em>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Turn "what's for dinner this week?" into a 2-minute decision. 🌿
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="h-12 rounded-full px-7 text-base">
            Start your week
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 rounded-full px-6 text-base text-foreground hover:bg-accent"
          >
            See how it works
          </Button>
        </div>
        <div className="mt-16">
          <PlanPreview />
        </div>
      </div>
    </section>
  );
}

function PlanPreview() {
  const days = [
    { d: "Mon", m: "Lemon orzo with white beans" },
    { d: "Tue", m: "Sheet-pan harissa chicken" },
    { d: "Wed", m: "Miso mushroom udon" },
    { d: "Thu", m: "Black bean tacos, slaw" },
    { d: "Fri", m: "Pesto gnocchi, blistered tomatoes" },
    { d: "Sat", m: "Roast veg grain bowl" },
    { d: "Sun", m: "Leftovers + soft eggs" },
  ];
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-3 text-left shadow-[0_30px_80px_-40px_rgba(40,80,55,0.35)]">
      <div className="flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Your week · May 25 – 31</span>
        <span>Serves 2 · ~$84 groceries</span>
      </div>
      <div className="grid gap-1 rounded-2xl bg-muted/50 p-2 sm:grid-cols-2">
        {days.map((day) => (
          <div
            key={day.d}
            className="flex items-center gap-3 rounded-xl bg-card px-3 py-2.5 text-sm"
          >
            <span className="w-9 shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {day.d}
            </span>
            <span className="truncate">{day.m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: CalendarCheck,
      title: "Tell us your week",
      body: "Schedule, dietary needs, and what's already sitting in your fridge.",
    },
    {
      icon: Sparkles,
      title: "We generate your plan",
      body: "Seven days of meals tailored to you — no decision fatigue.",
    },
    {
      icon: ChefHat,
      title: "Cook, eat, repeat",
      body: "Grocery list and a prep schedule come along for the ride.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="How it works"
        title="From blank week to dinner, in three steps."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-border bg-card p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm text-muted-foreground">
                Step {i + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Leaf,
      title: "Dietary preferences",
      body: "Vegetarian, gluten-free, allergies, picky kids — tell us once and we'll remember.",
    },
    {
      icon: Refrigerator,
      title: "Pantry-aware",
      body: "Uses what you already have first. Less waste, smaller grocery bill.",
    },
    {
      icon: Users,
      title: "Family mode",
      body: "Different preferences for different eaters under one plan.",
      badge: "Coming soon",
    },
    {
      icon: ShoppingBasket,
      title: "Grocery list",
      body: "Categorized by store section. Share with anyone in a tap.",
    },
  ];
  return (
    <section id="features" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Small details that make the week easier."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                {f.badge && (
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                    {f.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="mb-5 flex justify-center -space-x-2">
        {["#bfd7b5", "#e8d3a2", "#cfe3c2", "#f1c9a5", "#d9e5c8"].map((c, i) => (
          <span
            key={i}
            className="h-9 w-9 rounded-full border-2 border-background"
            style={{ background: c }}
          />
        ))}
      </div>
      <p className="font-display text-2xl text-foreground md:text-3xl">
        Used by <span className="text-primary">47 home cooks</span> in our private beta.
      </p>
      <p className="mt-3 text-muted-foreground">
        Quiet launch, real kitchens, honest feedback.
      </p>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      cadence: "forever",
      desc: "Enough to dip a toe in.",
      cta: "Start free",
      featured: false,
      features: ["1 plan per week", "Basic recipe library", "Grocery list"],
    },
    {
      name: "Plus",
      price: "$12",
      cadence: "/ month",
      desc: "For households that actually cook.",
      cta: "Get Plus",
      featured: true,
      features: [
        "Unlimited plans",
        "Family mode (early access)",
        "Prep schedules",
        "Pantry-aware suggestions",
      ],
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Pricing" title="Simple. Like dinner should be." />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "relative rounded-3xl border p-8 " +
              (t.featured
                ? "border-primary/40 bg-card shadow-[0_30px_80px_-40px_rgba(40,80,55,0.45)]"
                : "border-border bg-card")
            }
          >
            {t.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most cooks pick this
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl font-semibold">{t.price}</span>
              <span className="text-muted-foreground">{t.cadence}</span>
            </div>
            <Button
              className="mt-6 h-11 w-full rounded-full"
              variant={t.featured ? "default" : "outline"}
            >
              {t.cta}
            </Button>
            <ul className="mt-7 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-balance font-display text-4xl font-semibold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="mailto:hello@forkpath.app" className="hover:text-foreground">
            hello@forkpath.app
          </a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
