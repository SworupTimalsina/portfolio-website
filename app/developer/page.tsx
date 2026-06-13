"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Sparkles,
  MonitorSmartphone,
  Layers3,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import ContactCTA from "@/components/ContactCTA";

const skills = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Authentication", "MVC"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "SQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Figma", "Postman", "Vercel"],
  },
];

const projects = [
  {
    title: "Accounting Management System",
    description:
      "A full-stack accounting platform with ledgers, journals, reports, purchase bills, and company-based data handling.",
    tag: "Full Stack",
    image: "/project-1.jpg",
  },
  {
    title: "Business Landing Website",
    description:
      "A premium responsive company website built with Next.js, modern UI sections, animations, and clean content structure.",
    tag: "Frontend",
    image: "/project-2.jpg",
  },
  {
    title: "Admin Dashboard UI",
    description:
      "A clean and scalable dashboard interface with reusable components, forms, tables, filters, and responsive layouts.",
    tag: "Dashboard",
    image: "/project-3.jpg",
  },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites and applications using React, Next.js, Tailwind CSS, and clean reusable components.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Features",
    description:
      "API integration, authentication, database structure, dashboards, forms, and business logic.",
  },
  {
    icon: Rocket,
    title: "Performance & Deployment",
    description:
      "Responsive, optimized, fast-loading websites ready to launch on modern hosting platforms.",
  },
];

export default function DeveloperPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden px-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/developer-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-cyan-950/50" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center">
          <Link
            href="/"
            className="mb-10 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/10"
          >
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl">
              <Sparkles size={16} />
              Software Developer Portfolio
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Building digital products with clean code and thoughtful design
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              I design and develop modern web applications that are fast,
              responsive, scalable, and visually refined.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="About Me"
            title="Developer with a creative eye and practical mindset."
            description="I enjoy turning ideas into real digital products. My focus is on clean UI, reliable functionality, and building systems that are easy to use and easy to maintain."
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <p className="text-sm leading-8 text-white/65 sm:text-base">
              I work with modern frontend and backend technologies to create
              websites, dashboards, management systems, landing pages, and
              business applications. I care about both design and code quality,
              which helps me build products that look professional and perform
              well.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Clean UI", "Responsive", "Scalable"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center text-sm font-semibold text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I use to build modern products."
            description="A flexible stack for building beautiful interfaces, strong APIs, and reliable systems."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold">{skill.title}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work and development projects."
            description="A few examples of systems and interfaces I can build and customize."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="How I can help with software projects."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA
        accent="cyan"
        title="Have a software idea?"
        description="Let’s build a clean, fast, and professional digital product together."
      />
    </main>
  );
}