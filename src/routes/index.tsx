import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import {
  AnimatedHero,
  AnimatedItem,
  AnimatedSection,
  AnimatedStagger,
  slideInLeftVariants,
  slideInRightVariants,
  scaleUpVariants,
} from "@/components/animations";
import {
  Wrench,
  Gauge,
  Cog,
  ShieldCheck,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Trophy,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Education />
      <Extracurricular />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const items = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Expertise" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-90">
            <Cog className="h-5 w-5" />
          </span>
          <span className="heading-xl text-xl tracking-widest">DIVYANK.P</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="px-4 py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mechanical-hover"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition hover-lift"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial mechanical engineering workshop"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <AnimatedHero>
          <AnimatedItem>
            <span className="section-label">
              <span className="h-px w-8 bg-primary" />
              Mechanical Engineer · Portfolio 2026
            </span>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="heading-xl mt-6 text-5xl sm:text-7xl md:text-8xl max-w-4xl">
              Engineering Precision, <span className="text-primary">Built to Last.</span>
            </h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm <strong className="text-foreground">Divyank K Pawar</strong> — a mechanical
              engineer focused on inspection, CAD design, and industrial systems. Currently
              interning in the Inspection Department at Bharat Petroleum Corporation Limited.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary pl-6 pr-2 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition hover-lift"
              >
                Get in touch
                <span className="grid place-items-center h-10 w-10 rounded-full bg-background text-primary transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition mechanical-hover"
              >
                View Experience <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimatedItem>

          <AnimatedItem className="mt-20">
            <AnimatedStagger
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
              containerVariants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                },
              }}
            >
              {[
                ["B.E.", "Mechanical Eng."],
                ["BPCL", "Inspection Intern"],
                ["CAD", "PTC Creo"],
                ["1+", "Years Experience"],
              ].map(([k, v]) => (
                <AnimatedItem key={v} className="border-l-2 border-primary pl-4">
                  <div className="heading-xl text-3xl">{k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {v}
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </AnimatedItem>
        </AnimatedHero>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Equipment Inspection",
      desc: "Integrity assessments of pipelines and critical machinery with strict safety and compliance standards.",
    },
    {
      icon: Cog,
      title: "Mechanical Design",
      desc: "Modelling and design of conveyor systems and industrial machinery using PTC Creo and CAD tools.",
    },
    {
      icon: Gauge,
      title: "SAP & Maintenance",
      desc: "Hands-on SAP experience: ID creation and maintenance data management supporting inspection workflows.",
    },
    {
      icon: Wrench,
      title: "Manufacturing Support",
      desc: "Design and production of conveyor belts for material handling, logistics, and manufacturing industries.",
    },
  ];
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">
                <span className="h-px w-8 bg-primary" /> What I Do
              </span>
              <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl">
                Areas of <span className="text-primary">Expertise</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Combining field inspection experience with design engineering to keep
              industrial systems running safely and efficiently.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden"
          containerVariants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <AnimatedItem key={title}>
              <div className="bg-card p-8 h-full group hover:bg-primary hover:text-primary-foreground transition-colors hover-lift">
                <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                <h3 className="heading-xl mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {desc}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    "PTC Creo",
    "CAD Modelling",
    "SAP",
    "Microsoft Office",
    "Pipeline Inspection",
    "Safety Compliance",
    "Programming",
    "Conveyor Design",
  ];
  const traits = [
    "Confident & Determined",
    "Quick learner",
    "Handles pressure tactfully",
    "Strong interpersonal skills",
    "Proactive & self-motivated",
    "Exceptional organization",
  ];
  return (
    <section id="about" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16">
        <AnimatedSection variants={slideInLeftVariants}>
          <div>
            <span className="section-label">
              <span className="h-px w-8 bg-primary" /> About
            </span>
            <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl">
              Grounded in <span className="text-primary">theory</span>, sharpened on the{" "}
              <span className="text-primary">shop floor.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              I graduated in Mechanical Engineering from Terna Engineering College, Navi
              Mumbai. Over the past few years, I've moved from designing conveyor systems
              for industry to inspecting critical machinery at one of India's largest oil
              refineries — always focused on safety, reliability, and precision.
            </p>

            <div className="mt-10">
              <h3 className="heading-xl text-xl text-primary tracking-widest">
                Key Competencies
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
                {traits.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={slideInRightVariants}>
          <div>
            <div className="rounded-xl border border-border bg-card p-8 hover-lift">
              <h3 className="heading-xl text-2xl">Technical Toolkit</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Tools and disciplines I use day to day.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full border border-border text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 rounded-xl border border-border bg-primary text-primary-foreground p-8"
            >
              <div className="flex items-start gap-4">
                <Trophy className="h-8 w-8 shrink-0" />
                <div>
                  <h3 className="heading-xl text-2xl">Beyond Engineering</h3>
                  <p className="mt-2 text-sm opacity-90">
                    NCC 'B' Certificate holder, District-level Kho-Kho player, and
                    currently competing in the Mumbai Super Division with the Mumbai
                    Football Association. Vice-President of MESA at Terna Engineering
                    College.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      period: "Dec 2025 — Present",
      role: "Inspection Department Intern",
      org: "Bharat Petroleum Corporation Limited (BPCL)",
      points: [
        "Contribute to equipment integrity assessments across the plant.",
        "Inspection of pipelines and critical rotating and static machinery.",
        "Adherence to stringent refinery safety and compliance standards.",
        "Hands-on SAP: ID creation and maintenance data management for inspection workflows.",
      ],
    },
    {
      period: "Jan 2023 — Jan 2024",
      role: "Design & Production Engineer",
      org: "Shree Sadguru Sai Engineering",
      points: [
        "Designed, engineered, and produced conveyor belts for material handling, logistics, and manufacturing.",
        "Delivered loading, tempering, quenching, blackening, and roller conveyor systems.",
        "Owned maintenance workflows for conveyor machinery in industrial environments.",
      ],
    },
  ];
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <span className="section-label">
            <span className="h-px w-8 bg-primary" /> Experience
          </span>
          <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Where I've <span className="text-primary">worked</span>.
          </h2>
        </AnimatedSection>

        <AnimatedStagger
          className="mt-14 space-y-6"
          containerVariants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {jobs.map((j) => (
            <AnimatedItem key={j.role}>
              <article className="grid md:grid-cols-[220px_1fr] gap-6 border border-border rounded-xl p-8 bg-card hover:border-primary transition-colors hover-lift">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {j.period}
                  </div>
                  <Briefcase className="h-8 w-8 mt-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="heading-xl text-2xl md:text-3xl">{j.role}</h3>
                  <div className="text-muted-foreground mt-1">{j.org}</div>
                  <ul className="mt-5 space-y-2">
                    {j.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      year: "2025",
      title: "Bachelor of Mechanical Engineering",
      org: "Terna Engineering College, Nerul, Navi Mumbai",
    },
    {
      year: "2022",
      title: "Diploma in Mechanical Engineering",
      org: "Saraswati College of Engineering, Kharghar, Navi Mumbai",
    },
    {
      year: "2020",
      title: "HSC",
      org: "IIT Campus School & Jr College, Powai, Mumbai",
    },
    {
      year: "2018",
      title: "SSC",
      org: "KV IIT, Powai, Mumbai",
    },
  ];
  return (
    <section id="education" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <span className="section-label">
            <span className="h-px w-8 bg-primary" /> Academics
          </span>
          <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl">
            Educational <span className="text-primary">Background</span>
          </h2>
        </AnimatedSection>

        <AnimatedStagger
          className="mt-14 grid md:grid-cols-2 gap-6"
          containerVariants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {items.map((i) => (
            <AnimatedItem key={i.title} variants={scaleUpVariants}>
              <div className="flex gap-5 rounded-xl border border-border p-6 bg-card h-full hover-lift">
                <div className="grid place-items-center h-14 w-14 shrink-0 rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {i.year}
                  </div>
                  <h3 className="heading-xl text-xl mt-1">{i.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{i.org}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function Extracurricular() {
  const items = [
    { title: "NCC 'B' Certificate", desc: "Jr. College — District level" },
    { title: "Kho-Kho Player", desc: "School-level competitor" },
    { title: "Mumbai Super Division", desc: "Mumbai Football Association" },
    { title: "Vice-President, MESA", desc: "Mechanical Eng. Student Association, TEC" },
    { title: "Organised Aksharmanch", desc: "Event held at IIT Bombay" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label">
                <span className="h-px w-8 bg-primary" /> Beyond Work
              </span>
              <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl">
                Leadership & <span className="text-primary">Sport</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedStagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          containerVariants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {items.map((i) => (
            <AnimatedItem key={i.title} variants={scaleUpVariants}>
              <div className="rounded-xl border border-border p-6 hover:bg-card transition-colors hover-lift h-full">
                <Trophy className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="heading-xl text-xl mt-4">{i.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection variants={scaleUpVariants}>
          <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]">
                <span className="h-px w-8 bg-primary-foreground" /> Let's Connect
              </span>
              <h2 className="heading-xl mt-4 text-4xl sm:text-5xl md:text-6xl">
                Looking for a mechanical engineer who ships?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-lg">
                Open to full-time roles, project collaborations, and industrial engineering
                opportunities across inspection, design, and maintenance.
              </p>
            </div>
            <AnimatedStagger
              className="space-y-3"
              containerVariants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              <AnimatedItem>
                <ContactRow
                  icon={Phone}
                  label="Phone"
                  value="+91 93268 10438"
                  href="tel:+919326810438"
                />
              </AnimatedItem>
              <AnimatedItem>
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="divyankpawar71@gmail.com"
                  href="mailto:divyankpawar71@gmail.com"
                />
              </AnimatedItem>
              <AnimatedItem>
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="divyank-pawar"
                  href="https://www.linkedin.com/in/divyank-pawar-551879250"
                />
              </AnimatedItem>
              <AnimatedItem>
                <ContactRow icon={MapPin} label="Based in" value="Navi Mumbai, India" />
              </AnimatedItem>
            </AnimatedStagger>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl bg-background/10 hover:bg-background/20 transition p-4 group hover-lift">
      <span className="grid place-items-center h-11 w-11 rounded-lg bg-background text-primary shrink-0">
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-70">
          {label}
        </div>
        <div className="font-semibold truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} Divyank K Pawar</div>
        <div>Mechanical Engineer · Portfolio</div>
      </div>
    </footer>
  );
}
